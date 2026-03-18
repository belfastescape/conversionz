import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/home/hero"
import { ProblemSection } from "@/components/home/problem-section"
import { SolutionSection } from "@/components/home/solution-section"
import { ServicesSection } from "@/components/home/services-section"
import { Marquee } from "@/components/home/marquee"
import { Testimonials } from "@/components/home/testimonials"
import { PricingTeaser } from "@/components/home/pricing-teaser"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Marquee />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <Testimonials />
      <PricingTeaser />
      <Footer />
    </main>
  )
}
