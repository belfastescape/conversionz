"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Clock, CheckCircle2, Loader2 } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@conversionz.io",
    href: "mailto:hello@conversionz.io"
  },
  {
    icon: Phone,
    label: "Call us",
    value: "(555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    href: null
  }
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Get Started</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              Let's talk about{" "}
              <span className="gradient-text">your project</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              No hard sell. Just a conversation about your escape room and how we can help. 
              Fill out the form or book a call directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="p-8 rounded-2xl bg-card border border-border">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      We'll get back to you within 24 hours. In the meantime, feel free to explore our work.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input 
                          id="name" 
                          name="name"
                          placeholder="John Smith" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="john@escaperroom.com" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="business">Business Name</Label>
                        <Input 
                          id="business" 
                          name="business"
                          placeholder="Escape Room Co" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Current Website (if any)</Label>
                        <Input 
                          id="website" 
                          name="website"
                          type="url" 
                          placeholder="https://..." 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">What do you need?</Label>
                      <select 
                        id="service"
                        name="service"
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service...</option>
                        <option value="new-site">New website build</option>
                        <option value="redesign">Website redesign</option>
                        <option value="seo">SEO optimization</option>
                        <option value="maintenance">Ongoing maintenance</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your project</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Share details about your escape room, your goals, and any challenges you're facing..."
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We reply within 24 hours. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions? Want to discuss your project? We're here to help. 
                Reach out via email, phone, or use the contact form.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-lg font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Book a Call Card */}
              <div className="p-6 rounded-xl gradient-border">
                <h3 className="text-xl font-semibold mb-2">Prefer a call?</h3>
                <p className="text-muted-foreground mb-4">
                  Book a free 20-minute discovery call. No obligation, just a friendly 
                  conversation about your escape room's web presence.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule a Call
                </Button>
              </div>

              {/* Reassurance */}
              <div className="mt-8 p-6 rounded-xl bg-card/50 border border-border">
                <h3 className="font-semibold mb-4">What to expect</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>We'll respond within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>No pushy sales tactics — just honest advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>We'll assess your current site for free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>You'll get clear recommendations, even if we're not the right fit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
