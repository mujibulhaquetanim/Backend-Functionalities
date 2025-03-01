import express from 'express';
import { validateUser } from './middlewares/userValidation.js';
import { validationResult } from 'express-validator';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('use POST /users to create a new user');
});

app.post('/users', validateUser, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const user = req.body;
    res.status(201).json(user);
});

app.listen(3000, () => {
    console.log('Server is running on http://127.0.0.1:3000');
});
