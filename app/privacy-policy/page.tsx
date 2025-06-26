import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-rawest font-bold text-center mb-12 text-foreground">Privacybeleid</h1>

        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-ffect-light"></div>
            <Shield className="w-6 h-6 text-ffect-medium" />
            <div className="w-8 h-0.5 bg-ffect-light"></div>
          </div>
          <p className="text-ffect-dark italic">"Uw privacy is belangrijk voor ons"</p>
        </div>

        <Card className="border-ffect-light/20 bg-card text-card-foreground">
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-rawest font-bold text-foreground mb-4">1. Algemene informatie</h2>
            <p className="text-foreground mb-6">
              ffect., gevestigd te Kelbergenstraat 97, 3290 Diest, België (BTW BE 0705.797.734), hecht veel belang aan
              de bescherming van uw persoonsgegevens. In dit privacybeleid leggen wij uit welke persoonsgegevens wij
              verzamelen, waarom wij deze verzamelen en hoe wij deze gebruiken.
            </p>

            <h2 className="text-2xl font-rawest font-bold text-foreground mb-4">2. Welke gegevens verzamelen wij?</h2>
            <p className="text-foreground mb-4">Wij kunnen de volgende persoonsgegevens van u verzamelen:</p>
            <ul className="list-disc pl-6 text-foreground mb-6">
              <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
              <li>Organisatie en functie</li>
              <li>Communicatie via ons contactformulier</li>
              <li>Technische gegevens (IP-adres, browsertype, bezoekgedrag)</li>
            </ul>

            <h2 className="text-2xl font-rawest font-bold text-foreground mb-4">
              3. Waarom verzamelen wij uw gegevens?
            </h2>
            <p className="text-foreground mb-4">Wij gebruiken uw persoonsgegevens voor:</p>
            <ul className="list-disc pl-6 text-foreground mb-6">
              <li>Het beantwoorden van uw vragen en verzoeken</li>
              <li>Het versturen van informatie over onze diensten</li>
              <li>Het verbeteren van onze website en dienstverlening</li>
              <li>Het naleven van wettelijke verplichtingen</li>
            </ul>

            <h2 className="text-2xl font-rawest font-bold text-foreground mb-4">4. Rechtsgrond voor verwerking</h2>
            <p className="text-foreground mb-6">
              Wij verwerken uw persoonsgegevens op basis van uw toestemming, voor de uitvoering van een overeenkomst,
              voor het naleven van een wettelijke verplichting of op basis van ons gerechtvaardigd belang.
            </p>

            <h2 className="text-2xl font-rawest font-bold text-foreground mb-4">5. Cookies</h2>
            <p className="text-foreground mb-6">
              Onze website gebruikt cookies om de functionaliteit te verbeteren en om statistieken bij te houden. U kunt
              uw cookie-voorkeuren aanpassen via de cookie-instellingen op onze website.
            </p>

            <h2 className="text-2xl font-rawest font-bold text-foreground mb-4">6. Uw rechten</h2>
            <p className="text-foreground mb-4">U heeft de volgende rechten betreffende uw persoonsgegevens:</p>
            <ul className="list-disc pl-6 text-foreground mb-6">
              <li>Recht op inzage in uw persoonsgegevens</li>
              <li>Recht op rectificatie van onjuiste gegevens</li>
              <li>Recht op verwijdering van uw gegevens</li>
              <li>Recht op beperking van de verwerking</li>
              <li>Recht op overdraagbaarheid van gegevens</li>
              <li>Recht van bezwaar tegen de verwerking</li>
            </ul>

            <h2 className="text-2xl font-rawest font-bold text-foreground mb-4">7. Beveiliging</h2>
            <p className="text-foreground mb-6">
              Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen
              verlies, misbruik en ongeautoriseerde toegang.
            </p>

            <h2 className="text-2xl font-rawest font-bold text-foreground mb-4">8. Contact</h2>
            <p className="text-foreground mb-6">
              Voor vragen over dit privacybeleid of het uitoefenen van uw rechten kunt u contact opnemen via:
              <br />
              E-mail: bert@ffect.be
              <br />
              Telefoon: +32(0)495 50 84 15
            </p>

            <p className="text-sm text-muted-foreground">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-BE")}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
