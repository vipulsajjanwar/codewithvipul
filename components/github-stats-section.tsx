"use client"

import Link from "next/link"
import { Github } from "lucide-react"

export function GitHubStatsSection() {
  const stats = [
    {
      label: "Public Repositories",
      value: "10",
      description: "Active projects and contributions",
    },
    {
      label: "Followers",
      value: "5",
      description: "Community engagement",
    },
    {
      label: "Years in QA",
      value: "7+",
      description: "Professional experience",
    },
    {
      label: "Following",
      value: "7",
      description: "Staying connected",
    },
  ]

  return (
    <section className="relative py-20 md:py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-3">
              <Github className="h-8 w-8 text-primary" />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                GitHub Presence
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open-source contributor committed to sharing automation expertise and DevOps knowledge with the community.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-lg backdrop-blur-xl bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-6 text-center space-y-3 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{stat.label}</h3>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up delay-500">
            <Link
              href="https://github.com/vipulsajjanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95"
            >
              <Github className="h-4 w-4" />
              Explore Full Profile on GitHub
            </Link>
          </div>

          {/* Featured Repositories Info */}
          <div className="mt-12 space-y-4 text-center animate-fade-in-up delay-600">
            <h3 className="text-2xl font-bold text-foreground">Featured Repositories</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out my latest projects including AI DevOps agents, automation frameworks, and portfolio projects on GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
