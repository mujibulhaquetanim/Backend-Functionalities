const { exec } = require('child_process');

const exe = (_, res) => {
    exec('dir', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        res.send(`${stderr}`);
        console.log(`stdout: ${stdout}`);
    });


}
console.log(exe)

module.exports = { exe };