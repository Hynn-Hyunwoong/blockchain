import { randomBytes } from "crypto";
import elliptic from "elliptic";
import { Receipt } from "./transaction.interface";

// npm install elliptic

class DigitalSignature {
  private readonly ec = new elliptic.ec("secp256k1");
  createPrivateKey() {
    return randomBytes(32).toString("hex");
  }

  createPublicKey(privateKey: string) {
    const keyPair = this.ec.keyFromPrivate(privateKey);
    const publicKey = keyPair.getPublic().encode("hex", true);
    return publicKey;
  }
  createAccount(publicKey: string) {
    const buffer = Buffer.from(publicKey);
    const account = buffer.slice(24).toString();
    return account;
  }

  sign(privateKey: string, receipt: Receipt) {}
  verify(signature: unknown, receipt: Receipt) {}
}

export default DigitalSignature;
