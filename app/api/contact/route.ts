import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  organisation?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();
    const { name, email, organisation, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const isFromOrganisation = organisation && organisation.trim().length > 0;

    // Email to Zahid
    const notificationEmail = {
      from: process.env.GMAIL_USER,
      to: "zahidshaikh727305@gmail.com",
      subject: `New Contact Form Submission${isFromOrganisation ? " - Organisation Inquiry" : ""}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
              
              <!-- Header -->
              <div style="border-bottom: 1px solid #e5e5e5; padding-bottom: 24px; margin-bottom: 24px;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #0a0a0a;">
                  New Message Received
                </h1>
                <p style="margin: 8px 0 0 0; font-size: 14px; color: #737373;">
                  ${isFromOrganisation ? "This inquiry is from an organisation" : "This is a personal inquiry"}
                </p>
              </div>

              <!-- Organisation Badge (if applicable) -->
              ${isFromOrganisation ? `
              <div style="background-color: #f5f5f5; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px;">
                <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #737373;">Organisation</span>
                <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500; color: #0a0a0a;">${organisation}</p>
              </div>
              ` : ""}

              <!-- Contact Details -->
              <div style="margin-bottom: 24px;">
                <div style="margin-bottom: 16px;">
                  <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #737373;">From</span>
                  <p style="margin: 4px 0 0 0; font-size: 16px; color: #0a0a0a;">${name}</p>
                </div>
                <div>
                  <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #737373;">Email</span>
                  <p style="margin: 4px 0 0 0; font-size: 16px; color: #0a0a0a;">
                    <a href="mailto:${email}" style="color: #0a0a0a; text-decoration: none;">${email}</a>
                  </p>
                </div>
              </div>

              <!-- Message -->
              <div style="background-color: #fafafa; border-radius: 12px; padding: 24px; border-left: 3px solid #0a0a0a;">
                <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #737373;">Message</span>
                <p style="margin: 12px 0 0 0; font-size: 15px; line-height: 1.7; color: #262626; white-space: pre-wrap;">${message}</p>
              </div>

              <!-- Reply Button -->
              <div style="margin-top: 32px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #0a0a0a; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">
                  Reply to ${name}
                </a>
              </div>

            </div>

            <!-- Footer -->
            <p style="text-align: center; margin-top: 24px; font-size: 12px; color: #a3a3a3;">
              This message was sent from your portfolio website contact form
            </p>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply to user
    const autoReplyEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thanks for reaching out",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
              
              <!-- Header -->
              <div style="text-align: center; padding-bottom: 32px; border-bottom: 1px solid #e5e5e5; margin-bottom: 32px;">
                <h1 style="margin: 0; font-size: 28px; font-weight: 600; color: #0a0a0a;">Zahid.</h1>
                <p style="margin: 8px 0 0 0; font-size: 14px; color: #737373;">Content Writer & Storyteller</p>
              </div>

              <!-- Content -->
              <div style="color: #262626; line-height: 1.8;">
                <p style="margin: 0 0 16px 0; font-size: 16px;">Hi ${name},</p>
                
                <p style="margin: 0 0 16px 0; font-size: 15px; color: #525252;">
                  Thank you for reaching out. I've received your message and will get back to you as soon as possible.
                </p>
                
                <p style="margin: 0 0 16px 0; font-size: 15px; color: #525252;">
                  I typically respond within 24-48 hours. In the meantime, feel free to explore my work or check out my blog.
                </p>
                
                <p style="margin: 24px 0 0 0; font-size: 15px; color: #525252;">
                  Looking forward to connecting,<br>
                  <strong style="color: #0a0a0a;">Zahid</strong>
                </p>
              </div>

              <!-- Links -->
              <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid #e5e5e5; text-align: center;">
                <a href="https://adaywithanartist.blogspot.com/?m=1" style="display: inline-block; margin: 0 12px; font-size: 13px; color: #737373; text-decoration: none;">Read My Blog</a>
                <span style="color: #e5e5e5;">|</span>
                <a href="https://www.linkedin.com/in/zahidworkshere" style="display: inline-block; margin: 0 12px; font-size: 13px; color: #737373; text-decoration: none;">LinkedIn</a>
                <span style="color: #e5e5e5;">|</span>
                <a href="https://www.instagram.com/elusive_ppoet" style="display: inline-block; margin: 0 12px; font-size: 13px; color: #737373; text-decoration: none;">Instagram</a>
              </div>

            </div>

            <!-- Footer -->
            <p style="text-align: center; margin-top: 24px; font-size: 12px; color: #a3a3a3;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(autoReplyEmail),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
