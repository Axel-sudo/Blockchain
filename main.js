const {Blockchain, Transaction} = require('./blockchain');
const EC = require ('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate(' feb866decbfc6e7f2085d78a8b911ffbb6d1c239cb2fa4b29b82a523d0ab4425');
const myWalletAddress = myKey.getPublic('hex');
 

 
let blockChain = new Blockchain();

 const tx1 = new Transaction(myWalletAddress, 'public key gooes here', 10);
 tx1.signTransaction(myKey);
 blockChain.addTransaction(tx1);
 

 console.log('\n Starting the miner...');
 blockChain.minePendingTransactions(myWalletAddress);

 console.log('\nBalance of axel is', blockChain.getBalanceOfAddress(myWalletAddress));