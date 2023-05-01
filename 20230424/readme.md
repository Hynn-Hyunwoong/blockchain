# Bitcoin

About Block-Chain Network

Dictonary

TCP
Bit level Caculating
Time
P2P Paymenet

1. Online Signature
2. Protected Duplicate Payment => Proof of Work

## Requirement

1. 암호화

`asdf` => via SHA256 => 32byte

### 1. Typescript Setting

```sh
npm init -y
npm install -d typescript tsc-alias ts-node tsconfig/paths nodemon
```

### 2. Jest Setting

TDD Framework
Made by Meta(Facebook)

```sh
npm install -D jest @types/jest ts-jest
```

jest.config.json

```json
{
  "preset": "ts-jest",
  "testEnviroment": "node",
  "globals": {
    "transform": {
      "ts": "ts-jest"
    },
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  }
}

기본 Logic

describe
it / test
expect. method
```

### Jest Work-logic
