"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Développeur Full-Stack Senior",
    company: "TechInnovate Solutions",
    location: "Paris, France",
    period: "2022 - Présent",
    type: "CDI",
    description:
      "Développement d'applications web modernes avec React, Next.js et Node.js. Gestion d'équipe de 5 développeurs et architecture de solutions scalables.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    achievements: [
      "Augmentation de 40% des performances des applications",
      "Mise en place de l'architecture microservices",
      "Formation et encadrement de l'équipe junior",
    ],
  },
  {
    title: "Community Manager & Photographe",
    company: "CreativeHub Agency",
    location: "Lyon, France",
    period: "2020 - 2022",
    type: "Freelance",
    description:
      "Gestion des réseaux sociaux pour des marques lifestyle et tech. Création de contenus visuels et photographiques pour les campagnes marketing.",
    technologies: ["Photoshop", "Lightroom", "Figma", "Instagram", "TikTok", "LinkedIn"],
    achievements: [
      "Croissance de 300% de l'engagement sur les réseaux",
      "Plus de 50 campagnes photographiques réalisées",
      "Développement de stratégies de contenu viral",
    ],
  },
  {
    title: "Développeur Frontend",
    company: "DigitalCraft Studio",
    location: "Remote",
    period: "2019 - 2020",
    type: "CDI",
    description:
      "Création d'interfaces utilisateur modernes et responsives. Collaboration étroite avec les designers UX/UI pour des expériences utilisateur optimales.",
    technologies: ["Vue.js", "JavaScript", "SASS", "Webpack", "Git", "Figma"],
    achievements: [
      "Développement de 15+ sites web responsives",
      "Réduction de 60% du temps de chargement",
      "Mise en place des bonnes pratiques de développement",
    ],
  },
  {
    title: "Photographe Événementiel",
    company: "EventCapture Pro",
    location: "Marseille, France",
    period: "2018 - 2019",
    type: "Freelance",
    description:
      "Photographie d'événements corporatifs, mariages et événements culturels. Post-production et livraison de contenus haute qualité.",
    technologies: ["Canon 5D", "Lightroom", "Photoshop", "Capture One"],
    achievements: [
      "Plus de 100 événements photographiés",
      "Taux de satisfaction client de 98%",
      "Développement d'un style photographique unique",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl mb-6">EXPÉRIENCE PROFESSIONNELLE</h2>
          <p className="font-outfit text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel à travers différents domaines et technologies
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover-lift group border-l-4 border-l-primary">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <h3 className="font-anton text-xl mb-2">{exp.title}</h3>
                    <p className="font-outfit font-semibold text-primary mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="font-outfit text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-outfit font-semibold mb-2">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-outfit font-semibold mb-2">Réalisations clés :</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="font-outfit text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
