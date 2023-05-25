const express = require("express");
const cors = require("cors");
const Web3 = require("web3");
const app = express();
const CounterContract = require("./contracts/Counter.json");

const web3 = new Web3(
  "https://goerli.infura.io/v3/5ea599f0ded84b0b9ad9b0dfcc1fb6ac"
);

app.use(cors());
app.use(express.json());

app.post("/increment", (req, res) => {
  const { abi } = CounterContract;

  const deployed = new web3.eth.Contract(
    abi,
    "0x2bC40C43b2A198ee38CB33DBF1ceB46F8eF27137"
  );
  const data = deployed.methods.increment().call();
  res.json({
    from: "",
    to: "",
    data: "",
  });
});
app.post("/decrement", (req, res) => {
  const { abi } = CounterContract;
  res.json({
    from: "",
    to: "",
    data: "",
  });
});

app.listen(3005, () => {
  console.log("Server running on port 3005");
});
