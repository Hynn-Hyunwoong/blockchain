# Lottery Dapp

1. Solidity
2. Flow-Chat

## TDD

1. Solidity Test
2. Via JavaScript Test

## Truffle Compile

1. SourceCode Compile Contract
2. Ganache-cli launch

```sh
ganache-cli -d -m tutorial
```

3. Deploy

- First Time

```sh
truffle migrate
```

- Second and after

```sh
truffle migrate --reset
```

Migratioons 내의 파일은 반드시 01~순서대로 관리해야 함.
web3

```sh
 Lottery.deployed().then(function(instance){lt=instance})
```

abi 개념이해하기

BN = BigNumber

```sh
truffle(development)> lt.owner()
'0xF76c9B7012c0A3870801eaAddB93B6352c8893DB'
truffle(development)> lt.getSomeValue()
BN { negative: 0, words: [ 5, <1 empty item> ], length: 1, red: null }
```

TDD Test 시 Truffle Console 활용

```sh
truffle test ./locate/filename
```

test 시 migrations 가 아니라 test 에서 선언한 곳에서 수행됨
