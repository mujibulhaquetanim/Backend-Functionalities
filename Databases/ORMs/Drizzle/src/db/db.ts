import dotenv from "dotenv";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema/schema"

//If .env is not loaded, process.env.DATABASE_URL will be undefined, and Drizzle will default to localhost:5432, causing ECONNREFUSED.
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Make sure your .env file is loaded.");
}

export const connection = postgres(process.env.DATABASE_URL, {
  // This is the default, but I like to be explicit. it is a security protection against SQL injection attacks
  ssl: 'require'
});

// Passing schema in drizzle() is a best practice as it improves type safety, query efficiency, and overall developer experience.
// multiple schemas can be passed using schema: {...schema1, ...schema2}
export const database = drizzle(connection, {schema: {...schema}, logger: true});
