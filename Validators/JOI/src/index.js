import express from 'express';
import { loginSchema } from './validation/joiSchema.js';
import { ValidationError } from 'joi';

const app = express();
app.use(express.json());  // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('use POST /users to create a new user');
});

app.post('/users', async (req, res) => {
    const user = req.body;
    try {
        await loginSchema.validateAsync(user);
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.message });
        }
        // Handle other errors
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json(user);
});

app.listen(3000, () => {
    console.log('Server is running on http://127.0.0.1:3000');
});
