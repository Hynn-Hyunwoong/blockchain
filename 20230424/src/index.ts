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
import App from "@serve/app";
import Message from "@serve/message";
import P2PNetwork from "@serve/p2p";

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

// const app = App(Hynn);
const message = new Message(Hynn);
const p2p = new P2PNetwork(message);
p2p.listen(8555);
