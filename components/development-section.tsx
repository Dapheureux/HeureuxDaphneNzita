import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import type { IconType } from "react-icons"


// Import des icônes de React Icons
import { FaReact, FaPhp, FaWordpress, FaJs, FaCss3Alt } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiLaravel, SiPrestashop, } from "react-icons/si"
import { DiMysql } from "react-icons/di"

interface  Technology {
  name: string
  icon: IconType
  color?: string
}
interface Props {
  title: string
  description: string
  tech?: Technology[]
  image: string
}

export function DevelopmentSection({title, description, tech, image}: Props) {
  const projects = [
    {
      title: "GMAO ESGAE",
      description: "Système de Gestion de Maintenance Assistée par Ordinateur à ESGAE Projet de soutenance en Génie Logiciel",
      tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color:"#E4080A"},
      { name: "MySQL", icon: DiMysql, color: "#4479A1" },
    ],
      image: "/images/ImgProjets/gmao-esgae.png",
    },
    {
      title: "LCD CASH",
      description: "E-commerce spécialisé dans le rachat des écrans de téléphone et des matériels électroniques",
      tech: [
      { name: "Prestashop", icon: SiPrestashop, color: "#000000" },
      { name: "MySQL", icon: DiMysql, color: "#4479A1" },
    ],
      image: "/images/ImgProjets/lcd-cash.png",
    },
    {
      title: "UCARE",
      description: "Site qui représente la structure de UCARE",
      tech: [
      { name: "WordPress", icon: FaWordpress, color: "#21759B" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
      image: "/images/ImgProjets/ucare.png",
    },
  ]

  return (
    <section id="developpement" className="min-h-screen py-20 ml-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-anton text-4xl md:text-6xl font-bold mb-6">DÉVELOPPEMENT</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Création d&apos;applications web et mobile modernes, performantes et user-friendly. Expertise en React, Next.js,
            Node.js et technologies cloud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="hover-lift animate-fade-in-up bg-card/80 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-anton">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech.name + i}
                      className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md font-outfit flex items-center gap-1"
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
