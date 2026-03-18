import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight,
  Palette,
  Smartphone,
  Calendar,
  Gift,
  Users,
  Image,
  FileText,
  Search,
  MapPin,
  Gauge,
  BarChart3,
  FileSearch,
  Server,
  Shield,
  RefreshCw,
  Wrench,
  HeadphonesIcon,
  CheckCircle2
} from "lucide-react"

const designFeatures = [
  {
    icon: Palette,
    title: "Custom Designs",
    description: "No templates. Every site is designed specifically for your brand and rooms."
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "70% of your traffic is mobile. We design for phones first, desktop second."
  },
  {
    icon: Calendar,
    title: "Booking Integration",
    description: "Seamless integration with FareHarbor, Xola, Resova, and other booking systems."
  },
  {
    icon: Gift,
    title: "Gift Voucher Pages",
    description: "High-converting gift voucher experiences that drive holiday and birthday sales."
  },
  {
    icon: Users,
    title: "Corporate & Group Pages",
    description: "Dedicated pages for team building enquiries with custom forms and pricing."
  },
  {
    icon: Image,
    title: "Photo & Video Galleries",
    description: "Showcase your rooms with fast-loading, immersive media galleries."
  },
  {
    icon: FileText,
    title: "Room Description Pages",
    description: "Conversion-optimized room pages that turn browsers into bookers."
  }
]

const seoFeatures = [
  {
    icon: MapPin,
    title: "Local SEO Setup",
    description: "Google Business Profile optimization, local citations, and map pack strategies."
  },
  {
    icon: Search,
    title: "Keyword Research",
    description: "Escape room-specific keyword research to capture high-intent searchers."
  },
  {
    icon: Gauge,
    title: "Core Web Vitals",
    description: "Page speed optimization that meets Google's performance standards."
  },
  {
    icon: BarChart3,
    title: "Monthly Reporting",
    description: "Clear, actionable reports on rankings, traffic, and booking conversions."
  },
  {
    icon: FileSearch,
    title: "Schema Markup",
    description: "Rich snippets that make your search results stand out from competitors."
  },
  {
    icon: FileText,
    title: "Content Guidance",
    description: "Strategic content recommendations to build topical authority."
  }
]

const hostingFeatures = [
  {
    icon: Server,
    title: "Managed Hosting",
    description: "Fast, secure servers optimized for speed. No shared hosting nightmares."
  },
  {
    icon: Shield,
    title: "SSL Certificates",
    description: "Free SSL included. Secure checkout builds trust with bookers."
  },
  {
    icon: RefreshCw,
    title: "Regular Backups",
    description: "Automated daily backups so you never lose your content."
  },
  {
    icon: Wrench,
    title: "Software Updates",
    description: "We handle all updates, patches, and compatibility fixes."
  },
  {
    icon: FileText,
    title: "Content Updates",
    description: "Small content changes included in your monthly plan."
  },
  {
    icon: HeadphonesIcon,
    title: "Priority Support",
    description: "Fast response times, especially during your busiest periods."
  }
]

const integrations = [
  "FareHarbor",
  "Xola",
  "Resova",
  "Bookeo",
  "Peek Pro",
  "Square",
  "Google Analytics",
  "Google Tag Manager",
  "Meta Pixel",
  "Mailchimp",
  "Klaviyo",
  "TripAdvisor"
]

export default function ServicesPage() {
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
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              Everything your escape room{" "}
              <span className="gradient-text">needs online</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Three pillars of service, designed specifically for escape room businesses. 
              No fluff, no upsells — just what works.
            </p>
          </div>
        </div>
      </section>

      {/* Design & Build */}
      <section id="design" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Palette className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">Service 01</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Web Design & Build
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Custom websites that capture the magic of your escape rooms. Every element 
                is designed to convert visitors into bookers, from the hero to the booking button.
              </p>
              <Button asChild>
                <Link href="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {designFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO & Speed */}
      <section id="seo" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4">
              {seoFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Search className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent">Service 02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                SEO & Speed Optimization
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get found on Google. Our local SEO strategies are specifically designed 
                for escape rooms, targeting the high-intent searches that lead to bookings.
              </p>
              <Button variant="outline" asChild>
                <Link href="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting & Maintenance */}
      <section id="hosting" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-3/10 border border-chart-3/20 mb-6">
                <Server className="w-4 h-4 text-chart-3" />
                <span className="text-sm text-chart-3">Service 03</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Hosting & Ongoing Maintenance
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Set it and forget it. We handle all the technical stuff so you can focus 
                on running your rooms. Fast servers, secure hosting, and always-on support.
              </p>
              <Button variant="outline" asChild>
                <Link href="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {hostingFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl bg-background border border-border hover:border-chart-3/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-chart-3 mb-3" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Integrations</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Works with your tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We integrate seamlessly with the booking systems and marketing tools 
              you're already using.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="px-6 py-3 rounded-full bg-card border border-border flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Ready to transform your{" "}
            <span className="gradient-text">online presence?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how these services can work together to grow your escape room business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/pricing">
                View Our Plans
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Book a Free Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
