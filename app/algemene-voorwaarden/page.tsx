import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Algemene Voorwaarden</h1>

        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-ffect-light"></div>
            <FileText className="w-6 h-6 text-ffect-medium" />
            <div className="w-8 h-0.5 bg-ffect-light"></div>
          </div>
          <p className="text-ffect-dark italic">"Transparante voorwaarden voor onze dienstverlening"</p>
        </div>

        <Card className="border-ffect-light/20 bg-card text-card-foreground">
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Definities</h2>
            <p className="text-foreground mb-6">
              ffect.: Bert Vanhees, gevestigd te Kelbergenstraat 97, 3290 Diest, België (BTW BE 0705.797.734)
              <br />
              Klant: De natuurlijke of rechtspersoon die gebruik maakt van onze diensten
              <br />
              Diensten: Alle door ffect. aangeboden opleidingen, trainingen en consultancy
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. Toepasselijkheid</h2>
            <p className="text-foreground mb-6">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen
              ffect. en de klant, tenzij schriftelijk anders overeengekomen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. Aanbiedingen en offertes</h2>
            <p className="text-foreground mb-6">
              Alle aanbiedingen en offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders vermeld.
              Prijzen zijn exclusief BTW, tenzij anders aangegeven.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Totstandkoming overeenkomst</h2>
            <p className="text-foreground mb-6">
              Een overeenkomst komt tot stand door schriftelijke bevestiging van beide partijen of door aanvang van de
              uitvoering van de diensten door ffect.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Uitvoering diensten</h2>
            <p className="text-foreground mb-6">
              ffect. voert de diensten uit met de nodige zorgvuldigheid en in overeenstemming met de geldende
              professionele standaarden. Alle diensten worden uitgevoerd op basis van een inspanningsverbintenis.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Annulering</h2>
            <p className="text-foreground mb-4">Annuleringen zijn mogelijk onder de volgende voorwaarden:</p>
            <ul className="list-disc pl-6 text-foreground mb-6">
              <li>Tot 14 dagen voor de training: geen kosten</li>
              <li>7-14 dagen voor de training: 50% van het tarief</li>
              <li>Minder dan 7 dagen voor de training: 100% van het tarief</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">7. Betaling</h2>
            <p className="text-foreground mb-6">
              Betaling dient te geschieden binnen 30 dagen na factuurdatum. Bij overschrijding van de betalingstermijn
              is de klant van rechtswege in gebreke en is een rente verschuldigd van 1% per maand.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">8. Aansprakelijkheid</h2>
            <p className="text-foreground mb-6">
              De aansprakelijkheid van ffect. is beperkt tot het bedrag dat door de verzekeraar wordt uitgekeerd, met
              een maximum van het factuurbedrag van de betreffende opdracht.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">9. Intellectueel eigendom</h2>
            <p className="text-foreground mb-6">
              Alle intellectuele eigendomsrechten op de door ffect. ontwikkelde materialen blijven eigendom van ffect.
              De klant verkrijgt een gebruiksrecht voor interne doeleinden.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">10. Toepasselijk recht</h2>
            <p className="text-foreground mb-6">
              Op alle overeenkomsten is het Belgische recht van toepassing. Geschillen worden voorgelegd aan de bevoegde
              rechtbank van het arrondissement Leuven.
            </p>

            <p className="text-sm text-muted-foreground">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-BE")}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
