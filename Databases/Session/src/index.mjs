import express from express;
import session from 'express-session';
import router from './routes/routes.mjs';

const app = express();

app.use(session({
    secret: 'meow meow',
    resave: false,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to session server');
})

app.get('/session', router);

app.listen(3000, () => {
    console.log('listening on http://127.0.0.1:3000');
});