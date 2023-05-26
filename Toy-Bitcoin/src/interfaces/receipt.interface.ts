import { SignatureInput } from "elliptic";

export class Sender {
  publicKey?: string;
  account!: string;
}

export class Receipt {
  sender!: Sender;
  receiver!: string;
  amount!: number;
  signature?: SignatureInput;
}

export class Accounts {
  privateKey!: string;
  publicKey!: string;
  account!: string;
}
