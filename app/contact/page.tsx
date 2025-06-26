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
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact</h1>

        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-ffect-light"></div>
            <Mail className="w-6 h-6 text-ffect-medium" />
            <div className="w-8 h-0.5 bg-ffect-light"></div>
          </div>
          <p className="text-ffect-dark italic">"Samen bouwen aan betere onderwijservaringen"</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="border-ffect-light/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contactgegevens</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-ffect-medium mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-700">
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
                    <h3 className="font-semibold text-gray-900 mb-1">Telefoon</h3>
                    <p className="text-gray-700">+32(0)495 50 84 15</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-ffect-medium mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                    <p className="text-gray-700">bert@ffect.be</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-ffect-light/20">
                  <p className="text-sm text-gray-600">BTW BE 0705.797.734</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-ffect-light/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Stuur een bericht</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Uw naam *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full focus:ring-ffect-medium focus:border-ffect-medium"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Uw e-mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full focus:ring-ffect-medium focus:border-ffect-medium"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Uw bericht *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full focus:ring-ffect-medium focus:border-ffect-medium"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Ik wil graag de nieuwsbrief ontvangen
                  </label>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    Deze site is beschermd door reCAPTCHA en het Google{" "}
                    <a href="#" className="text-ffect-dark hover:text-ffect-medium hover:underline">
                      Privacybeleid
                    </a>{" "}
                    en{" "}
                    <a href="#" className="text-ffect-dark hover:text-ffect-medium hover:underline">
                      Servicevoorwaarden
                    </a>{" "}
                    zijn van toepassing.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full bg-ffect-dark hover:bg-ffect-medium text-white">
                  Verstuur bericht
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
