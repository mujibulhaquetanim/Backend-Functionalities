const cluster = require('cluster');
const os = require('os');

const numCPUs = os.cpus().length;
console.log('numCPUs: ', numCPUs);