    import express from 'express';
    import usersRouters from './routes/users';

    const app = express();

    app.use('/api/users',usersRouters);

    app.get('/', (_, res)=>{
        res.send("Welcome to TS-Express App");
    })

    app.listen(3000, ()=>{
        console.log("Server is running on port http://localhost:3000");
    })