const express = require('express');
const app = express();

const PORT = 8000;
app.get('/', (req, res) =>{
    res.send('Server is Ready')
})

app.listen(PORT,()=>{
    console.log(`server at http://localhost:${PORT}`);
})