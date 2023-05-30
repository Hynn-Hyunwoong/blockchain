import AppleShopContract from "../contract/AppleShop.json";
import { useState, useEffect } from "react";

const AppleShop = ({ web3, account }) => {
  const [deployed, setDeployed] = useState(null);
  const [apple, setApple] = useState(0);
  const buy = async () => {
    await deployed.methods.buy().send({
      from: account,
      to: AppleShopContract.networks[1685407684226].address,
      value: web3.utils.toWei("1", "ether"),
    });
    const apple = await deployed.methods.get().call();
    setApple(apple);
  };

  const sell = async () => {
    await deployed.methods.sell().send({
      from: account,
      to: AppleShopContract.networks[1685407684226].address,
      value: web3.utils.toWei("1", "ether"),
    });
    const apple = await deployed.methods.get().call();
    setApple(apple);
  };

  useEffect(() => {
    if (!deployed) return;
    deployed.methods.get().call().then(setApple);
  }, [deployed]);

  useEffect(() => {
    if (!web3) return;
    const instance = new web3.eth.Contract(
      AppleShopContract.abi,
      AppleShopContract.networks[1685407684226].address
    );
    setDeployed(instance);
    // instance.methods.get().call().then(setDeployed); // useState Pattern, Design-Pattern is Observer-Pattern
  }, []);
  return (
    <>
      <h2>Apple Price : 1 ETh</h2>
      <div>
        Have Apple : {apple} <button onClick={buy}>Buying Apple</button>
      </div>
      <div>
        Total Apple Price : {apple} ETH{" "}
        <button onClick={sell}>Selling Apple</button>
      </div>
      <div>Currently Account : {account}</div>
    </>
  );
};

export default AppleShop;
