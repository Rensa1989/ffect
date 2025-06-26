import { Card, CardContent } from "@/components/ui/card"

// Removed pillars data as it's now on the homepage

export default function MissieVisiePage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Missie & visie</h1>

        <div className="space-y-8">
          <Card className="border-effect-light/20 bg-card text-card-foreground">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-left">
                <p className="text-foreground leading-relaxed mb-6">
                  De maatschappij is in volle verandering en dit brengt heel wat teweeg. Samen op weg gaan, elkaar
                  inspireren en versterken zijn essentieel om iedereen in maximale groei te kunnen zetten.
                </p>

                <p className="text-foreground leading-relaxed mb-6">
                  Via <strong className="font-semibold">vijf pijlers</strong> tracht ik de visie vorm te geven. Bij het
                  opstellen van deze kernwaarden die de organisatie typeert, heb ik me gebaseerd op het{" "}
                  <strong className="font-semibold">
                    AMORE-principe (ambitieus, motiverend, onderscheidend, relevant, echt en eenvoudig)
                  </strong>
                  .
                </p>

                <p className="text-foreground leading-relaxed mb-6">
                  In de aangeboden opleidingen staat persoonlijke groei centraal. Telkens vanuit het geloof dat iedereen
                  het potentieel heeft om te excelleren en uitgedaagd moet worden om talenten te ontdekken, herkennen,
                  erkennen en verder te ontwikkelen. Een gevoel van competentie is hierin essentieel. We werken steeds
                  met een interactieve benadering, waarbij we gebruik maken van kaders, handvaten en wetenschappelijk
                  onderzoek om elke opleiding te onderbouwen. Dit zorgt ervoor dat de kennis en vaardigheden die worden
                  opgedaan direct en blijvend effect hebben.
                </p>

                <p className="text-foreground leading-relaxed mb-6">
                  De trainingen en workshops zijn ervaringsgericht, waarbij alle deelnemers actief betrokken worden. Dit
                  zorgt niet alleen voor een diepere verankering van de geleerde concepten, maar maakt het ook mogelijk
                  om direct te reflecteren op en te leren van eigen ervaringen en die van teamgenoten.
                </p>

                <p className="text-foreground leading-relaxed mb-8">
                  Elke werkomgeving is uniek en daarom worden alle vormingen op maat aangepast om aan te sluiten bij de
                  specifieke behoeften en uitdagingen van jullie organisatie. Door deze aanpak wordt een leeromgeving
                  gecreëerd die niet alleen inspirerend is, maar ook direct toepasbaar en relevant voor jullie
                  dagelijkse praktijk.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Removed the 5 Pillars section from here as it's moved to the homepage */}
          {/* <section className="py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Onze 5 Pijlers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <Card
                  key={index}
                  className="text-center border-effect-light/20 hover:border-effect-medium/40 transition-colors bg-card text-card-foreground"
                >
                  <CardContent className="p-6">
                    <pillar.icon className="w-12 h-12 text-effect-medium mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section> */}

          <Card className="bg-gradient-to-r from-primary to-effect-medium text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Onze kernvisie</h2>
              <p className="text-xl leading-relaxed">
                Samen bouwen aan een optimale werk- leer- en leefomgeving waarin persoonlijke groei en professionele
                ontwikkeling hand in hand gaan, met de focus op een direct en duurzaam effect tot op de klasvloer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
