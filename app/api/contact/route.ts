import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, subject, message, region, budget, botfield } = body

    // 1. Honeypot check: silently reject/neutral response if the honeypot field is filled
    if (botfield) {
      console.warn("Honeypot triggered. Silently ignoring request.")
      return NextResponse.json(
        { success: true, message: "Brief submitted successfully." },
        { status: 200 }
      )
    }

    // 2. Validate required fields
    if (!name || !phone || !email || !subject || !message || !region || !budget) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    // 3. Resend setup and configuration validation
    const apiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.CONTACT_FROM_EMAIL
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.")
      return NextResponse.json(
        { error: "Email service configuration error. Please try again later." },
        { status: 500 }
      )
    }

    if (!fromEmail || !toEmail) {
      console.error("Missing CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL environment variable.")
      return NextResponse.json(
        { error: "Email service configuration error. Please try again later." },
        { status: 500 }
      )
    }

    // Initialize Resend
    const resend = new Resend(apiKey)

    // Formatted current date and time
    const dateTimeString = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "long",
    })

    // 4. Construct professional HTML & plain-text email templates
    const emailSubject = `New Contact Form Submission - ${subject} | imediaff Global`

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${emailSubject}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; color: #111827; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #2563EB 0%, #16A34A 100%); padding: 30px 20px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; font-weight: bold; letter-spacing: -0.025em; }
            .content { padding: 30px 20px; }
            .field-group { margin-bottom: 20px; border-bottom: 1px solid #f3f4f6; padding-bottom: 15px; }
            .field-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: #6b7280; margin-bottom: 5px; }
            .value { font-size: 16px; color: #1f2937; line-height: 1.5; }
            .message-box { background: #f3f4f6; border-left: 4px solid #2563EB; padding: 15px; border-radius: 4px; font-style: italic; white-space: pre-line; }
            .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Brief Received</h1>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field-group">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="label">Phone Number</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field-group">
                <div class="label">Target Region</div>
                <div class="value">${region}</div>
              </div>
              <div class="field-group">
                <div class="label">Estimated Budget</div>
                <div class="value">${budget}</div>
              </div>
              <div class="field-group">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field-group">
                <div class="label">Project Details / Message</div>
                <div class="value message-box">${message}</div>
              </div>
              <div class="field-group">
                <div class="label">Submission Time</div>
                <div class="value">${dateTimeString} (UTC)</div>
              </div>
            </div>
            <div class="footer">
              This inquiry was submitted from the imediaff Global website contact form.
            </div>
          </div>
        </body>
      </html>
    `

    const textContent = `
New Contact Form Submission - imediaff Global
--------------------------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Target Region: ${region}
Estimated Budget: ${budget}
Submission Time: ${dateTimeString} (UTC)

Project Details / Message:
--------------------------------------------------
${message}
--------------------------------------------------
This inquiry was submitted from the imediaff Global website contact form.
    `

    // 5. Send email via Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      html: htmlContent,
      text: textContent,
      replyTo: email,
    })

    if (error) {
      console.error("Resend API Error details:", error)
      return NextResponse.json(
        { error: "Failed to process brief submission. Please try again later." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Brief submitted successfully.", id: data?.id },
      { status: 200 }
    )
  } catch (err: unknown) {
    console.error("Server-side contact API failure:", err)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
