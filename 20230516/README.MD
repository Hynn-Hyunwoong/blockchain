# Ethereum Basic

Block-Chain Network - P2P Network
Understanding Block-Chain Logic

Ethereum is Next-generation Smart-Contract and Decentralized Application-Platform
Ethereum is better-easy creation for Application Platform based on Block-Chain
The Point is 3 word.
Turing completeness is made by Alen Turing. Turing completeness is All issue completeness via caculation ability
This Turing completeness is a possible caculate or not caculatoe

1. Application
2. Platform
3. Smart-Contract

Bitcoin vs Ethereum

1. Bitcoin is Focusing On "Payment" (Bitcoin Like a based on P2P Paymenet System) `vs` Ethereum is not Focusing on "Payment" (Ethereum Like a Platform)
2. Bitcoin is Particle Turing completeness, It's not completeness `vs` Ethereum Based on Turing completeness

## Ethereum Point

1. Ethereum Dic - https://ethereum.org/ko/learn/ & BitCoin Dic - https://namu.wiki/w/%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8/%EB%B0%B1%EC%84%9C
2. Colored-Coin
3. Smart property
4. Name-Coin
5. Smart-Contracts
6. Decentralized Autonomous organizations
7. DAOs
8. Turing-completeness

### Ethereum Reveiw Point

#### History(BitCoin)

1. Management Status System about Bitcoin(UTXO)
2. Mining
3. Merkle-Tree
4. Scripting

#### Ethereum

1. Ethereum Account
2. Ethereum Trasaction
3. Ethereum Change status function
4. The launching Ethereum Code
5. About Ethereum Block-Chain & Mining

##### History

Why chagne POS to POW

1. POW is Not Economic
2. The Node Power(Computing Resource)
3. Mining Group ( Node-Group)
4. Uneffiency

`Smart Contract`

A -> B, C : 중개
A - Signature, C - Signature,

Bitcoin 단점 (Scripting)

1. 튜링불안전성
2. 다양한 값을 표현할 수 없음
3. Block-Chain 해독할 수 없음 ( 검증불가 )

##### About Ethereum

1. Ethereum is Decentralized Application `Protocol`
2. DAPP (분산원장)
3. Ethereum Role is Block-Chain Platform.
4. Requiremenet Turing completeness

###### Ethereum Account

1. Ethereum have a `status` on Account

state transaction state
0001:10btc a->c 2ETC 0001:2btc

```typescript
interface Transaction {
  nonce: number;
  balance: string;
  storageRoot: string;
  codeHash: string;
}
```

```typescript
const 0x00001 = {
    nonce : 0
    balance : 0
}
```

Flowchat
0x0001 -> Transaction -> 0x0001 & 0x0002

Bitcoin Every launched event for Transaciotn , create Transaction.
Ethereum launched event for Transaction update Transaction.

1BTC = 1 Satoshi = 1.00000000 (8자리)
1ETH = 10E+18(wei) = 1.000000000000000000 (18자리/1경)
Wei, gwei(giga-wei)

Account UTXO
getBalance
UTXO

- Account 이해하기

이더리움에서, 상태(state)는 어카운트(account)라고 하는 오브젝트(object)들로 구성되어 있다. 각각의 어카운트는 20바이트의 주소와 어카운트 간 값과 정보를 직접적으로 전달해 주는 상태변환(state transition)을 가지고 있다. 이더리움 어카운트는 다음 네 개의 필드를 가지고 있다.

논스(nonce): 각 트랜잭션이 오직 한번만 처리되게 하는 일종의 카운터
어카운트의 현재 이더(ether) 잔고
어카운트의 계약 코드 (존재한다면)
어카운트의 저장 공간 (초기설정(default) 상에서는 비어있음)

1. EOA ( Externally Owned Accounts) : Receipt, Signature - 서명을 가지고 트랜잭션을 발동할 수 있는 계정 & PrivateKey 에 통제되는 외부소유 Account (Nonce, Balance)
2. CA(Contract Accounts) : Contract 가 담겨있는 계정 (Nonce, Balance, storageRoot, codeHash)

이더는 이더리움의 기본 내부 암호-연료(crypto-fuel) 이고, 트랜잭션 수수료를 지불하는데 사용된다. 보통 두가지 종류의 어카운트가 존재하는데, 프라이빗 키에 의해 통제되는 외부 소유 어카운트(Externally Owned Accounts)와 컨트랙트 코드에 의해 통제되는 컨트랙트 어카운트(Contract Accounts)가 있다. 외부 소유 어카운트는 아무런 코드도 가지고 있지 않으며, 이 어카운트에서 메시지를 보내기 위해서는 새로운 트랜잭션을 하나 만들고, 서명(signing)을 해야 한다. 컨트랙트 어카운트는 메시지를 받을 때마다, 자신의 코드를 활성화시키고, 이에 따라 메시지를 읽거나 내부 저장공간에 기록하고, 다른 메시지들을 보내거나, 컨트랙트들을 차례로 생성하게 된다. 이더리움에서 컨트랙트는, 수행되거나 컴파일 되어져야 할 어떤 것이라기 보다는, 이더리움의 실행 환경안에 살아있는 일종의 자율 에이전트(autonomous agents)로서, 메시지나 트랜잭션이 도착하면 항상 특정한 코드를 실행하고, 자신의 이더 잔고와, 영속적인 변수들을 추적하기 위해 자신의 키/값 저장소를 직접적으로 통제하는 역할을 한다.

CA Account Sample

```typescript
interface Transaction {
  nonce: number; // Transaction 에 한번만 처리
  balance: string; // 이더리움 잔액
  storageRoot: string; //
  codeHash: string; // Smart Contract Code(Hash)
}
```

```solidity
pragma solidity ^8.0.0;

contract Counter {
    unit256 value;

    function getValue() public view returns(unit256){
        return value
    }

    function setValue(unit256 _value) public {
        value = _value
    }
}
```

data = key-value 으로 데이터 저장
example) value=0

### Message & Transaction

1. In Ethereum, Transaction define `added Signature on Receipt` - EOA Accout
2. In Ethereum, Message define `Not added Signature on Receipt` - CA Account

```typescript
interface Message {
  from?: string;
  to: string;
  value?: number;

  nonce?: number;
  hash?: number;

  gas?: number;
  gasPrice: number;

  data?: string;
}
// SignatureInput from Ecliipe
interface Transaction extends Message {
  v: number;
  r: string;
  s: string;
}
```

### Gas & GasPrice

1. Gas - 총 주유량
2. GasPrice - 1L 당 가격

Summary = 수수료 게산공식 GasPrice \* Gas

### Bitcoin vs Ethereum

1. Bitcoin is Focusing Payment
2. Ethereum is Focusing Platform

### Smart Contract

Smart-Contract is turing completeness (Including For-loop)
Ether-Scan

### EVM (Ethereum Vertual Machine)

Ethereum 에서 Software를 이용해 Hardware 를 구현
Smart-Contract

1. Solidity 생성, Complie

- Smart Contract 실행 전 Contract Complie & EVM

2. Transaction 생성 (EOA Account)

- EVM Complie 된 내용을 Transaction.data 넣고 생성

3. Gas 소비

- Miner에 의해 EVM을 통해 ByteCode 가 해석되고 Gas 측정

4. Code 실행

- Contract Instance 생성

5. 상태변경

- Contract 상태 설정 & 변경 (Value)

6. 트랜잭션 완성(CA Account)
