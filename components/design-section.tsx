"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ZoomIn, Palette, Layers, Smartphone } from "lucide-react"

export function DesignSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState("Tous")

  const designs = [
    {
      src: "/ui-design-mockup.png",
      alt: "Interface utilisateur moderne",
      category: "UI/UX",
      title: "Application Mobile",
      description: "Design d&apos;interface pour application de productivité",
    },
    {
      src: "/brand-identity-design.png",
      alt: "Identité visuelle complète",
      category: "Branding",
      title: "Identité Visuelle",
      description: "Création d&apos;identité complète pour startup tech",
    },
    {
      src: "/web-design-layout.png",
      alt: "Design de site web responsive",
      category: "Web Design",
      title: "Site E-commerce",
      description: "Design responsive pour plateforme de vente en ligne",
    },
    {
      src: "/logo-design-collection.png",
      alt: "Collection de logos créatifs",
      category: "Logo",
      title: "Collection Logos",
      description: "Série de logos pour différents secteurs d&apos;activité",
    },
    {
      src: "/print-design-poster.png",
      alt: "Design d&apos;affiche événementielle",
      category: "Print",
      title: "Affiche Événement",
      description: "Design d&apos;affiche pour festival de musique",
    },
    {
      src: "/app-interface-design.png",
      alt: "Interface d&apos;application web",
      category: "UI/UX",
      title: "Dashboard Analytics",
      description: "Interface de tableau de bord pour données analytiques",
    },
  ]

  const categories = ["Tous", "UI/UX", "Branding", "Web Design", "Logo", "Print"]

  const filteredDesigns =
    activeFilter === "Tous" ? designs : designs.filter((design) => design.category === activeFilter)

  return (
    <section id="design" className="min-h-screen py-20 ml-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-anton text-4xl md:text-6xl font-bold mb-6">DESIGN</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Création d&apos;identités visuelles, interfaces utilisateur et supports de communication qui marquent les
            esprits et renforcent l&apos;image de marque.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="hover-lift bg-transparent"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Design Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filteredDesigns.map((design, index) => (
            <Card
              key={index}
              className="design-item relative overflow-hidden hover-lift animate-fade-in-up cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(design.src)}
            >
              <div className="relative">
                <img
                  src={design.src || "/placeholder.svg?height=300&width=400&query=modern design mockup"}
                  alt={design.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ZoomIn className="h-8 w-8 mb-2 mx-auto" />
                    <p className="font-outfit font-semibold">Voir le projet</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-anton text-xl font-bold">{design.title}</h3>
                  <Badge variant="secondary">{design.category}</Badge>
                </div>
                <p className="text-muted-foreground text-sm">{design.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in-up">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Design agrandi"
                className="max-w-full max-h-full object-contain animate-scale-in"
              />
            </div>
          </div>
        )}

        {/* Design Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up">
          <Card className="p-6 text-center hover-lift">
            <Palette className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-anton text-xl font-bold mb-2">Identité Visuelle</h3>
            <p className="text-muted-foreground text-sm">
              Création de logos, chartes graphiques et supports de communication
            </p>
          </Card>
          <Card className="p-6 text-center hover-lift">
            <Layers className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-anton text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground text-sm">
              Conception d&apos;interfaces utilisateur intuitives et engageantes
            </p>
          </Card>
          <Card className="p-6 text-center hover-lift">
            <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-anton text-xl font-bold mb-2">Design Responsive</h3>
            <p className="text-muted-foreground text-sm">
              Adaptation parfaite sur tous les supports et tailles d&apos;écran
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
