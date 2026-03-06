import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GODADDY_EMAIL,
    pass: process.env.GODADDY_EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let { name, email, company, phone, chairs, interestedIn, message } = body;

    // Sanitize: trim all string fields
    name = typeof name === 'string' ? name.trim() : '';
    email = typeof email === 'string' ? email.trim() : '';
    company = typeof company === 'string' ? company.trim() : '';
    phone = typeof phone === 'string' ? phone.trim() : '';
    chairs = typeof chairs === 'string' ? chairs.trim() : '';
    interestedIn = typeof interestedIn === 'string' ? interestedIn.trim() : '';
    message = typeof message === 'string' ? message.trim() : '';

    // Required fields
    if (!name || !email || !company || !chairs || !interestedIn || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Length limits
    if (name.length > 100 || email.length > 254 || company.length > 150 ||
        phone.length > 20 || interestedIn.length > 200 || message.length > 2000) {
      return NextResponse.json(
        { error: 'One or more fields exceed the maximum allowed length' },
        { status: 400 }
      );
    }

    // Name: letters, spaces, dots, hyphens, apostrophes only
    if (!/^[a-zA-Z\s.'\-]+$/.test(name)) {
      return NextResponse.json(
        { error: 'Name contains invalid characters' },
        { status: 400 }
      );
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Phone (optional but must be valid if provided)
    if (phone && !/^[+]?[\d\s().\-]{7,20}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Message minimum length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Escape HTML to prevent XSS in email body
    const esc = (str: string) =>
      str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555; width: 140px;">Name</td>
            <td style="padding: 10px; color: #1a1a1a;">${esc(name)}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 10px; color: #1a1a1a;">${esc(email)}</td>
          </tr>
          ${phone ? `<tr><td style="padding: 10px; font-weight: bold; color: #555;">Phone</td><td style="padding: 10px; color: #1a1a1a;">${esc(phone)}</td></tr>` : ''}
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Practice Name</td>
            <td style="padding: 10px; color: #1a1a1a;">${esc(company)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555;">Number of Chairs</td>
            <td style="padding: 10px; color: #1a1a1a;">${esc(chairs)}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Interested In</td>
            <td style="padding: 10px; color: #1a1a1a;">${esc(interestedIn)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
            <td style="padding: 10px; color: #1a1a1a; white-space: pre-wrap;">${esc(message)}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Sent from Amplit AI contact form
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Amplit AI" <${process.env.GODADDY_EMAIL}>`,
      to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.GODADDY_EMAIL,
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: htmlBody,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
