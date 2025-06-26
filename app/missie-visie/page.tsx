import { Card, CardContent } from "@/components/ui/card"
import { Target } from "lucide-react"

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
                  In de aangeboden opleidingen staat persoonlijke groei centraal. Telkens vanuit het geloof dat iedereen
                  het potentieel heeft om te excelleren. Steeds met een interactieve benadering, waarbij we gebruik
                  maken van kaders, handvaten en wetenschappelijk onderzoek om elke opleiding te onderbouwen. Dit zorgt
                  ervoor dat de kennis en vaardigheden die worden opgedaan direct en blijvend effect hebben.
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
