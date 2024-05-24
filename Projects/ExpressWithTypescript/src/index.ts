    import express from 'express';

    const app = express();

    app.get('/', (req, res)=>{
        res.send("Welcome to TS-Express App");
    })

    app.listen(3000, ()=>{
        console.log("Server is running on port http://localhost:3000");
    })