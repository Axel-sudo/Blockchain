const {Blockchain, Transaction} = require('./blockchain');
 

 
 
 let blockChain = new Blockchain();
 blockChain.createTransaction(new Transaction('address1', 'address2', 100));
 blockChain.createTransaction(new Transaction('address2', 'address1', (50)));

 console.log('\n Starting the miner...');
 blockChain.minePendingTransactions ('axel-address');

 console.log('\nBalance of axel is', blockChain.getBalanceOfAddress('axel-address'));
 
 console.log('\n Starting the miner again...');
 blockChain.minePendingTransactions ('axel-address');
 
 console.log('\nBalance of axel is', blockChain.getBalanceOfAddress('axel-address'));