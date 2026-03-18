import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  organisation?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, organisation, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const isFromOrganisation = organisation && organisation.trim() !== "";

    // Email to Zahid
    const adminEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0a0a0a; padding: 32px 40px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                New Contact Form Submission
              </h1>
              <p style="margin: 8px 0 0 0; color: #a3a3a3; font-size: 14px;">
                ${isFromOrganisation ? "From an Organisation" : "From an Individual"}
              </p>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              ${isFromOrganisation ? `
              <div style="background-color: #fafafa; border-left: 4px solid #0a0a0a; padding: 16px 20px; margin-bottom: 24px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; color: #525252; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Organisation</p>
                <p style="margin: 4px 0 0 0; color: #0a0a0a; font-size: 18px; font-weight: 600;">${organisation}</p>
              </div>
              ` : ''}
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <p style="margin: 0; color: #525252; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                    <p style="margin: 8px 0 0 0; color: #0a0a0a; font-size: 16px;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 24px;">
                    <p style="margin: 0; color: #525252; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                    <p style="margin: 8px 0 0 0; color: #0a0a0a; font-size: 16px;">
                      <a href="mailto:${email}" style="color: #0a0a0a; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin: 0; color: #525252; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                    <div style="margin-top: 12px; padding: 20px; background-color: #fafafa; border-radius: 12px;">
                      <p style="margin: 0; color: #0a0a0a; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 24px 40px; text-align: center;">
              <p style="margin: 0; color: #a3a3a3; font-size: 13px;">
                Sent from your portfolio contact form
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Auto-reply email to user
    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0a0a0a; padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                zahid.
              </h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 48px 40px;">
              <h2 style="margin: 0 0 24px 0; color: #0a0a0a; font-size: 24px; font-weight: 600;">
                Thanks for reaching out
              </h2>
              
              <p style="margin: 0 0 16px 0; color: #525252; font-size: 16px; line-height: 1.7;">
                Hey ${name},
              </p>
              
              <p style="margin: 0 0 16px 0; color: #525252; font-size: 16px; line-height: 1.7;">
                I've received your message and I appreciate you taking the time to write.
              </p>
              
              <p style="margin: 0 0 16px 0; color: #525252; font-size: 16px; line-height: 1.7;">
                I'll get back to you as soon as I can. Usually within a day or two.
              </p>
              
              <p style="margin: 0 0 24px 0; color: #525252; font-size: 16px; line-height: 1.7;">
                In the meantime, feel free to check out my blog where I write about thoughts, stories, and ideas that matter.
              </p>
              
              <a href="https://adaywithanartist.blogspot.com/?m=1" style="display: inline-block; padding: 14px 28px; background-color: #0a0a0a; color: #ffffff; text-decoration: none; border-radius: 12px; font-size: 14px; font-weight: 500;">
                Read the Blog
              </a>
            </td>
          </tr>
          
          <!-- Signature -->
          <tr>
            <td style="padding: 0 40px 48px 40px;">
              <p style="margin: 0; color: #0a0a0a; font-size: 16px; font-weight: 500;">
                Looking forward to connecting.
              </p>
              <p style="margin: 8px 0 0 0; color: #525252; font-size: 16px;">
                Zahid
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 24px 40px; text-align: center;">
              <p style="margin: 0 0 8px 0; color: #a3a3a3; font-size: 13px;">
                connect.zahidworks@gmail.com
              </p>
              <p style="margin: 0; color: #a3a3a3; font-size: 13px;">
                <a href="https://www.linkedin.com/in/zahidworkshere" style="color: #a3a3a3; text-decoration: none;">LinkedIn</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://www.instagram.com/elusive_ppoet" style="color: #a3a3a3; text-decoration: none;">Instagram</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send email to Zahid
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "zahidshaikh727305@gmail.com",
      subject: `New Contact: ${name}${isFromOrganisation ? ` from ${organisation}` : ''} - Portfolio`,
      html: adminEmailHtml,
      replyTo: email,
    });

    // Send auto-reply to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thanks for reaching out",
      html: autoReplyHtml,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
