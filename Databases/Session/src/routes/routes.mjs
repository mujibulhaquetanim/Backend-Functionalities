import { Router } from "express";

const router = Router();

router.route('/').get((req, res) => {
    res.send('Welcome to session route');
});

router.route('/profile').get((req, res) => {
    res.send('Welcome to profile route');
});

router.route('/logout').get((req, res) => {
    res.send('Welcome to logout route');
});


export default router;