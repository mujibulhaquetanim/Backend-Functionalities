import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { relations } from "drizzle-orm";
import { comments } from "./comments.schema";

//used notNull to maintain data integrity and ensure reliable application behavior. for example: If authorId is NULL, it means the post may not have an associated author. This could result in "orphaned" posts with no clear ownership.
export const posts = pgTable('posts',{
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    authorId: integer("authorId").notNull().references(()=> users.id, {onDelete: 'cascade'})
})

export const postRelations= relations(posts, ({one, many})=>({
    author: one(users,{
        fields: [posts.authorId],
        references: [users.id]
    }),
    comments: many(comments)
}))