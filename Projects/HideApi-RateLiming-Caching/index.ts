import express, { Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {rateLimit} from 'express-rate-limit'

dotenv.config()

const app = express();
const limit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-8', // Default: true, this is required to be set to `true` to use the standard rate limit header
    legacyHeaders: false // Default: true, this is required to be set to `false` to use the legacy rate limit header
})

app.use(cors());
app.use(limit);

const PORT = 8000;

app.get('/api', (_, res: Response) =>{
    res.json({success: true});
})

app.listen(PORT,()=>{
    console.log(`server at http://localhost:${PORT}`);
});