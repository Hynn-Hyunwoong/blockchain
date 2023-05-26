import { Receipt } from "interfaces/Receipt.interface";
import { BlockData } from "interfaces/block.interface";
import cryptojs from "crypto-js";
import merkle from "merkle";
import { Hash, TransactionData } from "type/block.data";
import { TransactionRow } from "interfaces/transaction.interface";

class CyptoModuler {
  constructor() {}

  createHash(data: BlockData) {
    const { version, height, merkleRoot, previousHash, difficulty, nonce } =
      data;
    const value = `${version}${height}${merkleRoot}${previousHash}${difficulty}${nonce}`;
    console.log(`This is the value : ${value}`);
    return this.Encrypt(value);
  }

  createReceipt(receipt: Receipt) {
    const {
      sender: { publicKey },
      receiver,
      amount,
    } = receipt;
    const msg = [publicKey, receiver, amount].join("");
    console.log(`This is the msg value : ${msg}`);
    return this.Encrypt(msg);
  }

  Encrypt(data: string) {
    const hash = cryptojs.SHA256(data).toString();
    console.log(`This is the hash value : ${hash}`);
    return hash;
  }

  Binary(hash: Hash): string {
    let binary = "";
    for (let i = 0; i < hash.length; i += 2) {
      const hex = hash.substr(i, 2);
      const decimal = parseInt(hex, 16);
      const binaryStr = decimal.toString(2).padStart(8, "0");
      binary += binaryStr;
    }
    return binary;
  }

  merkle(data: TransactionData) {
    if (typeof data === "string") {
      return merkle("sha256").sync([data]).root();
    } else if (Array.isArray(data)) {
      const sync = data
        .filter((v: TransactionRow) => {
          if (!v.hash) return false;
          else this.verify(v.hash);
          return true;
        })
        .map((v) => v.hash) as string[];
      return merkle("sha256").sync(sync).root();
    }
  }

  verify(hash: Hash) {
    const hexReg = /^[0-9a-fA-F]{64}$/;
    if (!hexReg.test(hash)) {
      throw new Error(`This is not a hex value : ${hash}`);
    }
  }
}

export default CyptoModuler;
