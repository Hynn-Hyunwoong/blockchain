import {
  Diffuclty,
  Hash,
  Height,
  TimeStamp,
  TransactionData,
} from "type/block.data";

export class BlockInfo {
  version!: string;
  height!: Height;
  timestamp!: TimeStamp;
  previousHash!: Hash;
  nonce: number = 0;
  difficulty: Diffuclty = 0;
}

export class BlockData extends BlockInfo {
  merkleRoot!: Hash;
  data!: TransactionData;
}

export class IBlock extends BlockData {
  hash!: Hash;
}
