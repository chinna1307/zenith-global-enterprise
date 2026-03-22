import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    await resend.emails.send({
      // NOW you can use your real domain!
      from: 'Zenith Portal <info@zenithglobalprivatelimited.com>',
      to: ['info@zenithglobalprivatelimited.com'], 
      replyTo: email,
      subject: `🚀 New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 2px solid #7c3aed; border-radius: 15px;">
          <h2 style="color: #7c3aed;">New Inquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="background: #f1f5f9; padding: 15px; border-radius: 10px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}