import { Router } from "express";

const router = Router();

router.route('/').get((req, res) => {
    console.log(req.session);
    console.log(req.session.id);
    res.cookie('session', 'profile1', { maxAge: 60000, signed: true });
    res.send('Welcome to session route');
});

router.route('/profile').get((_, res) => {
    res.send('Welcome to profile route');
});

router.route('/logout').get((_, res) => {
    res.send('Welcome to logout route');
});


export default router;