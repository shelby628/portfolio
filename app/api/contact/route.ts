import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Send email via Web3Forms (free tier, delivers directly to inbox)
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      // Fallback: construct mailto link if no access key configured
      const mailtoSubject = encodeURIComponent(
        subject || `Portfolio Contact from ${name}`
      );
      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      const mailtoLink = `mailto:shelbyadede@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      return NextResponse.json({
        success: true,
        message: "Opening your email client to send the message directly.",
        mailtoLink,
        fallback: true,
      });
    }

    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: subject || `Portfolio Contact from ${name}`,
        message,
        to: "shelbyadede@gmail.com",
        from_name: "Portfolio Contact Form",
        replyto: email,
      }),
    });

    const result = await web3formsResponse.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully! I will get back to you soon.",
      });
    } else {
      // Fallback: construct mailto link if Web3Forms fails
      const mailtoSubject = encodeURIComponent(
        subject || `Portfolio Contact from ${name}`
      );
      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      const mailtoLink = `mailto:shelbyadede@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      return NextResponse.json({
        success: true,
        message: "Opening your email client to send the message directly.",
        mailtoLink,
        fallback: true,
      });
    }
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
