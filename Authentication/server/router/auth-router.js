import Express from "express";
const router = Express.Router();

router.route('/').get((req, res) => {
    res.status(200).send('Welcome to the User Authentication Project');
});

router.route('/register').get((req, res) => {
    res.status(200).send('Welcome to the User Registration page');
});

router.route('/login').get((req, res) => {
    res.status(200).send('Welcome to the User Login page');
});

export default router;