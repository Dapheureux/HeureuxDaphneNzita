import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, MessageCircle, Award } from "lucide-react"

export function CommunitySection() {
  const achievements = [
    {
      icon: Users,
      title: "50K+ Followers",
      description: "Communauté active sur les réseaux sociaux",
      value: "50,000+",
    },
    {
      icon: TrendingUp,
      title: "Engagement Rate",
      description: "Taux d'engagement moyen sur les publications",
      value: "8.5%",
    },
    {
      icon: MessageCircle,
      title: "Interactions",
      description: "Interactions mensuelles avec la communauté",
      value: "25K+",
    },
    {
      icon: Award,
      title: "Campagnes",
      description: "Campagnes marketing réussies",
      value: "100+",
    },
  ]

  const services = [
    "Stratégie de contenu et planning éditorial",
    "Animation de communautés en ligne",
    "Gestion des réseaux sociaux",
    "Création de contenu engageant",
    "Analyse des performances et reporting",
    "Gestion de crise et modération",
  ]

  return (
    <section id="community" className="min-h-screen py-20 ml-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-anton text-4xl md:text-6xl font-bold mb-6">COMMUNITY MANAGEMENT</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Création et animation de communautés engagées. Stratégies de contenu, gestion des réseaux sociaux et
            développement de l'audience.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card
                key={achievement.title}
                className="hover-lift animate-fade-in-up text-center bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="font-anton text-2xl font-bold text-accent mb-2">{achievement.value}</div>
                  <h3 className="font-outfit font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Services */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-anton text-2xl font-bold text-center mb-8 animate-fade-in-up">MES SERVICES</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in-up bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                    <p className="font-outfit">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
