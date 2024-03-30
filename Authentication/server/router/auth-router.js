import Router from "express";

const router = Router();

router.route('/').get((req, res) => {
    res.status(200).send('Welcome to the User Authentication Project');
});

router.route('/register').get((req, res) => {
    res.status(200).send('Welcome to the User Registration page');
});

router.route('/login').get((req, res) => {
    res.status(200).send('Welcome to the User Login page');
});

module.exports = router;

