import ProofOfWork from "@core/block/ProofofWorks/proofofwork";
import WorkProof from "@core/block/ProofofWorks/workproof";
import Block from "@core/block/block";
import Chain from "@core/chain/chain";
import CryptoModule from "@core/crypto/crypto.module";
import Inchain from "@core/inchain";
import Transaction from "@core/transaction/transaction";
import Unspent from "@core/transaction/unspant";
import DigitalSignature from "@core/wallet/digitalSignature";
import Wallet from "@core/wallet/wallet";

const chain = new Chain();
const crypto = new CryptoModule();

const proof = new ProofOfWork(crypto);
const workProof = new WorkProof(proof);
const transaction = new Transaction(crypto);
const unspent = new Unspent();

const block = new Block(crypto, workProof);
const digitalSignature = new DigitalSignature(crypto);
const accounts = new Wallet(digitalSignature);
const Hynn = new Inchain(chain, block, transaction, unspent, accounts);

const sender = accounts.create();
const received = accounts.create();
const receipt = Hynn.accounts.receipt(received.account, 10);

Hynn.mineBlock(sender.account);
Hynn.mineBlock(sender.account);
Hynn.mineBlock(received.account);
Hynn.mineBlock(received.account);

Hynn.sendTransaction(receipt);

// console.log(unspent.getUnspentTxPool());

const balance1 = Hynn.getBalance(sender.account);
const balance2 = Hynn.getBalance(received.account);

console.log("sender balance : ", balance1);
console.log("received balance : ", balance2);
