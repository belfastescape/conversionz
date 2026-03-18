import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Gauge, TrendingUp, Clock } from "lucide-react"

const caseStudies = [
  {
    name: "Enigma Escape Rooms",
    location: "Austin, TX",
    category: "Multi-Room Operator",
    challenge: "Outdated website with 8+ second load times. Poor mobile experience. No local SEO strategy causing loss of traffic to competitors.",
    solution: "Complete redesign with custom booking integration, local SEO overhaul, and Core Web Vitals optimization.",
    results: [
      { label: "Traffic Increase", value: "140%", icon: TrendingUp },
      { label: "Load Time", value: "1.2s", sublabel: "from 8.4s", icon: Clock },
      { label: "Lighthouse Score", value: "96", icon: Gauge }
    ],
    color: "primary"
  },
  {
    name: "Mystery Manor",
    location: "Portland, OR",
    category: "Single Location",
    challenge: "Generic template site that didn't capture the Victorian horror theme of their rooms. Gift voucher sales were almost non-existent.",
    solution: "Immersive custom design matching their brand, dedicated gift voucher flow, and corporate booking pages.",
    results: [
      { label: "Gift Voucher Sales", value: "+85%", icon: TrendingUp },
      { label: "Load Time", value: "1.8s", sublabel: "from 6.2s", icon: Clock },
      { label: "Lighthouse Score", value: "92", icon: Gauge }
    ],
    color: "accent"
  },
  {
    name: "Puzzle Palace",
    location: "Denver, CO",
    category: "Multi-Room Operator",
    challenge: "Booking system was not properly integrated, causing double bookings and customer frustration. Mobile users couldn't complete bookings.",
    solution: "Seamless FareHarbor integration, mobile-first rebuild, and real-time availability display.",
    results: [
      { label: "Booking Conversion", value: "+62%", icon: TrendingUp },
      { label: "Load Time", value: "1.4s", sublabel: "from 5.8s", icon: Clock },
      { label: "Lighthouse Score", value: "94", icon: Gauge }
    ],
    color: "chart-3"
  },
  {
    name: "Escape Factory",
    location: "Seattle, WA",
    category: "New Business",
    challenge: "Brand new escape room with no web presence. Needed to launch quickly with a professional site that could compete with established rooms.",
    solution: "Fast-track custom build with SEO foundation, booking integration, and social proof elements from day one.",
    results: [
      { label: "Launch Time", value: "4 wks", icon: Clock },
      { label: "First Month Bookings", value: "280+", icon: TrendingUp },
      { label: "Lighthouse Score", value: "98", icon: Gauge }
    ],
    color: "primary"
  }
]

const stats = [
  { value: "50+", label: "Escape Rooms Launched" },
  { value: "140%", label: "Average Traffic Increase" },
  { value: "1.5s", label: "Average Load Time" },
  { value: "95+", label: "Average Lighthouse Score" }
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Work</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              Escape rooms we've helped{" "}
              <span className="gradient-text">unlock success</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Real results from real escape room businesses. See how we've transformed 
              online presences and driven measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="grid lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                {/* Left - Visual Placeholder */}
                <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden gradient-border">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${study.color}/20 via-card to-${study.color}/10`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-4xl font-bold mb-2">{study.name}</div>
                      <div className="text-muted-foreground">{study.location}</div>
                    </div>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm w-fit mb-4">
                    {study.category}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{study.name}</h3>
                  <p className="text-muted-foreground mb-6">{study.location}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">The Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-background border border-border">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <result.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="text-xl font-bold">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                        {result.sublabel && (
                          <div className="text-xs text-muted-foreground/60">{result.sublabel}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">More projects</h2>
            <p className="text-muted-foreground">A selection of escape room websites we've built</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "The Great Escape", location: "Chicago, IL" },
              { name: "Room Raiders", location: "Miami, FL" },
              { name: "Clue Quest", location: "Boston, MA" },
              { name: "Breakout Zone", location: "Nashville, TN" },
              { name: "The Locked Room", location: "Phoenix, AZ" },
              { name: "Escape Reality", location: "San Diego, CA" },
            ].map((project, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground/30">{project.name.charAt(0)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Want results like these?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's talk about how we can transform your escape room's online presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
