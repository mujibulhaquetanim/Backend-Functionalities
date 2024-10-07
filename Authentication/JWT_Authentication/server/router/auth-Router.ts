import Express from "express";
import { home, login, register } from "../controllers/auth-controllers";
import validate from "../middlewares/validate-middleware";
import { RegisterSchema, LoginSchema } from "../Validators/auth-validators";

const router = Express.Router();

router.route('/').get(home); // Route for home

// Add validation middleware for registration
router.route('/register').post(validate(RegisterSchema), register); 

// Add validation middleware for login
router.route('/login').post(validate(LoginSchema), login); 

export default router;
