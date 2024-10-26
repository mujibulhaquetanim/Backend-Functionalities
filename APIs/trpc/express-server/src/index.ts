import express, { Request, Response } from "express";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const app = express();
const t = initTRPC.create();

const AppRouter = t.router({
    hello: t.procedure.query(()=> "hello from trpc server")
})

app.use('/trpc', createExpressMiddleware({router: AppRouter}))

app.listen(3000, () => {
    console.log(`server at http://localhost:3000`);
})