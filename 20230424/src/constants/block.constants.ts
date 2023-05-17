import { IBlock } from "@core/block/block.interface";

export const VERSION = "1.0.0";

export const UNIT = 60;
export const BLOCK_GENERATION_INTERVAL = 10 * UNIT;
export const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;

export const GENESIS: IBlock = {
  version: VERSION,
  height: 1, //Height of the first block
  timestamp: 1231006506, //Timestamp of the first block
  previousHash: "0".repeat(64), //Hash of the previous block
  merkleRoot:
    "DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3D8", //Transaction Hash of the first transaction
  nonce: 0, //POW nonce value for the first block
  difficulty: 0, //Difficulty of the first block
  hash: "84ffab55c48e36cc480e2fd4c4bb0dc5ee1bb2d41a4f2a78a1533a8bb7df8370", //Hash of the first block
  data: "2009년 1월 3일 더 타임스, 은행들의 두번째 구제금융을 앞두고 있는 U.K 재무장관", //Data of the first block
};
