"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, User, Code, Camera, MessageSquare, Mail, Palette, Menu, X } from "lucide-react"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setMobileMenuOpen(false) // Close menu on mobile after clicking
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
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-20 bg-sidebar border-r border-sidebar-border z-50 flex-col items-center py-8 animate-slide-in-left">
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

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-sidebar border-b border-sidebar-border z-50 flex items-center justify-between px-4 py-3">
        <div className="text-sidebar-foreground font-anton font-bold">HDN</div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-sidebar border-b border-sidebar-border z-40 animate-slide-in-up">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full justify-start gap-3 transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Button>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
