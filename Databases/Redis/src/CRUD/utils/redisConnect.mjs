import dotenv from 'dotenv';
import { Redis } from 'ioredis';

dotenv.config(
    // { path: './src/CRUD/.env' }
    {debug: true} //added for debugging
);

const RedisConnection = new Redis({
    port: process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_HOST || '127.0.0.1',
    password: process.env.REDIS_PASS || undefined
});

RedisConnection.on('connect', () => {
    console.log('Connected to Redis');
});

RedisConnection.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});

export default RedisConnection;
