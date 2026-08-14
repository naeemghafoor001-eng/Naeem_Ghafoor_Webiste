import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Anti-Spam Honeypot Check
    if (body.websiteUrlHoneypot) {
      // Silently discard bot submission
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    const {
      fullName,
      email,
      country,
      clientType,
      serviceRequired,
      projectTitle,
      requirement,
      deadline,
      wordCountOrScope,
      fileAvailability,
      preferredContact,
    } = body;

    // 2. Input Validation
    if (!fullName || !email || !projectTitle || !requirement) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "naeemghafoor001@gmail.com";

    // 3. Dispatch via Resend if API Key is configured
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Naeem Ghafoor Website <onboarding@resend.dev>",
        to: [recipientEmail],
        subject: `New Project Enquiry: ${projectTitle} (${fullName})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #102033; border: 1px solid #DDE4E9; padding: 24px; border-radius: 8px;">
            <h2 style="color: #146B4A; margin-top: 0;">New Project Enquiry Received</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Country:</strong> ${country || "Not specified"}</p>
            <p><strong>Client Type:</strong> ${clientType || "General"}</p>
            <p><strong>Service Required:</strong> ${serviceRequired}</p>
            <p><strong>Project Title:</strong> ${projectTitle}</p>
            <p><strong>Target Deadline:</strong> ${deadline || "Flexible"}</p>
            <p><strong>Word Count / Scope:</strong> ${wordCountOrScope || "Not specified"}</p>
            <p><strong>File Availability:</strong> ${fileAvailability}</p>
            <p><strong>Preferred Follow-up:</strong> ${preferredContact}</p>
            <hr style="border: 0; border-top: 1px solid #DDE4E9; margin: 20px 0;" />
            <h3 style="color: #102033;">Requirement Details:</h3>
            <p style="background: #F3F6F8; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${requirement}</p>
          </div>
        `,
      });
    } else {
      // Local dev fallback logging
      console.log("=== NEW PROJECT ENQUIRY (RESEND_API_KEY not configured) ===");
      console.log({ fullName, email, country, clientType, serviceRequired, projectTitle, requirement, deadline });
    }

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Server error processing enquiry. Please contact via WhatsApp." },
      { status: 500 }
    );
  }
}
