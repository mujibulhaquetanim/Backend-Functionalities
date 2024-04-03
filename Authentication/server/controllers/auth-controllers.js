import { User } from "../models/userSchema.model.js";

const home = async (req, res) => {
    try {
        res.status(200).json({ message: 'Welcome to the User Auth page' });
    } catch (error) {
        res.status(400).json({ message: 'Page not found: ' + error.message });
    }
};

const register = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        await User.create({ username, email, password, phone });

        res.status(200).json({ message: `new user name: ${username} created successfully` });
    } catch (error) {
        res.status(400).json({ message: 'Page not found: ' + error.message });
    }
};

const login = async (req, res) => {
    try {
        res.status(200).json({ message: 'Welcome to the User Login page' + req.body });
    } catch (error) {
        res.status(400).json({ message: 'Page not found: ' + error.message });
    }
};

export { home, register, login }