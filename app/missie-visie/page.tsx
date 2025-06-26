import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Sparkles, Handshake, Compass, CheckCircle } from "lucide-react"
import Image from "next/image" // Import Image component

// Data for the 5 pillars (copied from missie-visie/page.tsx)
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
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Missie & visie</h1>

        <div className="space-y-8">
          <Card className="border-ffect-light/20 bg-card text-card-foreground">
            <CardContent className="p-8">
              {/* New image for Missie & Visie page, styled like training detail pages */}
              <div className="mb-8">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/missie-visie-banner.jpeg" // New image
                    alt="Meisje kijkt door een verrekijker, symbool voor visie en toekomst"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

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

          {/* The 5 Pillars section is now on the homepage, so it's removed from here. */}
          {/* The Kernvisie section is now on the homepage, so it's removed from here. */}
        </div>
      </div>
    </div>
  )
}
