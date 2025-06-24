const fs = require("fs");
const zlib = require('zlib');
const path = require("path");

const FILE_PATH = path.join(__dirname, "./public/file.txt");
const GZIPPED_PATH = path.join(__dirname, "./public/file.zip");

const normalRead = ((_, res) => {
    fs.readFile(FILE_PATH, (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end(`Error reading file: ${err}`);
        }
        res.end(data);
    })
});

const stream = ((_, res) => {
    const stream = fs.createReadStream("./public/file.txt", "utf-8");
    stream.on("error", (err) => {
        console.error(err);
        res.statusCode = 500;
        res.end(`Error reading file: ${err}`);
    })
    stream.on("data", (chunk) => res.write(chunk));
    stream.on("end", () => res.end());
})

const gzip = ((_, res) => {
    fs.createReadStream("./public/file.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream(GZIPPED_PATH)));
    res.end("gzip completed with the name of 'file.zip'");
})



module.exports = { normalRead, stream, gzip };