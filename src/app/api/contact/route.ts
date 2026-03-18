import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validate required env vars at module load
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "zahidshaikh727305@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organisation, message } = body;

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error("Missing Gmail credentials in environment variables.");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const sanitize = (str: unknown) =>
      typeof str === "string" ? str.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeOrg = sanitize(organisation);
    const safeMessage = sanitize(message);

    const isFromOrganisation = safeOrg.trim().length > 0;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // ─── Email to Zahid ───────────────────────────────────────────────────────
    const ownerHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:20px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 24px;border-bottom:1px solid rgba(255,255,255,0.08);">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,0.3);">New Message</p>
              <h1 style="margin:0;font-size:26px;font-weight:600;color:#fff;line-height:1.2;">
                📬 You've got mail
                ${isFromOrganisation
                  ? '<br/><span style="font-size:14px;font-weight:400;color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:4px 12px;border-radius:20px;display:inline-block;margin-top:10px;">From an Organisation</span>'
                  : '<br/><span style="font-size:14px;font-weight:400;color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:4px 12px;border-radius:20px;display:inline-block;margin-top:10px;">Individual Contact</span>'}
              </h1>
            </td>
          </tr>

          <!-- Fields -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.3);">Name</p>
                    <p style="margin:0;font-size:16px;font-weight:500;color:#fff;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.3);">Email</p>
                    <a href="mailto:${safeEmail}" style="margin:0;font-size:16px;color:rgba(255,255,255,0.7);text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                ${isFromOrganisation ? `
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.3);">Organisation</p>
                    <p style="margin:0;font-size:16px;font-weight:500;color:#fff;">${safeOrg}</p>
                  </td>
                </tr>
                ` : ""}
                ${safeMessage ? `
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.3);">Message</p>
                    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
                      <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.7;white-space:pre-wrap;">${safeMessage}</p>
                    </div>
                  </td>
                </tr>
                ` : ""}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px 32px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.2);font-style:italic;">
                Sent via your portfolio contact form · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
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

    // ─── Auto-reply to sender ─────────────────────────────────────────────────
    const replyHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thanks for reaching out</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:20px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:48px 40px 32px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.08);">
              <p style="margin:0 0 12px;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,0.3);">Zahid Shaikh</p>
              <h1 style="margin:0;font-size:28px;font-weight:600;color:#fff;line-height:1.3;">
                Thanks for reaching out,<br/>
                <span style="font-weight:300;color:rgba(255,255,255,0.5);">${safeName}.</span>
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 20px;font-size:16px;color:rgba(255,255,255,0.6);line-height:1.8;font-weight:300;">
                I've received your message and I'll get back to you soon.
              </p>
              <p style="margin:0 0 20px;font-size:15px;color:rgba(255,255,255,0.4);line-height:1.8;font-weight:300;">
                Good conversations take a little time — but they're always worth it.
              </p>
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.35);line-height:1.8;font-style:italic;font-weight:300;">
                Until then, feel free to explore the blog at
                <a href="https://adaywithanartist.blogspot.com/?m=1" style="color:rgba(255,255,255,0.5);text-decoration:none;">
                  A Day With An Artist
                </a>.
              </p>
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding:24px 40px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 2px;font-size:15px;font-weight:500;color:#fff;">Zahid Shaikh</p>
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.3);font-weight:300;">Content Writer · Storyteller · You'll hear from me soon.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send both emails
    await Promise.all([
      transporter.sendMail({
        from: `"Zahid Portfolio" <${GMAIL_USER}>`,
        to: RECIPIENT_EMAIL,
        subject: `${isFromOrganisation ? "[Organisation] " : ""}New message from ${safeName} — Portfolio`,
        html: ownerHtml,
        replyTo: safeEmail,
      }),
      transporter.sendMail({
        from: `"Zahid Shaikh" <${GMAIL_USER}>`,
        to: email,
        subject: "Thanks for reaching out",
        html: replyHtml,
      }),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
