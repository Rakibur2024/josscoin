const EC = require('elliptic').ec;
var ec = new EC('secp256k1');

// Generate keys
var key = ec.genKeyPair();

const privateKey = key.getPrivate('hex'); // sign
const publicKey = key.getPublic('hex'); // wallet address

console.log(privateKey, publicKey);