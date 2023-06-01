const Lottery = artifacts.require("Lottery");

module.exports = (deployed) => {
  deployed.deploy(Lottery);
};
