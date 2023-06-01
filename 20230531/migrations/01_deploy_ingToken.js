const ingToken = artifacts.require("ingToken");
const EthSwap = artifacts.require("EthSwap");

module.exports = async (deployed) => {
  await deployed.deploy(ingToken);
  await deployed.deploy(EthSwap, ingToken.address);
};
