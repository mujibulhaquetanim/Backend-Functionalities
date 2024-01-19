require("dotenv").config();
const express = require("express");
const app=express();
const movielist =require("./routes/MovieList");

const PORT = process.env.PORT || 8000;
app.get("/",(req,res)=>{
    res.send("api server is alive");
});

app.use("/api/movielist",movielist);

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