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
      <div className="cv-auto">
        <Marquee />
      </div>
      <div className="cv-auto">
        <ProblemSection />
      </div>
      <div className="cv-auto">
        <SolutionSection />
      </div>
      <div className="cv-auto">
        <ServicesSection />
      </div>
      <div className="cv-auto">
        <Testimonials />
      </div>
      <div className="cv-auto">
        <PricingTeaser />
      </div>
      <Footer />
    </main>
  )
}
