"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Social from './social';

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Développeur FullStack • Community Manager • Photographe"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-32 h-32 bg-accent/15 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 ml-20">
        <div className="animate-fade-in-up">
          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl font-bold mb-6 glitch" data-text="DAPH N'ZITA">
            DAPH N&apos;ZITA
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground font-outfit">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex justify-center animate-scale-in" style={{ animationDelay: "1s" }}>
              <Social/>
          </div>

          <Button
            size="lg"
            className="animate-pulse-glow hover-lift"
            onClick={() => document.getElementById("apropos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Découvrir mon travail
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-accent" />
      </div>
    </section>
  )
}
