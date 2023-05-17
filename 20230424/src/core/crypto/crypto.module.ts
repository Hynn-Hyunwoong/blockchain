import { Hash } from "types/block";
import cryptojs from "crypto-js";
import merkle from "merkle";
import {
  TransactionRow,
  TransactionData,
} from "@core/transaction/transaction.interface";
import { BlockData, BlockInfo } from "@core/block/block.interface";
import { Receipt } from "@core/wallet/wallet.interface";

class CryptoModule {
  //SHA256
  // npm install crypto-js

  createBlockHash(data: BlockData) {
    // data -> object -> sort -> transform string -> hash via SHA256
    // access keys
    // const value = Object.values(data).sort().join("");
    const {
      version,
      height,
      timestamp,
      merkleRoot,
      previousHash,
      difficulty,
      nonce,
    } = data;
    // console.log(`checking in createBlockHash : ${data}`);
    const value = `${version}${height}${timestamp}${merkleRoot}${previousHash}${difficulty}${nonce}`;
    return this.SHA256(value);
  }

  createReceiptHash(receipt: Receipt) {
    const {
      sender: { publicKey },
      received,
      amount,
    } = receipt;
    const message = [publicKey, receipt, amount].join("");
    return this.SHA256(message);
  }

  SHA256(data: string): Hash {
    const hash: Hash = cryptojs.SHA256(data).toString();
    return hash as Hash;
  }
  hashToBinary(hash: Hash): string {
    let binary = "";
    for (let i = 0; i < hash.length; i += 2) {
      const hexByte = hash.substr(i, 2);
      // console.log("hexByte:", hexByte);
      const decimal = parseInt(hexByte, 16);
      // console.log("decimal:", decimal);
      const binaryByte = decimal.toString(2).padStart(8, "0");
      // console.log("binaryByte:", binaryByte);
      binary += binaryByte;
    }
    return binary;
    //hex 16진수
    //binary 2진수
    // 00 <-16진수  00000000 <-2진수 0000<-1니블
    // 01 <-16진수  00000001 <-2진수 0001<-1니블
  }

  merkleRoot(data: TransactionData) {
    if (typeof data === "string") {
      return merkle("sha256").sync([data]).root();
    } else if (Array.isArray(data)) {
      // If data is Object in Array
      // Will be Array is Object
      // Array[{Object},{Object},{Object}...] => {Object},{Object},{Object}
      // using method is map
      const sync = data
        .filter((v: TransactionRow) => {
          if (!v.hash) return false;
          else this.isValidHash(v.hash);
          return true;
        })
        .map((v) => v.hash) as string[];
      return merkle("sha256").sync(sync).root();
    }

    // const merkleData = [];
    // if (data instanceof TransactionRow) {
    //   // DataType TransactionRow
    // } else {
    //   // DataType String
    //   // npm install merkle
    //   return merkle("sha256").sync([data]).root();
    // }
  }
  isValidHash(hash: Hash): void {
    // 0~9 a~f A~F 16진수
    // 00, 01 11 2진수
    const hexRegExp = /[0-9a-fA-F]{64}$/;
    if (!hexRegExp.test(hash) || hash.length !== 64) {
      throw new Error(`Invalid Hash Currently Hash: ${hash}`);
    }
  }
}

export default CryptoModule;
