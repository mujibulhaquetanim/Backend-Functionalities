import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: varchar("fname", {length: 32}).notNull(),
  lastName: varchar("lname", {length: 32}).notNull(),
  email: varchar("email", {length: 32}).notNull(),
  password: varchar("password", {length: 32}).notNull(),
})
