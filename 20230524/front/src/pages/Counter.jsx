import { useState, useEffect } from "react";
import CounterContract from "../contracts/Counter.json";

const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState(null);

  const get = async () => {
    try {
      if (deployed === null) return alert("Deployed is null");

      const count = await deployed.methods.getValue().call();
      console.log(`Value is : ${count}`);
      setCount(count);
    } catch (error) {
      console.error("Error in get method:", error);
    }
  };

  const increment = async () => {
    if (deployed === null) return alert("Deployed is null");
    const result = await deployed.methods.increment().send({ from: account });
    deployed.methods
      .getValue()
      .call()
      .then((value) => {
        setCount(value);
      });
  };

  const decrement = async () => {
    if (deployed === null) return alert("Deployed is null");
    const result = await deployed.methods.decrement().send({ from: account });
    console.log(`result of decrement is : ${result}`);
    deployed.methods
      .getValue()
      .call()
      .then((value) => {
        setCount(value);
      });
  };

  useEffect(() => {
    const Deployed = new web3.eth.Contract(
      CounterContract.abi,
      CounterContract.networks[1684898080290].address
    );
    setDeployed(Deployed);

    Deployed.methods
      .getValue()
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
