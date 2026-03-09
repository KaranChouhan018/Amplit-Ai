import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiter: max 3 submissions per IP per 15 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Parse body — return 400 for malformed JSON, not 500
  let raw: Record<string, unknown>;
  try {
    const body = await request.json();
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    raw = body as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  try {
    const name = typeof raw.name === 'string' ? raw.name.trim() : '';
    const email = typeof raw.email === 'string' ? raw.email.trim() : '';
    const company = typeof raw.company === 'string' ? raw.company.trim() : '';
    const phone = typeof raw.phone === 'string' ? raw.phone.trim() : '';
    const chairs = typeof raw.chairs === 'string' ? raw.chairs.trim() : '';
    const interestedIn = typeof raw.interestedIn === 'string' ? raw.interestedIn.trim() : '';
    const message = typeof raw.message === 'string' ? raw.message.trim() : '';

    // Required fields
    if (!name || !email || !company || !chairs || !interestedIn || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Length limits (chairs included)
    if (
      name.length > 100 || email.length > 254 || company.length > 150 ||
      phone.length > 20 || chairs.length > 50 || interestedIn.length > 200 ||
      message.length > 2000
    ) {
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

    // Env var check before doing any work
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    if (!recipientEmail || !fromEmail) {
      console.error('Missing required env vars: CONTACT_RECIPIENT_EMAIL or RESEND_FROM_EMAIL');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
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

    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: htmlBody,
    });

    if (sendError) {
      console.error('Resend send error:', sendError);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

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
