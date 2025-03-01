import { express } from 'express';
import { loginSchema } from './validation/joiSchema.js';
import { ValidationError} from 'joi';

const app = express();

app.get('/', (req, res) => {
    res.send('use POST /users to create a new user');
});

app.post('/users', (req, res) => {
    const user = req.body;
    try {
        const { error } = loginSchema.validateAsync(user);
    } catch (error) {
        if (typeof error === ValidationError){
            return res.status(400).json({ error: error.message });
        }
    }
    res.status(201).json(user);
});

app.listen(3000, () => {
    console.log('Server is running on http://127.0.0.1:3000');
});