import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// Main target email from your image
const MAIN_EMAIL = 'info@zenithglobalprivatelimited.com';
const BACKUP_EMAIL = 'yeggadichinna@gmail.com';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    await resend.emails.send({
      // Use 'onboarding@resend.dev' until you verify zenithglobalprivatelimited.com in Resend Dashboard
      from: 'Zenith Portal <onboarding@resend.dev>', 
      to: [MAIN_EMAIL],
      cc: [BACKUP_EMAIL], // Sends a copy to your gmail too
      replyTo: email,
      subject: `🚀 Zenith Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; border: 1px solid #7c3aed; border-radius: 15px; background: #fff;">
          <h2 style="color: #7c3aed;">New Business Inquiry</h2>
          <p style="font-size: 16px;"><strong>From:</strong> ${name}</p>
          <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 20px; background: #f8fafc; border-radius: 10px; line-height: 1.6;">
            <strong>Message:</strong><br />
            ${message}
          </div>
          <footer style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
            Sent from zenithglobalprivatelimited.com portal
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}