"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

export function PhotographySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState("Tous")

  const photos = [
    {
      src: "/professional-portrait.png",
      alt: "Portrait professionnel",
      category: "Portrait",
    },
    {
      src: "/mountain-landscape.png",
      alt: "Paysage montagneux",
      category: "Paysage",
    },
    {
      src: "/urban-street-scene.png",
      alt: "Photographie urbaine",
      category: "Street",
    },
    {
      src: "/wedding-photography.png",
      alt: "Photographie d'événement",
      category: "Événement",
    },
    {
      src: "/wildlife-nature-photography.png",
      alt: "Photographie nature",
      category: "Nature",
    },
    {
      src: "/modern-building-architecture.png",
      alt: "Architecture moderne",
      category: "Architecture",
    },
  ]

  const categories = ["Tous", "Portrait", "Paysage", "Street", "Événement", "Nature", "Architecture"]

  const filteredPhotos = activeFilter === "Tous" ? photos : photos.filter((photo) => photo.category === activeFilter)

  return (
    <section id="photographie" className="min-h-screen py-20 ml-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-anton text-4xl md:text-6xl font-bold mb-6">PHOTOGRAPHIE</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Capture d&apos;instants uniques et création d&apos;images qui racontent des histoires. Spécialisé dans le
            portrait, les paysages et la photographie événementielle.
          </p>
        </div>

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

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPhotos.map((photo, index) => (
            <Card
              key={index}
              className="photo-item relative overflow-hidden hover-lift animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(photo.src)}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="photo-overlay">
                <div className="text-center text-white">
                  <ZoomIn className="h-8 w-8 mb-2 mx-auto" />
                  <p className="font-outfit font-semibold">{photo.category}</p>
                </div>
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
                alt="Photo agrandie"
                className="max-w-full max-h-full object-contain animate-scale-in"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
