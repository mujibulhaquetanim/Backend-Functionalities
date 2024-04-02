import mongoose from "mongoose";
import { DB_NAME } from "./databaseName.js";

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Connected to Database");
    } catch (error) {
        console.error("Error connecting to the database: ", error);
        process.exit(1);
    }
}

export { connectDB};