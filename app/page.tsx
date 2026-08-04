import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { GitHubStatsSection } from "@/components/github-stats-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <GitHubStatsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
