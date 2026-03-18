import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Custom website design",
  "Booking system integration",
  "SEO optimization",
  "Managed hosting",
  "Monthly maintenance",
  "Priority support"
]

export function PricingTeaser() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl gradient-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-accent/10" />
          
          <div className="relative z-10 p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Simple Pricing</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
                  Plans from{" "}
                  <span className="gradient-text">$299/month</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Everything included. No hidden fees. No surprises. 
                  Just a beautiful, fast website that books more rooms.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/pricing">
                      View All Plans
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Book a Call</Link>
                  </Button>
                </div>
              </div>

              {/* Right */}
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-6">Every plan includes:</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
