import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Target, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const trainingDetails = {
  1: {
    title: "Verbindende begeleidingsgesprekken met pubers",
    subtitle: "Inzetten op een verbindend klas- en schoolklimaat",
    description: `Een verbindend klas- en schoolklimaat is essentieel voor het creëren van een positief groeiproces voor ons allemaal. Het gaat erom dat we luisteren naar elkaar, begrip tonen en steeds verbinding behouden met alle partijen.

In deze vorming verdiepen we samen in verbindende communicatie en effectieve relatieverbetering. We bieden je duidelijke kaders en handvaten om je communicatie en je persoonlijke relaties met jouw leerlingen te verbeteren.

We introduceren je aan een gestructureerd 5-stappenmodel dat je helpt bij het opbouwen en behouden van sterke, gezonde relaties door middel van effectieve communicatiestrategieën. We zullen ook praktische tips delen die je direct kunt toepassen in je dagelijkse interacties.

Luisteren is een van de meest krachtige middelen in communicatie. Door ècht te luisteren, laat je zien dat je de ander waardeert en respecteert. Je leert en oefent in hoe dit bij anderen kan aanzetten tot zelfreflectie en krijgt inzicht hoe dit het welbevinden bevordert.

Deze vorming bied je waardevolle inzichten en praktische handvaten om je relaties te verbeteren en zullen een positieve impact te hebben op het gedrag van de jongeren die jij begeleidt.`,
    goals: [
      "Je kan de basisprincipes van verbindende communicatie en relatieverbetering toepassen.",
      "Je ervaart het belang van verbindende communicatie.",
      "Je maakt kennis met kaders en handvaten waarmee je effectief verbindend kan communiceren. Deze praktische hulpmiddelen helpen je bij het structureren van gesprekken en het behouden of verbeteren van je relaties.",
      "Je leert de kracht van empathisch luisteren toepassen in gesprekken.",
      "Je krijgt inzicht in wat tot zelfreflectie bij leerlingen leidt en hoe dit het welbevinden en de onderlinge relaties bevordert.",
    ],
    targetGroup:
      "Leerkrachten - Directies/middenkader – Leerlingbegeleiders - Zorgcoördinatoren Secretariaatsmedewerkers - CLB-medewerkers - Leerondersteuners - Internaatmedewerkers",
  },
  2: {
    title: "Een klas krijg je, een groep maak je",
    subtitle: "Het creëren van een veilige klasgroep: preventie, groepsdynamiek en succesvol herstellen",
    description: `In deze vorming gaan we dieper in op het belang van het opbouwen van een hechte klasgroep en hoe je dit kunt bereiken door middel van preventieve strategieën, het begrijpen van groepsdynamiek en het actief betrekken van alle leerlingen.

We verkennen, aan de hand van wetenschappelijke instrumenten, bestaande maatregelen en acties die kunnen worden genomen om een veilige omgeving te creëren.

Vervolgens duiken we dieper in de concepten van groepsdynamiek, de verschillende rollen in een groep en onderzoeken we hoe klasgroepen evolueren in de verschillende fases. We zullen, per fase, praktische strategieën aanreiken om te komen tot een veerkrachtige groep.

Een bijzondere focus zal liggen op de cruciale periode van de "gouden weken", waarin de fundamenten worden gelegd. We zullen concrete ideeën delen over hoe je deze periode effectief kunt benutten om een hechte groep te vormen.

Een essentieel aspect van het opbouwen van een sterke klasgroep is het creëren van kansen voor gezamenlijk succes en het vieren van prestaties binnen de groep. We zullen praktische manieren bespreken die bijdragen aan dit succes.

Ook zullen we onderzoeken hoe je als leerkracht effectief hen kunt aanmoedigen om onderlinge relaties op te bouwen. We zullen verschillende tools en benaderingen bespreken die kunnen helpen bij het leggen van deze verbindingen.

Tot slot bekijken we welke kaders we kunnen gebruiken op momenten dat er tijdens het schooljaar moet bijgestuurd worden. Dit om een negatieve groepsdynamiek te herstellen.

Deze vorming biedt praktische inzichten en bruikbare tools voor leerkrachten die streven naar het creëren van een positieve en ondersteunende klasomgeving waarin elke leerling er toe doet.`,
    goals: [
      "Je herkent de verschillende rollen binnen een groep en kan hierop inspelen.",
      "Je krijgt inzicht in de verschillende fases van de groepsdynamiek en leert hoe, waar en wanneer je wat kan installeren.",
      "Je bouwt samen met je team een preventiebeleid uit rekening houdend met de verschillende fases van de groepsdynamiek.",
      "Je kan aan de hand van een stappenplan de groepsdynamiek beïnvloeden op momenten dat het moeilijk loopt in de klas.",
    ],
    targetGroup:
      "Leerkrachten - Directies/middenkader - Leerlingbegeleiders - Zorgcoördinatoren - CLB -medewerkers - Leerondersteuners",
  },
  // Add more training details here...
}

export default function TrainingDetailPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const training = trainingDetails[id as keyof typeof trainingDetails]

  if (!training) {
    notFound()
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/aanbod">
          <Button variant="ghost" className="mb-8 hover:text-ffect-dark">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar aanbod
          </Button>
        </Link>

        <Card className="border-ffect-light/20">
          <CardContent className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{training.title}</h1>
              <p className="text-xl text-ffect-dark font-medium">{training.subtitle}</p>
            </div>

            <div className="mb-8 text-center">
              <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="w-12 h-0.5 bg-ffect-light"></div>
                <BookOpen className="w-6 h-6 text-ffect-medium" />
                <div className="w-12 h-0.5 bg-ffect-light"></div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              {training.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-ffect-light/10 border-ffect-light/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-ffect-medium mr-2" />
                    <h3 className="text-lg font-semibold text-ffect-dark">Doelen van deze vorming</h3>
                  </div>
                  <ul className="space-y-2">
                    {training.goals.map((goal, index) => (
                      <li key={index} className="text-gray-700 text-sm leading-relaxed">
                        • {goal}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-ffect-medium/10 border-ffect-medium/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-ffect-dark mr-2" />
                    <h3 className="text-lg font-semibold text-ffect-dark">Doelgroep</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{training.targetGroup}</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-ffect-dark hover:bg-ffect-medium text-white">
                  Interesse? Neem contact op
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
