const express = require('express');
const data = require('./db.json');
const app = express();
const fs = require('fs');
const { error } = require('console');

const newData = [{"id":"06",
"name":"book6",
"author":"author6",
"price":600
}]
app.get('/', (_, res) => {
    res.send('hello to the mock server');
})

app.get('/data', (_, res) => {
    res.send(data);

    fs.writeFileSync('db.json',JSON.stringify(newData),(error)=>{
        if(error) throw error;
        console.log("replaced older data with 'newData'");
    });
});


app.listen(3000, () => {
    console.log('listening on port 3000');
})