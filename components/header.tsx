"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
]

const socialLinks = [
  { href: "https://github.com/vipulsajjanwar", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/vipulsajjanwar07/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
]

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-500/20 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all">
          VS
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted-foreground transition-all hover:text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-400 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2 rounded-lg bg-card/30 border border-cyan-500/20 text-muted-foreground transition-all hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
