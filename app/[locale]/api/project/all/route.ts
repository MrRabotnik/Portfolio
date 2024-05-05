import { NextResponse } from "next/server";
import Project from "../../../(models)/Project";
import connectDB from "../../../server/connectDB";

export async function GET() {
    await connectDB();

    try {
        const projects = await Project.find();

        return NextResponse.json({
            message: "Projects returned",
            success: true,
            projects,
        });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error", error });
    }
}
