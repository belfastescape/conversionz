import Link from "next/link"
import { Key, Mail, Phone } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Work" },
    { href: "/blog", label: "Blog" },
  ],
  services: [
    { href: "/services#design", label: "Design & Build" },
    { href: "/services#seo", label: "SEO & Speed" },
    { href: "/services#hosting", label: "Hosting" },
    { href: "/pricing", label: "Pricing" },
  ],
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-border">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to unlock your{" "}
            <span className="gradient-text">potential?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's talk about how we can transform your escape room's online presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:hello@locksmithdigital.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@locksmithdigital.com
            </Link>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <Link
              href="tel:+15551234567"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Key className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-semibold">
                Locksmith <span className="text-primary">Digital</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Built by someone who's been inside the room.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Locksmith Digital. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion for the escape room industry.
          </p>
        </div>
      </div>
    </footer>
  )
}
