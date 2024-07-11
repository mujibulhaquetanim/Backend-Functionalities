const Worker = require('worker_threads');

function worker(_,res) {
    const worker = new Worker("worker.js")
    worker.on('message', (result) => {
        res.send(`result from Worker thread is: ${result}`);
    })
    worker.on('error', (err) => {
        res.send(err);
    })

}
exports = { worker }