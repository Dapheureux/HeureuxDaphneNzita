"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const clients = [
  {
    name: "TechCorp",
    logo: "/modern-tech-logo.png",
    description: "Développement d'application web",
  },
  {
    name: "CreativeStudio",
    logo: "/placeholder-kzfp8.png",
    description: "Community Management",
  },
  {
    name: "StartupX",
    logo: "/startup-logo.png",
    description: "Photographie événementielle",
  },
  {
    name: "DigitalAgency",
    logo: "/digital-marketing-agency-logo.png",
    description: "Développement full-stack",
  },
  {
    name: "BrandCo",
    logo: "/placeholder-s6ucc.png",
    description: "Stratégie digitale",
  },
  {
    name: "InnovateInc",
    logo: "/innovation-company-logo.png",
    description: "Photographie produit",
  },
]

export function ClientsSection() {
  return (
    <section id="clients" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl mb-6">ILS ME FONT CONFIANCE</h2>
          <p className="font-outfit text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les entreprises et marques qui ont choisi mes services pour leurs projets digitaux
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover-lift group cursor-pointer border-2 hover:border-primary transition-all duration-300">
                <div className="text-center">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={`Logo ${client.name}`}
                      className="w-full h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-anton text-xl mb-2">{client.name}</h3>
                  <p className="font-outfit text-sm text-muted-foreground">{client.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-outfit text-lg text-muted-foreground">Et bien d{"'"}autres projets passionnants...</p>
        </motion.div>
      </div>
    </section>
  )
}
