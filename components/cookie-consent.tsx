"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie, Settings } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
  }

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto border-ffect-medium/20 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-ffect-medium" />
              <h3 className="font-semibold text-gray-900">Cookie-instellingen</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBanner(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {!showSettings ? (
            <>
              <p className="text-sm text-gray-700 mb-4">
                Wij gebruiken cookies om uw ervaring op onze website te verbeteren en om te voldoen aan de Belgische
                wetgeving. Door op "Alles accepteren" te klikken, stemt u in met het gebruik van alle cookies. U kunt uw
                voorkeuren ook aanpassen.
              </p>
              <p className="text-xs text-gray-600 mb-4">
                Meer informatie vindt u in ons{" "}
                <Link href="/privacy-policy" className="text-ffect-dark hover:text-ffect-medium underline">
                  privacybeleid
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-2">
                <Button onClick={acceptAll} className="bg-ffect-dark hover:bg-ffect-medium text-white">
                  Alles accepteren
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  className="border-ffect-medium text-ffect-dark hover:bg-ffect-light/10"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Instellingen
                </Button>
                <Button onClick={rejectAll} variant="outline" className="text-gray-600 hover:text-gray-800">
                  Alleen noodzakelijke
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Noodzakelijke cookies</h4>
                    <p className="text-xs text-gray-600">Vereist voor de basisfunctionaliteit van de website</p>
                  </div>
                  <input type="checkbox" checked={true} disabled className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Analytische cookies</h4>
                    <p className="text-xs text-gray-600">Helpen ons de website te verbeteren</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Marketing cookies</h4>
                    <p className="text-xs text-gray-600">Voor gepersonaliseerde advertenties</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="rounded"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={acceptSelected} className="bg-ffect-dark hover:bg-ffect-medium text-white">
                  Voorkeuren opslaan
                </Button>
                <Button onClick={() => setShowSettings(false)} variant="outline">
                  Terug
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
