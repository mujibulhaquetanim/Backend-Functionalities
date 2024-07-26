import { Router } from 'express';
import redisConnection from '../db/redisConnect.mjs';
import { CrudRedis } from '../controller/crud_Controller.mjs';

const redis = new CrudRedis(redisConnection);

const router = Router();

router.route('/').get((_, res) => {
    res.send('Redis CRUD Routes');
})


export default router;
