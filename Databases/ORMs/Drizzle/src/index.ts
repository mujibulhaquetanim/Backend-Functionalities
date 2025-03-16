import { database } from "./db/db"
// import * as schema from "./db/schema/schema"

// const users = database.select().from(schema.users)
const posts = database.query.posts.findMany({
    limit: 2,
    with: {
        author: true
    }
})

posts.then(data => console.log(data)).catch(error => console.error(error));