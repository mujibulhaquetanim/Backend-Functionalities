const express = require('express');
const { normalRead } = require('./fileRead');

const app = express();
const PORT = 8000;

app.get('/',(req,res)=>{
    res.send("try /normal");
});

app.get('/normal',normalRead);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});