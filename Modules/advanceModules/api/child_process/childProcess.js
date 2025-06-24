const { exec, execFile } = require('child_process');

// Executes 'ls' and returns the result
const exe = (_, res) => {
    exec('ls', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error.message}`);
            res.statusCode = 500;
            return res.end(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.end(stdout);
    });
};

// Runs a shell script using execFile safely
const exeFile = (_, res) => {
    execFile('../public/script.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`execFile error: ${error.message}`);
            res.statusCode = 500;
            return res.end(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.end(stdout);
    });
};

module.exports = { exe, exeFile };
