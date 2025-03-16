import { relations } from "drizzle-orm";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
// used individual tables instead of importing from * as schema to mitigate circular dependencies.
import { comments } from "./comments.schema";
import { posts } from "./posts.schema";
import { profileInfo } from "./profileInfo.schema";  
import { userToGroups } from "./groups.schema";  

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 32 }).notNull(),
  lastName: varchar("last_name", { length: 32 }).notNull(),
  email: varchar("email", { length: 32 }).notNull(),
  password: varchar("password", { length: 32 }).notNull(),
});

// Define relationships
export const userRelations = relations(users, ({ one, many }) => ({
  comments: many(comments),
  posts: many(posts),
  profile: one(profileInfo),
  usersToGroups: many(userToGroups),
}));

/*
users.schema.ts imports posts.schema.ts
posts.schema.ts imports users.schema.ts
This creates a loop where both files are waiting for each other to be fully loaded, but neither can resolve correctly.

users.schema.ts  --->  posts.schema.ts
      ^                      |
      |                      v
      -----------------> (loop back)
*/