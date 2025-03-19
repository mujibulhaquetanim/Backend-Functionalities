import { eq, inArray } from "drizzle-orm"
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

async function getUsersPost() {
    // The combined query essentially retrieves user details for a subset of authors (limited to 2) who have posts in the posts table. This query fetches all rows from the users table where the id matches any of the authorIds returned by the subquery

    // it is returned multiple rows of authorId
    //The subquery selects distinct authorId values from the posts table by grouping the rows based on authorId. It limits the result to a maximum of 2 rows.
    // const subQuery = database.select({userId: posts.authorId}).from(posts).groupBy(posts.authorId).limit(2);

    const subQuery = await database.select({userId: posts.authorId}).from(posts).groupBy(posts.authorId).limit(2).execute();
    
    // using string literal calls toString() method to this array of objects and returns a string. The default .toString() implementation for non-primitive objects like arrays or complex query objects returns [object Object].This happens because the object isn't being serialized or explicitly converted into a human-readable format.
    console.log(`subQuery: ${subQuery}`);
    // using JSON.stringify() formats the object into a JSON string.
    //Using string literals (${}) works fine for primitive types (numbers, strings, etc.), but for complex objects like arrays or query results, direct logging or JSON serialization is necessary for meaningful and human-readable output.
    console.log(`subQuery: ${JSON.stringify(subQuery)}`);

    const userIds = (await subQuery).map((row)=> row.userId);

    // for multiple users or Array of users use inArray instead of `eq` which is for single user.
    const result = await database.select().from(users).where(inArray(users.id, userIds));
    return result;
}
getUsersPost().then(data => console.log(data)).catch(error => console.error(error));

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

// const deleteUser = database
//   .delete(users)
//   .where(eq(users.id, 18))
//   .returning();

// deleteUser.then(data =>{
//     if(data.length>0){
//         console.log(`deleted ${JSON.stringify(data[0],null,2)}`);
//     }else{
//         console.log(`no user found`);
//     }

