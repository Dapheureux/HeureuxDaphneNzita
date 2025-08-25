"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, User, Code, Camera, MessageSquare, Mail, Palette } from "lucide-react"

const navItems = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "apropos", label: "À propos", icon: User },
  { id: "developpement", label: "Développement", icon: Code },
  { id: "design", label: "Design", icon: Palette },
  { id: "photographie", label: "Photographie", icon: Camera },
  { id: "community", label: "Community", icon: MessageSquare },
  { id: "contact", label: "Contact", icon: Mail },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("accueil")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-sidebar border-r border-sidebar-border z-50 flex flex-col items-center py-8 animate-slide-in-left">
      <div className="mb-8">
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {navItems.map((item, index) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="icon"
              onClick={() => scrollToSection(item.id)}
              className={`hover-lift transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-sidebar-accent text-sidebar-accent-foreground animate-pulse-glow"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
