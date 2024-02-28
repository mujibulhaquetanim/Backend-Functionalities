const cluster = require('node:cluster');
const os = require('os');

const numCPUs = os.cpus().length;
console.log('numCPUs: ', numCPUs);

if(cluster.isPrimary){
    for(let i=0;i<numCPUs;i++){
        cluster.fork();
    }
}else{
    console.log(process.pid);
}