import { eq } from "drizzle-orm"
import { database } from "./db/db"
import { posts } from "./db/schema/posts.schema"
import { users } from "./db/schema/users.schema"
// import * as schema from "./db/schema/schema"

// const users = database.select().from(schema.users)
// const post = database.query.posts.findMany({
//     // find authorId equal to 17
//     // where: (posts, {eq})=> eq(posts.authorId, 48),
//     limit: 2,
//     with: {
//         author: {
//             with:{
//                 usersToGroups: {
//                     with: {
//                         group: true
//                     }
//                 }
//             }
//         }
//     }
// })
// post.then(data => console.log(data)).catch(error => console.error(error));

// const updatePost = database.update(posts).set({
//     title: "Updated Title"
// }).where(eq(posts.id, 48))
// updatePost.then(data => console.log(data)).catch(error => console.error(error));


// const deletePost = database.delete(posts).where(eq(posts.id, 1))
// deletePost.then(data => console.log(data)).catch(error => console.error(error)); 

// const user = database.query.users.findMany({
//     limit: 1,
//     with: {
//         usersToGroups: true
//     }
// })

// user.then(data => console.log(data)).catch(error => console.error(error));

// const beforeDeleteUser = database.select().from(users).where(eq(users.id, 10))
// beforeDeleteUser.then(data => console.log(`before: ${data}`)).catch(error => console.error(error));

// const deleteUser = database.delete(users).where(eq(users.id, 10))
// deleteUser.then(data => console.log(data)).catch(error => console.error(error));

// const afterDeleteUser = database.select().from(users).where(eq(users.id, 10))
// afterDeleteUser.then(data => console.log(`after: ${data}`)).catch(error => console.error(error));

const deleteUser = database
  .delete(users)
  .where(eq(users.id, 18))
  .returning();

deleteUser.then(data =>{
    if(data.length>0){
        console.log(`deleted ${JSON.stringify(data[0],null,2)}`);
    }else{
        console.log(`no user found`);
    }
}).catch(error => console.error(error));

