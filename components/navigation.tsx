import Link from "next/link"
import { Menu, Key } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Key className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              convER<span className="text-primary">sionz.io</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle (no client-side hydration needed) */}
          <details className="md:hidden group">
            <summary className="list-none p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <span className="sr-only">Toggle menu</span>
              <Menu className="w-6 h-6" />
            </summary>
            <div className="fixed left-0 right-0 top-16 bg-card border-b border-border z-50">
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="w-full mt-4">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}
