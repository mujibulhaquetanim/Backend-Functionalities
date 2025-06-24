const cluster = require('node:cluster');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`Primary process ${process.pid} is running`);
    console.log(`Forking ${numCPUs} workers...\n`);

    for (let i = 0; i < numCPUs; i++) {
        //cluster.fork(), it spawns a new Node.js worker process.
        cluster.fork();
    }

    // Event listener for when a worker exits. it will restart the worker if needed or monitor the cluster
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited (code: ${code}, signal: ${signal})`);
        // Optionally, restart the worker
        // cluster.fork();
    });
} else {
    console.log(`Worker ${process.pid} started`);
}
