import { IBlock } from "@core/block/block.interface";
import {
  TransactionData,
  TransactionPool,
  TransactionRow,
  TxIn,
  TxOut,
  UnspentTxOut,
} from "./transaction.interface";
import CryptoModule from "@core/crypto/crypto.module";
import { SignatureInput } from "elliptic";
import { Receipt } from "@core/wallet/wallet.interface";

class Transaction {
  private readonly REWARD = 50;
  private readonly transactionPool: TransactionPool = [];
  constructor(private readonly crypto: CryptoModule) {}

  getPool() {
    return this.transactionPool;
  }

  createReceipt(receipt: Receipt, myUnspantTxOuts: UnspentTxOut[]) {
    // create txIn, txOut, based on receipt
    if (!receipt.signature)
      throw new Error("Invalid receipt. Please try again");
    // 1. TxIn
    const [txIns, balance] = this.createInput(
      myUnspantTxOuts,
      receipt.amount,
      receipt.signature
    );
    // 2. TxOut
    const txOuts = this.createOutput(
      receipt.received,
      receipt.amount,
      receipt.sender.account,
      balance
    );
    // 3. TransactionRow
    const transaction: TransactionRow = {
      txIns,
      txOuts,
    };
    transaction.hash = this.serializeRow(transaction);
    this.transactionPool.push(transaction);
    return transaction;
  }

  createOutput(
    received: string,
    amount: number,
    sender: string,
    balance: number
  ) {
    const txouts: TxOut[] = [];
    txouts.push({ account: received, amount });

    if (balance - amount > 0) {
      txouts.push({ account: sender, amount: balance - amount });
    }
    const outAmount = txouts.reduce(
      (acc, txout: TxOut) => acc + txout.amount,
      0
    );

    if (balance !== outAmount) throw new Error("1");
    return txouts;
  }

  createInput(
    myUnspantTxOuts: UnspentTxOut[],
    receiptAmount: number,
    signature: SignatureInput
  ): [TxIn[], number] {
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
    return [txins, targetAmount];
  }
  createTxOut(account: string, amount: number): TxOut {
    // privateKey 32byte 64length
    // publicKey 32byte 64length
    // account 20byte 40length
    if (account.length !== 40)
      throw new Error("Invalid account. Please try again");
    const txout = new TxOut();
    txout.account = account;
    txout.amount = amount;
    return txout;
  }

  serializeTxOut(txOut: TxOut): string {
    const { account, amount } = txOut;
    const text = [account, amount].join("");
    return this.crypto.SHA256(text);
  }

  createTxIn(
    txOutIndex: number,
    txOutId?: string,
    signature?: SignatureInput
  ): TxIn {
    const txIn = new TxIn();
    txIn.txOutIndex = txOutIndex;
    txIn.txOutId = txOutId;
    txIn.signature = signature;
    return txIn;
  }

  serializeTxIn(txIn: TxIn): string {
    const { txOutIndex } = txIn;
    const text = [txOutIndex].join("");
    return this.crypto.SHA256(text);
  }

  serializeTx<T>(data: T[], callback: (item: T) => string) {
    return data.reduce((acc: string, item: T) => acc + callback(item), "");
  }

  serializeRow(row: TransactionRow) {
    const { txIns, txOuts } = row;
    const text1 = this.serializeTx<TxOut>(txOuts, (item) =>
      this.serializeTxOut(item)
    );
    const text2 = this.serializeTx<TxIn>(txIns, (item) =>
      this.serializeTxIn(item)
    );
    return this.crypto.SHA256(text1 + text2);
  }

  createRow(TxIns: TxIn[], TxOuts: TxOut[]) {
    const transactionRow = new TransactionRow();
    transactionRow.txIns = TxIns;
    transactionRow.txOuts = TxOuts;
    transactionRow.hash = this.serializeRow(transactionRow);
    return transactionRow;
  }

  createCoinbase(account: string, latestBlockHeight: number) {
    const txin = this.createTxIn(latestBlockHeight + 1);
    const txout = this.createTxOut(account, this.REWARD);

    return this.createRow([txin], [txout]);
  }

  update(transaction: TransactionRow) {
    const findCallback = (tx: TransactionRow) => transaction.hash === tx.hash;
    const index = this.transactionPool.findIndex(findCallback);
    if (index !== -1) this.transactionPool.splice(index, 1);
  }

  sync(transactions: TransactionData) {
    if (typeof transactions === "string") return;
    transactions.forEach(this.update.bind(this));
  }
}

export default Transaction;
