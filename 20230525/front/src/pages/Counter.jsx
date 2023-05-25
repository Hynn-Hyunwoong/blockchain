import { useEffect, useState } from "react";
import CounterContract from "../contracts/Counter.json";

const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(null);
  const [deployed, setDeployed] = useState(null);

  const increment = async () => {
    if (deployed === null) return alert("Contract not deployed");
    const result = await deployed.methods.increment().send({ from: account });
    deployed.methods
      .get()
      .call()
      .then((value) => {
        setCount(value);
      });
  };

  const decrement = async () => {
    if (deployed === null) return alert("Contract not deployed");
    const result = await deployed.methods.decrement().send({ from: account });
    deployed.methods
      .get()
      .call()
      .then((value) => {
        setCount(value);
      });
  };

  useEffect(() => {
    if (!deployed)
      setDeployed(
        new web3.eth.Contract(
          CounterContract.abi,
          "0x2bC40C43b2A198ee38CB33DBF1ceB46F8eF27137"
        )
      );
    web3.eth
      .subscribe("logs", {
        address: "0x2bC40C43b2A198ee38CB33DBF1ceB46F8eF27137",
      })
      .on("data", (log) => {});
    const params = [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ];
  }, []);

  useEffect(() => {
    if (web3 === null || account === null) return;

    const Deployed = new web3.eth.Contract(
      CounterContract.abi,
      "0x2bC40C43b2A198ee38CB33DBF1ceB46F8eF27137"
    );
    setDeployed(Deployed);

    Deployed.methods
      .get()
      .call()
      .then((value) => {
        setCount(value);
      });
  }, []);
  return (
    <>
      <div>
        <h2>Counter : {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};

export default Counter;
