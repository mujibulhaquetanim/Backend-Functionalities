import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (_, res) => {
    res.cookie('name', 'mujibai', { maxAge: 900000, httpOnly: true });
    res.status(201).send('cookie set');
});

app.listen(3000,()=>{
    console.log('server at http://127.0.0.1:3000');
});