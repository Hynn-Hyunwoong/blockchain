export class Sender {
  publicKey?: string;
  account!: string;
}

export class Receipt {
  sender!: string;
  receiver!: string;
  amount!: string;
  signature?: unknown;
}

export class TransactionRow {
  hash?: string;
}
