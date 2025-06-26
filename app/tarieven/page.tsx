import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, Euro } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TarievenPage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Tarieven</h1>

        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-ffect-light"></div>
            <Euro className="w-6 h-6 text-ffect-medium" />
            <div className="w-8 h-0.5 bg-ffect-light"></div>
          </div>
          <p className="text-ffect-dark italic">"Investeren in kwaliteitsvolle vormingen"</p>
        </div>

        <Card className="mb-8 border-ffect-light/20 bg-card text-card-foreground">
          <CardContent className="p-8 text-left">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                Hieronder vinden jullie de tarieven voor de vormingen. Alle sessies zijn ontworpen voor een volledige
                dag. Op deze manier kan ook de inhoud van de vorming op een interactieve manier verwerkt worden. Willen
                jullie slechts een dagdeel vastleggen? Geen probleem! De vormingen kunnen worden aangepast zodat ze ook
                in een ochtend, middag of avond passen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-2 border-ffect-light bg-ffect-light/5">
                <CardContent className="p-4 text-center flex flex-col items-center justify-center h-full">
                  <Clock className="w-10 h-10 text-ffect-medium mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-ffect-medium mb-1">Dagdeel</h3>
                  <p className="text-muted-foreground mb-3">3 uren</p>
                  <div className="text-2xl font-bold text-foreground mb-1">€ 590</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-ffect-medium bg-ffect-medium/5">
                <CardContent className="p-4 text-center flex flex-col items-center justify-center h-full">
                  <Calendar className="w-10 h-10 text-ffect-medium mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-ffect-medium mb-1">Hele dag</h3>
                  <p className="text-ffect-medium mb-3">6 uren</p>
                  <div className="text-2xl font-bold text-foreground mb-1">€ 960</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-ffect-light/10 border border-ffect-light/30 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Euro className="w-6 h-6 text-ffect-medium mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-ffect-medium mb-2">Op maat gemaakt (€)</h4>
                  <p className="text-foreground leading-relaxed">
                    Omdat geen enkele situatie hetzelfde is, vind ik het belangrijk om te werken op een manier die
                    afgestemd is op jullie school of organisatie. Na een vrijblijvend kennismakingsgesprek bezorg ik
                    jullie daarom altijd een offerte op maat, volledig afgestemd op specifieke wensen en behoeften.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-foreground mb-6">
                Voor meer concrete informatie over een vorming op jouw school of voor jouw organisatie kan je me
                bereiken via deze contactgegevens.
              </p>

              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-ffect-medium text-primary-foreground">
                  Vraag offerte aan
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
