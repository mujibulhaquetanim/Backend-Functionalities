const { exec, execFile } = require('child_process');

const exe = (_, res) => {
    exec('ls', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        res.end(`${stderr}`);
        console.log(`stdout: ${stdout}`);
    });
}

const exeFile = (_, res) =>{
    execFile('../public/script.sh', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        res.end(`${stderr}`);
        console.log(`stdout: ${stdout}`);
})
}


    console.log(exe)

module.exports = { exe, exeFile }