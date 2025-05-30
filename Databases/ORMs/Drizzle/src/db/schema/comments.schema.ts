import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { posts } from "./posts.schema";
import { relations } from "drizzle-orm";

export const comments = pgTable('comments',{
    id: serial("id").primaryKey(),
    text: text("text").notNull(),
    authorId: integer("authorId").references(()=> users.id, {onDelete: 'cascade'}),
    postId: integer('postId').references(()=> posts.id, {onDelete: 'cascade'})
})

export const commentRelations = relations(comments, ({one})=>({
    author: one(users, {
        fields: [comments.authorId],
        references: [users.id]
    }),
    post: one(posts, {
        fields: [comments.postId],
        references: [posts.id]
    })
}))