import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight, 
  Calendar, 
  Code2, 
  Lightbulb, 
  MessageSquare, 
  Shield, 
  Users,
  CheckCircle2
} from "lucide-react"

const timeline = [
  {
    year: "2012",
    title: "Built My First Room",
    description: "Started my first escape room business, learning the industry from the ground up."
  },
  {
    year: "2015",
    title: "Expanded to 4 Locations",
    description: "Grew the business across multiple cities, understanding what makes rooms successful."
  },
  {
    year: "2018",
    title: "Frustrated by Web Options",
    description: "Struggled to find web agencies that understood escape rooms. Built my own solution."
  },
  {
    year: "2020",
    title: "Helped Fellow Operators",
    description: "Started helping other room owners with their websites during industry challenges."
  },
  {
    year: "2024",
    title: "Launched Locksmith Digital",
    description: "Turned years of experience into a dedicated service for escape room businesses."
  }
]

const expertise = [
  "Booking system integration (FareHarbor, Xola, Resova)",
  "Last-minute availability psychology",
  "Gift voucher page optimization",
  "Birthday and corporate group funnels",
  "Seasonal promotion strategies",
  "Review management integration",
  "Room description conversion copywriting",
  "Photo and video gallery best practices"
]

const values = [
  {
    icon: Lightbulb,
    title: "Fast Turnarounds",
    description: "We know you need to move fast. Most projects launch within 4-6 weeks."
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise charges. What you see is what you pay."
  },
  {
    icon: Users,
    title: "No Lock-In Contracts",
    description: "Ironic given our name, but we believe you should stay because you want to."
  },
  {
    icon: MessageSquare,
    title: "Real Humans",
    description: "You'll talk to people who've actually run escape rooms, not offshore support."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Story</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              Built by someone who's been{" "}
              <span className="gradient-text">inside the room</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              After 12 years of running escape rooms, I knew exactly what operators needed 
              from their websites. So I built it.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div>
              <h2 className="text-3xl font-bold mb-8">The Founder's Journey</h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-muted-foreground">
                  In 2012, I opened my first escape room. Like most operators, I quickly learned 
                  that running a successful room business is about so much more than designing 
                  great puzzles.
                </p>
                <p className="text-muted-foreground mt-4">
                  I needed a website that could handle group bookings, integrate with my calendar, 
                  show real-time availability, and convince corporate clients to book team building 
                  events. What I found instead were generic agencies charging premium prices for 
                  cookie-cutter templates.
                </p>
                <p className="text-muted-foreground mt-4">
                  They didn't understand why gift voucher pages matter. They'd never heard of 
                  FareHarbor. They had no idea that Friday evening slots book differently than 
                  Sunday afternoons.
                </p>
                <p className="text-muted-foreground mt-4">
                  So I learned to build what I needed myself. As my business grew to multiple 
                  locations, I refined those solutions. When fellow operators started asking 
                  for help, I realized I wasn't alone in my frustration.
                </p>
                <p className="text-foreground mt-4 font-medium">
                  Locksmith Digital exists because I've lived every challenge you're facing. 
                  Now I'm here to help you unlock your potential.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Our Timeline
              </h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">{item.year}</div>
                    <div className="flex-1 pb-8 border-l border-border pl-6 relative">
                      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1.5" />
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Understand */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Code2 className="w-32 h-32 text-primary/30" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-balance">
                What we understand{" "}
                <span className="gradient-text">that others don't</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Years of operating escape rooms taught us things no web agency could learn 
                from a discovery call. These insights are baked into everything we build.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-balance">
              How we work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Ready to work with someone who{" "}
            <span className="gradient-text">gets it?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's have a conversation about your escape room's web presence. 
            No hard sell — just honest advice from someone who's been in your shoes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book a Free Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
