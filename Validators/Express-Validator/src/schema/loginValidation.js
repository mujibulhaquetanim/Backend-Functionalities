// middlewares/userValidation.js

import { body } from 'express-validator';

const validateUser = [
    body('email').isEmail().withMessage('Must be a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export { validateUser };
