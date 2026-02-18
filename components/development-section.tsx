"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

import { FaReact, FaPhp, FaWordpress, FaJs, FaCss3Alt } from "react-icons/fa"
import { SiLaravel, SiPrestashop } from "react-icons/si"
import { DiMysql } from "react-icons/di"

import type { IconType } from "react-icons"

interface Technology {
  name: string
  icon: IconType
  color?: string
}

interface Project {
  title: string
  description: string
  tech: Technology[]
  image: string
  demoUrl?: string
  codeUrl?: string
}

export function DevelopmentSection() {
  const projects: Project[] = [
    {
      title: "GMAO ESGAE",
      description:
        "Système de Gestion de Maintenance Assistée par Ordinateur — Projet de soutenance en Génie Logiciel",
      tech: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "PHP", icon: FaPhp, color: "#777BB4" },
        { name: "Laravel", icon: SiLaravel, color: "#E4080A" },
        { name: "MySQL", icon: DiMysql, color: "#4479A1" },
      ],
      image: "/images/ImgProjets/gmao-esgae.png",
      demoUrl: "https://demo-gmao.com",
      codeUrl: "https://github.com/tonrepo/gmao",
    },
    {
      title: "LCD CASH",
      description:
        "E-commerce spécialisé dans le rachat des écrans de téléphone et matériels électroniques",
      tech: [
        { name: "Prestashop", icon: SiPrestashop, color: "#000000" },
        { name: "MySQL", icon: DiMysql, color: "#4479A1" },
      ],
      image: "/images/ImgProjets/lcd-cash.png",
      demoUrl: "https://lcdcash.com",
    },
    {
      title: "UCARE",
      description: "Site vitrine représentant la structure UCARE",
      tech: [
        { name: "WordPress", icon: FaWordpress, color: "#21759B" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      ],
      image: "/images/ImgProjets/ucare.png",
      demoUrl: "https://ucareassociation.com/",
    },

    {
      title: "ALL AMERICAN DRC",
      description: "Chez All American DRC, spécialisé dans la distribution à grande échelle de produits alimentaires nord-américains authentiques à travers l’Afrique centrale. Notre objectif est de fournir des solutions alimentaires fiables et de haute qualité, adaptées aux entreprises des secteurs de l’hôtellerie et du commerce de détail.",
      tech: [
        { name: "WordPress", icon: FaWordpress, color: "#21759B" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      ],
      image: "/images/ImgProjets/all-american-drc.png",
      demoUrl: "https://allamericandrc.com/",
    },

    {
      title: "AMIRA SKIN GLOW",
      description: "Amira Skin Glow est une boutique en ligne spécialisée dans les produits de beauté et de soins de la peau. Nous proposons une large gamme de produits naturels et efficaces pour aider nos clients à obtenir une peau éclatante et saine.",
      tech: [
        { name: "WordPress", icon: FaWordpress, color: "#21759B" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      ],
      image: "/images/ImgProjets/amira-skin-glow.png",
      demoUrl: "https://amiraskinglow.com/",
      
    },
  ]

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="developpement" className="min-h-screen py-20 ml-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-anton text-4xl md:text-6xl font-bold mb-6">
            DÉVELOPPEMENT
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Création d’applications web modernes, performantes et
            user-friendly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="hover-lift bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />

                {/* Overlay boutons */}
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">

                    {project.codeUrl && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => openLink(project.codeUrl!)}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}

                    {project.demoUrl && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => openLink(project.demoUrl!)}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    )}

                  </div>
                </div>
              </div>

              {/* Texte */}
              <CardHeader>
                <CardTitle className="font-anton">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech.name + i}
                      className="px-2 py-1 bg-accent/10 text-sm rounded-md flex items-center gap-1"
                      style={{ color: tech.color }}
                    >
                      <tech.icon />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
