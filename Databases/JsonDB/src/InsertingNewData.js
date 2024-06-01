const fs = require('fs');

const newData = [{
    "id": 5,
    "title": "The Lord of the Rings",
    "author": "J. R. R. Tolkien",
    "year": 1954
}]

const InsertingNewData= fs.writeFile('db.json',JSON.stringify(newData),(error)=>{
    if(error) console.log('');
    console.log("replaced older data with 'newData'");
});