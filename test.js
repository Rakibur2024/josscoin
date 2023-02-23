const {Block, Transactions, Blockchain} = require("./index");

const EC = require('elliptic').ec;
var ec = new EC('secp256k1');

// Generate keys
const key1 = ec.genKeyPair();
const privateKey1 = key1.getPrivate('hex'); // sign
const walletNumber1 = key1.getPublic('hex'); // wallet address

const key2 = ec.genKeyPair();
const privateKey2 = key2.getPrivate('hex'); // sign
const walletNumber2 = key2.getPublic('hex'); // wallet address

const josscoin = new Blockchain();
const tx1 = new Transactions(walletNumber1, walletNumber2, 100);
tx1.signTransaction(key1);
josscoin.addTransaction(tx1);

josscoin.minePendingTransactions(walletNumber1);

console.log(josscoin.getBalanceOfAddress(walletNumber1));
console.log(josscoin.getBalanceOfAddress(walletNumber2));

const tx2 = new Transactions(walletNumber2, walletNumber1, 50);
tx2.signTransaction(key2);
josscoin.addTransaction(tx2);

josscoin.minePendingTransactions(walletNumber1);

console.log(josscoin.getBalanceOfAddress(walletNumber1));
console.log(josscoin.getBalanceOfAddress(walletNumber2));

// josscoin.chain[1].transactions[1] = 'HACKED';
// console.log(josscoin.isBlockchainValid());


// from index.js
// const josscoin = new Blockchain();
// josscoin.addTransaction(new Transactions("address1","address2",100));
// josscoin.addTransaction(new Transactions("address2","address1",50));

// josscoin.minePendingTransactions("my-address");
// console.log(josscoin);
// console.log(josscoin.getBalanceOfAddress("address1"));
// console.log(josscoin.getBalanceOfAddress("address2"));
// console.log(josscoin.getBalanceOfAddress("my-address"));

// josscoin.minePendingTransactions("my-address");
// console.log(josscoin.getBalanceOfAddress("my-address"));
