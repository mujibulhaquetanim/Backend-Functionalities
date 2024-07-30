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
router.route('/set').post(() => CrudController.setKeyValue(req, res));

//get key value
router.route('/get').get(() => CrudController.getKeyValue(req, res));

//delete key value
router.route('/delete').delete(() => CrudController.deleteKeyValue(req, res));

//update key value
router.route('/update').put(() => CrudController.updateKeyValue(req, res));

//expire key value
router.route('/expire').post(() => CrudController.expireKeyValue(req, res));

//set multiple key value
router.route('/setMultiple').post(() => CrudController.setMultipleKeyValue(req, res));

//get multiple key value
router.route('/getMultiple').get(() => CrudController.getMultipleKeyValue(req, res));

//delete multiple key value
router.route('/deleteMultiple').delete(() => CrudController.deleteMultipleKeyValue(req, res));

//delete all keys
router.route('/deleteAll').delete(() => CrudController.deleteAllKeys(req, res));

//get all keys
router.route('/getAll').get(() => CrudController.getAllKeys(req, res));

//get all values
router.route('/getAllValues').get(() => CrudController.getAllValues(req, res));

//get all keys and values
router.route('/getAllKeysAndValues').get(() => CrudController.getAllKeysAndValues(req, res));

export default router;
