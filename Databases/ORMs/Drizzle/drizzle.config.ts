import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema/**.schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // port: Number(process.env.DB_PORT)!,
    // host: process.env.DB_HOST!,
    // database: process.env.DB_NAME!,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
  },
});
