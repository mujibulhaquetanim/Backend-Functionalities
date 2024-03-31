import Express from 'express';
import authRouter from "./server/router/auth-Router.js";

const app = Express();

app.use("/api/auth", authRouter);

app.get('/',(req,res)=>{
    res.send("api server is alive");
})

app.listen(3000, () => console.log("listening on port 'http://localhost:3000'"));
