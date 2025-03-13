import { users } from "./users.schema";
import { profileInfo } from "./profileInfo.schema";
import { posts } from "./posts.schema";
import { comments } from "./comments.schema";
import { groups } from "./groups.schema";
import { groupsToUsers} from "./groups.schema"

export { users, profileInfo, posts, comments, groups, groupsToUsers };

/*
import * as users from './users.schema'; 
export { users };
Here, users is not the actual PgTable instance but an object containing the module's exports. That's why Drizzle complains when you try to pass it to database.insert().


error: Argument of type 'typeof import("path/to/schema")' is not assignable to parameter of type 'PgTable<TableConfig>'.
suggests that the way you're exporting schemas from the index.ts file is incorrect. Instead of exporting individual schema objects, you are exporting modules (i.e., objects that contain all exports from each schema file). When you then try to use schema.users, it's referring to an entire module, not a PgTable<TableConfig>.
*/