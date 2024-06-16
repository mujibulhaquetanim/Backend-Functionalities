import express from 'express';
import session from 'express-session';
import router from './routes/routes.mjs';
import cookieParser from 'cookie-parser';

const app = express();

app.use(session({
    secret: 'meow meow',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 60,
    },
}));
app.use(cookieParser('sessionSauce'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
    res.send('Welcome to session server');
})

app.use('/session', router);

app.listen(3000, () => {
    console.log('listening on http://127.0.0.1:3000');
});