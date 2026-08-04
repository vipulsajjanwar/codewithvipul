import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "AWS DevOps AI Agents",
    description:
      "Predictive auto-scaling and self-healing AI agent for AWS ECS Fargate with ML-driven forecasting, automated remediation, Slack notifications, and CloudWatch dashboards.",
    image: "/projects/devflow.jpg",
    url: "https://github.com/vipulsajjanwar/ai_agent_aws",
    technologies: ["Python", "AWS", "Terraform", "Lambda", "ML"],
  },
  {
    title: "Page Object Model - Stockmaster",
    description:
      "Production automation testing project built with Selenium WebDriver and Java. Demonstrates enterprise-grade Page Object Model patterns for scalable and maintainable test automation.",
    image: "/projects/codementor.jpg",
    url: "https://github.com/vipulsajjanwar/Page-Object-Model-",
    technologies: ["Java", "Selenium", "WebDriver", "Automation", "Testing"],
  },
  {
    title: "CodeWithVipul Portfolio",
    description:
      "Personal portfolio and tech blog showcasing QA, DevOps, Kubernetes, and automation testing projects. Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.",
    image: "/projects/pixelcraft.jpg",
    url: "https://github.com/vipulsajjanwar/codewithvipul",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel", "React"],
  },
  {
    title: "Java Programming Workshop",
    description:
      "Comprehensive Java learning repository covering fundamentals and advanced concepts. Educational resource for building strong Java programming foundations.",
    image: "/projects/cloudsync.jpg",
    url: "https://github.com/vipulsajjanwar/Java-Workshop",
    technologies: ["Java", "Programming", "Learning", "OOP", "Development"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-6" aria-label="Projects Section">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Showcasing my best automation frameworks and tools that demonstrate expertise in test automation, DevOps, and continuous delivery.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg backdrop-blur-xl bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col h-full hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-muted/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent group-hover:opacity-60 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative flex-1 p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:scale-110 transition-transform group-hover:brightness-125 duration-300"
                        style={{ transitionDelay: `${techIndex * 30}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All */}
          <div className="pt-8 animate-fade-in-up delay-500">
            <Link
              href="https://github.com/vipulsajjanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
              aria-label="View All Projects on GitHub - Opens in new tab"
            >
              View All Projects on GitHub
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
