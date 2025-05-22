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

// timing based attacks can be used to break scrypts, to mitigate this, we can use timingSafeEqual() to compare the hashes

// asynchronous version of scrypto
const scrypto7 = new Promise<Buffer>((resolve, reject) => {
    crypto.scrypt("password".normalize(), randomString.normalize(), 64, (err, derivedKey) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(derivedKey);
    });
});

const scrypto8 = new Promise<Buffer>((resolve, reject) => {
    crypto.scrypt("password".normalize(), randomString.normalize(), 64, (err, derivedKey) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(derivedKey);
    });
});

// Wait for both promises to resolve
Promise.all([scrypto7, scrypto8])
    .then(([derivedKey1, derivedKey2]) => {
        console.log(crypto.timingSafeEqual(
            Buffer.from(derivedKey1), 
            Buffer.from(derivedKey2)
        )); // Should return true
    })
    .catch(error => console.error("Error:", error));

// synchronous version of scrypto
const scrypto5 = crypto.scryptSync("password".normalize(), randomString.normalize(), 64);
const scrypto6 = crypto.scryptSync("password".normalize(), randomString.normalize(), 64);
console.log(crypto.timingSafeEqual(Buffer.from(scrypto5,), Buffer.from(scrypto6))); //returns true