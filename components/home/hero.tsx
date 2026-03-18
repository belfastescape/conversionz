import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary">12+ Years in the Escape Room Industry</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Your escape room deserves a website{" "}
              <span className="gradient-text">as good as your rooms.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Built by someone who's been inside the room. We understand your business model, 
              your booking flow, and your audience — because we've lived it.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="text-base px-8">
                <Link href="/pricing">
                  See Our Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/portfolio">
                  <Play className="mr-2 w-4 h-4" />
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Rooms Launched</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">140%</div>
                <div className="text-sm text-muted-foreground">Avg Traffic Increase</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">1.2s</div>
                <div className="text-sm text-muted-foreground">Avg Load Time</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden gradient-border glow-teal">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Unlock Your Potential</h3>
                  <p className="text-muted-foreground">Custom websites built for the escape room industry</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-pulse">
              <span className="text-2xl font-bold text-accent">SEO</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">95+</div>
                <div className="text-xs text-muted-foreground">Lighthouse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
