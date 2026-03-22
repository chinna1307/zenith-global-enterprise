import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const MAIN_EMAIL = 'yeggad';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Zenith Portal <onboarding@resend.dev>', 
      to: [MAIN_EMAIL],
      replyTo: email,
      subject: `🚀 New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #7c3aed; border-radius: 12px;">
          <h2 style="color: #7c3aed;">Zenith Global Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Client Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="background: #f8fafc; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Submission Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}