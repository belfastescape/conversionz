import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, X, HelpCircle } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    description: "For new rooms or simple sites",
    price: "$299",
    period: "/month",
    setupFee: "$1,500",
    featured: false,
    features: [
      { name: "Template-based design", included: true },
      { name: "Mobile responsive", included: true },
      { name: "Booking system integration", included: true },
      { name: "Basic SEO setup", included: true },
      { name: "Managed hosting", included: true },
      { name: "SSL certificate", included: true },
      { name: "1 hour monthly updates", included: true },
      { name: "Email support", included: true },
      { name: "Custom design", included: false },
      { name: "Full local SEO", included: false },
      { name: "Monthly SEO reporting", included: false },
      { name: "Priority support", included: false },
    ]
  },
  {
    name: "Growth",
    description: "For established rooms",
    price: "$499",
    period: "/month",
    setupFee: "$2,500",
    featured: true,
    features: [
      { name: "Semi-custom design", included: true },
      { name: "Mobile responsive", included: true },
      { name: "Booking system integration", included: true },
      { name: "Full local SEO", included: true },
      { name: "Managed hosting", included: true },
      { name: "SSL certificate", included: true },
      { name: "2 hours monthly updates", included: true },
      { name: "Email + chat support", included: true },
      { name: "Custom design", included: "partial" },
      { name: "Monthly SEO reporting", included: true },
      { name: "Gift voucher page", included: true },
      { name: "Corporate inquiry page", included: true },
    ]
  },
  {
    name: "Pro",
    description: "For multi-room operators",
    price: "$799",
    period: "/month",
    setupFee: "$4,000",
    featured: false,
    features: [
      { name: "Fully custom design", included: true },
      { name: "Mobile responsive", included: true },
      { name: "Booking system integration", included: true },
      { name: "Full SEO + content strategy", included: true },
      { name: "Managed hosting", included: true },
      { name: "SSL certificate", included: true },
      { name: "4 hours monthly updates", included: true },
      { name: "Priority support", included: true },
      { name: "Multi-location support", included: true },
      { name: "Monthly SEO reporting", included: true },
      { name: "Gift voucher page", included: true },
      { name: "Corporate inquiry page", included: true },
    ]
  }
]

const faqs = [
  {
    question: "Do I own my website if I cancel?",
    answer: "Yes. If you cancel, we'll provide you with a full export of your website files. You own your content and design work. We never hold your site hostage."
  },
  {
    question: "What booking systems do you integrate with?",
    answer: "We work with all major escape room booking systems including FareHarbor, Xola, Resova, Bookeo, and Peek Pro. If you use something else, just ask — we can likely integrate it."
  },
  {
    question: "How long does a new build take?",
    answer: "Most new websites launch within 4-6 weeks from kickoff. Complex multi-location sites may take 6-8 weeks. We'll give you a clear timeline during our discovery call."
  },
  {
    question: "Can you work with my existing domain?",
    answer: "Absolutely. We'll handle the technical setup of connecting your existing domain to your new site. No downtime, no hassle."
  },
  {
    question: "What if I already have a website?",
    answer: "We can rebuild from scratch or improve what you have. During our call, we'll assess your current site and recommend the best path forward."
  },
  {
    question: "Do you work with rooms outside the US?",
    answer: "Yes! We work with escape rooms worldwide. Our SEO strategies adapt to local markets, and we're experienced with international booking systems."
  },
  {
    question: "What's included in 'monthly maintenance'?",
    answer: "Hosting, security updates, backups, and content changes. Starter gets 1 hour, Growth gets 2 hours, and Pro gets 4 hours of content updates per month."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Of course. You can upgrade anytime. We'll prorate your billing and apply any setup fees as credits toward the higher tier."
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Pricing</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything included. No hidden fees. Pick the plan that fits your business, 
            and let's get started.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 ${
                  tier.featured 
                    ? 'gradient-border bg-card glow-teal' 
                    : 'bg-card border border-border'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    + {tier.setupFee} one-time setup
                  </p>
                </div>

                <Button 
                  className="w-full mb-8" 
                  variant={tier.featured ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included === true ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : feature.included === "partial" ? (
                        <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span className={feature.included ? '' : 'text-muted-foreground/50'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Not sure which plan is right for you?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Book a free 20-minute call
              </Link>
              {" "}and we'll help you decide.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-balance">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
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
            Ready to unlock your{" "}
            <span className="gradient-text">potential?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            No hard sell. Just a conversation about your escape room and how we can help.
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
