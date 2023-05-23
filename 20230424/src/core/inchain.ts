import Block from "./block/block";
import Chain from "./chain/chain";
import Transaction from "./transaction/transaction";
import Unspent from "./transaction/unspant";
import Wallet from "./wallet/wallet";
import { Receipt } from "./wallet/wallet.interface";

class Inchain {
  constructor(
    public readonly chain: Chain,
    private readonly block: Block,
    private readonly transaction: Transaction,
    private readonly unspent: Unspent,
    public readonly accounts: Wallet
  ) {}

  mineBlock(account: string) {
    const latestBlock = this.chain.latestBlock();
    const adjustmentBlock = this.chain.getAdjustmentBlock();

    const transaction = this.transaction.getPool();
    const coinbase = this.transaction.createCoinbase(
      account,
      latestBlock.height
    );
    const newBlock = this.block.mine(
      latestBlock,
      [coinbase, ...transaction],
      adjustmentBlock
    );
    this.chain.addToChain(newBlock);
    console.info("Completed Creation new Block");

    this.unspent.sync(newBlock.data);
    this.transaction.sync(newBlock.data);

    return this.chain.latestBlock();
  }

  public sendTransaction(receipt: Receipt) {
    const isVerfiy = this.accounts.verify(receipt);
    if (!isVerfiy) throw new Error("Invalid receipt. Please try again");

    const myUnspantTxOuts = this.unspent.me(receipt.sender.account);
    const balance = this.getBalance(receipt.sender.account);

    if (balance < receipt.amount) throw new Error("Insufficient balance");
    const tx = this.transaction.createReceipt(receipt, myUnspantTxOuts);

    // this.unspent.update(tx);
    // this.transaction.update(tx);
  }

  public getBalance(accounts: string) {
    const myUnspantTxOuts = this.unspent.me(accounts);
    const balance = this.unspent.getAmount(myUnspantTxOuts);
    return balance;
  }
}

export default Inchain;
