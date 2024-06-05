import express from 'express';
import cookieParser from 'cookie-parser';
import router from './routes.mjs';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use('/cookie', router);

app.get('/', (_, res) => {
    res.status(201).send('Welcome to cookie server');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
