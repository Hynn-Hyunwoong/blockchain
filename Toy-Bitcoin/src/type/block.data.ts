import { TransactionRow, UnspentTxOut } from "interfaces/transaction.interface";

export type Height = number;
export type TimeStamp = number;
export type Diffuclty = number;
export type Hash = string;

// Path: src/type/blockchain.data.ts

export type TransactionData = string | TransactionRow[];
export type UnspentTxOutPool = UnspentTxOut[];
export type TransactionPool = TransactionRow[];
