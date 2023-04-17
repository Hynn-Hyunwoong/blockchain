# Block-Chain

Target

1. Simple & Clear Code write
2. end-to end data
3. Data Transaction

## Block-Chain 기본 개념

1. Distributed Ledger Technology
2. Security
3. Transparency
4. Consensus Algorithm

## DLT (Distributed Ledger Technology) 분산원장기술

1. 일반적으로 분산원장기술은 금융기술에서 많이 적용됨
2. 일반적으로 현대의 은행기술은 중앙기관(은행)을 중심으로 원장을 저장하고, 이 중앙기관에 데이터가 집중됨
3. Block-Chain 은 이러한 중앙 집중/중앙중개소가 존재하지 않음

### 일반적 원장 처리 단계

1. 거래자는 거래를 희망하고, 거래 요청을 은행에 전달합니다.
2. 은행은 거래자의 계정 정보와 거래 요청 금액을 확인합니다.
3. 거래가 유효한 경우, 은행은 중앙 원장에서 거래 기록을 업데이트하고, 거래에 관련된 계정 잔액을 조정합니다.
4. 거래가 완료되면, 요청된 상대방에게 원장 처리 결과를 전달하고, 필요한 경우 거래 내역을 제공합니다.

### Block-Chain DLT 적용

1. 거래자는 거래를 희망하고, 거래 요청을 네트워크에 전달합니다.
2. 거래 요청은 블록체인 네트워크의 여러 컴퓨터 노드에 전파되어 분산 저장됩니다.
3. 각 노드는 거래를 검증하고, 유효한 거래인 경우 합의 알고리즘에 따라 원장에 추가합니다.
4. 거래가 원장에 추가되면, 해당 거래 정보는 네트워크에 있는 모든 노드와 동기화되어 투명성을 보장하고, 데이터를 안전하게 저장합니다.

### DLT Benefit

1. Security: Distributed ledger technologies like blockchain use cryptographic techniques to protect data. Transaction records are stored in blocks, and each block is saved with the hash value of the previous block. A hash is a string that uniquely identifies data, generating completely different hash values even for small changes in the data. Thanks to this hash chain structure, blockchains prevent data tampering and enhance security.

In addition, blockchain networks have a distributed structure, making them more challenging to hack than centralized systems. Since all nodes in the network have the same copy of the ledger, an attacker would need to access the majority of nodes simultaneously to alter the data.

2. Transparency: Blockchains provide a high level of transparency by making all transaction records public. Each node has the same ledger information, making it difficult to manipulate or delete transaction history. This contributes to increased trust in financial services, supply chain management, voting systems, and other applications that use distributed ledger technology. However, transparency does not mean that all information is fully disclosed. Sensitive data such as users' personal information is encrypted, concealing actual identities.

3. Consensus Algorithm: The consensus algorithm is a method by which participants in a blockchain network approve transactions and update the ledger. The consensus algorithm builds trust among network participants and ensures that transactions are processed correctly. The most widely used consensus algorithms include Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS), each with its advantages and disadvantages. The consensus algorithm plays a crucial role in maintaining the integrity, security, and scalability of blockchain networks.

#### Example

1. Node -> Block
2. Connect to Block (Chain)

1 is item, 2 is array.

[ 1, 1, 1 ]

1. Item is unique Key name(value)
2. Item is Block, Connect to block, Block-chain

## Bit-coin

1. Created by Satoshi-Nakamoto (Unknown)
2. Bit-coin is Personal-Key, Public-Key
3. Encrypted Hash.
4. Block-Chain Network published The bank's (원장) <-- Block-Explore
5. Block is Transitiion

- `Hash Benefit` : Any data, showing 32byte (ex. JWT Token, Via SALT)
- `Block-Number` : 1 is `genesys block` (`root`)

- `반감기`가 존재 : 4년마다 Block 생성(Marining) 시 Reward 가 줄어듬 `Marining` is create Block(node)
- Bit-coin 은 총 생성량이 존재함
- `작업증명`

- `Wallet` (지갑)

1. Wallet & Password
2. Password 는 사용자신원증명을 하기 위해 채택된 기본 Security
3. Transaction Bank's
4. Input & output & user
5. 최근 은행은 OTP 라는 Two-Factor Authentication 존재(TFA)

- Bit-coin Process

1. Public-Key & Personal-Key

- Public-Key (Bank Account)
- Personal-Key (Password) - DataType is Hash -> 16진수를 32byte 로표현 (64글자)
- `Wallet` Program -

