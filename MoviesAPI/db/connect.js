require("dotenv").config();
const mongoose =require("mongoose");;

const connectDB=()=>{
    console.log('connnect DB');
    return mongoose.connect(process.env.MONGODB_URI);
    };

module.exports = connectDB;