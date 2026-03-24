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
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-sm uppercase tracking-widest text-muted-foreground">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="https://github.com/vipulsajjanwar"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
        >
          View All Repositories
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}
