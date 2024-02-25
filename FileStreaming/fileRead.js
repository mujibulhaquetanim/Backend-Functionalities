const fs = require("fs");

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

module.exports = { normalRead, stream };