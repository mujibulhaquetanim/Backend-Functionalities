import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 32 }).notNull(),
  lastName: varchar("last_name", { length: 32 }).notNull(),
  email: varchar("email", { length: 32 }).notNull(),
  password: varchar("password", { length: 32 }).notNull(),
});

