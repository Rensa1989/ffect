import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SocialButtons from "@/components/social-buttons"
import ScrollToTop from "@/components/scroll-to-top"
import CookieConsent from "@/components/cookie-consent"

// Configure Open Sans from Google Fonts
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Added more weights for flexibility
  variable: "--font-open-sans",
})

// Configure local font for Rawest
const rawest = localFont({
  src: [
    {
      path: "../public/fonts/rawest-medium.ttf", // Aangepaste bestandsnaam
      weight: "500", // Assuming medium weight
      style: "normal",
    },
  ],
  variable: "--font-rawest",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "ffect. - Interactieve opleidingen voor onderwijsprofessionals",
    template: "%s | ffect.",
  },
  description:
    "Interactieve opleidingen en trajecten met direct en blijvend effect tot op de klasvloer. 25+ jaar ervaring in het onderwijs. Gespecialiseerd in klasmanagement, groepsdynamiek en verbindende communicatie.",
  keywords: [
    "onderwijs",
    "opleidingen",
    "training",
    "klasmanagement",
    "groepsdynamiek",
    "leerkrachten",
    "België",
    "Diest",
    "onderwijscoaching",
  ],
  authors: [{ name: "Bert Vanhees", url: "https://ffect.be" }],
  creator: "ffect.",
  publisher: "ffect.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://ffect.be",
    siteName: "ffect.",
    title: "ffect. - Interactieve opleidingen voor onderwijsprofessionals",
    description: "Interactieve opleidingen en trajecten met direct en blijvend effect tot op de klasvloer.",
    images: [
      {
        url: "/images/final-logo.png",
        width: 1200,
        height: 630,
        alt: "ffect. logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ffect. - Interactieve opleidingen voor onderwijsprofessionals",
    description: "Interactieve opleidingen en trajecten met direct en blijvend effect tot op de klasvloer.",
    images: ["/images/final-logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://ffect.be",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl-BE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "ffect.",
              description: "Interactieve opleidingen en trajecten met direct en blijvend effect tot op de klasvloer",
              url: "https://ffect.be",
              logo: "https://ffect.be/images/final-logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kelbergenstraat 97",
                addressLocality: "Diest",
                postalCode: "3290",
                addressCountry: "BE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+32495508415",
                email: "bert@ffect.be",
                contactType: "customer service",
                availableLanguage: "Dutch",
              },
              founder: {
                "@type": "Person",
                name: "Bert Vanhees",
              },
              sameAs: ["https://facebook.com/ffect", "https://instagram.com/ffect"],
            }),
          }}
        />
      </head>
      <body className={`${openSans.className} ${rawest.variable}`}>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">{children}</main>
        <SocialButtons />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
