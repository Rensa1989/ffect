import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number.parseInt(process.env.EMAIL_SERVER_PORT || "587"),
  secure: process.env.EMAIL_SERVER_PORT === "465", // Use `true` for port 465, `false` for other ports
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, email, school, message, newsletter } = formData

    // 2. Send email if reCAPTCHA is successful
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: "bert@ffect.be", // Recipient email address
      subject: `Nieuw contactformulier van ${name} (${school})`,
      html: `
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>School/Organisatie:</strong> ${school}</p>
      <p><strong>Bericht:</strong></p>
      <p>${message}</p>
      <p><strong>Nieuwsbrief aanmelden:</strong> ${newsletter ? "Ja" : "Nee"}</p>
    `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Bericht succesvol verzonden!" }, { status: 200 })
  } catch (error) {
    console.error("Fout bij verzenden contactformulier:", error)
    return NextResponse.json({ message: "Fout bij verzenden van het bericht." }, { status: 500 })
  }
}
