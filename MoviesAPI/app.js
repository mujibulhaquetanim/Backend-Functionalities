const express = require("express");
const app=express();

const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("api server is alive");
});

 const start = async()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
 };
 start();