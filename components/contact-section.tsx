"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@daphnenzita.cg",
      href: "mailto:contact@daphnenzita.cg",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+242 06 694 3958",
      href: "tel:+242066943958",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Brazzaville, Congo",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="min-h-screen py-20 ml-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-anton text-4xl md:text-6xl font-bold mb-6">CONTACT</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Prêt à collaborer sur votre prochain projet ? Contactez-moi pour discuter de vos besoins en développement,
            community management ou photographie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="hover-lift animate-slide-in-left bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-anton text-2xl">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50"
                  />
                </div>

                <Button type="submit" className="w-full animate-pulse-glow hover-lift">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="hover-lift bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-anton text-2xl">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={info.title}
                      className="flex items-center space-x-4 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-outfit font-semibold">{info.title}</h3>
                        <a href={info.href} className="text-muted-foreground hover:text-accent transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="hover-lift bg-card/80 backdrop-blur-sm animate-fade-in-up">
              <CardHeader>
                <CardTitle className="font-anton text-xl">Disponibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="text-muted-foreground">9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend</span>
                    <span className="text-muted-foreground">Sur rendez-vous</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Disponible pour nouveaux projets
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
