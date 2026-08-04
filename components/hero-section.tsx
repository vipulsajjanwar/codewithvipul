import Link from "next/link"
import Image from "next/image"

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
        {/* Left Column - Identity and Bio */}
        <div className="flex flex-col justify-center">
          {/* Glassmorphism Card */}
          <div className="group relative p-8 rounded-2xl backdrop-blur-xl bg-card/30 border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
            {/* Corner Accents with Hover Animation */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/40 rounded-tl-2xl transition-all duration-300 group-hover:w-16 group-hover:h-16 group-hover:border-cyan-400/70" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500/40 rounded-br-2xl transition-all duration-300 group-hover:w-16 group-hover:h-16 group-hover:border-purple-400/70" />
            
            <h1 className="text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-cyan-300 to-foreground bg-clip-text">
              Vipul Sajjanwar
            </h1>
            <h2 className="mt-6 text-base md:text-lg font-medium leading-relaxed text-muted-foreground max-w-lg">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 bg-clip-text font-semibold">SDET Engineer</span>
              {" | "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text font-semibold">Automation Framework Architect</span>
              {" | "}
              <span className="text-cyan-300">Selenium WebDriver Expert</span>
              {" | "}
              <span className="text-purple-300">CI/CD (Jenkins & Docker)</span>
              {" | "}
              <span className="text-blue-300">API & Performance Testing</span>
            </h2>

            {/* Navigation Links */}
            <nav className="mt-8 flex flex-col gap-4">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group/navlink flex items-center gap-4 text-sm uppercase tracking-widest text-muted-foreground transition-all hover:text-cyan-400"
                >
                  <span className="h-px w-8 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover/navlink:w-16 group-hover/navlink:shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  {link.label}
                </Link>
              ))}
            </nav>



            {/* Bio section */}
            <div className="mt-12 pt-10 border-t border-cyan-500/10 space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                I am a Software Development Engineer in Test (SDET) with 7.5+ years of experience designing scalable automation frameworks and delivering high-quality software across enterprise applications. My expertise includes UI, API, database, and performance testing using <span className="text-cyan-300 font-medium">Java</span>, <span className="text-purple-300 font-medium">Selenium WebDriver</span>, <span className="text-cyan-300 font-medium">TestNG</span>, <span className="text-purple-300 font-medium">Rest Assured</span>, and <span className="text-blue-300 font-medium">JMeter</span>.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                I specialize in building <span className="text-cyan-300 font-medium">maintainable test automation frameworks</span>, integrating automated testing into CI/CD pipelines with <span className="text-purple-300 font-medium">Jenkins</span> and <span className="text-blue-300 font-medium">Docker</span>, improving execution performance, and enabling reliable continuous delivery. I enjoy solving complex automation challenges, optimizing test execution, and creating reusable engineering solutions that increase development velocity and product quality.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Portrait */}
        <div className="flex flex-col justify-center items-center">
          {/* Animated background glow behind portrait */}
          <div className="absolute -right-20 top-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10" style={{ animationDelay: '1.5s' }} />
          
          {/* Glassmorphism Portrait Container */}
          <div className="group relative w-full max-w-sm">
            {/* Glowing border container */}
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Main portrait card */}
            <div className="relative p-2 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-card/40 via-card/30 to-card/20 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
              {/* Thin neon border accent */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/50 pointer-events-none" />
              
              {/* Corner accent - top left */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-400/60 rounded-tl-3xl" />
              
              {/* Corner accent - bottom right */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-purple-400/60 rounded-br-3xl" />
              
              {/* Portrait Image */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                <Image
                  src="/developer-portrait-image.png"
                  alt="Vipul Sajjanwar - Professional Portrait"
                  width={400}
                  height={500}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ aspectRatio: '4/5' }}
                />
                
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Experience badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-lg bg-card/60 border border-cyan-500/40 text-center">
                <p className="text-xs font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                  7.5+ Years Automation Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

