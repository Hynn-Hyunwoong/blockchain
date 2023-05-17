import { GENESIS } from "@constants/block.constants";
import WorkProof from "@core/block/ProofofWorks/proofofwork";
import Block from "@core/block/block";
import { IBlock } from "@core/block/block.interface";
import CryptoModule from "@core/crypto/crypto.module";

describe("Block", () => {
  let block: Block;
  let crypto: CryptoModule;
  let workProof: WorkProof;

  beforeEach(() => {
    crypto = new CryptoModule();
    workProof = new WorkProof(crypto);
    block = new Block(crypto, workProof);
    // console.log("initialization for blcok in block.test.ts : ", block);
  });

  describe("isValidBlock", () => {
    let previousBlock: IBlock;
    beforeEach(() => {
      previousBlock = { ...GENESIS };
    });
    it("Check BlockHash validate", () => {
      expect(() => {
        block.isValidBlock(previousBlock);
      }).not.toThrowError();
    });
    it("Check BlockHash invalid", () => {
      previousBlock.hash =
        "84ffab55c48e36cc480e2fd4c4bb0dc5ee1bb2d41a4f2a78a1533a8bb7df837";
      expect(() => {
        block.isValidBlock(previousBlock);
      }).toThrowError();
    });
    it("Vaild doesn't change blockHash", () => {
      // console.log(previousBlock);
    });
    it("If throw error invalid BlockHash", () => {});
  });

  describe("createBlockInfo", () => {
    const previousBlock = GENESIS;
    it("Checking to createBlockHash", () => {
      expect(typeof block.createBlockInfo).toBe("function");
    });
    it("createBlockHash", () => {
      const newBlock = block.createBlockInfo(previousBlock);
      // console.log("newBlock in block.test.ts : ", newBlock);
      expect(typeof newBlock).toBe("object");
    });
    it("check createBlock content correct", () => {
      const newBlock = block.createBlockInfo(previousBlock);
      // console.log("newBlock in block.test.ts : ", newBlock);
      expect(newBlock.previousHash).toBe(previousBlock.hash);
      expect(newBlock.height).toBe(previousBlock.height + 1);
    });
  });
});
