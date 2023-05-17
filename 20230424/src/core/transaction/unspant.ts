import { Receipt } from "@core/wallet/wallet.interface";
import Transaction from "./transaction";
import {
  TransactionRow,
  TxIn,
  TxOut,
  UnspentTxOut,
  UnspentTxOutPool,
} from "./transaction.interface";

class Unspent {
  private readonly UnspentTxOuts: UnspentTxOutPool = [];
  constructor(private readonly transaction: Transaction) {}

  // Getter Function
  getUnspentTxPool() {
    return this.UnspentTxOuts;
  }

  delete(txin: TxIn) {
    // Find Index in Array
    const index = this.UnspentTxOuts.findIndex((utxo) => {
      return (
        utxo.txOudId === txin.txOutId && utxo.txOutIndex === txin.txOutIndex
      );
    });
    this.UnspentTxOuts.splice(index);
  }

  createUTXO(transaction: TransactionRow) {
    const { hash, txOuts } = transaction;
    if (!hash) throw new Error("Invalid transaction hash");

    // If Transaction . txin & txout management via delete method

    transaction.txIns.forEach((v) => this.delete(v));

    const newUnspentTxOut = txOuts.map((txout: TxOut, index: number) => {
      const unspentTxOut = new UnspentTxOut();
      unspentTxOut.txOudId = hash;
      unspentTxOut.txOutIndex = index;
      unspentTxOut.account = txout.account;
      unspentTxOut.amount = txout.amount;
      return unspentTxOut;
    });
    this.UnspentTxOuts.push(...newUnspentTxOut);
  }
  me(account: string) {
    const myUnspentTxOuts = this.UnspentTxOuts.filter(
      (utxo) => (utxo.account = account)
    );
    return myUnspentTxOuts;
  }
  getAmount(myUnspantTxOuts: UnspentTxOut[]) {
    return myUnspantTxOuts.reduce((acc, utxo) => acc + utxo.amount, 0);
  }
  isAmount(account: string, sendAmount: number) {
    const utxo = this.me(account);
    const totalAmount = this.getAmount(utxo);
    if (totalAmount < sendAmount) {
      return true;
    }
    return false;
  }
  getInput(receipt: Receipt) {
    const {
      sender: { account },
      amount,
    } = receipt;
    const myUnspantTxOuts = this.me(account);

    let targetAmount = 0;
    let txins = [];
    for (const unspentTxOut of myUnspantTxOuts) {
      targetAmount += unspentTxOut.amount;
      const txin = this.transaction.createTxIn(
        unspentTxOut.txOutIndex,
        unspentTxOut.txOudId,
        receipt.signature
      );
      txins.push(txin);
      if (targetAmount >= amount) break;
    }
    return txins;
  }
  getOutput(receipt: Receipt) {
    const {
      sender: { account },
      received,
      amount,
    } = receipt;
    const txOuts = [];
    // create TxOut for receiver
    const totalAmount = this.getAmount(this.me(account));
    const received_txout = this.transaction.createTxOut(received, amount);

    txOuts.push(received_txout);
    if (totalAmount - receipt.amount > 0) {
      // Balance TxOut for sender
      const sender = this.transaction.createTxOut(
        account,
        totalAmount - amount
      );
      txOuts.push(sender);
    }
    return txOuts;
  }
}

export default Unspent;
