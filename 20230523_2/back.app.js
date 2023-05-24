import { useEffect, useState } from "react";
import Web3 from "web3";

const App = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  useEffect(() => {
    (async () => {
      const [data] = await window.ethereum.request({
        method: "ether_requestAccounts",
      });
      setWeb3(new Web3(window.ethereum));
      setAccount(data);
    })();
  }, []);

  const handleClick = (e) => {
    console.log("Confirm Click", web3);
    web3.eth.getBalance(account).then(console.log);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target.received.value;
    const value = web3.utils.toWei * (e.target.amount.value, "Ether");

    const tx = {
      to: account,
      from,
      value,
    };

    console.log(tx);
  };
  return (
    <>
      {account || "Please loign before"}
      <button onClick={handleClick}>Balance</button>

      <br />

      <form onSubmit={handleSubmit}>
        <input type="text" id="received" placeholder="받을 금액" />
        <input type="number" id="amount" placeholder="보낼 금액" />
        <button type="submit">전송</button>
      </form>
    </>
  );
};

export default App;
