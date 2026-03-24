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
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-sm uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-card/30 border border-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
            >
              {/* Glowing Border Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
              
              <div className="relative p-6">
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-purple-500/30 rounded-tr-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground group-hover:text-cyan-300 transition-colors">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`${techIndex % 2 === 0 ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30' : 'bg-purple-500/10 text-purple-300 border border-purple-500/30'} hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all`}
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
          className="group mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl bg-card/30 border border-cyan-500/30 text-foreground transition-all hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:text-cyan-300"
        >
          View All Repositories
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}
