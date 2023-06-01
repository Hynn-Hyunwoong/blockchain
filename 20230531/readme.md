# NFT (Non-Fungible Token)

1. 유일성

- 대체불가능한 유일한 토큰
- NFT is Object
- {} === {}

2. 어떻게 보이는가?

- Image 를 Block-Chain 네트워크에 삽입
- NFT Token 은 URL에 저장
- IPFS(InterPlanetary File System) : Pinata

## Create Token

- Using ERC20 via OpenZeppelin Library
- About OpenZeppelin
- Including Smart-Contract

```sh
npm install openzeppelin-solidity
npm install @openzeppelin/contracts
```

## New Training

1. Import

- NodeJS & ES6 Import Different

2. Inheritance (Possibility Multiple-Inheritance)

- Inheritance sample-code. In Code, ERC20() like a super() in JS

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract IngToken is ERC20{
    constructor() ERC20(){

    }
}
```

3. Interface
