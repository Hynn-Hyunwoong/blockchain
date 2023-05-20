# Ethereum Develop

1. Block
2. Account
3. Message oor Transaction
4. Fee(Gas) - Reward
5. ETH 단위

# Ethereum Dev-Tools

1. Geth
2. Ganache

## Flow Chat

Ganache -> testnet -> mainnet

1. Ganache

- Based on Local-Network

2. Testnet

- Based on Network Testing

3. Mainet

- Deploy Public&Private Network

## Additional Dev-Tool

1. Web3
2. ethers
3. Truffle
4. Hardhat
5. Remix (Online-Editor) Like a IDE

## Training Web-site

1. Solidity 깨부수기

- https://www.youtube.com/watch?v=QYeBPgqKgIc&list=PLJQKWHLhBrxI43w0DU4uQrhWv4Pm1OFlx

2. Crypto-Zombie

- https://cryptozombies.io/
  ERC20 / ERC 7

## Ganache

1. Based on Local-Network Ethereum
2. Type

- CLi
- Application (GUI)

```sh
npm install ganache-cli
npx ganache-cli
```

Ganache RPC

- POST 127.0.0.1:8545
- Body
  (via Postman & CLi)

```json
{
  "jsonrpc": "2.0",
  "method": "web3_clientVersion",
  "params": []
}
```

```sh
curl -X POST -d '{"jsonrpc":"2.0", "method":"web3_clientVersion", "params":[]}' http://127.0.0.1:8545

```

{
"from":"0x10e645ad951A7BD002e23A2df9b1df782F20AB72",
"to":"0xF4511c7B90405c0fd0bCC55650822caeaE90f132",
"value":"100000000000000000"
}

## Smart-Contract

1. Where is Smart-Contract ? -> CodeHash

- Account
- Nonce
- Balance
- Stroage
- "Codehash"

2. Account in the Ethereum

## Solidity Compile

npx solc --bin --abi ./counter.sol
