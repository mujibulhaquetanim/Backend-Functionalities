import {migrate} from 'drizzle-orm/postgres-js/migrator';
import {connection, database} from './db/db';

(async()=>{
    await migrate(database, {migrationsFolder: './drizzle'})
    await connection.end();
})();