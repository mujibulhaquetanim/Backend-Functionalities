import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (_, res) => {
    res.cookie('name', 'mujibai', { maxAge: 900000, httpOnly: true });
    res.status(201).send('cookie set');
});

app.get('/getcookie', (req, res) => {
    console.log(req.headers.cookie);
    res.send(req.headers.cookie);
});

app.listen(3000,()=>{
    console.log('server at http://127.0.0.1:3000');
});