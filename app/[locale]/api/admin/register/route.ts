import { NextResponse } from "next/server";
import Admin from "../../../(models)/Admin";
import connectDB from "../../../server/connectDB";
import crypto from "crypto";

function hashPassword(password: string) {
    return crypto.createHash("sha256").update(password, "utf-8").digest("hex");
}

export async function POST(req: Request) {
    await connectDB();

    const body = await req.json();
    let { email, password } = body;

    password = hashPassword(password);

    try {
        await Admin.create({ email, password });

        return NextResponse.json({
            message: "Registered",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error", error });
    }
}
