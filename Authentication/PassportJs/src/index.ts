import express, { Request, Response } from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
// import router from './routes/routes';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

// app.use('/auth', router);

app.get('/', (_, res: Response) => {
    res.send('Welcome to passport server');
});

app.listen(3000, () => {
    console.log('listening on http://127.0.0.1:3000');
});
