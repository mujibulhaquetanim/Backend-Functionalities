import dotenv from 'dotenv';
dotenv.config();
import { Redis } from 'ioredis';

const RedisConnection = new Redis({ port: process.env.PORT, host: process.env.HOST, password: process.env.REDIS_PASS });

redisConnection.on('connect', () => {
    console.log('connected to redis');
})

redisConnection.on('error', (err) => {
    console.log('error connecting to redis', err);
})

export default RedisConnection