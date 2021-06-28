const SHA256 = require('crypto-js/sha256');


class Block{
     constructor(index, timestamp, data, previousHash = ''){
         this.index = index;
         this.timestamp = timestamp;
         this.data = data;
         this.previousHash = previousHash;
         this.hash = this.calculateHash();
     }

     calculateHash(){
         return SHA256(this.index + this.previousHash +this.timestamp + JSON.stringify(this.data)).toString();

     }
 }

 class Blockchain{
     constructor(){
         this.chain = [this.createGenesisBlock()];

     }

   createGenesisBlock(){
       return new Block(0, "01/01/2021", "Genesis block", "0");
   }

   getLatestBlock(){
       return this.chain[this.chain.length - 1];
   }

   addBlock(newBlock){
       newBlock.previousHash = this.getLatestBlock().hash;
       newBlock.hash = newBlock.calculateHash();
       this.chain.push(newBlock);
   }

   isChainValid(){
       for(let i = 1; i < this.chain.lengh; i++){
           const currentBlock = this.chain[i];
           const previousBlock = this.chain[i - 1];

           if(currentBlock.hash !== currentBlock.calculateHash()){
               return false;

           }
           
           if(currentBlock.hash !== currentBlock.calculateHash()){
            return false;

        }
     }   
         return true;

   }

 }

 
 
 
 
 
 let blockChain = new Blockchain();
 blockChain.addBlock(new Block(1, "28/06/2021", { amount: 4}));
 blockChain.addBlock(new Block(2, "29/06/2021", { amount: 10}));
 
 console.log('Is blockchain valid?' + blockChain.isChainValid());
 
 
 //console.log(JSON.stringify(blockChain, null, 4));