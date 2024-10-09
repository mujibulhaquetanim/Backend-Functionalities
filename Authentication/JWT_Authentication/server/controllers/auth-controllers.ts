import { Request, Response } from "express";
import { User } from "../models/userSchema.model";
import { UserDocument } from "../models/userSchema.model";
import { Types } from "mongoose";

// Define the home controller
//Promise<void> is used to indicate that the function will return a Promise that resolves to void (there is no value to return)
const home = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: 'Welcome to the User Auth page' });
    } catch (error: any) {
        res.status(400).json({ message: 'Page not found: ' + error?.message });
    }
};

const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, userName, password, phone } = req.body;
        console.log(req.body)

        const userExist = await User.findOne({ email }) as UserDocument;

        if (userExist) {
            res.status(400).json({ message: `${userName} already exists` });
            return;
        }

        const userCreated = await User.create({ name, email, userName, password, phone }) as UserDocument;

        res.status(200).json({
            message: `new user name: ${userName} created successfully`,
            token: await userCreated.generateToken(),
            id: (userCreated._id as Types.ObjectId).toString(),  // Cast to ObjectId
        });
    } catch (error: any) {
        res.status(400).json({ message: 'Page not found: ' + error?.message });
    }
};

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email }) as UserDocument;

        if (!userExist) {
            res.status(400).json({ message: "Invalid Credentials" });
            return;
        }

        const isPasswordValid = await userExist.comparePassword(password);
        const token = await userExist.generateToken();

        if (isPasswordValid) {
            res.status(200).cookie("token", token, { httpOnly: true, secure: true }).json({
                message: `Logged in successfully`,
                token: token,
                id: (userExist._id as Types.ObjectId).toString(),  // Cast to ObjectId
            });
        } else {
            res.status(400).json({ message: "Invalid username or password" });
        }
    } catch (error: any) {
        res.status(500).json("Internal Server Error");
    }
};

export { home, register, login };
