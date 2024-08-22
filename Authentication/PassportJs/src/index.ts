import express, { Request, Response } from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import expressSession from "express-session"
import passportLocal from 'passport-local';
import "./strategy/local-strategy";
// import router from './routes/routes';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 * 60 }
}));

app.use(passport.initialize());
app.use(passport.session());

// app.use('/auth', router);

app.get('/', (_, res: Response) => {
    res.send('Welcome to passport server');
});

app.post('/api/auth',passport.authenticate('local'), (req, res) => {
    
})

app.listen(3000, () => {
    console.log('listening on http://127.0.0.1:3000');
});
