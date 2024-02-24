const express = require('express');
const { normalRead } = require('./fileRead');
const status= require("express-status-monitor");

const app = express();
const PORT = 8000;

app.use(status());
app.get('/',(req,res)=>{
    res.send("try /normal");
});

app.get('/normal',normalRead);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});