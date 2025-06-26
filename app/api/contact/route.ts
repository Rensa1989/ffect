import { NextResponse } from "next/server"

/**
 * POST /api/contact
 *
 * Verwacht JSON:
 * { name, email, school, message, newsletter, _honey }
 */
export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, email, school, message, newsletter, _honey } = formData

    /* Honeypot */
    if (_honey) {
      console.warn("Honeypot field was filled, likely spam.")
      return NextResponse.json({ message: "Bericht succesvol verzonden!" }, { status: 200 })
    }

    /* Sla op in variabelen om dubbele strings te vermijden */
    const to = "bert@ffect.be"
    const subject = `Nieuw contactformulier van ${name} (${school})`
    const html = `
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>School/Organisatie:</strong> ${school}</p>
      <p><strong>Bericht:</strong></p>
      <p>${message}</p>
      <p><strong>Nieuwsbrief aanmelden:</strong> ${newsletter ? "Ja" : "Nee"}</p>
    `

    /**
     * In production (of in elke omgeving waar RESEND_API_KEY is gezet)
     * versturen we de mail via Resend. In de demo-/preview-omgeving,
     * waar geen sleutel staat, skippen we het verzenden maar antwoorden
     * we wel “succes” zodat het formulier bruikbaar blijft.
     */
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "Website <no-reply@ffect.be>",
          to,
          subject,
          html,
        }),
      })

      if (!res.ok) {
        const txt = await res.text()
        throw new Error(`Resend error ${res.status}: ${txt}`)
      }
    } else {
      console.warn("RESEND_API_KEY ontbreekt – mail wordt in preview niet werkelijk verzonden.")
    }

    return NextResponse.json({ message: "Bericht succesvol verzonden!" }, { status: 200 })
  } catch (err) {
    console.error("Fout bij verzenden contactformulier:", err)
    return NextResponse.json({ message: "Fout bij verzenden van het bericht." }, { status: 500 })
  }
}
