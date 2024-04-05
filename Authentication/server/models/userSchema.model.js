import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", async function (next) {
    // console.log("pre method", this)

    const user = this;
    if (!user.isModified("password")) { next(); };
    // console.log(this);

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);

        user.password = hashedPassword;
    } catch (error) {
        next(error);
    }
})

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "30d"
            })
    } catch (error) {
        console.error(error);
    }
}

export const User = new mongoose.model("User", userSchema);