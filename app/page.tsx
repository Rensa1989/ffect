import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Target, BookOpen } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "ffect. biedt interactieve opleidingen voor onderwijsprofessionals met 25+ jaar ervaring. Gespecialiseerd in klasmanagement, groepsdynamiek en verbindende communicatie.",
  openGraph: {
    title: "ffect. - Interactieve opleidingen voor onderwijsprofessionals",
    description: "Interactieve opleidingen en trajecten met direct en blijvend effect tot op de klasvloer.",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen font-roboto">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ffect-light/10 to-ffect-medium/10 py-20 px-4 relative overflow-hidden">
        {/* Educational Pattern Background */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-10 left-10 transform rotate-12">
            <GraduationCap className="w-16 h-16 text-ffect-dark" />
          </div>
          <div className="absolute top-20 right-20 transform -rotate-12">
            <BookOpen className="w-12 h-12 text-ffect-dark" />
          </div>
          <div className="absolute bottom-20 left-20 transform rotate-45">
            <Users className="w-14 h-14 text-ffect-dark" />
          </div>
          <div className="absolute bottom-10 right-10 transform -rotate-45">
            <Target className="w-10 h-10 text-ffect-dark" />
          </div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <header className="mb-8">
            <div className="flex items-center justify-center gap-6 mb-4 flex-wrap">
              <Image
                src="/images/final-logo.png"
                alt="ffect. logo - Interactieve opleidingen voor onderwijsprofessionals"
                width={80}
                height={80}
                className="h-16 w-16 text-ffect-dark" // Apply text color to logo
                priority
              />
              <h1 className="text-5xl font-bold text-ffect-dark font-rawest">
                Ffect<span className="text-ffect-dark">.</span> {/* Capitalized F and ensured dot color */}
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Interactieve opleidingen en trajecten voor het onderwijs {/* Updated slogan */}
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Interactieve opleidingen en trajecten met direct en blijvend effect tot op de klasvloer. De vormingen
              richten zich tot leerkrachten, leerlingbegeleiders, zorgcoördinatoren, directies,
              secretariaatsmedewerkers, CLB-medewerkers, internaatmedewerkers, maar ook tot ouders en alle andere
              geïnteresseerde onderwijsprofessionals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Steeds vanuit <strong>eigenpraktijkervaring</strong>, een duidelijke <strong>visie</strong> en{" "}
              <strong>wetenschappelijke kaders</strong> als fundament.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Zijn jullie op zoek naar een interactieve studiedag voor jullie team, scholengroep of lezing voor ouders?
              Neem dan zeker vrijblijvend contact op om af te stemmen hoe we samen een boeiende, inspirerende en
              kwalitatieve vorming kunnen realiseren.
            </p>
            <p className="text-gray-600 mb-8">
              Voor meer concrete informatie over een vorming op jouw school of voor jouw organisatie kan je me bereiken
              via deze{" "}
              <Link href="/contact" className="text-ffect-dark hover:text-ffect-medium underline font-medium">
                contactgegevens
              </Link>
              .
            </p>

            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-ffect-dark hover:bg-ffect-medium text-white px-8 py-3 text-lg">
                  MAIL HIER
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Logo Section */}
      <section className="py-8 px-4 bg-ffect-light/5 border-t border-b border-ffect-light/20" aria-hidden="true">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="opacity-30">
            <Image src="/images/final-logo.png" alt="" width={60} height={60} className="h-12 w-12 mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="sr-only">Onze kernwaarden</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-ffect-light/20 hover:border-ffect-medium/40 transition-colors">
              <CardContent className="p-6">
                <GraduationCap className="w-12 h-12 text-ffect-medium mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2 font-rawest">Praktijkervaring</h3>
                <p className="text-gray-600">Vanuit 25+ jaar ervaring in het onderwijs</p>
              </CardContent>
            </Card>

            <Card className="text-center border-ffect-light/20 hover:border-ffect-medium/40 transition-colors">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-ffect-medium mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2 font-rawest">Interactief</h3>
                <p className="text-gray-600">Actieve betrokkenheid van alle deelnemers</p>
              </CardContent>
            </Card>

            <Card className="text-center border-ffect-light/20 hover:border-ffect-medium/40 transition-colors">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-ffect-medium mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2 font-rawest">Op maat</h3>
                <p className="text-gray-600">Aangepast aan jullie specifieke behoeften</p>
              </CardContent>
            </Card>

            <Card className="text-center border-ffect-light/20 hover:border-ffect-medium/40 transition-colors">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-ffect-medium mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2 font-rawest">Wetenschappelijk</h3>
                <p className="text-gray-600">Onderbouwd met wetenschappelijke kaders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
