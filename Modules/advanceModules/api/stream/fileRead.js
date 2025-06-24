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
    stream.pipe(res);
    // stream.on("data", (chunk) => res.write(chunk));
    // stream.on("end", () => res.end());
})

// Compresses and writes the file using streams
const gzip = (_, res) => {
    // the flow is, readStream, reads the chunks of data -> gzipStream, compresses the data on the fly -> writeStream, writes the compressed data immediately to the disk path.

    // fs.createReadStream("./public/file.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream(GZIPPED_PATH)));

    const readStream = fs.createReadStream(FILE_PATH);
    const zipStream = fs.createWriteStream(GZIPPED_PATH);
    const gzipper = zlib.createGzip();

    readStream
        .on("error", (err) => {
            console.error("Read error:", err);
            res.statusCode = 500;
            res.end("Failed to read input file.");
        })
        .pipe(gzipper)
        .on("error", (err) => {
            console.error("Gzip error:", err);
            res.statusCode = 500;
            res.end("Compression failed.");
        })
        .pipe(zipStream)
        .on("finish", () => {
            res.end("Gzip completed: 'file.zip'");
        });
};


module.exports = { normalRead, stream, gzip };