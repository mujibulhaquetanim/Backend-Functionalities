import { connectionToDB } from "@/lib/db";
import User from "@/models/Users";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        await connectionToDB();
        const { name, email, password } = await req.json();
        const user = await User.create({ name, email, password });
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ message: "Error creating user" }, { status: 500 });
    }
};