import {t} from "../../trpc";
import { UserRouter } from "./users";

export const AppRouter = t.router({
    hello: t.procedure.query(()=> "hello from trpc server"),
    logToServer: t.procedure.input((v)=>{
        if(typeof v === "string") return v;
        throw new Error("invalid input");
    }).mutation(req=>{
        console.log(req.input);
        return req.input
    }),
    users: UserRouter,
})

export const mergedRouters = t.mergeRouters(AppRouter, UserRouter)