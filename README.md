# ProofOfWork Miner

## Overview
The ProofOfWork Miner is a simple implementation of a blockchain miner that simulates the process of receiving transactions, adding them to a mempool, and including them in a block through mining based on a proof-of-work system. This project is designed for educational purposes to demonstrate the basic mechanics of blockchain transaction handling and block mining.

## Features

### Transaction Handling
- **Mempool Management**: Transactions received from the network are added to the miner's mempool, a temporary storage for unconfirmed transactions.
- **Dynamic Transaction Selection**: The miner selects transactions from the mempool when a block is ready to be mined. Currently, it handles up to 10 transactions per block due to the `MAX_TRANSACTIONS` limit.

### Mining Process
- **Block Construction**: Each new block created by the miner includes a set of transactions from the mempool, a unique block ID, and a nonce.
- **Proof of Work**: Implements a basic proof-of-work mechanism where the miner calculates the hash of the block and compares it to a preset target difficulty, `TARGET_DIFFICULTY`. The nonce is incremented until the block hash is below the target difficulty.
- **Block Addition**: Once a valid block hash is found that meets the difficulty criteria, the block is added to the blockchain maintained by the miner.

## Usage
- **Adding Transactions**: Transactions can be submitted to the miner, where they are initially stored in the mempool.
- **Mining a Block**: The mining process can be initiated, which will pull transactions from the mempool, create a new block, and attempt to mine it according to the proof of work algorithm.

## Configuration
- `TARGET_DIFFICULTY`: Sets the difficulty of the proof-of-work challenge, ensuring that mining requires computational work.
- `MAX_TRANSACTIONS`: Limits the number of transactions that can be included in a single block.

## Modules
The system is modular, with the main functionalities encapsulated in the mining and transaction handling modules. This setup facilitates easy updates and modifications to individual components.

## Conclusion
The ProofOfWork Miner provides a basic yet comprehensive demonstration of how mining and transactions are handled in a blockchain network. It is ideal for educational purposes, helping users understand the foundational concepts of blockchain technology.

## License
This project is open source 

