"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of these channels.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <Link
              href="mailto:vipulsajjanwar07@gmail.com"
              className="group relative overflow-hidden rounded-lg backdrop-blur-xl bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-6 flex flex-col items-center text-center space-y-4 hover:-translate-y-1"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground break-all">
                  vipulsajjanwar07@gmail.com
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/vipulsajjanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg backdrop-blur-xl bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-6 flex flex-col items-center text-center space-y-4 hover:-translate-y-1"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">GitHub</h3>
                <p className="text-sm text-muted-foreground">
                  @vipulsajjanwar
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/vipulsajjanwar07/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg backdrop-blur-xl bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-6 flex flex-col items-center text-center space-y-4 hover:-translate-y-1"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">
                  vipulsajjanwar07
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="mailto:vipulsajjanwar07@gmail.com"
              className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30 inline-flex items-center justify-center gap-2 group"
            >
              Send Email
              <Mail className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://github.com/vipulsajjanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-primary px-8 py-3 font-medium text-primary transition-all hover:bg-primary/10 inline-flex items-center justify-center gap-2 group"
            >
              Visit GitHub
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
