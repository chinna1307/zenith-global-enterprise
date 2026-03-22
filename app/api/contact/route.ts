import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Fallback email if the environment variable is missing
const toEmail = process.env.TO_EMAIL || 'yeggadichinna@gmail.com';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Validation - Prevent empty submissions
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // 2. Send the Email
    await resend.emails.send({
      // IMPORTANT: Use 'onboarding@resend.dev' if you haven't verified your domain on Resend.com yet
      from: 'Zenith Portal <no-reply@zenithglobalprivatelimited.com>',
      to: [toEmail],
      replyTo: email,
      subject: `🚀 New Project Inquiry: ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 30px; border-radius: 20px; background-color: #ffffff;">
          <h2 style="color: #7c3aed; margin-top: 0; font-size: 24px; border-bottom: 2px solid #f3f4f6; padding-bottom: 15px;">New Lead Captured</h2>
          
          <div style="margin: 25px 0;">
            <p style="margin: 5px 0;"><strong style="color: #475569;">Client Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong style="color: #475569;">Client Email:</strong> <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a></p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 15px; border: 1px solid #f1f5f9;">
            <p style="margin-top: 0; font-weight: bold; color: #1e293b;">Message Content:</p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #475569; margin-bottom: 0;">${message}</p>
          </div>
          
          <footer style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f3f4f6; pt: 20px;">
            This inquiry was sent via the Zenith Global Portfolio Contact Form.
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Backend Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}