import Express from 'express';
import authRouter from "./server/router/auth-Router.js";
import { connectDB } from './server/utils/DB.js';
import dotenv from "dotenv";

dotenv.config({
    path: './env'
});

const app = Express();

app.use(Express.json());
app.use("/api/auth", authRouter);

app.get('/', (_, res) => {
    res.send("api server is alive");
})
connectDB().then(() => {
    app.on("error", (err) => {
        console.log(`Error: ${err}`);
    });
    app.listen(3000, () => console.log("listening on port 'http://localhost:3000'"));
});
