import CryptoModule from "@core/crypto/crypto.module";
import DigitalSignature from "@core/wallet/digitalSignature";
import { Receipt } from "@core/transaction/transaction.interface";
import { randomBytes } from "crypto";
// describe("DigitalSignature", () => {
//   let privateKey: string;
//   beforeEach(() => {
//     const privateKey = randomBytes(32).toString("hex");
//   });
//   it("create PrivateKey", () => {
//     console.log(privateKey);
//     expect(privateKey).toHaveLength(64);
//   });
//   it("create PublicKey", () => {
//     const publicKey = randomBytes(32).toString("hex");
//     console.log(publicKey);
//     expect(publicKey).toHaveLength(64);
//   });
// });

// describe("DigitalSignature Test", () => {
//   it("Checking", () => {
//     console.log("awef".length);
//   });
// });

describe("About DigitalSignature", () => {
  let digitalSignature: DigitalSignature;
  let crypto: CryptoModule;

  beforeEach(() => {
    const crypto = new CryptoModule();
    digitalSignature = new DigitalSignature(crypto);
  });
  describe("PrivateKey Create", () => {
    it("Create PrivateKey", () => {
      const privateKey = digitalSignature.createPrivateKey();
      console.log("privateKey in digitalSignature.test.ts : ", privateKey);
      expect(privateKey).toHaveLength(64);
    });
  });

  describe("PublicKey Create", () => {
    it("Create PublicKey", () => {
      const privateKey = digitalSignature.createPrivateKey();
      const publicKey = digitalSignature.createPublicKey(privateKey);
      console.log("privateKey in digitalSignature.test.ts : ", privateKey);
      console.log("publicKey in digitalSignature.test.ts : ", publicKey);
      expect(publicKey).toHaveLength(66); // PublicKey is 66 Length, 32byte+1byte cause by 02 or 03 added front
    });
  });
  describe("Account Create", () => {
    it("Create Account", () => {
      const privateKey = digitalSignature.createPrivateKey();
      const publicKey = digitalSignature.createPublicKey(privateKey);
      const account = digitalSignature.createAccount(publicKey);
      console.log("privateKey in digitalSignature.test.ts : ", privateKey);
      console.log("publicKey in digitalSignature.test.ts : ", publicKey);
      console.log("account in digitalSignature.test.ts : ", account);

      expect(account).toHaveLength(40); // Account is 40 Length, 32byte+1byte cause by 02 or 03 added front
    });
  });
  describe("Signature", () => {
    let sender_privateKey: string;
    let sender_publicKey: string;
    let sender_account: string;

    let received_privateKey: string;
    let received_publicKey: string;
    let received_account: string;

    let receipt: Receipt;

    beforeEach(() => {
      sender_privateKey = digitalSignature.createPrivateKey();
      sender_publicKey = digitalSignature.createPublicKey(sender_privateKey);
      sender_account = digitalSignature.createAccount(sender_publicKey);

      received_privateKey = digitalSignature.createPrivateKey();
      received_publicKey =
        digitalSignature.createPublicKey(received_privateKey);
      received_account = digitalSignature.createAccount(received_publicKey);

      receipt = {
        sender: {
          publicKey: sender_publicKey,
          account: sender_account,
        },
        received: received_account,
        amount: 30,
      };
    });
    it("create Sign", () => {
      const signature = digitalSignature.sign(sender_privateKey, receipt);
      console.log("signature in digitalSignature.test.ts : ", signature);
      expect(typeof signature).toBe("object");
      expect(typeof signature).not.toBe(undefined);
    });
    it("Verify Sign", () => {
      const receipt2 = digitalSignature.sign(sender_privateKey, receipt);
      //   receipt2.signature = receipt2.signature + "1";
      //   const bool = digitalSignature.verify(receipt2);
      console.log(receipt2);
    });
  });
});
