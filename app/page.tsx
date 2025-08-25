import { Navigation } from "@/components/navigation"
import { IntroSection } from "@/components/intro-section"
import { AboutSection } from "@/components/about-section"
import { DevelopmentSection } from "@/components/development-section"
import { DesignSection } from "@/components/design-section"
import { PhotographySection } from "@/components/photography-section"
import { CommunitySection } from "@/components/community-section"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { ExperienceSection } from "@/components/experience-section"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <div className="overflow-x-hidden">
        <HeroSection />
        <IntroSection />
        <AboutSection />
        <DevelopmentSection />
        <DesignSection />
        <PhotographySection />
        <CommunitySection />
        <ClientsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  )
}
