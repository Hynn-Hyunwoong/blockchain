# ERC

1. Bitcoin = UTXO
2. Ethereum = Smart-Contract

## ERC - Ethereum Request for Comment

1. Coin

- MainNet

2. Alt(Alternative)Coin

3. Token - Smart Contract

- Doesn't have mainnet
  ERC20 (Token)
  ERC721 (NFT)
  ERC1155 (NFT)

  ERC is Standard

  ```ts
  interface Balance {
    address: string;
    amount: number;
  }

  interface Token {
    name: string;
    balance: Balance[];
  }

  const ingToken: Token = {
    name: "ingToken",
    balances: [
      {
        address: "A",
        amount: 50,
      },
      {
        address: "B",
        amount: 10,
      },
    ],
  };
  ingToken.transfer(B, 50);
  ```

  ```sh
  Deploying 'SimpleStore'
  -----------------------
  > transaction hash:    0x54cf67d17df38c41f4fe376dbfa06a07e801f214c48cbf4de8e5a7200b89185e
  > Blocks: 0            Seconds: 0
  > contract address:    0xe1d3F53449C16195729bF39BAA0ac0EfeD5A37f1
  > block number:        1
  > block timestamp:     1685065580
  > account:             0x8F5e3Eb8d706A659Ef2Da3c8f7082Aa8e88765E1
  > balance:             99.99770864
  > gas used:            114568 (0x1bf88)
  > gas price:           20 gwei
  > value sent:          0 ETH
  > total cost:          0.00229136 ETH

  > Saving artifacts
  -------------------------------------
  > Total cost:          0.00229136 ETH
  ```

```sh
  web3.eth.getTransaction('0x54cf67d17df38c41f4fe376dbfa06a07e801f214c48cbf4de8e5a7200b89185e')

  return

  {
  hash: '0x54cf67d17df38c41f4fe376dbfa06a07e801f214c48cbf4de8e5a7200b89185e',
  nonce: 0,
  blockHash: '0x6724ea8a5aa4af24d3b049f509c6569097597a5f82de93654b8a7237278d7800',
  blockNumber: 1,
  transactionIndex: 0,
  from: '0x8F5e3Eb8d706A659Ef2Da3c8f7082Aa8e88765E1',
  to: null,
  value: '0',
  gas: '0x22f6a',
  gasPrice: '20000000000',
  input: '0x608060405234801561001057600080fd5b5060405161015f38038061015f83398181016040528101906100329190610054565b806000819055505061009e565b60008151905061004e81610087565b92915050565b60006020828403121561006657600080fd5b60006100748482850161003f565b91505092915050565b6000819050919050565b6100908161007d565b811461009b57600080fd5b50565b60b3806100ac6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633fa4f24514602d575b600080fd5b60336047565b604051603e9190605a565b60405180910390f35b60005481565b6054816073565b82525050565b6000602082019050606d6000830184604d565b92915050565b600081905091905056fea26469706673582212204963da44d622c291c7f4a8f83c01335ff84b5a521bbfe5da128a4ddb875f033b64736f6c63430008000033000000000000000000000000000000000000000000000000000000000000000f',
  v: '0x25',
  r: '0x96796ca9ff1edb2388adbd9497b37de8f803ed9403c3f980f97985e59b8902a3',
  s: '0x1b3bb6d9c3a14612bd27c5e48b988a9cc73283af575dca44de19f02c04f13060'
  }

  SimpleStore.deployed().then(data=>instance=data)
  instance.methods
```

### 2nd Test

```sh
Starting migrations...
======================
> Network name:    'development'
> Network id:      1685065035655
> Block gas limit: 6721975 (0x6691b7)


01_deploy_simplestore.js
========================

   Deploying 'SimpleStore'
   -----------------------
   > transaction hash:    0x3c5ae341e1aa340c6bdc6b668cd67b969a31f443b73ea50bd2d00339419d628d
   > Blocks: 0            Seconds: 0
   > contract address:    0xFb7d6382c74C2B90c142f913D9D54b10AcbAB4fa
   > block number:        2
   > block timestamp:     1685067191
   > account:             0x8F5e3Eb8d706A659Ef2Da3c8f7082Aa8e88765E1
   > balance:             99.99419836
   > gas used:            175514 (0x2ad9a)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00351028 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00351028 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.00351028 ETH
```

1. mapping

```js
const a = ["Hynn", "1234"];
```

```solidity
mapping(number => string) public a
String[]a

a[0] = Hynn
a[1] = 1234

mapping(address=>mapping(uint256=>uint256)) public b

{
    "0x1234" : {
        0:1234
    }
}
```

### CA

Secondary deployed

```sh
02_deploy_IngToken.js
=====================

   Deploying 'IngToken'
   --------------------
   > transaction hash:    0xa35cbab56a4693511270962fc3a1b07f39ba73d381a2837f7f5fb0c7ff3bc92b
   > Blocks: 2            Seconds: 17
   > contract address:    0xB2049B7954ED80Eed61fBf276b8d74bb3443Ed62
   > block number:        9065021
   > block timestamp:     1685071164
   > account:             0x669b2Ebe9Ffa3Ae01248dFD7D0E446F6E843A570
   > balance:             0.1972641617865196
   > gas used:            640617 (0x9c669)
   > gas price:           2.500000395 gwei
   > value sent:          0 ETH
   > total cost:          0.001601542753043715 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 9065022)
```

## EIP - Ethereum Improvement Proposals

5ea599f0ded84b0b9ad9b0dfcc1fb6ac
