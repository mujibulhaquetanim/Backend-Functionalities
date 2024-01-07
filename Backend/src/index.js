import express from "express";
//const fetch= require(src/api/fetch)
const app = express();

const port = process.env.PORT || 8000;

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