1. Cold-wallet

- MetaMask (Etherium Line) : ERC-20 Token

2. Hard-wallet

- Ledger Nano S
- Ledger Nano X
- Trezor One
- Trezor Model T

3. Paper Wallet

Save to Personal-Key in Wallet.

Example
Upbit, Bitsom 은 중앙화거래소이므로 Cold/Hardware Wallet 이 적용된 것이 아님
Why ?

> Process Transaction Speed.

Block-Chain Treilema

- 확장성
- 보안성
- 탈중앙화

`Transaction`

Bitcoin Block Config

1. Bitcoin Network Protocol

- Magic Number : 0xD9B4BEF9 Value
- Block Size : BlockHeader + BlockBody size

2. Header

- Version : Software version
- HashPrevBlock : 이전 Block-Hash , SHA256
- HashMerkleRoot : 거래가 발생할때마다 값이 업데이트 됨
- Time : 초마다 업데이트 됨
- Bits : 작업증명 난이도 /
- Nonce : 4byte 크기의 nonce 값

3. Body

- Transaction Counter : 거래 카운터
- Coinbase transaction : 최초 거래
- Transaction 1 ~ ... : 실제 비트코인 거래의 기록

```json
{
    "MagicNumber "  : "0xD9B4BF9...",
    "BlockSize" : "BlockHeader + Body size",
},

{
    "version" : "1.0.0",
    "HashPreveBlock" : "0x000..",
    "HashMerkleRoot" : "000...",
    "Time" : "000...",
    "Bits" : "...",
    "Nonce" : "111",
}

{
    "TransactionCounter" : "1234",
    "Coinbase Trasaction" :"1234",
    "Transaction 1" : "111",
}
```

- Processs

1. 블록이 송신자로부터 수신자에게 전송됩니다. 이때, 블록 데이터 앞에 Magic Number와 Block Size 메타데이터가 붙어 전송됩니다.
2. 수신자는 Magic Number를 확인하여, 메시지가 올바른 비트코인 블록임을 확인합니다. Magic Number가 일치하지 않으면, 메시지는 무시되거나 오류로 처리됩니다.
3. 수신자는 Block Size를 사용하여, 블록 데이터를 올바르게 읽고 처리할 수 있는 충분한 크기의 버퍼를 할당합니다.
4. 수신자는 전송받은 블록의 Header와 Body를 검증합니다. 이 과정에서 작업 증명(PoW) 검증, 트랜잭션의 유효성 검사 등이 이루어집니다.
5. 검증에 성공한 블록은 수신자의 블록체인에 추가됩니다.
6. 따라서, 통신 과정에서 먼저 Magic Number와 Block Size 메타데이터가 사용되고, 이후 블록의 Header와 Body가 검증됩니다.

- Detail Process

1. 노드 연결 (Node Connection):
   비트코인 네트워크에 참여하는 노드들은 서로 연결되어야 합니다. 새로운 노드가 네트워크에 참여할 때, 다른 노드들과 TCP 연결을 설정하고 'version' 메시지를 교환하여 프로토콜 버전과 호환성을 확인합니다. 연결이 성립되면, 노드들은 서로 'verack' 메시지를 전송하여 연결을 확인합니다.

2. 블록과 트랜잭션 전파 (Block and Transaction Propagation):
   새로운 트랜잭션이 생성되면, 'inv' 메시지를 사용하여 네트워크의 다른 노드들에게 해당 트랜잭션의 존재를 알립니다. 수신한 노드는 'getdata' 메시지를 사용하여 트랜잭션 데이터를 요청할 수 있습니다.
   채굴자가 새로운 블록을 생성하면, 마찬가지로 'inv' 메시지를 사용하여 블록의 존재를 다른 노드들에게 알립니다. 수신한 노드는 'getdata' 메시지를 사용하여 블록 데이터를 요청할 수 있습니다.

3. 블록 데이터 전송 (Block Data Transmission):
   블록 데이터를 요청한 노드는, 요청한 블록에 대한 'block' 메시지를 수신합니다. 이 메시지는 Magic Number, Block Size, 블록 헤더, 그리고 블록 바디를 포함합니다.
   수신 노드는 Magic Number를 확인하여 올바른 메시지인지 확인하고, Block Size를 사용하여 데이터를 올바르게 읽습니다.

