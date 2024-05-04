import express from "express";
import dotenv from "dotenv"
const app = express();

dotenv.config({
    path: './env'
})
const port = process.env.PORT;

app.get('/', (req,res)=>{
    res.send('Server is Ready')
});


app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});