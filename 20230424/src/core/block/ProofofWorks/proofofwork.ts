import CryptoModule from "@core/crypto/crypto.module";
import { IBlock } from "../block.interface";
import {
  DifficultyProps,
  Proof,
  ProofOfWorkProps,
} from "./workproof.interface";
import { Difficulty } from "types/block";
import {
  BLOCK_GENERATION_INTERVAL,
  DIFFICULTY_ADJUSTMENT_INTERVAL,
} from "@constants/block.constants";

class ProofOfWork implements Proof {
  constructor(private readonly crypto: CryptoModule) {}
  execute(props: ProofOfWorkProps): IBlock {
    // {blockData, adjustmentBlock} = props;
    // blockdata not have hash, adjustmenetBlock have hash
    // Caculator Section
    // Get the last block of the chain
    // blockData.nonce +1
    // blockData.timestamp = new Date().getTime();
    // blockData.hash = SHA256(blockData);
    // SHA256 need to import crypto-js / hex
    // transfer to hex -> binary
    // Checking count of 0
    // If correct blockData.difficulty
    // return blockData + hash as Block
    // create to blockData.difficulty
    const { blockData, adjustmentBlock } = props;
    let block: IBlock = { ...blockData, hash: "" };
    do {
      block.nonce += 1;
      block.timestamp = new Date().getTime();
      const difficultyProps = this.getDifficultyProps(block, adjustmentBlock);
      block.difficulty = this.getDifficulty(difficultyProps);
      block.hash = this.crypto.createBlockHash(block);
    } while (
      !this.crypto
        .hashToBinary(block.hash)
        .startsWith("0".repeat(block.difficulty))
    );
    return block as IBlock;
  }

  getDifficultyProps(block: IBlock, adjustmenetBlock: IBlock): DifficultyProps {
    const { height, timestamp: currentTime } = block;
    const { difficulty: previousDifficulty, timestamp: adjustmentTime } =
      adjustmenetBlock;
    return {
      height,
      currentTime,
      adjustmentTime,
      previousDifficulty,
    };
  }
  getDifficulty(props: DifficultyProps): number {
    const { height, currentTime, adjustmentTime, previousDifficulty } = props;

    if (height <= 0) throw new Error("Height must be greater than 0");
    if (height < 10) return 0;
    if (height < 20) return 1;

    if (height % DIFFICULTY_ADJUSTMENT_INTERVAL !== 0)
      return previousDifficulty;

    const timeTaken = currentTime - adjustmentTime;
    const timeExpected =
      BLOCK_GENERATION_INTERVAL * DIFFICULTY_ADJUSTMENT_INTERVAL;

    if (timeTaken < timeExpected / 2) return previousDifficulty + 1;
    if (timeTaken > timeExpected * 2) return previousDifficulty - 1;
    return previousDifficulty;
    // if (height <= 0) {
    //   throw new Error("Height must be greater than 0");
    // } else {
    //   return Math.floor(height / 10);
    // }

    // Block Height under 20, skip to getDifficulty
    // If create Block, This Block.Height not 10,20... setting previousBlock Difficulty
    // create a Block, processing time is 10min
    // checking create processing time < target-time/2 = previous.difficulty + 1
    // checking create processing time > target-time*2 = previous.difficulty - 1
    // checking create processing time = target-time = previous.difficulty
  }
}

export default ProofOfWork;
