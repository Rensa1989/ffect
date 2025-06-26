import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GraduationCap } from "lucide-react"
import Image from "next/image"

const trainings = [
  {
    id: 1,
    title: "Verbindende begeleidingsgesprekken met pubers",
    description: "Inzetten op een verbindend klas- en schoolklimaat",
    popular: false,
    image: "/images/training-1-new.jpg",
  },
  {
    id: 2,
    title: "Een klas krijg je, een groep maak je",
    description: "Het creëren van een veilige klasgroep: preventie, groepsdynamiek en succesvol herstellen",
    popular: true,
    image: "/images/training-2.jpg",
  },
  {
    id: 3,
    title: "Constructief omgaan met moeilijk hanteerbaar gedrag",
    description: "Grote mond, geen interesse en mijn klas op stelten… Wat doe ik hieraan?",
    popular: true,
    image: "/images/training-3.jpg",
  },
  {
    id: 4,
    title: "Nieuwe job in het onderwijs: Hoe manage ik mijn klas?",
    description: "Wat ik zeker moet weten om aan de slag te gaan",
    popular: false,
    image: "/images/training-4.jpg",
  },
  {
    id: 5,
    title: "Effectief beleid en constructieve aanpak bij moeilijk hanteerbaar gedrag",
    description: "Een onderbouwd beleid voor een optimale leer-, leef- en werkomgeving",
    popular: false,
    image: "/images/training-5.jpg",
  },
  {
    id: 6,
    title: "Agressief gedrag: Hoe reageren?",
    description: "Een plan van aanpak voor het hele team",
    popular: true,
    image: "/images/agressief-gedrag-hoe-reageren2.jpg", // Updated image
  },
  {
    id: 7,
    title: "De kunst van verbindend communiceren tijdens moeilijke gesprekken met ouders",
    description: "Oudercontacten en slechtnieuwsgesprek, hoe pak ik dat aan?",
    popular: false,
    image: "/images/training-7.jpg",
  },
  {
    id: 8,
    title: "Van uitdaging naar verbinding: succesvol samenwerken met ouders",
    description: "Inzetten op ouderbetrokkenheid en verbindend omgaan met agressie bij ouders",
    popular: true,
    image: "/images/training-8.jpg",
  },
  {
    id: 9,
    title: "Van een machtige naar een krachtige aanpak",
    description: "Introductie in nieuwe autoriteit, geweldloos verzet",
    popular: false,
    image: "/images/training-9.jpg",
  },
  {
    id: 10,
    title: "Verbonden in groei: hechtingsproblematiek begrijpen en omgaan met ongewenst gedrag",
    description: "Hoe kwetsbare plekjes in de ontwikkeling kunnen leiden tot problemen op school",
    popular: false,
    image: "/images/training-10-updated.jpg",
  },
]

export default function AanbodPage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Aanbod</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map((training) => (
            <Link key={training.id} href={`/aanbod/${training.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer relative border-ffect-light/20 hover:border-ffect-medium/40 bg-card text-card-foreground">
                {training.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-ffect-medium text-primary-foreground flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Populair
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-8">
                    <div className="flex justify-center items-center space-x-4 mb-4">
                      <div className="w-8 h-0.5 bg-ffect-light"></div>
                      <GraduationCap className="w-6 h-6 text-ffect-medium" />
                      <div className="w-8 h-0.5 bg-ffect-light"></div>
                    </div>
                    <p className="text-ffect-dark italic">"Vormingen die het verschil maken in de klas"</p>
                  </div>
                  <div className="mb-4">
                    <div className="w-full h-32 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={training.image || "/placeholder.svg"}
                        alt={training.title}
                        width={300}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground leading-tight">{training.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{training.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
