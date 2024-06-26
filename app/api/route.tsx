import { NextApiRequest, NextApiResponse } from "@/node_modules/next/dist/shared/lib/utils";
import nodemailer from "nodemailer";

export const POST = async (req: any) => {
    const { name, email, message } = await req.json();

    try {
        const transporter = nodemailer.createTransport();

        const mailOptions = {
            from: process.env.VERCEL_ENV_EMAIL_USER,
            to: process.env.VERCEL_ENV_EMAIL_USER,
            subject: `${name} from your portfolio`,
            text: `Name: ${name}\n Email: ${email}\n\n ` + message
        }

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify("Email Sent Successfully!"), { status: 201 })
    } catch (error) {
        console.error(error);
        return new Response("Failed to send email!", { status:500 })
    }
}
