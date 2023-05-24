// Jest <-- Meta
// Installed TDD Code Snippets Mocha

const Counter = artifacts.require("Counter");
//test code
// Describe is a function that takes two arguments, a string and a function.
// The string is the name of the test suite, and the function is the test suite or spec.
// The spec contains one or more expectations that test the state of the code.
// An expectation in Jest is an assertion that is either true or false.
// A test that has at least one expectation is a passing test.
// A test with no expectations is a failing test.
// A test suite with no tests is a failing test suite!
// The test suite name is the first argument to describe(), and the second argument is a callback function.
// The callback function contains all the individual tests.
// The test suite name is a string that identifies the test suite.
// The callback function is a block of code that implements the test suite.
// The callback function contains one or more tests.
// Each test is implemented as a call to the test() function.
// The test() function takes two arguments, a string and a function.
// The string is the name of the test, and the function is the test itself.
// The test name is a string that identifies the test.
// The test function is a block of code that implements the test.
contract("Counter", (accounts) => {
  describe("Counter Contract", () => {
    it("Instance Creation", async () => {
      instance = await Counter.deployed();
      expect(typeof instance).to.equal("object");
    });
    it("getValue", async () => {
      const value = await instance.getValue();
      console.log(value);
    });
    it("increment", async () => {
      await instance.increment();
      const value = await instance.getValue();
      console.log(value);
    });
    it("decrement", async () => {
      await instance.decrement();
      const value = await instance.getValue();
      console.log(value);
    });
  });
});
