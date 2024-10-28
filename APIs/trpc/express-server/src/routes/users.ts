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
    updateUser: userProcedure.input(z.object({name: z.string()})).output(z.object({id: z.string(), name: z.string()})).mutation((req)=>{
        console.log(`
            updated user ${req.input.userId} with name: ${req.input.name}
            `);
            return {
                id: req.input.userId, //required if not then it will throw an error
                name: req.input.name, //required if not then it will throw an error
                password: "password" //it won't be stored as it is not in the output schema, which is good for security.
            }
    })
        
    })