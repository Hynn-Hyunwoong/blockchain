import CryptoModule from "@core/crypto/crypto.module";
import Transaction from "@core/transaction/transaction";
import { TxIn } from "@core/transaction/transaction.interface";

describe("Transaction", () => {
  let transaction: Transaction;
  let crypto: CryptoModule;

  beforeEach(() => {
    crypto = new CryptoModule();
    transaction = new Transaction(crypto);
  });
  describe("createTxOut", () => {
    const account = "0".repeat(40);
    it("create TxOut", () => {
      const amount = 50;
      const txout = transaction.createTxOut(account, amount);
      console.log("txout in transaction.test.ts : ", txout);
      expect(txout.account).toBe(account);
      expect(txout.amount).toBe(amount);
    });
    it("verfication txOut", () => {
      const account = "0".repeat(39);
      const amount = 50;
      expect(() => {
        transaction.createTxOut(account, amount);
      }).toThrowError();
    });
  });
  describe("createTxIn", () => {
    const txOutIndex = 2;
    it("create TxIn", () => {
      const txin = transaction.createTxIn(txOutIndex);
      console.log(txin);
      expect(txin.txOutIndex).toBe(txOutIndex);
    });
  });
  describe("createRow", () => {
    it("create transactionRow", () => {
      const txOutIndex = 2;
      const txin = transaction.createTxIn(txOutIndex);

      const account = "0".repeat(40);
      const amount = 50;
      const txout = transaction.createTxOut(account, amount);
      const row = transaction.createRow([txin, txin, txin], [txout]);
      console.log(`transaction row is ${row}`, row);
      expect(row.txIns).toStrictEqual([txin, txin, txin]);
      expect(row.txOuts).toStrictEqual([txout]);
      transaction.serializeRow(row);

      console.log(row);
    });
    it("Invalid value", () => {
      const row = transaction.createRow([], []);
    });
  });
});
