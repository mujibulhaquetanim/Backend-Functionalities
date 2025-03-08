import { integer, pgTable, primaryKey, serial, text } from "drizzle-orm/pg-core";
import { users } from "./users.schema";

export const groups = pgTable('groups', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
})


//join table, here instead of primary key, we use composite key because one user can be in multiple groups.
//many to many relationship, we need to create a join table between users and groups.
export const groupsToUsers = pgTable('groupsToUsers', {
    userId: integer('userId').references(()=> users.id),
    groupId: integer('groupId').references(()=> groups.id)
},

(table)=>({
    pk: primaryKey({columns: [table.userId, table.groupId]})
})
)