import Express from "express";
import {home, login, register} from "../controllers/auth-controllers.js";
const router = Express.Router();

router.route('/').get(home);

router.route('/register').post(register);;

router.route('/login').post(login);

export default router;