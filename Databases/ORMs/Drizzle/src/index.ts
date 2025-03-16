import { eq } from "drizzle-orm"
import { database } from "./db/db"
import { posts } from "./db/schema/posts.schema"
// import * as schema from "./db/schema/schema"

// const users = database.select().from(schema.users)
const post = database.query.posts.findMany({
    // find authorId equal to 17
    where: (posts, {eq})=> eq(posts.authorId, 48),
    limit: 2,
    with: {
        author: {
            with:{
                usersToGroups: {
                    with: {
                        group: true
                    }
                }
            }
        }
    }
})

const updatePost = database.update(posts).set({
    title: "Updated Title"
}).where(eq(posts.id, 48))

updatePost.then(data => console.log(data)).catch(error => console.error(error));

post.then(data => console.log(data)).catch(error => console.error(error));