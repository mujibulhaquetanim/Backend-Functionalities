import crypto from 'node:crypto';

console.log(crypto.randomBytes(8).toString('hex')); // generate random bytes in buffer and convert to hex