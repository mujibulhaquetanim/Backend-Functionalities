import { faker } from "@faker-js/faker";
import { database } from "./db";
import * as schema from "./schema/schema";

async function main() {
    //userId will contain returned id of each inserted user which is 50 times.
    const userIds = await Promise.all(
        Array(50).fill("").map(async () => {
            const user = await database.insert(schema.users).values({
                email: faker.internet.email().slice(0, 32),
                firstName: faker.person.firstName().slice(0, 32),
                lastName: faker.person.lastName().slice(0, 32),
                password: faker.internet.password().slice(0, 32)    
            }).returning(); // returning() returns the inserted row in the db
            return user[0].id; // return the id of the inserted user
        })
    );

    const postIds = await Promise.all(
        Array(50).fill("").map(async ()=>{
            const post= await database.insert(schema.posts).values({
                content: faker.lorem.paragraph(),
                title: faker.lorem.sentence(),
                authorId: faker.helpers.arrayElement(userIds) //faker.helpers will randomly select one of the userIds.
            }).returning();
            return post[0].id
        })
    )

    //didn't use any variable name as comment won't be used in any of the created schemas.
    await Promise.all(
        Array(50).fill("").map(async ()=>{
            const comment = await database.insert(schema.comments).values({
                text: faker.lorem.paragraph(),
                authorId: faker.helpers.arrayElement(userIds),
                postId: faker.helpers.arrayElement(postIds)
            }).returning();
            return comment[0].id // it is not required though as it is not been using any of the schemas.
        })
    )

    const insertedGroups= await database.insert(schema.groups).values([
        {
            name: "Group 1"
        },
        {
            name: "Group 2"
        }
    ]).returning();

    const groupIds = insertedGroups.map((group)=> group.id);

    // loop through the userIds array and insert each userId into the groupsToUsers table.
    await Promise.all(
        userIds.map(async (userId)=>{
            return await database.insert(schema.groupsToUsers).values({
                userId,
                groupId: faker.helpers.arrayElement(groupIds)
            }).returning();
        })
    )
}

main().then(()=> {
    console.log("seeded successfully")
    return process.exit(0);
}).catch((err)=> {
    console.error(err)
    // exit the process with failure
    process.exit(0);
});
