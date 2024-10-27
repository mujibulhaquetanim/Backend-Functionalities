import { get } from "http";
import {t} from "../../trpc";

export const UserRouter = t.router({
    getUser: t.procedure.query(()=>{
        return {
            id: 1,
            name: "Emma Watson"
        }
    })
        
    })