"use client"

import { Card } from "@/components/ui/card"

export function IntroSection() {
  return (
    <section className="py-16 ml-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-lift animate-fade-in-up">
          <div className="text-center">
            <h2 className="font-anton text-2xl md:text-3xl font-bold mb-4 text-foreground">QUI SUIS-JE ?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionné par la création sous toutes ses formes, je combine développement web, community management,
              photographie et design pour créer des expériences digitales uniques. Mon approche multidisciplinaire me
              permet d&apos;offrir une vision globale et créative à chaque projet.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
