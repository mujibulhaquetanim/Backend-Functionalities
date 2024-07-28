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

//ping redis server
router.route('/ping').get(redisController.pingRedisServer);

//get redis server info
router.route('/info').get(redisController.getRedisServerInfo);

//get redis server config
router.route('/config').get(redisController.getRedisServerConfig);

//CRUD operations:
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

//set multiple key value
router.route('/setMultiple').post(redisController.setMultipleKeyValue);

//get multiple key value
router.route('/getMultiple').get(redisController.getMultipleKeyValue);

//delete multiple key value
router.route('/deleteMultiple').delete(redisController.deleteMultipleKeyValue);

//delete all keys
router.route('/deleteAll').delete(redisController.deleteAllKeys);

//get all keys
router.route('/getAll').get(redisController.getAllKeys);

//get all values
router.route('/getAllValues').get(redisController.getAllValues);

//get all keys and values
router.route('/getAllKeysAndValues').get(redisController.getAllKeysAndValues);


export default router;
