import {t} from "../../trpc";
import { z } from "zod";

const userProcedure = t.procedure.input(z.object({userId: z.string()}));

export const UserRouter = t.router({
    get: userProcedure.query(({input})=>{
        return {
            id: input.userId,
            name: "Emma Watson"
        }
    }),
    updateUser: userProcedure.input(z.object({name: z.string()})).mutation((req)=>{
        console.log(`
            updated user ${req.input.userId} with name: ${req.input.name}
            `);
            return {
                id: req.input.userId,
                name: req.input.name
            }
    })
        
    })