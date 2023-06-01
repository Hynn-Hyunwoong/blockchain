const ingToken = artifacts.require("ingToken");
const EthSwap = artifacts.require("EthSwap");

contract(
  "EthSwap",
  ([
    deployed1,
    deployed2,
    account1,
    account2,
    account3,
    account4,
    account5,
    account6,
    account7,
    account8,
  ]) => {
    describe("EthSwap", () => {
      it("Checking Accounts", async () => {
        console.log("deployed1", deployed1);
      });

      describe("ingToken", () => {
        it("token deployed", async () => {
          console.log("IngToken CA", ingToken.address);
        });
      });
      describe("deployed", () => {
        let token;
        let swap;
        it("Initialization deploy", async () => {
          token = await ingToken.deployed();
          swap = await EthSwap.deployed();

          console.log(token, swap);
        });

        it("getBalance token deployed", async () => {
          const balance = await token.balanceOf(deployed1);
          console.log("balance", balance.toString());
        });

        it("buyToken", async () => {
          // const amount = await token.balanceOf(swap.address);
          // assert.equal(amount.toString(), "0");

          const approve = await token.approve(
            swap.address,
            web3.utils.toWei("1000", "ether")
          );
          console.log("approve", approve);

          const result = await swap.buyToken({
            from: deployed1,
            to: swap.address,
            value: web3.utils.toWei("1", "ether"),
          });
          console.log(result);
          console.log("111", await web3.eth.getBalance(deployed1));
          console.log("222", (await token.balanceOf(swap.address)).toString());
        });
      });
    });
  }
);
