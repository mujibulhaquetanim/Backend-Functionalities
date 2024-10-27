import { initTRPC } from "@trpc/server";

//single instance of trpc and it should one single time in the whole app
//it is like a singleton like express server which is called only once
export const t = initTRPC.create()