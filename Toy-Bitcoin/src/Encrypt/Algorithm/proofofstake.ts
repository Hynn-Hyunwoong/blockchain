import { Proof } from "interfaces/algorithm.interface";
import { IBlock } from "interfaces/block.interface";
import { ProofProps } from "type/workproof.data";

export class ProofOfStake implements Proof {
  execute(proops: ProofProps): IBlock {
    console.log(`This Console in the ProofOfStake in POS :${proops}`);
    return {} as IBlock;
  }
}
