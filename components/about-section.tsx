import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Camera } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Développement",
      description: "Création d'applications web modernes avec React, Next.js, et les dernières technologies",
      color: "text-blue-500",
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Gestion et animation de communautés en ligne, stratégies de contenu et engagement",
      color: "text-green-500",
    },
    {
      icon: Camera,
      title: "Photographie",
      description: "Capture de moments uniques, portraits, paysages et photographie événementielle",
      color: "text-purple-500",
    },
  ]

  return (
    <section id="apropos" className="min-h-screen py-20 ml-0 md:ml-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-anton text-4xl md:text-6xl font-bold mb-6">À PROPOS</h2>
          <p className="font-outfit text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionné par la création sous toutes ses formes, je combine développement web, community management,
              photographie et design pour créer des expériences digitales uniques. Mon approche multidisciplinaire me
              permet d&apos;offrir une vision globale et créative à chaque projet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={skill.title}
                className="hover-lift animate-fade-in-up bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6`}>
                    <Icon className={`h-8 w-8 ${skill.color}`} />
                  </div>
                  <h3 className="font-anton text-xl font-bold mb-4">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Professional image section */}
        <div className="flex justify-center animate-scale-in">
          <div className="relative group">
            {/* Background decorative circle */}
            <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur-2xl -z-10 group-hover:from-accent/40 group-hover:to-accent/20 transition-all duration-500"></div>
            
            {/* Main image container */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-accent/30 hover-lift shadow-2xl group-hover:border-accent/50 transition-all duration-300">
              <Image 
                src="/Daph.png" 
                alt="Heureux Daphné N'ZITA" 
                width={288} 
                height={288} 
                className="w-full h-full object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6">
                <span className="text-white font-anton text-lg font-bold">Heureux Daphné</span>
                <span className="text-white/80 font-outfit font-bold text-sm">N&apos;ZITA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
