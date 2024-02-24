const fs = require("fs");

const normalRead = ((_,res) => {
    fs.readFile("./public/file.txt", (err, data) => {
        res.end(data);
    })
});

module.exports = { normalRead }