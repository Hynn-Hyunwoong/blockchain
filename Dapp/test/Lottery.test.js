const Lottery = artifacts.require("Lottery");

// Truffle Test Most TDD Tools Mocha

contract(
  "Lottery",
  function ([
    deployer,
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
  ]) {
    let lottery;
    beforeEach(async () => {
      console.log("beforeEach");

      lottery = await Lottery.new();
    });

    it("basic test", async () => {
      console.log("basic test");
      let owner = await lottery.owner();
      let value = await lottery.getSomeValue();
      console.log(`owner is ${owner}`);
      console.log(`value is ${value}`);
      assert.equal(value, 5);
    });
  }
);
