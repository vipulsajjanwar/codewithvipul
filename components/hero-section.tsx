import Link from "next/link"

export function HeroSection() {
  return (
    <section id="about" className="relative min-h-screen pb-24 pt-32 md:pt-40 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Identity */}
        <div className="flex flex-col justify-center">
          {/* Glassmorphism Card */}
          <div className="relative p-8 rounded-2xl backdrop-blur-xl bg-card/30 border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 opacity-50" style={{ padding: '1px' }} />
            
            <h1 className="text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-cyan-300 to-foreground bg-clip-text">
              Vipul Sajjanwar
            </h1>
            <h2 className="mt-4 text-xl font-medium md:text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI-SDET Test Engineer
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Building scalable automation frameworks and AI-driven testing strategies.
            </p>

            {/* Navigation Links */}
            <nav className="mt-12 flex flex-col gap-4">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-4 text-sm uppercase tracking-widest text-muted-foreground transition-all hover:text-cyan-400"
                >
                  <span className="h-px w-8 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all group-hover:w-16 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="mt-12 flex gap-5">
              {[
                { href: "https://github.com/vipulsajjanwar", label: "GitHub", icon: "github" },
                { href: "https://www.linkedin.com/in/vipulsajjanwar07/", label: "LinkedIn", icon: "linkedin" },
                { href: "https://medium.com/@vipulsajjanwar144", label: "Medium", icon: "medium" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-lg bg-card/50 border border-cyan-500/20 text-muted-foreground transition-all hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Bio */}
        <div className="flex flex-col justify-center">
          {/* Glassmorphism Card for Bio */}
          <div className="relative p-8 rounded-2xl backdrop-blur-xl bg-card/30 border border-purple-500/20 shadow-[0_0_30px_rgba(147,51,234,0.1)]">
            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-500/40 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-purple-500/40 rounded-br-2xl" />
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {"I'm a meticulous and passionate "}
                <span className="font-medium text-cyan-300">Test Automation Engineer</span>
                {" with 7+ years of experience delivering high-quality, scalable automation frameworks. My expertise spans "}
                <span className="font-medium text-purple-300">Web, API, and Performance Testing</span>
                {", with a growing interest in AI-driven testing strategies and autonomous agents."}
              </p>
              <p className="text-lg leading-relaxed">
                {"Currently enhancing legacy frameworks by integrating modern practices like "}
                <span className="font-medium text-cyan-300">Selenium Grid</span>
                {", "}
                <span className="font-medium text-purple-300">Docker</span>
                {", and "}
                <span className="font-medium text-cyan-300">Jenkins</span>
                {". I'm also exploring the use of AI agents for autonomous testing, self-healing test scripts, and dynamic data generation."}
              </p>
              <p className="text-lg leading-relaxed">
                {"Building hybrid frameworks using "}
                <span className="font-medium text-purple-300">Java</span>
                {", "}
                <span className="font-medium text-cyan-300">TestNG</span>
                {", "}
                <span className="font-medium text-purple-300">Maven</span>
                {", and POM design. Deep experience in API & UI performance testing using JMeter, Postman, and Newman."}
              </p>
              <p className="text-lg leading-relaxed">
                {"Clean code, modular design, and continuous optimization are my go-to principles. Integrating AI, analytics, and self-serve reporting into test pipelines for smarter debugging and traceability."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    github: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    medium: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  }
  return icons[name] || null
}
