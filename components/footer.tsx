import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/final-logo.png"
                alt="ffect."
                width={60}
                height={60}
                className="h-12 w-12 brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground text-left">
              Interactieve opleidingen en trajecten met direct en blijvend effect tot op de klasvloer.
            </p>
          </div>

          <div>
            <h4 className="font-rawest font-semibold mb-4">Contact</h4>
            <div className="text-primary-foreground space-y-1 text-left">
              <p>Bert Vanhees</p>
              <p>Kelbergenstraat 97</p>
              <p>3290 Diest</p>
              <p>T +32(0)495 50 84 15</p>
              <p>M bert@ffect.be</p>
              <p className="text-sm">BTW BE 0705.797.734</p>
            </div>
          </div>

          <div>
            <h4 className="font-rawest font-semibold mb-4">Diensten</h4>
            <div className="text-primary-foreground space-y-2 text-left">
              <Link href="/aanbod" className="block hover:text-white transition-colors">
                Opleidingen
              </Link>
              <Link href="/tarieven" className="block hover:text-white transition-colors">
                Tarieven
              </Link>
              <Link href="/over-mezelf" className="block hover:text-white transition-colors">
                Over mezelf
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-rawest font-semibold mb-4">Juridisch</h4>
            <div className="text-primary-foreground space-y-2 text-left">
              <Link href="/privacy-policy" className="block hover:text-white transition-colors">
                Privacybeleid
              </Link>
              <Link href="/algemene-voorwaarden" className="block hover:text-white transition-colors">
                Algemene voorwaarden
              </Link>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="text-primary bg-primary-foreground border-primary-foreground hover:bg-white hover:text-primary"
                >
                  Contact opnemen
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ffect. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
