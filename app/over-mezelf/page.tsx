import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function OverMezelfPage() {
  return (
    <div className="py-16 px-4 font-roboto">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 font-rawest">Over mezelf</h1>

        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-ffect-light"></div>
            <GraduationCap className="w-6 h-6 text-ffect-medium" />
            <div className="w-8 h-0.5 bg-ffect-light"></div>
          </div>
          <p className="text-ffect-dark italic">"25+ jaar ervaring in het onderwijs"</p>
        </div>

        <Card className="overflow-hidden border-ffect-light/20">
          <CardContent className="p-0">
            <div className="md:flex">
              <div className="md:w-1/3 p-8 bg-gradient-to-br from-ffect-light/10 to-ffect-medium/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/bert.jpg"
                      alt="Bert Vanhees"
                      width={192}
                      height={192}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-rawest">Bert Vanhees</h2>
                  {/* Removed the title below the photo */}
                </div>
              </div>

              <div className="md:w-2/3 p-8">
                <div className="prose prose-lg max-w-none text-left">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mijn naam is Bert Vanhees. Ik werk sinds 1997 in het onderwijs, waar ik als leerkracht
                    beroepsgerichte vorming in het buitengewoon onderwijs startte. Nadien ging ik ook als leerkracht
                    algemene sociale vorming aan de slag. Hoofdzakelijk werkte ik in deze periode met jongeren met
                    ernstige sociale, emotionele en/of gedragsproblemen, vaak in combinatie met autisme. Ook was ik
                    binnen deze onderwijsvorm actief als intern leerlingbegeleider.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Na 11 jaar in het buitengewoon onderwijs, deed ik begeleidingen in het regulier onderwijs. Dit op
                    kleuter- en lager onderwijsniveau, secundair onderwijsniveau en op hogeschoolniveau.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sinds deze periode deed ik ook ervaring op als gastspreker in verschillende hogescholen,
                    onderwijsnetten en vormingscentra.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tijdens mijn loopbaan maakte ik ook als pedagogisch coördinator deel uit van een directieteam in het
                    gewoon secundair onderwijs.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Momenteel ben ik deeltijds werkzaam als leerondersteuner, waar ik vooral samen met scholen onderzoek
                    op welke manier extra ondersteuning en begeleiding mogelijk zijn om te voldoen aan de
                    onderwijsbehoeften van de leerlingen en de ondersteuningsbehoeften van het schoolteam.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
