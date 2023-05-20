// Target Network via web3.js
// console.log(Web3);
const web3 = new Web3("http://127.0.0.1:8545");
console.log(web3.eth.getAccounts()); //Promise { <pending> }
// const account = web3.eth.getAccounts().then(console.log); // [ '0x0f5d2fb29fb7d3cfee444a200298f468908cc942']~~~
web3.eth
  .getBalance("0x10e645ad951A7BD002e23A2df9b1df782F20AB72")
  .then(console.log);

web3.eth
  .getBalance("0x10e645ad951A7BD002e23A2df9b1df782F20AB72")
  .then((data) => {
    console.log(data);
  });

web3.eth
  .getBalance("0x10e645ad951A7BD002e23A2df9b1df782F20AB72")
  .then((data) => {
    const value = web3.utils.fromWei(data);
    console.log(value);
  });

web3.eth
  .sendTransaction({
    from: "0x10e645ad951A7BD002e23A2df9b1df782F20AB72",
    to: "0xF4511c7B90405c0fd0bCC55650822caeaE90f132",
    value: web3.utils.toWei("5", "ether"),
  })
  .then(console.log);

// HTMP Create Input
// ETH Send & Receive

// 1. Create Input
// 2. Send ETH
// 3. Receive ETH
// 4. Check Balance
// 5. Check Transaction History
// 6. Check Block History
// 7. Check Block Info
// 8. Check Transaction Info
// 9. Check Gas Price
// 10. Check Gas Limit
// 11. Check Gas Used
// 12. Check Gas Used By Transaction
// 13. Check Gas Used By Block
