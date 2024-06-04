import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());


app.get('/', (_, res) => {
    res.cookie('name', 'mujibai', { maxAge: 900000, httpOnly: true });
    res.status(201).send('cookie set');
});

app.get('/getcookie', (req, res) => {
    console.log('without using cookie parser: ', req.headers.cookie);
    console.log(req.cookies);
    res.send(req.cookies);
});

app.listen(3000, () => {
    console.log('server at http://127.0.0.1:3000');
});