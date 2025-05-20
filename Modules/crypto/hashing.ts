import crypto from 'node:crypto';

console.log(crypto.randomBytes(8).toString('hex')); // generate random bytes in buffer and convert to hex

/*
- createHash() creates a hash object with the specified algorithm
- update() updates the hash object with the provided data string i.e. 'secret'
- digest() finalizes the hash and returns the hash value in the specified format i.e. hex
*/

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

//-----------------------------------------------------------------------------------------

// hmac is a type of hash used for message authentication
const hmac = crypto.createHmac('sha256', 'secret');
console.log(hmac) //returns hmac object
const hmacUpdate = hmac.update('Sabila Nur');
console.log(hmacUpdate) //returns hmac object of provided data string
const hmacFinal = hmacUpdate.digest('hex'); // digest returns buffer of hash in hex
console.log(hmacFinal) //returns hash in hex

// comparing hmacs
const hmac1 = crypto.createHmac('sha256', 'secret').update('Sabila Nur').digest('hex');
const hmac2 = crypto.createHmac('sha256', 'secret').update('Sabila Nur').digest('hex');
console.log(hmac1 === hmac2); //returns true