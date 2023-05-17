import { randomBytes } from "crypto";
import elliptic, { SignatureInput } from "elliptic";
import CryptoModule from "@core/crypto/crypto.module";
import { Receipt } from "./wallet.interface";

class DigitalSignature {
  private readonly ec = new elliptic.ec("secp256k1");
  constructor(private readonly crypto: CryptoModule) {}
  // create PrivateKey
  // create PublicKey
  createPrivateKey() {
    return randomBytes(32).toString("hex");
  }
  createPublicKey(privateKey: string) {
    const keyPair = this.ec.keyFromPrivate(privateKey);
    const publicKey = keyPair.getPublic().encode("hex", true); // 32byte + 1byte cause by 02 or 03 added front
    return publicKey;
  }
  createAccount(publicKey: string) {
    const buffer = Buffer.from(publicKey);
    const account = buffer.slice(26).toString();
    return account;
  }

  sign(privateKey: string, receipt: Receipt): Receipt {
    const keyPair = this.ec.keyFromPrivate(privateKey);
    const receiptHash = this.crypto.createReceiptHash(receipt);
    const signature = keyPair.sign(receiptHash, "hex").toDER("hex");
    receipt.signature = signature;
    return receipt;
  }

  verify(receipt: Receipt): boolean {
    const {
      sender: { publicKey },
      signature,
    } = receipt;
    if (!publicKey || !signature)
      throw new Error("Invalid receipt content, Please check again");
    const receiptHash = this.crypto.createReceiptHash(receipt);
    return this.ec.verify(
      receiptHash,
      signature,
      this.ec.keyFromPublic(publicKey, "hex")
    );
  }
}

export default DigitalSignature;
