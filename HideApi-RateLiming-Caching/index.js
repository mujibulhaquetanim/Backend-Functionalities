const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());

const PORT = 8000;

app.get('/', (req, res) =>{
    res.send('Server is Ready')
})

app.listen(PORT,()=>{
    console.log(`server at http://localhost:${PORT}`);
});