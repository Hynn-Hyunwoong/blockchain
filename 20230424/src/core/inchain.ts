import Block from "./block/block";
import Chain from "./chain/chain";
import Transaction from "./transaction/transaction";
import Unspent from "./transaction/unspant";

class Inchain {
  constructor(
    private readonly chain: Chain,
    private readonly block: Block,
    private readonly transaction: Transaction,
    private readonly unspent: Unspent
  ) {}
  mineBlock(account: string) {
    const latestBlock = this.chain.latestBlock();
    const adjustmentBlock = this.chain.getAdjustmentBlock();
    const coinbase = this.transaction.createCoinbase(
      account,
      latestBlock.height
    );

    const newBlock = this.block.mine(latestBlock, [coinbase], adjustmentBlock);
    this.chain.addToChain(newBlock);
    console.log("Completed Creation new Block");

    return this.chain.latestBlock();
  }
  sendTransaction() {}
  getBalance(accounts: string) {
    const myUnspantTxOuts = this.unspent.me(accounts);
    const balance = this.unspent.getAmount(myUnspantTxOuts);
    return balance;
  }
}

export default Inchain;
