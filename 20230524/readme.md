# Truffle

Deplooy , call , send

```sh
npx truffle init
```

1. Directory Tree

- Contracts

1. Contract Code Section

- Migrations

1.

- test

1. For TDD Section

```sh
npx truffle compile
npx truffle migration
npx truffle console
```

```js
const Web3 = require("web3");
const web3 = new Web3("127.0.0.1:8545");
```

## Call

```js
const instance = await Counter.deployed();
Counter.deployed().then((instance) => (counter = instance));
```

1. Created ABI
2. Filter ABI Source-code
3. Encoding
4. After call encode method launched
