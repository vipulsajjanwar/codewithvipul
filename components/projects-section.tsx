import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "AutoVerse",
    description:
      "A scalable test automation framework designed for enterprise-level testing with modular architecture, data-driven testing, and comprehensive reporting capabilities.",
    image: "/projects/devflow.jpg",
    url: "https://github.com/vipulsajjanwar/AutoVerse",
    technologies: ["Java", "Selenium", "TestNG", "Maven", "ExtentReports"],
  },
  {
    title: "AutoGenAI",
    description:
      "AI-powered test generation tool that leverages machine learning for autonomous testing, self-healing scripts, and intelligent test case creation.",
    image: "/projects/codementor.jpg",
    url: "https://github.com/vipulsajjanwar/AutoGenAI",
    technologies: ["Python", "AI/ML", "Selenium", "REST API", "Jenkins"],
  },
  {
    title: "REST API Test",
    description:
      "Enterprise-grade REST Assured API automation framework with chain testing capabilities, comprehensive validation, and seamless CI/CD integration.",
    image: "/projects/pixelcraft.jpg",
    url: "https://github.com/vipulsajjanwar/rest-api-test",
    technologies: ["Java", "REST Assured", "TestNG", "Maven", "Postman"],
  },
  {
    title: "Dockerized ELK Stack",
    description:
      "A complete Docker-based ELK (Elasticsearch, Logstash, Kibana) stack setup for test analytics, real-time dashboards, and automated log analysis.",
    image: "/projects/cloudsync.jpg",
    url: "https://github.com/vipulsajjanwar/dockerized-elk-stack",
    technologies: ["Docker", "Elasticsearch", "Kibana", "Logstash", "DevOps"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-6" aria-label="Projects Section">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
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
                className="group relative overflow-hidden rounded-lg backdrop-blur-xl bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col h-full hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-muted/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
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
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
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
          <div className="pt-8">
            <Link
              href="https://github.com/vipulsajjanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="View All Projects on GitHub - Opens in new tab"
            >
              View All Projects on GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
