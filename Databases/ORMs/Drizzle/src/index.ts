import { database } from "./db/db"
import * as schema from "./db/schema/schema"

const users = database.select().from(schema.users)

users.then(data => console.log(data)).catch(error => console.error(error));