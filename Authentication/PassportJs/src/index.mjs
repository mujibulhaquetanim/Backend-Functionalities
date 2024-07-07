import express from 'express';
import passport from 'passport';
// import router from './routes/routes.mjs';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

// app.use('/auth', router);

app.get('/', (_, res) => {
    res.send('Welcome to passport server');
})

app.listen(3000, () => {
    console.log('listening on http://127.0.0.1:3000');
})