import { GENESIS } from "@constants/block.constants";
import { BlockInfo, BlockData } from "@core/block/block.interface";
import CryptoModule from "@core/crypto/crypto.module";

describe("CryptoModule", () => {
  let cryptoModule: CryptoModule;

  beforeEach(() => {
    cryptoModule = new CryptoModule();
  });

  describe("SHA256", () => {
    it("SHA256 Encrypt", () => {
      const data = "hello world";
      // SHA256
      // hello world => 64bit hash
      const result = cryptoModule.SHA256(data);
      // console.log(result);
      expect(result.length).toBe(64);
    });

    it("Encrypt Blockdata via SHA256", () => {
      // Logic is Object -> BlockInfo -> data
      // Outsource data in BlockInfo
      // cryptoModule.SHA256();
      const blockinfo: BlockData = {
        version: GENESIS.version,
        height: GENESIS.height,
        timestamp: GENESIS.timestamp,
        previousHash: GENESIS.previousHash,
        merkleRoot: GENESIS.merkleRoot,
        nonce: GENESIS.nonce,
        difficulty: GENESIS.difficulty,
        data: "",
      };
      // console.log("Blockinfo in crypto.test:", blockinfo);
      const hash = cryptoModule.createBlockHash(blockinfo);
      // console.log("Hash in crypto.test:", hash);
      expect(hash).toHaveLength(64);
    });
  });
  describe("hashToBinary", () => {
    it("Hash -> Binary 2진수", () => {
      const data = "hash";
      const hash = cryptoModule.SHA256(data);
      // console.log("Hash in crypto.test:", hash);
      const binary = cryptoModule.hashToBinary(hash);
      // console.log("Binary in crypto.test:", binary);
      expect(binary.length).toBe(256);
    });
  });
  describe("merkleRoot Test", () => {
    it("Caculator data in Genesis Block", () => {
      const hash = cryptoModule.merkleRoot(GENESIS.data);
      // console.log("Hash in crypto.test:", hash);
      expect(hash).toHaveLength(64);
    });
    it("If data-typeof TransactionRow", () => {
      const data = [
        {
          hash: "DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3D8",
        },
        {
          hash: "DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3D8",
        },
      ];
      const merkleroot = cryptoModule.merkleRoot(data);
      expect(merkleroot).toHaveLength(64);
    });
    it("Invalid data-value", () => {
      const data = [
        {
          hash: "DC24B111ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3D8",
        },
        {
          hash: "DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98",
        },
      ];
      expect(() => {
        cryptoModule.merkleRoot(data);
      }).toThrowError();
    });
  });

  describe("isValidHash", () => {
    it("hash length is under 64", () => {
      const hash = "111";
      expect(() => {
        cryptoModule.isValidHash(hash);
      }).toThrowError();
    });
  });
  it("Invalid hash", () => {
    const hash =
      "DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3DG";
    expect(() => {
      cryptoModule.isValidHash(hash);
    }).toThrowError();
  });
});
