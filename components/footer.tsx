import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 overflow-hidden animate-fade-in-up" role="contentinfo">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="space-y-8">
          {/* Links and Info */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div className="space-y-2 animate-fade-in-up delay-100">
              <h3 className="font-semibold text-foreground">Vipul Sajjanwar</h3>
              <p className="text-sm text-muted-foreground">SDET Engineer & Automation Architect</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 animate-fade-in-up delay-200">
              <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">Navigation</h4>
              <nav className="flex flex-col gap-2 text-sm" aria-label="Footer Navigation">
                {[
                  { href: "#hero", label: "Home" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${200 + index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-3 animate-fade-in-up delay-300">
              <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">Connect</h4>
              <nav className="flex flex-col gap-2 text-sm" aria-label="Social Links">
                {[
                  { href: "https://github.com/vipulsajjanwar", label: "GitHub" },
                  { href: "https://www.linkedin.com/in/vipulsajjanwar07/", label: "LinkedIn" },
                  { href: "mailto:vipulsajjanwar07@gmail.com", label: "Email" },
                ].map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${300 + index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-fade-in delay-500" />

          {/* Copyright */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-muted-foreground animate-fade-in-up delay-600">
            <p>
              Designed & Built by{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                Vipul Sajjanwar
              </span>
            </p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
