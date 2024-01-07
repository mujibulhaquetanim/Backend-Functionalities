import express from "express";
import dotenv from "dotenv"
//const fetch= require(src/api/fetch)
const app = express();
dotenv.config({
    path: './env'
})
const port = process.env.PORT;

app.get('/', (req,res)=>{
    res.send('Server is Ready')
});
// app.get('/api/fetch', (req,res)=>{
//     let data= fetch()
//    return res.send(data)
// });

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});