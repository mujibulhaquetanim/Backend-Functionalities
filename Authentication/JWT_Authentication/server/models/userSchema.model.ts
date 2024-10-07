// userSchema.model.ts
import mongoose, { Document, Model, Types } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Define the UserDocument interface and export it
// Document is a type that represents a single document in MongoDB (like a table) which contains the fields defined in the schema and the methods defined in the model like find, findOne, etc. so that we can use it in the controller and it is a intersection of Document and user interface
export interface UserDocument extends Document {
    _id: Types.ObjectId; //returns an object id by mongoose when it creates a new document
    userName: string;
    email: string;
    password: string;
    phone: string;
    isAdmin: boolean;
    comparePassword(password: string): Promise<boolean>;
    generateToken(): Promise<string>;
}

// Define the schema
const userSchema = new mongoose.Schema<UserDocument>({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
    const user = this as UserDocument;

    if (!user.isModified("password")) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error: unknown) { // Explicitly typing the error
        next(error as Error); // Cast to Error type
    }
});

// Method to compare passwords
// comparePassword is a method that compares the provided password with the hashed password stored in the database
// it returns a Promise<boolean> that resolves to true if the passwords match and false otherwise
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    const user = this as UserDocument;
    return bcrypt.compare(password, user.password);
};

// Method to generate JWT token
// generateToken is a method that generates a JWT token for the user with the userId, email, and isAdmin properties of the user document itself and returns a Promise<string> that resolves to the token
userSchema.methods.generateToken = async function (): Promise<string> {
    const user = this as UserDocument;
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }

    return jwt.sign(
        {
            //toString() is used to convert the _id property of the user document to a string which is an object that needs to be converted to a string in order to be included in the token
            userId: user._id.toString(),
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "30d",
        }
    );
};

// Define the User model and export it
export const User: Model<UserDocument> = mongoose.model<UserDocument>("User", userSchema);
