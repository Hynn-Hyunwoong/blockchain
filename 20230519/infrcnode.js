const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:8545");

web3.eth.getAccounts().then(console.log);
web3.eth
  .getBalance("0x10e645ad951A7BD002e23A2df9b1df782F20AB72")
  .then(console.log);

web3.eth
  .sendTransaction({
    from: "0x10e645ad951A7BD002e23A2df9b1df782F20AB72",
    to: "0xF4511c7B90405c0fd0bCC55650822caeaE90f132",
    value: web3.utils.toWei("5", "ether"),
  })
  .then(console.log);
