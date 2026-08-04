"use client"

import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pb-24 pt-32 md:pt-40 overflow-hidden" aria-label="Hero Section - Introduction">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium text-sm tracking-wider uppercase animate-fade-in-up">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-in-up delay-100">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Vipul Sajjanwar
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground animate-fade-in-up delay-200">
                SDET Engineer & Automation Architect
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up delay-300">
              7.5+ years of experience designing scalable automation frameworks and delivering high-quality software. Expert in Java, Selenium WebDriver, TestNG, Rest Assured, and CI/CD pipelines with Jenkins and Docker.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#projects"
                className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-block text-center animate-fade-in-up delay-400 active:scale-95"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="rounded-lg border-2 border-primary px-8 py-3 font-medium text-primary transition-all hover:bg-primary/10 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-block text-center animate-fade-in-up delay-500 active:scale-95"
              >
                Get in Touch
              </Link>
            </div>

            {/* Tech Stack Preview */}
            <div className="pt-8 space-y-4 animate-fade-in-up delay-600">
              <p className="text-sm font-semibold text-muted-foreground">Expertise</p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Selenium', 'TestNG', 'REST API', 'JMeter', 'Jenkins', 'Docker', 'SQL'].map((tech, index) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary border border-primary/20 animate-fade-in-up hover:scale-110 transition-transform"
                    style={{ animationDelay: `${600 + index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center items-center animate-fade-in-up delay-200">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse" />
            <div className="relative w-full max-w-md">
              <div className="relative p-1 rounded-3xl backdrop-blur-xl bg-card/30 border border-primary/20 animate-float">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 group hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src="/developer-portrait-image.png"
                    alt="Vipul Sajjanwar - Professional Portrait"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ aspectRatio: '4/5' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/60 rounded-tl-2xl animate-fade-in-up delay-300" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-secondary/60 rounded-br-2xl animate-fade-in-up delay-400" />

                {/* Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-lg bg-card/60 border border-primary/40 text-center animate-fade-in-up delay-500">
                  <p className="text-xs font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    7.5+ Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

