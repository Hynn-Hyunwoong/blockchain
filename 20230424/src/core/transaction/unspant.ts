import { Receipt } from "@core/wallet/wallet.interface";
import Transaction from "./transaction";
import {
  TransactionData,
  TransactionRow,
  TxIn,
  TxOut,
  UnspentTxOut,
  UnspentTxOutPool,
} from "./transaction.interface";
import { SignatureInput } from "elliptic";

class Unspent {
  private readonly UnspentTxOuts: UnspentTxOutPool = [];
  constructor() {}

  // Getter Function
  getUnspentTxPool() {
    return this.UnspentTxOuts;
  }

  // delete(txin: TxIn) {
  //   // Find Index in Array
  //   const index = this.UnspentTxOuts.findIndex((utxo) => {
  //     return (
  //       utxo.txOutId === txin.txOutId && utxo.txOutIndex === txin.txOutIndex
  //     );
  //   });
  //   this.UnspentTxOuts.splice(index);
  // }

  delete(txin: TxIn) {
    const { txOutId, txOutIndex } = txin;
    const index = this.UnspentTxOuts.findIndex((unspentTxOut: UnspentTxOut) => {
      return (
        unspentTxOut.txOutId === txOutId &&
        unspentTxOut.txOutIndex === txOutIndex
      );
    });
    if (index !== -1) this.UnspentTxOuts.slice(index, 1);
  }

  create(hash: string) {
    return (txout: TxOut, txOutIndex: number) => {
      const { amount, account } = txout;
      this.UnspentTxOuts.push({
        txOutId: "",
        txOutIndex,
        account,
        amount,
      });
    };
  }

  sync(transaction: TransactionData) {
    if (typeof transaction === "string") return;

    transaction.forEach(this.update.bind(this));
  }

  update(transaction: TransactionRow): void {
    const { txIns, txOuts, hash } = transaction;
    if (!hash) throw new Error("Invalid transaction hash");

    txOuts.forEach(this.create(hash));
    txIns.forEach(this.delete.bind(this));
  }

  // createUTXO(transaction: TransactionRow) {
  //   const { hash, txOuts } = transaction;
  //   if (!hash) throw new Error("Invalid transaction hash");

  //   // If Transaction . txin & txout management via delete method

  //   transaction.txIns.forEach((v) => this.delete(v));

  //   const newUnspentTxOut = txOuts.map((txout: TxOut, index: number) => {
  //     const unspentTxOut = new UnspentTxOut();
  //     unspentTxOut.txOutId = hash;
  //     unspentTxOut.txOutIndex = index;
  //     unspentTxOut.account = txout.account;
  //     unspentTxOut.amount = txout.amount;
  //     return unspentTxOut;
  //   });
  //   this.UnspentTxOuts.push(...newUnspentTxOut);
  // }

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
  getInput(
    myUnspantTxOuts: UnspentTxOut[],
    receiptAmount: number,
    signature: SignatureInput
  ) {
    // getInput Target
    // While create transaction object(transactionRow), create txIn
    let targetAmount = 0;
    const txins = myUnspantTxOuts.reduce(
      (acc: TxIn[], unspentTxOut: UnspentTxOut) => {
        const { amount, txOutId, txOutIndex } = unspentTxOut;
        if (targetAmount >= receiptAmount) return acc;

        targetAmount += amount;
        acc.push({ txOutId, txOutIndex, signature });
        return acc;
      },
      [] as TxIn[]
    );

    // const {
    //   sender: { account },
    //   amount,
    // } = receipt;
    // const myUnspantTxOuts = this.me(account);
    // let targetAmount = 0;
    // let txins = [];
    // for (const unspentTxOut of myUnspantTxOuts) {
    //   targetAmount += unspentTxOut.amount;
    //   const txin = this.transaction.createTxIn(
    //     unspentTxOut.txOutIndex,
    //     unspentTxOut.txOudId,
    //     receipt.signature
    //   );
    //   txins.push(txin);
    //   if (targetAmount >= amount) break;
    // }
    return txins;
  }
  getOutput(received: string, amount: number, sender: string, balance: number) {
    const txouts: TxOut[] = [];
    txouts.push({ account: received, amount });

    if (balance > 0) {
      txouts.push({ account: sender, amount: balance });
    }
    return txouts;

    // const {
    //   sender: { account },
    //   received,
    //   amount,
    // } = receipt;
    // const txOuts = [];
    // // create TxOut for receiver
    // const totalAmount = this.getAmount(this.me(account));
    // const received_txout = this.transaction.createTxOut(received, amount);
    // txOuts.push(received_txout);
    // if (totalAmount - receipt.amount > 0) {
    //   // Balance TxOut for sender
    //   const sender = this.transaction.createTxOut(
    //     account,
    //     totalAmount - amount
    //   );
    //   txOuts.push(sender);
    // }
    // return txOuts;
  }
}

export default Unspent;
