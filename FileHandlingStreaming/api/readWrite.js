const fs = require('fs');

fs.stat("./public/file.txt", (error, stats) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Stats object for: file.txt");
        console.log(stats);

        // Using methods of the Stats object 
        console.log("Path is file:", stats.isFile());
        console.log("Path is directory:", stats.isDirectory());
    }
});

//synchronous filesystem call:
const readFileInSync= fs.readFileSync("./public/sample.txt", "utf8")
console.log('Synchronous file read: '+readFileInSync);

fs.appendFileSync("./public/file.txt", `Today's Date is: ${new Date().getDate().toLocaleString()}\n`);

