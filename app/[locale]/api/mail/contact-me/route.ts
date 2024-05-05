import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const transport = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        },
    });

    try {
        const info = await transport.sendMail({
            from: `${name} <${email}>`,
            to: `${SMTP_EMAIL}`,
            subject,
            text: message,
            html: `<div style="width: 456px; height: 298px; background-color: white; border-radius: 25px">
                        <h4>Message from ${email}</h4>
                        <p>
                            ${message}
                        </p>
                    </div>`,
        });

        return NextResponse.json({
            message: "Mail was sent",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({
            message: "There was an error",
            error: error,
            success: false,
        });
    }
}
