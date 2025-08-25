import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Camera } from "lucide-react"

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
    <section id="apropos" className="min-h-screen py-20 ml-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-anton text-4xl md:text-6xl font-bold mb-6">À PROPOS</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Heureux Daphné N&apos;ZITA, Diplomé en Génie Logiciel avec une solide formation en Développement Informatique, je suis spécialisé dans les technologies Web ...
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

        {/* Photo placeholder for personal image */}
        <div className="flex justify-center animate-scale-in">
          <div className="relative group">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center hover-lift">
              <Camera className="h-16 w-16 text-accent" />
              <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-outfit">Votre Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
