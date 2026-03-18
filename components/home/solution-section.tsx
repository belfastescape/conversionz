import { CheckCircle2, Zap, Users, TrendingUp } from "lucide-react"

const solutions = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-2-second load times. Core Web Vitals optimized. Your site flies."
  },
  {
    icon: Users,
    title: "Built by Operators",
    description: "We've run escape rooms. We know the booking psychology that converts."
  },
  {
    icon: TrendingUp,
    title: "SEO That Works",
    description: "Local SEO, schema markup, and content strategy that gets you found."
  },
  {
    icon: CheckCircle2,
    title: "Industry Integrations",
    description: "FareHarbor, Xola, Resova — we integrate with your booking system seamlessly."
  }
]

export function SolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl gradient-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-accent/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8 w-full">
                  {solutions.map((solution, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border"
                    >
                      <solution.icon className="w-8 h-8 text-primary mb-2" />
                      <div className="text-sm font-medium">{solution.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">The Solution</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              We do it{" "}
              <span className="gradient-text">differently</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Built by an operator, for operators. After 12 years running escape rooms, 
              we've built the websites we wished existed. Now we're building them for you.
            </p>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
