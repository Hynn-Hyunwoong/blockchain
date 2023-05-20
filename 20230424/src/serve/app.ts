import Inchain from "@core/inchain";
import express from "express";

export default (blockchain: Inchain) => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello BlockChain for Toy-Bitcoin");
  });

  app.put("/account", (req, res) => {
    const account = blockchain.accounts.create();
    res.json({ ...account });
  });

  app.get("/account", (req, res) => {
    const accounts = blockchain.accounts.getAccounts();
    res.json({ accounts });
  });

  app.post("/mineBlock", (req, res) => {
    const { account } = req.body;
    const newBlock = blockchain.mineBlock(account);
    res.json(newBlock);
  });

  app.post("/getBlanace", (req, res) => {
    const { account } = req.body;
    const balance = blockchain.getBalance(account);

    res.json({ balance });
  });

  app.post("/transaction", (req, res) => {
    try {
      const { receipt } = req.body;
      receipt.amount = parseInt(receipt.amount);
      const transaction = blockchain.sendTransaction(receipt);
      res.json({ transaction });
    } catch (e) {
      console.error(e);
    }
  });

  return app;
};
