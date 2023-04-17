# Block-Chain

Target

1. Simple & Clear Code write
2. end-to end data
3. Data transition

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
