import { faker } from "@faker-js/faker";
import { database } from "./db";
import * as schema from "./schema/schema";

async function main() {
    //userId will contain returned id of each inserted user which is 50 times.
    const userIds = await Promise.all(
        Array(50).fill("").map(async () => {
            const user = await database.insert(schema.users).values({
                email: faker.internet.email(),
                firstName: faker.person.firstName(),  
                lastName: faker.person.lastName(),     
                password: faker.internet.password()    
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
}

main().catch(console.error);
