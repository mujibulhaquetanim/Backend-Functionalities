import { Router } from 'express';
import RedisConnection from '../utils/redisConnect.mjs';
import { RedisService } from '../services/redisServices.mjs';
import { CrudController } from '../controller/crud_Controller.mjs';

const redisService = new RedisService(RedisConnection);
const redisController = new CrudController(RedisService);
const router = Router();

router.route('/').get((_, res) => {
    res.send('Redis CRUD Routes');
})


//ping redis server
router.route('/ping').get(() => redisController.pingRedisServer(req, res));

//get redis server info
router.route('/info').get(() => redisController.getRedisServerInfo(req, res));

//get redis server config
router.route('/config').get(() => redisController.getRedisServerConfig(req, res));


//CRUD operations:
//set key value
router.route('/set').post(() => redisController.setKeyValue(req, res));

//get key value
router.route('/get').get(() => redisController.getKeyValue(req, res));

//delete key value
router.route('/delete').delete(() => redisController.deleteKeyValue(req, res));

//update key value
router.route('/update').put(() => redisController.updateKeyValue(req, res));

//expire key value
router.route('/expire').post(() => redisController.expireKeyValue(req, res));

//set multiple key value
router.route('/setMultiple').post(() => redisController.setMultipleKeyValue(req, res));

//get multiple key value
router.route('/getMultiple').get(() => redisController.getMultipleKeyValue(req, res));

//delete multiple key value
router.route('/deleteMultiple').delete(() => redisController.deleteMultipleKeyValue(req, res));

//delete all keys
router.route('/deleteAll').delete(() => redisController.deleteAllKeys(req, res));

//get all keys
router.route('/getAll').get(() => redisController.getAllKeys(req, res));

//get all values
router.route('/getAllValues').get(() => redisController.getAllValues(req, res));

//get all keys and values
router.route('/getAllKeysAndValues').get(() => redisController.getAllKeysAndValues(req, res));

export default router;
