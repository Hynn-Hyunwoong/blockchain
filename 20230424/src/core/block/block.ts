import { VERSION } from "@constants/block.constants";
import { BlockData, BlockInfo, IBlock } from "./block.interface";
import CryptoModule from "@core/crypto/crypto.module";
import {
  TransactionData,
  TransactionRow,
} from "@core/transaction/transaction.interface";

class Block {
  constructor(private readonly crypto: CryptoModule) {}

  isValidBlock(block: IBlock) {
    // Requirement Validation for previous Block Hash value
    // Requirement Validation for current Block Hash value
    // Requirement Validation for current Block Height value
    // Requirement Validation for current Block Timestamp value
    // Requirement Validation for current Block Nonce value
    // Requirement Validation for current Block Difficulty value
    // Requirement Validation for current Block Version value
    // Step1. Validate Block Hash in BlockInfo
    // Step2. Call to cryptoModule to createBlockHash === block.hash
    // Step3. typeof Boolean Type or value(Like a Throw new Error)
    // Step4. Check BlockHash validate , crypto.createBlockHash() === block.hash
    this.crypto.isValidHash(block.hash);
    const validHash = this.crypto.createBlockHash(block);
    // Step5. Using If, return true or false
    // If false, throw new Error
    // IF true, return true
    if (validHash !== block.hash)
      throw new Error(`Invalid Block Hash : ${validHash} : ${block.hash}`);
  }
  createBlockData(previousBlock: IBlock, data: TransactionData): BlockData {
    const blockinfo = this.createBlockInfo(previousBlock);
    // Input : BlockInfo
    // OutPut : BlockData
    // Requirement Validation TransactionData

    return {
      ...blockinfo,
      merkleRoot: this.crypto.merkleRoot(data),
      data,
    } as BlockData;
  }

  createBlockInfo(previousBlock: IBlock): BlockInfo {
    // Requirement Validation for previous Block Hash value

    // const blockInfo: BlockInfo = {
    //   version: VERSION,
    //   height: previousBlock.height + 1,
    //   timestamp: new Date().getTime(),
    //   previousHash: previousBlock.hash,
    //   nonce: 0,
    //   difficulty: 0,
    // };
    this.isValidBlock(previousBlock);
    const blockInfo = new BlockInfo();

    blockInfo.version = VERSION;
    blockInfo.height = previousBlock.height + 1;
    blockInfo.timestamp = new Date().getTime();
    blockInfo.previousHash = previousBlock.hash;
    return blockInfo;
  }
}

export default Block;
