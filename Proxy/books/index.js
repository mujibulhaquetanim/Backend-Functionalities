const express = require('express');

const app = express();

app.get('/',(_,res)=>{
    res.send('Response from Books');
})

app.listen(3001,()=>{
    console.log('listening on http://127.0.0.1:3001');
})