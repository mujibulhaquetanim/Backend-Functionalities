import crypto from 'node:crypto';

console.log(crypto.randomBytes(8).toString('hex')); // generate random bytes in buffer and convert to hex

// creating hash
const hash = crypto.createHash('sha256');
console.log(hash) //returns hash object

// updating hash
const hashUpdate =hash.update('Sabila Nur');
console.log(hashUpdate) //returns hash object of provided data string

// finalizing hash
const hashFinal = hashUpdate.digest('hex'); // digest returns buffer of hash in hex
console.log(hashFinal) //returns hash in hex

// comparing hashes
const hash1 = crypto.createHash('sha256').update('Sabila Nur').digest('hex');
const hash2 = crypto.createHash('sha256').update('Sabila Nur').digest('hex');
console.log(hash1 === hash2); //returns true