import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      // CRITICAL: You MUST use 'onboarding@resend.dev' until you verify your domain
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['yeggadichinna@gmail.com'], // Send to your verified Resend email first to test
      replyTo: email,
      subject: `New Lead from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Runtime Error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}