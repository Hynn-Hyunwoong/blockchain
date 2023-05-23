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

const dataCode = web3.eth.abi.encodeFunctionCall(
  {
    inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  [10]
);

console.log(dataCode);

const tx = {
  from: "0xE10010d31f748e8C08e8F0a77BeA8236241429A9",
  to: "0x0988be5c75f8D6c6b30Dbe8b63976fC026403980",
  data: dataCode,
  gas: 50000,
  gasPrice: 200000000,
};

console.log(tx);
web3.eth.sendTransaction(tx).then(console.log);
