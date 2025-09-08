"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

// Import des icônes de React Icons
import { FaReact, FaPhp, FaWordpress, FaJs, FaCss3Alt } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiAdobepremierepro, SiLaravel, SiTiktok, SiFacebook, SiMeta, SiInstagram, SiPrestashop, SiAdobephotoshop, SiAdobeaftereffects, SiAdobelightroom} from "react-icons/si"
import { DiMysql } from "react-icons/di"
import type { IconType } from "react-icons"


interface  technologies {
  name: string
  icon: IconType
  color?: string
}

const experiences = [
  {
    title: "Développeur Full-Stack & Community Manager",
    company: "𝗟𝗲 𝗟𝗲𝘃𝗲𝗹 -Agence Numérique",
    location: "Congo Brazzaville",
    period: "Aout 2025 - Présent",
    type: "Freelance",
    description:
      "Développement d'applications web modernes et la gestion de la communauté en ligne. Création de contenus engageants et gestion des réseaux sociaux pour augmenter la visibilité des clients.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color:"#E4080A"},
      { name: "MySQL", icon: DiMysql, color: "#4479A1" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
      { name: "Meta", icon: SiMeta, color: "#1C1E21" },
    ],
    achievements: [
      "Augmentation de 40% des performances des applications",
      "Lancement de 10+ campagnes de médias sociaux réussies",
    ],
  },
  {
    title: "Community Manager",
    company: "Brazza Futuroscope",
    location: "Congo Brazzaville",
    period: "Juin 2025 - Present",
    type: "Freelance",
    description:
      "Gestion des réseaux sociaux Special Event Otaku et Gaming Congolaise (Brazza Futuroscope). Création de contenu visuel et rédactionnel pour engager la communauté et promouvoir les événements.",
    technologies: [
      { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
      { name: "Meta", icon: SiMeta, color: "#1C1E21" },
      { name: "Instagram", icon: SiInstagram, color: "#E4405F" },
    ],
    achievements: [
      "Croissance de 50% de la communauté en 6 mois",
      "Augmentation de l'engagement de 35% grâce à des stratégies de contenu ciblées",
    ],
  },
  {
    title: "Community Manager",
    company: "KLAMM SHOP",
    location: "Congo Brazzaville",
    period: "Avril 2025 - Present",
    type: "CDI",
    description:
      " Gestion des réseaux sociaux et des campagnes de marketing. Planification des contenus, analyse des performances et interaction avec la communauté en ligne pour les differents produits cosmetiques.",
    technologies: [
      { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
      { name: "Meta", icon: SiMeta, color: "#1C1E21" },
      { name: "Instagram", icon: SiInstagram, color: "#E4405F" },
      { name: "TikTok", icon: SiTiktok, color: "#000000" },
    ],
    achievements: [
      "Augmentation de 30% des ventes en ligne grâce à des campagnes ciblées",
      "Développement d'une stratégie de contenu qui a doublé l'engagement des utilisateurs",

    ],
  },
  {
    title: "Développeur chef de projet",
    company: "Stream Inno",
    location: "À distance",
    period: "Juin 2023 - Aujourd’hui",
    type: "Temps partiel",
    description:
      "Gestion de projets de développement web, rédaction de contenu, direction d’équipes techniques et accompagnement à la transformation digitale. Stream Inno est une agence numérique dédiée à l’innovation et à la sécurité numérique.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Laravel", icon: SiLaravel, color: "#E4080A" },
      { name: "Prestashop", icon: SiPrestashop, color: "#000000" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
    ],
    achievements: [
      "Direction de plusieurs équipes de développement",
      "Mise en place de solutions web et mobiles innovantes",
      "Accompagnement de clients dans leur transformation digitale",
    ],
  },

  {
    title: "Co-fondateur",
    company: "Stream Inno",
    location: "34 Rue Mayam, Plateau de 15 ans · Hybride",
    period: "Mars 2022 - Aujourd’hui",
    type: "Hybride",
    description:
      "Co-fondateur d’une agence numérique spécialisée dans la création de sites web, d’applications mobiles et de stratégies de marketing digital. Revendeur officiel Bitdefender.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Laravel", icon: SiLaravel, color: "#E4080A" },
      { name: "Prestashop", icon: SiPrestashop, color: "#000000" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
    ],
    achievements: [
      "Développement de l’agence et de son portefeuille clients",
      "Mise en place de solutions de sécurité numérique",
    ],
  },

  {
    title: "Assistant caméraman et monteur vidéo",
    company: "Communauté Arche de Vie Abondante",
    location: "Congo Brazzaville",
    period: "Fevrier 2022 - Present",
    type: "Temps partiel",
    description:
      "Photographie d'événements corporatifs, mariages et événements de l'eglise. Post-production et livraison de contenus haute qualité.",
    technologies: [
      { name: "Adobe Premiere Pro", icon:SiAdobepremierepro, color: "#777BB4" },
      { name: "Adobe After Effects", icon: SiAdobeaftereffects, color: "#777BB4" },
      { name: "Adobe Lightroom", icon: SiAdobelightroom, color: "#777BB4" },
      { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#777BB4" },

    ],
    achievements: [
      "Plus de 100 événements photographiés",
      "Taux de satisfaction client de 98%",
      "Développement d'un style photographique unique",
    ],
  },
  {
    title: "Community Manager",
    company: "FONDATION LEZIE BIZIKI",
    location: "Congo Brazzaville",
    period: "Sept. 2023 - Janv. 2025",
    type: "Temps partiel",
    description:
      "Gestion des réseaux sociaux et rédaction de contenu pour la fondation.",
    technologies: [
      { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
      { name: "Meta", icon: SiMeta, color: "#1C1E21" },
    ],
    achievements: [
      "Développement de la communauté et de la visibilité de la fondation",
    ],
  },
  {
    title: "Développeur web front-end",
    company: "Webtinix",
    location: "Sur site",
    period: "Août 2023 - Nov. 2023",
    type: "Stage",
    description:
      "Développement front-end de sites web pour divers clients.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
    achievements: [
      "Livraison de plusieurs sites web performants",
    ],
  },
  {
    title: "Assistant informatique",
    company: "ONG ATDUR",
    location: "Congo Brazzaville",
    period: "Août 2024 - Déc. 2024",
    type: "Stage",
    description:
      "Assistance informatique et gestion de projet au sein de l’ONG.",
    technologies: [
      { name: "Gestion de projet", color: "#61DAFB" }, // Remplacer par une icône adaptée si besoin
    ],
    achievements: [
      "Participation à la gestion de projets associatifs",
    ],
  },
  {
    title: "Membre de l’ONG",
    company: "ONG ATDUR",
    location: "Congo Brazzaville",
    period: "2020 - 2022",
    type: "Bénévolat",
    description:
      "Participation aux activités et projets de l’ONG.",
    technologies: [],
    achievements: [
      "Contribution à plusieurs projets sociaux",
    ],
  },
  {
    title: "Stagiaire",
    company: "PARTNERS ASSURANCES S.A.R.L",
    location: "Brazzaville, République du Congo",
    period: "Juil. 2021 - Sept. 2021",
    type: "Stage",
    description:
      "Stage en gestion administrative et informatique.",
    technologies: [],
    achievements: [
      "Soutien administratif et technique à l’équipe",
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
                        {Array.isArray(exp.technologies)
                          ? exp.technologies.map((tech, i) =>
                              typeof tech === "string" ? (
                                <Badge key={tech + i} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ) : (
                                <Badge
                                  key={tech.name + i}
                                  variant="outline"
                                  className="text-xs flex items-center gap-1"
                                  style={{ color: tech.color }}
                                >
                                  <tech.icon className="inline-block" />
                                  {tech.name}
                                </Badge>
                              )
                            )
                          : null}
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
