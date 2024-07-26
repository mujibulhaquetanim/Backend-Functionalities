import dotenv from 'dotenv';
dotenv.config();
import { Redis } from 'ioredis';

const redisConnection = new Redis({ port: process.env.PORT, host: process.env.HOST, password: process.env.REDIS_PASS });
console.log(redisConnection)

export default redisConnection