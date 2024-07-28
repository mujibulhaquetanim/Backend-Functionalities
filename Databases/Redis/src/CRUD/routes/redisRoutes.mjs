import { Router } from 'express';
import RedisConnection from '../utils/redisConnect.mjs';
import { RedisService } from '../services/redisServices.mjs';
import { CrudController } from '../controller/crud_Controller.mjs';

const redisService = new redisService(RedisConnection);
const redisController = new CrudController(RedisService);
const router = Router();

router.route('/').get((_, res) => {
    res.send('Redis CRUD Routes');
})

//set key value
router.route('/set').post(redisController.setKeyValue);

//get key value
router.route('/get').get(redisController.getKeyValue);

//delete key value
router.route('/delete').delete(redisController.deleteKeyValue);

//update key value
router.route('/update').put(redisController.updateKeyValue);

//expire key value
router.route('/expire').post(redisController.expireKeyValue);


export default router;
