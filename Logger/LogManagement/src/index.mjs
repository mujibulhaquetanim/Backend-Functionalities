import express from 'express';
import { logger } from './utils/logger.mjs';

const app = express();

app.get('/',(_,res)=>{
    logger.log('info','Welcome to the logger server');
    res.json({"msg": "Welcome to the Winston Demo Server"})
})

app.listen(3000,()=>{
    logger.info(`logger server running at http://127.0.0.1:3000`)
})