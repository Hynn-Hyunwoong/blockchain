//0x37f0a1ddebcb9fb9b8d1fe31fa5130870fa635c1

const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:8545");

const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [],
    name: "getValue",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const dataCode = web3.eth.abi.encodeFunctionCall(abi[1], []);
console.log(dataCode);

web3.eth
  .call({
    to: "0x37f0a1ddebcb9fb9b8d1fe31fa5130870fa635c1",
    data: dataCode,
  })
  .then((data) => {
    const result = web3.utils.toBN(data).toString(10);
    console.log(result);
  });
