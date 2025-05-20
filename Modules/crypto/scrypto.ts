import crypto from 'node:crypto'

// scrypto is better than crypto because it is more secure. normalize() is used to remove any special characters from the password and convert it to a string, it is useful when you want to store a password in a database

const scrypto = crypto.scrypt("password".normalize(), "salt", 64, (err, derivedKey) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(derivedKey.toString('hex'));
})

// comparing scrypts
const scrypto1 = crypto.scryptSync("password".normalize(), "salt", 64);
const scrypto2 = crypto.scryptSync("password".normalize(), "salt", 64);
console.log(scrypto1.toString('hex') === scrypto2.toString('hex')); //returns true

// instead of using 'salt' we can use a random string to make it more secure
const randomString = crypto.randomBytes(16).toString('hex');
const scrypto3 = crypto.scryptSync("password".normalize(), randomString.normalize(), 64);
const scrypto4 = crypto.scryptSync("password".normalize(), randomString.normalize(), 64);
console.log(scrypto3.toString('hex') === scrypto4.toString('hex')); //returns true