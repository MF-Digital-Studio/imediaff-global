import { NextResponse } from "next/server"
import { Resend } from "resend"

const SUBJECTS_BY_TYPE = {
  brand: "New Brand Inquiry - imediaff Global",
  creator: "New Creator Application - imediaff Global",
  trendyol: "New Trendyol Affiliate Application - imediaff Global",
  noon: "New Noon Affiliate Application - imediaff Global",
} as const

const FORM_LABELS: Record<string, string> = {
  name: "First Name / Full Name",
  surname: "Surname",
  email: "Email Address",
  trendyolEmail: "Trendyol E-mail Address",
  contactEmail: "Contact E-mail Address",
  phone: "Phone / WhatsApp",
  companyName: "Company / Brand Name",
  website: "Website or Social Media",
  region: "Target / Audience Region",
  serviceInterest: "Service Interest",
  hasTrendyolAccount: "Has Trendyol Account?",
  instagram: "Instagram Profile / Link",
  tiktok: "TikTok Profile / Link",
  youtube: "YouTube Profile / Link",
  snapchat: "Snapchat Handle",
  gender: "Gender",
  telegram: "Telegram Link",
  followers: "Follower Count",
  category: "Content Category",
  country: "Country",
  message: "Message / Campaign Brief",
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { formType, botfield, submittedAt } = body

    // 1. Honeypot check: silently reject/neutral response if the honeypot field is filled
    if (botfield) {
      console.warn("Honeypot triggered. Silently ignoring request.")
      return NextResponse.json(
        { success: true, message: "Submission processed successfully." },
        { status: 200 }
      )
    }

    if (!formType || !["brand", "creator", "trendyol", "noon"].includes(formType)) {
      return NextResponse.json(
        { error: "Invalid form type." },
        { status: 400 }
      )
    }

    // 2. Validate required fields based on form type
    const requiredFields: Record<string, string[]> = {
      brand: ["name", "email", "companyName", "website", "region", "serviceInterest", "message"],
      creator: ["name", "surname", "phone", "country"],
      trendyol: ["name", "surname", "phone", "country", "trendyolEmail", "contactEmail"],
      noon: ["name", "surname", "gender", "email", "phone"],
    }

    const fields = requiredFields[formType]
    for (const field of fields) {
      if (!body[field] || (typeof body[field] === "string" && !body[field].trim())) {
        return NextResponse.json(
          { error: `Missing required field: ${FORM_LABELS[field] || field}` },
          { status: 400 }
        )
      }
    }

    // Simple email validation
    const email = body.email
    if (formType !== "creator") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!email || !emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Please enter a valid email address." },
          { status: 400 }
        )
      }
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

    // Formatted current date and time (using submittedAt if provided, otherwise server time)
    const dateObj = submittedAt ? new Date(submittedAt) : new Date()
    const dateTimeString = dateObj.toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "long",
    })

    const emailSubject = SUBJECTS_BY_TYPE[formType as keyof typeof SUBJECTS_BY_TYPE]

    // Construct table rows for HTML content
    const fieldKeys = [
      "name",
      "surname",
      "gender",
      "email",
      "trendyolEmail",
      "contactEmail",
      "phone",
      "companyName",
      "website",
      "region",
      "serviceInterest",
      "hasTrendyolAccount",
      "instagram",
      "tiktok",
      "youtube",
      "snapchat",
      "telegram",
      "followers",
      "category",
      "country",
    ]

    let tableRowsHtml = ""
    let textContentFields = ""

    for (const key of fieldKeys) {
      // Check if this key exists in the payload and is not undefined/empty
      if (body[key] !== undefined && body[key] !== null && body[key] !== "") {
        // Skip duplicate email display for Trendyol since contactEmail is also displayed
        if (formType === "trendyol" && key === "email") {
          continue
        }
        const label = FORM_LABELS[key] || key
        const value = body[key]

        tableRowsHtml += `
          <div class="field-group">
            <div class="label">${label}</div>
            <div class="value">${key === "email" || key === "trendyolEmail" || key === "contactEmail" ? `<a href="mailto:${value}">${value}</a>` : value}</div>
          </div>
        `

        textContentFields += `${label}: ${value}\n`
      }
    }

    const messageVal = body.message || ""
    const formTypeName = {
      brand: "Brand Inquiry",
      creator: "Creator Application",
      trendyol: "Trendyol Affiliate Application",
      noon: "Noon Affiliate Application",
    }[formType as "brand" | "creator" | "trendyol" | "noon"]

    const THEMES: Record<
      "brand" | "creator" | "trendyol" | "noon",
      {
        headerBg: string
        headerTextColor: string
        accentColor: string
      }
    > = {
      brand: {
        headerBg: "linear-gradient(135deg, #2563EB 0%, #16A34A 100%)",
        headerTextColor: "#ffffff",
        accentColor: "#2563EB",
      },
      creator: {
        headerBg: "linear-gradient(135deg, #2563EB 0%, #16A34A 100%)",
        headerTextColor: "#ffffff",
        accentColor: "#2563EB",
      },
      trendyol: {
        headerBg: "#ffa101",
        headerTextColor: "#ffffff",
        accentColor: "#ffa101",
      },
      noon: {
        headerBg: "#c8b2f8",
        headerTextColor: "#111827", // Dark text for readability on light purple
        accentColor: "#7c3aed", // Legible dark purple for highlights/links
      },
    }

    const currentTheme = THEMES[formType as "brand" | "creator" | "trendyol" | "noon"] || THEMES.brand

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${emailSubject}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; color: #111827; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .header { background: ${currentTheme.headerBg}; padding: 30px 20px; text-align: center; color: ${currentTheme.headerTextColor}; }
            .header h1 { margin: 0; font-size: 24px; font-weight: bold; letter-spacing: -0.025em; color: ${currentTheme.headerTextColor}; }
            .header p { margin: 5px 0 0; font-size: 14px; opacity: 0.9; color: ${currentTheme.headerTextColor}; }
            .content { padding: 30px 20px; }
            .field-group { margin-bottom: 20px; border-bottom: 1px solid #f3f4f6; padding-bottom: 15px; }
            .field-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: #6b7280; margin-bottom: 5px; }
            .value { font-size: 16px; color: #1f2937; line-height: 1.5; }
            .value a { color: ${currentTheme.accentColor}; text-decoration: none; font-weight: 500; }
            .message-box { background: #f3f4f6; border-left: 4px solid ${currentTheme.accentColor}; padding: 15px; border-radius: 4px; font-style: italic; white-space: pre-line; }
            .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Submission Received</h1>
              <p>${formTypeName}</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="label">Form Type</div>
                <div class="value" style="font-weight: bold; color: ${currentTheme.accentColor};">${formTypeName}</div>
              </div>

              ${tableRowsHtml}
              
              ${messageVal ? `
              <div class="field-group">
                <div class="label">${formType === "creator" ? "Is there anything else you would like to mention?" : "Message / Details"}</div>
                <div class="value message-box">${messageVal}</div>
              </div>
              ` : ""}
              
              <div class="field-group">
                <div class="label">Submitted At</div>
                <div class="value">${dateTimeString} (UTC)</div>
              </div>
            </div>
            <div class="footer">
              This inquiry was submitted natively from the imediaff Global website.
            </div>
          </div>
        </body>
      </html>
    `

    const textContent = `
New Form Submission
--------------------------------------------------
Form Type: ${formTypeName}
Submitted At: ${dateTimeString} (UTC)
--------------------------------------------------
${textContentFields}${messageVal ? `${formType === "creator" ? "Is there anything else you would like to mention?" : "Message / Details"}: ${messageVal}\n` : ""}
--------------------------------------------------
This inquiry was submitted natively from the imediaff Global website.
    `

    // 5. Send email via Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      html: htmlContent,
      text: textContent,
      ...(email ? { replyTo: email } : {}),
    })

    if (error) {
      console.error("Resend API Error details:", error)
      return NextResponse.json(
        { error: "Failed to process form submission. Please try again later." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Submission processed successfully.", id: data?.id },
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
