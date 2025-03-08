import { integer, pgTable, primaryKey, serial, text } from "drizzle-orm/pg-core";

export const groups = pgTable('groups', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
})
