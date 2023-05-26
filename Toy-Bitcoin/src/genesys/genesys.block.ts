import { IBlock } from "interfaces/block.interface";

export const VERSION = "1.0.0";
export const GENERATE_DURATION = 10 * 60 * 1000;
export const DIFFICULTY_INTERVAL = 10;

export const GENESYS: IBlock = {
  version: VERSION,
  height: 0,
  timestamp: 1231006506,
  previousHash: "0".repeat(64),
  merkleRoot: "",
  nonce: 0,
  difficulty: 0,
  hash: "",
  data: "",
};
