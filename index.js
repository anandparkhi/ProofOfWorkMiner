const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.unshift(transaction);
}
//blocks.nonce = 0;
function mine() {
    // TODO: mine a block

    const newBlock = {id: blocks.length}; 
    const transactions = [];
    for(let i=0;i<mempool.length;i++) { 
        if(transactions.length<10){
         let removed = mempool.splice(i,1);
         transactions.push(removed);
         i--;
        }
    }
    newBlock.transactions = transactions;
    newBlock.nonce = 0;
    let flag = false;
    while (!flag){
    const blockstring = JSON.stringify(newBlock);
    const blockhash = SHA256(blockstring);
    newBlock.hash = blockhash; 
    flag = (BigInt(`0x${newBlock.hash}`)< TARGET_DIFFICULTY) //{
    if (flag) {blocks.push(newBlock);}
    else {newBlock.nonce++;}
        }

}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};
