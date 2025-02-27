import express, { Response } from 'express';
import needle from 'needle';

const router = express.Router();

const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;
const API_KEY_URL = process.env.API_URL;

router.get('/', async (req, res:Response) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME as string]: API_KEY_VALUE as string
        });


        const apiRes = await needle('get', `${API_KEY_URL}?${params}`)
        const data = apiRes.body;
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error })
    }
})

module.exports = router;