4. 블록 검증 및 동기화 (Block Validation and Synchronization):
   수신한 블록은 검증 과정을 거칩니다. 작업 증명(PoW) 검증, 트랜블록체인에 추가됩니다. 이 과정에서 노드의 로컬 블록체인과 수신한 블록이 동기화됩니다. 만약 수신한 블록이 노드의 로컬 블록체인보다 더 길다면, 노드는 자신의 블록체인을 업데이트하게 됩니다.

5. 블록 전파 (Block Propagation):
   블록이 검증되고 자신의 블록체인에 추가된 노드는, 다시 'inv' 메시지를 사용하여 연결된 다른 노드들에게 새로운 블록을 알립니다. 이를 통해 네트워크 전체에 블록이 전파되고 동기화됩니다.

6. 트랜잭션 풀 (Transaction Pool) 관리:
   블록이 성공적으로 검증되고 블록체인에 추가되면, 해당 블록에 포함된 트랜잭션들은 노드의 트랜잭션 풀에서 제거됩니다. 트랜잭션 풀은 아직 블록에 포함되지 않은 트랜잭션들을 저장하는 공간입니다.잭션 유효성 검사, 메르클 루트 검증 등이 이루어집니다.
   검증에 성공한 블록은 수신 노드의

`작업증명`

POW -> POS

1. POW (Proof of Work)

- Block-Hash 값을 사용 (16진수)
- Bit 단위 32byte -> 256bit
- BlockHash Value 를 2진수로 변환, 앞에 0이 몇개가 붙었는가?

0x5F -> 1byte
01011111 -> 10진수 : 95
0x5F -> 01011111 -> 95

Process Summary

1. 트랜잭션 수집:
   채굴자(노드)는 미확인된 트랜잭션들을 수집하여 새로운 블록을 만듭니다. 채굴자는 이 트랜잭션들에 대해 수수료를 받기 때문에, 높은 수수료를 제안하는 트랜잭션을 우선적으로 선택합니다.

2. 블록 헤더 생성:
   채굴자는 새로운 블록의 헤더를 생성합니다. 이 헤더에는 이전 블록의 해시, 메르클 루트, 타임스탬프, 난이도 목표, 그리고 논스(nonce) 값이 포함됩니다. 논스는 초기에 임의의 값으로 설정됩니다.

3. 해시 계산:
   채굴자는 블록 헤더의 해시를 계산합니다. 이 작업은 컴퓨팅 파워를 많이 소모하는 작업이며, 블록 헤더의 해시가 난이도 목표보다 낮은 값을 가지도록 논스를 조정하면서 반복적으로 수행됩니다.

4. 난이도 목표 만족:
   채굴자가 난이도 목표보다 낮은 해시 값을 찾으면, 해당 블록은 네트워크에 전파됩니다. 다른 노드들은 블록을 검증한 후 자신의 블록체인에 추가합니다. 이 과정에서 채굴자는 보상(블록 보상 및 트랜잭션 수수료)을 받습니다.

5. 난이도 조정:
   PoW에서는 일정한 시간 간격으로 블록이 생성되도록 난이도를 조정합니다. 비트코인의 경우, 약 10분 간격으로 블록이 생성되도록 난이도가 조정됩니다. 난이도는 전체 네트워크의 해시 레이트에 따라 조절됩니다. 만약 네트워크의 해시 레이트가 증가하면, 난이도도 상승하여 블록을 생성하는데 더 많은 작업이 필요하게 됩니다. 반대로, 해시 레이트가 감소하면 난이도도 하락합니다.

- PoW의 장점과 단점:

1. 장점:

- 보안: PoW는 공격자가 블록체인을 수정하거나 가짜 트랜잭션을 만드는 것을 어렵게 만듭니다. 이를 달성하려면 공격자가 네트워크의 51% 이상의 해시 파워를 통제해야 하며, 이는 현실적으로 매우 어렵습니다.
- 탈중앙화: 누구나 채굴자가 될 수 있으므로, 블록체인 네트워크의 참여와 검증이 분산되어 집중화를 방지합니다.

2. 단점:

- 에너지 소비: PoW는 많은 컴퓨팅 파워를 필요로 하기 때문에 에너지 소비가 매우 높습니다. 이는 환경에 부정적인 영향을 미칠 수 있습니다.
- 중앙화 위험: 채굴 장비의 발전과 큰 규모의 채굴 농장의 출현으로 인해, 채굴 파워가 몇몇 참여자에게 집중될 수 있습니다. 이는 네트워크의 탈중앙화 원칙에 위배될 수 있습니다.

