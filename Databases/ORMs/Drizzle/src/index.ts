import { database } from "./db/db"
// import * as schema from "./db/schema/schema"

// const users = database.select().from(schema.users)
const post = database.query.posts.findMany({
    // find authorId equal to 17
    where: (posts, {eq})=> eq(posts.authorId, 17),
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

post.then(data => console.log(data)).catch(error => console.error(error));