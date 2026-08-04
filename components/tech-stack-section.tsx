"use client"

export function TechStackSection() {
  const techStack = [
    {
      category: "Programming Languages",
      technologies: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Shell"],
    },
    {
      category: "Automation & Testing",
      technologies: ["Selenium", "TestNG", "REST Assured", "Playwright", "JMeter"],
    },
    {
      category: "DevOps & Infrastructure",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform", "GitHub Actions"],
    },
    {
      category: "Cloud & Databases",
      technologies: ["AWS", "MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"],
    },
    {
      category: "Tools & Frameworks",
      technologies: ["Maven", "Gradle", "Git", "Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      category: "Methodologies",
      technologies: ["Agile", "CI/CD", "Test Automation", "DevOps", "API Testing"],
    },
  ]

  return (
    <section className="relative py-20 md:py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set covering automation, DevOps, cloud infrastructure, and modern development practices.
            </p>
          </div>

          {/* Tech Categories */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="relative overflow-hidden rounded-lg backdrop-blur-xl bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-6 space-y-4 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${100 + categoryIndex * 100}ms` }}
              >
                <h3 className="font-semibold text-foreground text-lg">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 p-8 rounded-lg backdrop-blur-xl bg-card/30 border border-primary/20 space-y-4 text-center animate-fade-in-up delay-500">
            <h3 className="text-2xl font-bold text-foreground">Full-Stack QA & DevOps Expertise</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Specialized in building enterprise-grade automation frameworks, implementing CI/CD pipelines, and managing cloud infrastructure. Proven experience in Java-based test automation, API testing with REST Assured, and AWS DevOps solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
