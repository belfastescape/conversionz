import Link from "next/link"
import { ArrowRight, Palette, Search, Server } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Design & Build",
    description: "Custom, mobile-first websites that capture the magic of your escape rooms. Booking system integration, gift voucher pages, and conversion-optimized room pages.",
    features: ["Custom designs", "Mobile-first", "Booking integration", "Gift vouchers"],
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Search,
    title: "SEO & Speed",
    description: "Get found on Google. Local SEO, Core Web Vitals optimization, and content strategy specifically for escape room businesses.",
    features: ["Local SEO", "Schema markup", "Speed optimization", "Monthly reports"],
    gradient: "from-accent/20 to-accent/5"
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    description: "Fully managed hosting on fast, secure servers. SSL certificates, backups, updates, and priority support when you need it most.",
    features: ["Managed hosting", "SSL & backups", "Regular updates", "Priority support"],
    gradient: "from-chart-3/20 to-chart-3/5"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Everything you need,{" "}
            <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars of service designed specifically for escape room businesses. 
            No fluff, no upsells — just what works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl gradient-border hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-50`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/services"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Explore {service.title}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
