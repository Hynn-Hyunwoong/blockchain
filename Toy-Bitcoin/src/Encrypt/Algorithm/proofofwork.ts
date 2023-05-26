import CryptoModuler from "Encrypt/crypto.module";
import { DIFFICULTY_INTERVAL, GENERATE_DURATION } from "genesys/genesys.block";
import { DifficultyProps, Proof } from "interfaces/algorithm.interface";
import { IBlock } from "interfaces/block.interface";
import { ProofProps } from "type/workproof.data";

class ProofOfWork implements Proof {
  constructor(private readonly crypto: CryptoModuler) {}
  execute(props: ProofProps): IBlock {
    const { blockData, adjustmentBlock } = props;
    let block: IBlock = { ...blockData, hash: "" };

    do {
      block.nonce++;
      block.timestamp = new Date().getTime();
      block.difficulty = this.getDifficulty(
        this.getDifficultyProps(block, adjustmentBlock)
      );
      block.hash = this.crypto.createHash(block);
    } while (
      !this.crypto.Binary(block.hash).startsWith("0".repeat(block.difficulty))
    );

    return block as IBlock;
  }

  getDifficulty(block: IBlock, adjustmentBlock: IBlock) {
    const { height, timestamp: currentTime } = block;
    const { difficulty, timestamp: adjustmentTime } = adjustmentBlock;
    return {
      height,
      currentTime,
      adjustmentTime,
      difficulty,
    };
  }
  getDiffcultyProps(props: DifficultyProps) {
    const { height, currentTime, adjustmentTime, difficulty } = props;

    if (height <= 0) throw new Error("Height must be greater than 0");
    if (height <10) return 0
    if (height <20) return 1 

    if(height % DIFFICULTY_INTERVAL !== 0) return difficulty

    const totalTime = currentTime - adjustmentTime
    const expectedTime = GENERATE_DURATION * DIFFICULTY_INTERVAL

    if(totalTime < expectedTime / 2) return difficulty + 1
    if(totalTime > expectedTime * 2) return difficulty - 1
    return difficulty
    }
  }
}

export default ProofOfWork;
