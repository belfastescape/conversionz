import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Finally, a web team that understands our industry. Our booking conversions increased 40% in the first month.",
    author: "Sarah Mitchell",
    role: "Owner, Enigma Escape Rooms",
    location: "Austin, TX"
  },
  {
    quote: "They knew exactly what we needed before we even asked. The booking integration is seamless and our Google rankings have never been better.",
    author: "Marcus Chen",
    role: "Director, Mystery Manor",
    location: "Portland, OR"
  },
  {
    quote: "Our old site loaded in 8 seconds. Now it's under 2. The difference in customer experience is night and day.",
    author: "Jennifer Adams",
    role: "Owner, Puzzle Palace",
    location: "Denver, CO"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-balance">
            Trusted by escape room{" "}
            <span className="gradient-text">operators worldwide</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
