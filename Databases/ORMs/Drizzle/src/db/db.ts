import postgres from "postgres";
import {drizzle} from "drizzle-orm/postgres-js";

export const connection = postgres(process.env.DATABASE_URL!);

export const database = drizzle(connection);