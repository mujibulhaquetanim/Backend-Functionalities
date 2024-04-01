import Express from "express";
import {home, login, register} from "../controllers/auth-controllers.js";
const router = Express.Router();

router.route('/').get(home);

router.route('/register').get(register);;

router.route('/login').get(login);

export default router;