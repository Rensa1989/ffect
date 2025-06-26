import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, Sparkles, Handshake, Compass, CheckCircle } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: "Ambitieus",
    description: "Uitgedaagd worden om talenten te ontdekken, herkennen, erkennen en verder te ontwikkelen.",
  },
  {
    icon: Sparkles,
    title: "Motiverend",
    description: "Interactieve benadering met kaders, handvaten en wetenschappelijk onderzoek als onderbouwing.",
  },
  {
    icon: Handshake,
    title: "Onderscheidend",
    description: "Ervaringsgericht, waarbij alle deelnemers actief betrokken worden voor diepere verankering.",
  },
  {
    icon: Compass,
    title: "Relevant",
    description: "Op maat aangepast aan de specifieke behoeften en uitdagingen van jullie organisatie.",
  },
  {
    icon: CheckCircle,
    title: "Echt en eenvoudig",
    description: "Direct en blijvend effect tot op de klasvloer, met focus op toepasbaarheid.",
  },
]

export default function MissieVisiePage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Missie & Visie</h1>

        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-ffect-light"></div>
            <Target className="w-6 h-6 text-ffect-medium" />
            <div className="w-8 h-0.5 bg-ffect-light"></div>
          </div>
          <p className="text-ffect-dark italic">"Samen bouwen aan optimale leeromgevingen"</p>
        </div>

        <div className="space-y-8">
          <Card className="border-ffect-light/20">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  De maatschappij is in volle verandering en dit brengt heel wat teweeg. Samen op weg gaan, elkaar
                  inspireren en versterken zijn essentieel om iedereen in maximale groei te kunnen zetten.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Via vijf pijlers tracht ik de visie vorm te geven. Bij het opstellen van deze kernwaarden die de
                  organisatie typeert, heb ik me gebaseerd op het AMORE-principe (ambitieus, motiverend, onderscheidend,
                  relevant, echt en eenvoudig).
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  In de aangeboden opleidingen staat persoonlijke groei centraal. Telkens vanuit het geloof dat iedereen
                  het potentieel heeft om te excelleren en uitgedaagd moet worden om talenten te ontdekken, herkennen,
                  erkennen en verder te ontwikkelen. Een gevoel van competentie is hierin essentieel. We werken steeds
                  met een interactieve benadering, waarbij we gebruik maken van kaders, handvaten en wetenschappelijk
                  onderzoek om elke opleiding te onderbouwen. Dit zorgt ervoor dat de kennis en vaardigheden die worden
                  opgedaan direct en blijvend effect hebben.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  De trainingen en workshops zijn ervaringsgericht, waarbij alle deelnemers actief betrokken worden. Dit
                  zorgt niet alleen voor een diepere verankering van de geleerde concepten, maar maakt het ook mogelijk
                  om direct te reflecteren op en te leren van eigen ervaringen en die van teamgenoten.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Elke werkomgeving is uniek en daarom worden alle vormingen op maat aangepast om aan te sluiten bij de
                  specifieke behoeften en uitdagingen van jullie organisatie. Door deze aanpak wordt een leeromgeving
                  gecreëerd die niet alleen inspirerend is, maar ook direct toepasbaar en relevant voor jullie
                  dagelijkse praktijk.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* New section for the 5 pillars */}
          <section className="py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Onze 5 Pijlers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <Card
                  key={index}
                  className="text-center border-ffect-light/20 hover:border-ffect-medium/40 transition-colors"
                >
                  <CardContent className="p-6">
                    <pillar.icon className="w-12 h-12 text-ffect-medium mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-gray-600 text-sm">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Card className="bg-gradient-to-r from-ffect-dark to-ffect-medium text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Onze kernvisie</h2>
                <p className="text-xl leading-relaxed">
                  "Samen bouwen aan een optimale werk- leer- en leefomgeving waarin persoonlijke groei en professionele
                  ontwikkeling hand in hand gaan, met de focus op een direct en duurzaam effect tot op de klasvloer."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
