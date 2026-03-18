const items = [
  "Web Design",
  "SEO Optimization",
  "Booking Integration",
  "Speed Optimization",
  "Local SEO",
  "Gift Vouchers",
  "Corporate Pages",
  "Mobile-First",
  "Custom Builds",
  "Managed Hosting"
]

export function Marquee() {
  return (
    <div className="py-12 overflow-hidden border-y border-border bg-card/50">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-2xl md:text-3xl font-bold text-muted-foreground/30 uppercase tracking-wider">
              {item}
            </span>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
