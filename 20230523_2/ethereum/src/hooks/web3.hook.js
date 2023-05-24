import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
  const [user, setUser] = useState({
    account: "",
    balance: "",
  });

  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async ([data]) => {
          const web3Provider = new Web3(window.ethereum);
          setWeb3(web3Provider);
          setUser({
            ...user,
            account: data,
            balance: web3Provider.utils.toWei(
              await web3Provider.eth.getbalance(data),
              "Ether"
            ),
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Please install MetaMask or Login");
    }
  }, []);

  return {
    user,
    web3,
  };
};

export default useWeb3;

/* 
1. Class

1) ustState, useEffect
2) Function
3) Hook

2. Custom Hook
-> return doesn't formatting JSX, Hooks is return to Data. Hooks is rule is create data.
*/
