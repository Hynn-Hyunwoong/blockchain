const AppleShop = artifacts.require("AppleShop");

module.exports = (deployed) => {
  deployed.deploy(AppleShop);
};

// contract account  : 0x53Db6f90FbBb795Ddb18456a080fe859B056B5db
