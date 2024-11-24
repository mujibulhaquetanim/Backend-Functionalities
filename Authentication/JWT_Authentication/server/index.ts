import Express from 'express';
import authRouter from "./router/auth-Router";
import { connectDB } from './utils/DB';
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
});

const app = Express();

app.use(Express.json());
app.use("/api/auth", authRouter);

app.get('/', (_, res: Express.Response) => {
    res.send("api server is alive");
})
connectDB().then(() => {
    app.on("error", (err) => {
        console.log(`Error: ${err}`);
    });
    app.listen(3000, () => console.log("listening on port 'http://localhost:3000'"));
});
