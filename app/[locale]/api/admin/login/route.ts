import { NextResponse } from "next/server";
import Admin from "../../../(models)/Admin";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../../../utils/auth";
import connectDB from "../../../server/connectDB";
import crypto from "crypto";

function hashPassword(password: string) {
    return crypto.createHash("sha256").update(password, "utf-8").digest("hex");
}

function verifyPassword(password: string, storedHashedPassword: string) {
    const hashedPassword = hashPassword(password);
    return hashedPassword !== storedHashedPassword;
}

export async function POST(req: Request) {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    try {
        const user = await Admin.findOne({ email });

        if (!user || verifyPassword(password, user.password)) {
            return NextResponse.json({
                message: "You have entered incorrect email or password.",
                success: false,
                user: {},
            });
        }

        const token = sign({ email }, SECRET_KEY, { expiresIn: "8h" });

        return NextResponse.json({
            message: "Login Successful",
            success: true,
            user: { email },
            token,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
