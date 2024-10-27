import express, { Request, Response } from "express";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import { AppRouter } from "./routes";

const app = express();
const t = initTRPC.create();

app.use(cors({
    origin: "http://localhost:5173",
}))
app.use('/trpc', createExpressMiddleware({router: AppRouter}))

app.listen(3000, () => {
    console.log(`server at http://localhost:3000`);
})

export type AppRouter = typeof AppRouter