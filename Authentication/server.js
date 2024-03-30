import Express from "express";
import authRouter from "./server/router/auth-router"

const app = Express();

app.use("/api/auth",authRouter);

app.listen(3000, () => console.log("listening on port 'http://localhost:3000'"));