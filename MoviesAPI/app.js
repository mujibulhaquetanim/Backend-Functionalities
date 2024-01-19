require("dotenv").config();
const express = require("express");
const app=express();
const movielist =require("./routes/MovieList");
const connectDB=require("./db/connect");

const PORT = process.env.PORT || 8000;
app.get("/",(req,res)=>{
    res.send("api server is alive");
});

app.use("/api/movielist",movielist);

 const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT},\nurl: localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
 };
 start();