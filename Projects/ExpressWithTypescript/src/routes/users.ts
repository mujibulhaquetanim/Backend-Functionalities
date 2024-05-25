import { Router } from "express";
import { getUsers, getUsersByID } from "../handlers/users";

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUsersByID);

export default router;