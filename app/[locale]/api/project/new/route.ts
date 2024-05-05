import { NextResponse } from "next/server";
import Project from "../../../(models)/Project";
import connectDB from "../../../server/connectDB";

export async function POST(req: Request) {
    await connectDB();

    const body = await req.json();
    const { name, creationTime, previewImage, technologies, category, link } = body;

    try {
        const project = await Project.create({
            name,
            creationTime,
            previewImage,
            technologies,
            category,
            link,
            active: true,
        });

        return NextResponse.json({
            message: "Submitted",
            success: true,
            project,
        });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error", error });
    }
}
