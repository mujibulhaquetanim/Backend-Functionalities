const { Redis } = require("ioredis");

//by default the instance will hit 6379 port
const client = new Redis();

module.exports = client;