import { faker } from "@faker-js/faker";
import { database } from "./db";
import * as schema from "./schema/schema";

async function main() {
    const users = await Promise.all(
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
}

main().catch(console.error);
