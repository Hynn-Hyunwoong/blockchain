import ProofOfStake from "@core/block/ProofofWorks/proofofstake";
import ProofOfWork from "@core/block/ProofofWorks/proofofwork";
import WorkProof from "@core/block/ProofofWorks/workproof";
import { Proof } from "@core/block/ProofofWorks/workproof.interface";

describe("WorkProof", () => {
  let workProof: WorkProof;
  let proof: Proof;

  describe("ProofOfWork", () => {
    beforeEach(() => {
      proof = new ProofOfWork();
      workProof = new WorkProof(proof);
    });
    it("Checking to ProofOfWork", () => {
      workProof.run();
    });
  });
  describe("ProofOfStake", () => {
    beforeEach(() => {
      proof = new ProofOfStake();
      workProof = new WorkProof(proof);
    });
    it("Checking to ProofOfStake", () => {
      workProof.run();
    });
  });
});
