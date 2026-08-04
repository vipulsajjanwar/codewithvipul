"use client"

import Link from "next/link"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Vipul Sajjanwar
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </nav>

        <div>
          <Link
            href="#contact"
            className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
