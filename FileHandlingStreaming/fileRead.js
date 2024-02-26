const fs = require("fs");
const zlib = require('zlib');

const normalRead = ((_, res) => {
    fs.readFile("./public/file.txt", (err, data) => {
        res.end(data);
    })
});

const stream = ((_, res) => {
    const stream = fs.createReadStream("./public/file.txt", "utf-8");
    stream.on("data", (chunk) => res.write(chunk));
    stream.on("end", () => res.end());
})

const gzip = ((_, res) => {
    fs.createReadStream("./public/file.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./public/file.zip")));
    res.end("gzip completed with the name of 'file.zip'");
})

module.exports = { normalRead, stream, gzip };