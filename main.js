const {Blockchain,Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('9754c04316847bb99039d518d1c7c065024efb715a0487e0ec156c3842965225');
const myWalletAddress = myKey.getPublic('hex')

let savjeecoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 100);
tx1.signTransaction(myKey);
savjeecoin.addTransaction(tx1);

console.log('\n Starting the miner...');
savjeecoin.minePendingTransactions(myWalletAddress);



console.log('\n Balance of xavier is ' , savjeecoin.getBalanceOfAddress(myWalletAddress));