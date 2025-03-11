import { faker } from "@faker-js/faker";
import { database } from "./db";
import * as schema from "./schema/schema";

async function main() {
    await Promise.all(
        Array(50).fill("").map(async (_, index) => {
            const user = await database.insert(schema.users).values({
                email: faker.internet.email(),
                firstName: faker.person.firstName(),   // Ensure correct property names
                lastName: faker.person.lastName(),     // Ensure correct property names
                password: faker.internet.password()    // Generate a random password
            }).returning();
            return user[0].id;
        })
    );
}

main().catch(console.error);
