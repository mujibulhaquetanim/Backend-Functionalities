import { Request, Response } from "express";
import { User } from "../models/userSchema.model.ts";

const home = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'Welcome to the User Auth page' });
    } catch (error) {
        res.status(400).json({ message: 'Page not found: ' + error?.message });
    }
};

const register = async (req: Request, res: Response) => {

    try {
        const { username, email, password, phone } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: `${username} already exits` });
        }

        const userCreated = await User.create({ username, email, password, phone });

        res.status(200).json({
            message: `new user name: ${username} created successfully`,
            token: await userCreated.generateToken(),
            id: userCreated._id.toString()
        });
    } catch (error) {
        res.status(400).json({ message: 'Page not found: ' + error?.message });
    }
};

const login = async (req:Request, res:Response) => {
    try {

        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        // console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(200).json({
                message: `logged in successfully`,
                token: await userExist.generateToken(),
                id: userExist._id.toString()
            });
        } else {
            res.status(400).json({ message: "Invalid username or password" });
        }

    } catch (error) {
        res.status(400).json("Internal Server Error");
    }
};

export { home, register, login }