import Web3 from "web3";
import useWeb3 from "./hooks/web3.hook";
import { useEffect, useState } from "react";
import abi from "./abi/counter.json";

const web3 = new Web3("http://127.0.0.1:8545");

const App = () => {
  useEffect(() => {
    const getValueData = abi.find((data) => data.name === "getValue");
    const data = web3.eth.abi.encodeFunctionCall(getValueData, []);
    web3.eth
      .call({
        to: "0xeEEb6B39dCFd2bf51062d1FD860BF599fdB7BF70",
        data,
      })
      .then((data) => {
        const result = web3.utils.toBN(data).toString(10);
      });
  }, []);
  const user = useWeb3();
  const [count, setCount] = useState(0);
  // console.log(object);
  if (user.web3 === null) return "Please login before";

  const handleClick = (e) => {
    e.preventDefault();
    const to = e.target.received.value;
    const value = web3.utils.toWei(e.target.amount.value, "wei");
    const tx = {
      from: user.account,
      to,
      value,
    };
    web3.eth.sendTransaction(tx).then(console.log);
  };

  const increment = () => {
    const incrementData = abi.find((data) => data.name === "increment");
    const data = web3.eth.abi.encodeFunctionCall(incrementData, []);
    const tx = {
      from: user.account,
      to: "0xeEEb6B39dCFd2bf51062d1FD860BF599fdB7BF70",
      data,
    };
    web3.eth.sendTransaction(tx).then(console.log);
  };
  const decrement = () => {
    const decrementData = abi.find((data) => data.name === "decrement");
    const data = web3.eth.abi.encodeFunctionCall(decrementData, []);
    const tx = {
      from: user.account,
      to: "0xeEEb6B39dCFd2bf51062d1FD860BF599fdB7BF70",
      data,
    };
    web3.eth.sendTransaction(tx).then(console.log);
  };

  return (
    <>
      <form onClick={handleClick}>
        <input type="text" id="received" placeholder="받을 계정" />
        <input type="text" id="amount" placeholder="보낼 금액" />
        <button type="submit">전송</button>
      </form>

      <h2>Counter : {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default App;
