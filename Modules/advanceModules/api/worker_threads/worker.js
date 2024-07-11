const parentPort = require('worker_threads').parentPort;

result = 0;
for(let i = 0; i < 1000000; i++) {
    result += i;
}

parentPort.postMessage(result);