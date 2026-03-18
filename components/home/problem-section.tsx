import { AlertTriangle, Clock, Smartphone, Search } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Painfully Slow",
    description: "8+ second load times kill conversions. Visitors leave before seeing your rooms."
  },
  {
    icon: Smartphone,
    title: "Broken on Mobile",
    description: "70% of bookings come from phones. Is your site ready for them?"
  },
  {
    icon: Search,
    title: "Invisible to Google",
    description: "No SEO strategy means you're losing customers to competitors every day."
  },
  {
    icon: AlertTriangle,
    title: "Generic Templates",
    description: "Cookie-cutter designs that don't capture the magic of your escape rooms."
  }
]

export function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Most escape room websites are{" "}
            <span className="text-destructive">losing you bookings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Generic agencies don't understand escape rooms. They build slow, outdated sites 
            with booking pages that frustrate customers instead of converting them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-destructive/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
