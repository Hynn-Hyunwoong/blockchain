import { IBlock } from "@core/block/block.interface";
import { TransactionRow, TxIn, TxOut } from "./transaction.interface";
import CryptoModule from "@core/crypto/crypto.module";
import { SignatureInput } from "elliptic";
import { Receipt } from "@core/wallet/wallet.interface";

class Transaction {
  private readonly REWARD = 50;
  constructor(private readonly crypto: CryptoModule) {}

  createReceipt(receipt: Receipt) {
    const totalAmount = 50;
    const txIn = this.createTxIn(1, "", receipt.signature);

    const txOut_sender = this.createTxOut(
      receipt.sender.account,
      totalAmount - receipt.amount
    );
    const txOut_received = this.createTxOut(receipt.received, receipt.amount);

    return this.createRow([txIn], [txOut_sender, txOut_received]);
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
}

export default Transaction;
