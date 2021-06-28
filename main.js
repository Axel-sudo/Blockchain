const SHA256 = require('crypto-js/sha256');

//Definition d'un bloc
class Block{
     constructor(index, timestamp, data, previousHash = ''){
         this.index = index;
         this.timestamp = timestamp;
         this.data = data;
         this.previousHash = previousHash;
         this.hash = this.calculateHash();
         this.nonce = 0;
     }

     calculateHash(){
         return SHA256(this.index + this.previousHash +this.timestamp + JSON.stringify(this.data) + this.nonce).toString();

     }

     mineBlock(difficulty){
         while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
             this.nonce++;
             this.hash = this.calculateHash();
         }
         console.log("Block mined" +this.hash);
     }
 }
//Fonctionnement de la chaîne de blocs
 class Blockchain{
     constructor(){
         this.chain = [this.createGenesisBlock()];
         this.difficulty = 4;

     }

   createGenesisBlock(){
       return new Block(0, "01/01/2021", "Genesis block", "0");
   }

   getLatestBlock(){
       return this.chain[this.chain.length - 1];
   }

   addBlock(newBlock){
       newBlock.previousHash = this.getLatestBlock().hash;
       newBlock.mineBlock(this.difficulty);
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

 console.log('Mining block1...');
 blockChain.addBlock(new Block(1, "28/06/2021", { amount: 4}));

 console.log('Mining block2...');
 blockChain.addBlock(new Block(2, "29/06/2021", { amount: 10}));
 
 