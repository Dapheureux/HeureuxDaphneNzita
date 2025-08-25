import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function DevelopmentSection() {
  const projects = [
    {
      title: "Application E-commerce",
      description: "Plateforme de vente en ligne complète avec panier, paiement et gestion des commandes",
      tech: ["React", "Next.js", "Stripe", "PostgreSQL"],
      image: "/modern-ecommerce-app.png",
    },
    {
      title: "Dashboard Analytics",
      description: "Interface d'analyse de données avec graphiques interactifs et rapports en temps réel",
      tech: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      image: "/analytics-dashboard.png",
    },
    {
      title: "App Mobile Social",
      description: "Application mobile de réseau social avec chat en temps réel et partage de contenu",
      tech: ["React Native", "Firebase", "Socket.io"],
      image: "/social-media-app.png",
    },
  ]

  return (
    <section id="developpement" className="min-h-screen py-20 ml-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-anton text-4xl md:text-6xl font-bold mb-6">DÉVELOPPEMENT</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Création d'applications web et mobile modernes, performantes et user-friendly. Expertise en React, Next.js,
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
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md font-outfit">
                      {tech}
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
