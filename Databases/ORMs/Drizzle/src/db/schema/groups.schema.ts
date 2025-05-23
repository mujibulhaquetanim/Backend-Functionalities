import { index, integer, pgTable, primaryKey, serial, text } from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { relations } from "drizzle-orm";

export const groups = pgTable('groups', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
})


//join table, here instead of primary key, we use composite key because one user can be in multiple groups.
//many to many relationship, we need to create a join table between users and groups
export const userToGroups = pgTable('usersToGroups', {
    userId: integer('userId').references(()=> users.id, {onDelete: 'cascade'}),
    groupId: integer('groupId').references(()=> groups.id, {onDelete: 'cascade'})
},

//this is for composite primary key signature is now deprecated
// (table)=>({
//     pk: primaryKey({columns: [table.userId, table.groupId]}),
//     userIdIndex: index('userIdIndex').on(table.userId)
// })

(table)=>[{
    pk: primaryKey({columns: [table.userId, table.groupId]}),
    userIdIndex: index('userIdIndex').on(table.userId)},
]
)

export const usersToGroupRelations = relations(userToGroups, ({one})=>({
    user: one(users, {
        fields: [userToGroups.userId],
        references: [users.id]
    }),
    group: one(groups, {
        fields: [userToGroups.groupId],
        references: [groups.id]
    })
}))