PoW는 작업 증명을 통해 합의를 이루는 과정으로, 다수의 블록체인 네트워크에서 사용되고 있습니다. 그러나 에너지 소비와 중앙화 위험이 존재하기 때문에, 다른 합의 알고리즘들도 연구되고 개발되고 있습니다. 예를 들어, 이더리움은 PoW에서 Proof of Stake (PoS)로 전환하는 Ethereum 2.0 업데이트를 진행하고 있습니다.

## Etherium

1. Smart-Contract

## Bit-coin vs Etherium

비트코인은 디지털 통화를 목표로 하는 반면, 이더리움은 네트워크 내에서 트랜잭션을 용이하게 하는 기본 통화인 Ether를 사용하여 분산 응용 프로그램 및 스마트 계약을 위한 플랫폼으로 설계되었습니다.

1. 목적:

- 비트코인: 비트코인은 2009년 사토시 나카모토(Satoshi Nakamoto)라는 개인 또는 그룹이 만든 최초의 암호화폐입니다. 주요 목적은 은행과 같은 중개자 없이 P2P 거래를 가능하게 하는 전통적인 통화에 대한 디지털 대안 역할을 하는 것입니다.
- 이더리움(Ethereum): 이더리움은 2015년 비탈릭 부테린(Vitalik Buterin)에 의해 만들어졌습니다. 이더리움은 암호화폐(Ether)뿐만 아니라 탈중앙화 애플리케이션(dApps) 및 스마트 계약을 위한 플랫폼으로도 설계되었습니다. 이더리움을 통해 개발자는 블록체인에서 애플리케이션을 구축하고 배포할 수 있으며, 이 애플리케이션은 탈중앙화 금융(DeFi), 게임, 공급망 관리 등과 같은 다양한 용도로 사용할 수 있습니다.

2. 스마트 계약:

- 비트코인: 비트코인의 블록체인은 간단한 스크립팅을 지원하지만 이더리움에 비해 기능이 제한됩니다. 복잡한 스마트 계약을 기본적으로 지원하지 않습니다.
- 이더리움: 이더리움의 핵심 기능 중 하나는 스마트 계약을 지원한다는 것입니다. 스마트 계약은 코드에 직접 작성된 계약 조건으로 자체 실행 계약입니다. 이를 통해 이더리움 블록체인에서 dApp 및 보다 복잡한 작업을 생성할 수 있습니다.

3. 합의 알고리즘:

- 비트코인: 비트코인은 작업 증명(PoW) 합의 알고리즘을 사용합니다. 채굴자들은 트랜잭션을 검증하고 블록체인에 추가하기 위해 복잡한 수학 퍼즐을 풀기 위해 경쟁합니다. 이 프로세스에는 상당한 양의 계산 능력이 필요하므로 높은 에너지 소비가 발생합니다.
- 이더리움: 이더리움은 현재 비트코인과 유사한 PoW 알고리즘을 사용하지만 이더리움 2.0이라는 지분 증명(PoS) 합의 알고리즘으로 전환하는 과정에 있습니다. PoS는 더 에너지 효율적이며 계산 능력에 의존하는 대신 검증자가 검증 프로세스에 참여하기 위해 Ether를 스테이킹해야 합니다.

4. 속도 및 확장성:

- 비트코인: 비트코인의 트랜잭션 속도는 평균 블록 시간이 약 10분으로 상대적으로 느립니다. 네트워크는 초당 약 7개의 트랜잭션(tps)을 처리할 수 있습니다.
- 이더리움: 이더리움은 블록 시간이 더 빠르고 평균 약 15초이며 약 30tps를 처리할 수 있습니다. 그러나 이더리움의 네트워크는 증가된 기능과 dApp의 인기로 인해 여전히 정체될 수 있으며 이로 인해 지연과 높은 거래 수수료가 발생합니다.

5. 개발 커뮤니티:

- 비트코인: 비트코인의 주요 초점은 안전하고 신뢰할 수 있는 디지털 통화로서의 지위를 유지하는 것입니다. 개발 커뮤니티는 주로 네트워크의 안정성, 보안 및 확장성을 개선하는 데 집중합니다.
- 이더리움(Ethereum): 이더리움에는 새로운 dApp 작업, 플랫폼 기능 개선, 이더리움 2.0으로의 전환 등 활발한 대규모 개발 커뮤니티가 있습니다.
