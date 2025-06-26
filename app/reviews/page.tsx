import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    text: "Dankjewel Bert, het was een zeer goede vorming! En jouw enthousiasme werk echt super aanstekelijk. Wat zalig om je gedrevenheid te voelen tijdens de hele dag!",
    author: "Leerkracht Basisonderwijs",
  },
  {
    id: 2,
    text: "Bedankt voor het bezorgen van de hand-outs! De deelnemers waren in ieder geval heel enthousiast na de opleiding. Ze vonden het een interessante cursus met onmiddellijk toepasbare handvaten. Ze vonden jou als lesgever ook top.",
    author: "Directie Secundair Onderwijs",
  },
  {
    id: 3,
    text: "Bedankt voor de leerrijke bijscholing, je enthousiasme, de hands-outs, je aanpak en de zeer concrete tips.",
    author: "Zorgcoördinator",
  },
  {
    id: 4,
    text: "Bedankt voor de presentatie en zeker ook bedankt voor de interessante bijscholing. We zijn er bij ons op school direct mee aan de slag gegaan. We gaan je zeker op de hoogte houden.",
    author: "Onderwijsteam", // Changed from Schoolteam
  },
  {
    id: 5,
    text: "Ik ben afgelopen week écht al aan de slag gegaan met verschillende tips en voel me gemotiveerd. Dat was exact wat ik nodig had en ik kan niet wachten om alle tips te delen met andere collega's.",
    author: "Leerkracht",
  },
  {
    id: 6,
    text: "Bedankt voor de zeer interessante dag. We appreciëren het enorm dat je van je programma bent afgeweken toen je merkte dat de noden elders lagen. Dit was wat we nodig hadden en gaf ons echt veel vertrouwen. Je hebt onze batterijen terug opgeladen!",
    author: "Onderwijsteam", // Changed from Schoolteam
  },
  {
    id: 7,
    text: "Heel wat topics waren nieuw voor me en lijken me zeker de moeite om te implementeren in mijn ondersteuningen. Je hebt de vorming trouwens zeer boeiend en aanstekelijk gebracht! Doe zo verder zou ik zeggen. Graag tot een volgende keer.",
    author: "Leerondersteuner",
  },
  {
    id: 8,
    text: "Ik wil je op mijn beurt ook nog eens bedanken voor de vorming van gisteren. Je hebt jouw enthousiasme helemaal overgedragen op mij. Ik ben vandaag al aan de slag gegaan met de 'double E' klasopstelling. Fijn dat mijn leerlingen mee willen experimenteren. Ik zal in de komende weken nog meer dingen uitproberen die ik van je geleerd heb.",
    author: "Leerkracht",
  },
  {
    id: 9,
    text: "Waauw, Bert. Dat was de eerste keer dat ik na een studiedag zo goed gezind naar huis keerde. Iedereen was super enthousiast en vooral voldaan na deze dag vol tips en trics! Dankjewel en tot snel nog eens.",
    author: "Deelnemer Studiedag",
  },
]

export default function ReviewsPage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Reviews</h1>
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-ffect-light"></div>
            <Star className="w-6 h-6 text-ffect-medium" />
            <div className="w-8 h-0.5 bg-ffect-light"></div>
          </div>
          <p className="text-ffect-dark italic">"Ervaringen van onderwijsprofessionals"</p>
        </div>
        <p className="text-xl text-gray-600 text-center mb-12">Wat deelnemers zeggen over de vormingen</p>{" "}
        {/* Updated slogan */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="h-full border-ffect-light/20 hover:border-ffect-medium/40 transition-colors"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-ffect-medium mr-2" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-4 flex-grow">"{review.text}"</blockquote>

                <footer className="text-sm text-ffect-dark font-medium">— {review.author}</footer>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Wil je ook een review achterlaten na je vorming?</p>
          <a href="/contact" className="text-ffect-dark hover:text-ffect-medium font-medium">
            Neem contact met ons op →
          </a>
        </div>
      </div>
    </div>
  )
}
