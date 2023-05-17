import { Difficulty, Height, Timestamp } from "types/block";
import { BlockData, IBlock } from "../block.interface";

export interface ProofOfWorkProps {
  blockData: BlockData;
  adjustmentBlock: IBlock;
}
export interface DifficultyProps {
  height: Height;
  currentTime: Timestamp;
  adjustmentTime: Timestamp;
  previousDifficulty: Difficulty;
}
export interface ProofOfStakeProps {}

export type ProofProps = ProofOfWorkProps | ProofOfStakeProps;

export interface Proof {
  execute(props: ProofProps): IBlock;
}
