import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

const featuredPost = {
  slug: "why-your-escape-room-website-is-losing-bookings",
  title: "Why Your Escape Room Website Is Losing Bookings (And How to Fix It)",
  excerpt: "Most escape room websites make the same critical mistakes that cost them bookings every day. Here's what to look for and how to turn your site into a conversion machine.",
  author: "Alex Thompson",
  date: "March 15, 2026",
  readTime: "8 min read",
  category: "Conversion"
}

const posts = [
  {
    slug: "best-booking-systems-for-escape-rooms-compared",
    title: "The Best Booking Systems for Escape Rooms Compared",
    excerpt: "FareHarbor, Xola, Resova, Bookeo — which booking system is right for your escape room? We break down the pros, cons, and pricing.",
    author: "Alex Thompson",
    date: "March 10, 2026",
    readTime: "12 min read",
    category: "Tools"
  },
  {
    slug: "local-seo-for-escape-rooms",
    title: "Local SEO for Escape Rooms: A Practical Guide",
    excerpt: "How to rank higher in Google Maps and local search results. Actionable steps you can take today to get more visibility.",
    author: "Alex Thompson",
    date: "March 5, 2026",
    readTime: "10 min read",
    category: "SEO"
  },
  {
    slug: "what-makes-a-great-escape-room-page",
    title: "What Makes a Great Escape Room Page?",
    excerpt: "The anatomy of a high-converting room description page. Copy, images, and layout techniques that turn browsers into bookers.",
    author: "Alex Thompson",
    date: "February 28, 2026",
    readTime: "7 min read",
    category: "Design"
  },
  {
    slug: "how-fast-should-your-website-be",
    title: "How Fast Should Your Escape Room Website Be?",
    excerpt: "Page speed matters more than you think. Learn what Core Web Vitals are and why they affect your bookings.",
    author: "Alex Thompson",
    date: "February 20, 2026",
    readTime: "6 min read",
    category: "Performance"
  },
  {
    slug: "corporate-bookings-website-conversion",
    title: "Corporate Group Bookings: Is Your Website Converting Them?",
    excerpt: "Team building bookings are high-value but require different conversion strategies. Here's how to optimize for corporate groups.",
    author: "Alex Thompson",
    date: "February 15, 2026",
    readTime: "9 min read",
    category: "Conversion"
  },
  {
    slug: "gift-voucher-page-optimization",
    title: "Gift Voucher Pages That Actually Sell",
    excerpt: "Gift vouchers can be a major revenue driver — if your page is designed right. Learn the elements of a high-converting voucher experience.",
    author: "Alex Thompson",
    date: "February 10, 2026",
    readTime: "8 min read",
    category: "Conversion"
  }
]

const categories = [
  { name: "All", count: 7 },
  { name: "Conversion", count: 3 },
  { name: "SEO", count: 1 },
  { name: "Design", count: 1 },
  { name: "Performance", count: 1 },
  { name: "Tools", count: 1 }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Blog & Resources</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              Insights for escape room{" "}
              <span className="gradient-text">operators</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Practical guides, industry insights, and actionable tips to grow your escape room business online.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
              {/* Image Placeholder */}
              <div className="aspect-video lg:aspect-square rounded-xl bg-gradient-to-br from-primary/20 via-card to-accent/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-muted-foreground/20">Featured</span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm w-fit mb-4">
                  {featuredPost.category}
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                        index === 0 
                          ? 'bg-primary/10 text-primary' 
                          : 'hover:bg-card text-muted-foreground hover:text-foreground'
                      }`}>
                        <span>{category.name}</span>
                        <span className="text-xs">{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Newsletter */}
                <div className="mt-8 p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold mb-2">Stay updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get new articles delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                    <Button size="sm" className="w-full">Subscribe</Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <Link 
                    key={index}
                    href={`/blog/${post.slug}`}
                    className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-muted-foreground/20">{index + 1}</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs mb-3">
                      {post.category}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline">
                  Load More Articles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Ready to put these insights{" "}
            <span className="gradient-text">into action?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you implement these strategies for your escape room.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
