import DigitalSignature from "./digitalSignature";
import { Accounts, Receipt } from "./wallet.interface";

class Wallet {
  private readonly accounts: Accounts[] = [];
  constructor(private readonly digitalSignature: DigitalSignature) {}

  create(): Accounts {
    const privateKey = this.digitalSignature.createPrivateKey();
    const publicKey = this.digitalSignature.createPublicKey(privateKey);
    const account = this.digitalSignature.createAccount(publicKey);

    const accounts: Accounts = {
      privateKey,
      publicKey,
      account,
    };
    this.accounts.push(accounts);
    return accounts;
  }
  set(privateKey: string) {
    const publicKey = this.digitalSignature.createPublicKey(privateKey);
    const account = this.digitalSignature.createAccount(publicKey);

    const accounts: Accounts = {
      privateKey,
      publicKey,
      account,
    };
    this.accounts.push(accounts);
    return accounts;
  }
  getAccounts() {
    const accounts = this.accounts.map((v) => v.account);
    return accounts;
  }
  getPrivate(accounts: string) {
    return this.accounts.filter((v) => v.account === accounts)[0].privateKey;
  }
  receipt(received: string, amount: number) {
    const { account, publicKey, privateKey } = this.accounts[0];
    const sender = {
      account,
      publicKey,
    };

    const receipt = this.digitalSignature.sign(privateKey, {
      sender,
      received,
      amount,
    });
    return receipt;
  }
  sign() {}
  verify() {}
}

export default Wallet;
