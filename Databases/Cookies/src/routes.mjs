import { Router } from "express";

const router = Router();

router.route('/').get((req, res) => {
    if (req.cookies.name && req.cookies.name === 'mujibai') {
        return res.send('welcome mujibai');
    }
    res.send('no cookie');
});

router.route('/setcookie').get((_, res) => {
    res.cookie('name', 'mujibai', { maxAge: 900000, httpOnly: true });
    res.status(201).send('cookie set');
});

router.route('/getcookie').get((req, res) => {
    console.log('without using cookie parser: ', req.headers.cookie);
    console.log(req.cookies);
    res.send(req.cookies);
});

export default router;