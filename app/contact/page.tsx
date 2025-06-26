"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    message: "",
    newsletter: false,
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [responseMessage, setResponseMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setResponseMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setResponseMessage(data.message)
        setFormData({ name: "", email: "", school: "", message: "", newsletter: false }) // Clear form
      } else {
        setStatus("error")
        setResponseMessage(data.message || "Er is een onbekende fout opgetreden.")
      }
    } catch (error) {
      console.error("Fout bij verzenden contactformulier:", error)
      setStatus("error")
      setResponseMessage("Er is een fout opgetreden bij het verzenden van uw bericht.")
    }
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-rawest font-bold text-center mb-12 text-foreground">Contact</h1>

        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-ffect-light"></div>
            <Mail className="w-6 h-6 text-ffect-medium" />
            <div className="w-8 h-0.5 bg-ffect-light"></div>
          </div>
          <p className="text-ffect-dark italic">"Samen op weg en elkaar inspireren"</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="border-ffect-light/20 bg-card text-card-foreground">
            <CardContent className="p-8">
              <h2 className="text-2xl font-rawest font-bold mb-6 text-foreground">Contactgegevens</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-ffect-medium mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                    <p className="text-foreground">
                      Bert Vanhees
                      <br />
                      Kelbergenstraat 97
                      <br />
                      3290 Diest
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-ffect-medium mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefoon</h3>
                    <p className="text-foreground">+32(0)495 50 84 15</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-ffect-medium mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <p className="text-foreground">bert@ffect.be</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-ffect-light/20">
                  <p className="text-sm text-muted-foreground">BTW BE 0705.797.734</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-ffect-light/20 bg-card text-card-foreground">
            <CardContent className="p-8">
              <h2 className="text-2xl font-rawest font-bold mb-6 text-foreground">Stuur een bericht</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Uw naam *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full focus:ring-ffect-medium focus:border-ffect-medium bg-input text-foreground border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Uw e-mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full focus:ring-ffect-medium focus:border-ffect-medium bg-input text-foreground border-border"
                  />
                </div>

                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-foreground mb-2">
                    School / Organisatie *
                  </label>
                  <Input
                    id="school"
                    type="text"
                    required
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    className="w-full focus:ring-ffect-medium focus:border-ffect-medium bg-input text-foreground border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Uw bericht *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full focus:ring-ffect-medium focus:border-ffect-medium bg-input text-foreground border-border"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                    className="border-foreground data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <label htmlFor="newsletter" className="text-sm text-foreground">
                    Ik wil graag de nieuwsbrief ontvangen
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-ffect-medium text-primary-foreground"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Verzenden..." : "Verstuur bericht"}
                </Button>

                {status === "success" && <p className="text-green-600 text-center mt-4">{responseMessage}</p>}
                {status === "error" && <p className="text-red-600 text-center mt-4">{responseMessage}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
