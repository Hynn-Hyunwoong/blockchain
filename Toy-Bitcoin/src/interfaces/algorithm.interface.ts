import { Diffuclty, Height, TimeStamp } from "type/block.data";
import { BlockData, IBlock } from "./block.interface";
import { ProofProps } from "type/workproof.data";

export interface ProofOfWorkProps {
  blockData: BlockData;
  adjustmentBlock: IBlock;
}

export interface DifficultyProps {
  height: Height;
  currentTime: TimeStamp;
  adjustmentTime: TimeStamp;
  difficulty: Diffuclty;
}

export interface ProofofStakeProps {}

export interface Proof {
  execute(props: ProofProps): IBlock;
}
