const Counter = artifacts.require("Counter");

module.exports = (deployer) => {
  console.log(deployer);
  deployer.deploy(Counter);
};
