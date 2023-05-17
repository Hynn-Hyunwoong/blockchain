import { IBlock } from "../block.interface";
import { Proof } from "./workproof.interface";

class ProofOfStake implements Proof {
  execute(): IBlock {
    console.log("Launch to POS");
    // throw new Error("Method not implemented.");
    return {} as IBlock;
  }
}

export default ProofOfStake;
