"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    period: "2024 - Present",
    title: "Senior SDET Engineer",
    company: "Tech Innovation Labs",
    description: "Leading automation framework architecture and mentoring junior engineers. Reduced test execution time by 40% through performance optimization.",
    highlights: ["Framework Leadership", "Performance Optimization", "Team Mentoring"],
  },
  {
    period: "2021 - 2023",
    title: "SDET Engineer",
    company: "Enterprise Solutions Inc",
    description: "Designed and implemented comprehensive test automation frameworks for enterprise applications. Integrated CI/CD pipelines with Jenkins and Docker.",
    highlights: ["CI/CD Integration", "Framework Design", "Cross-browser Testing"],
  },
  {
    period: "2019 - 2021",
    title: "QA Automation Engineer",
    company: "Digital Dynamics",
    description: "Developed Selenium-based automation scripts and REST API testing frameworks. Implemented database validation tests and performance testing.",
    highlights: ["Selenium Automation", "API Testing", "Database Testing"],
  },
  {
    period: "2017 - 2019",
    title: "Test Automation Developer",
    company: "Software Solutions Group",
    description: "Started career in automation testing. Built initial automation frameworks and documented testing procedures and best practices.",
    highlights: ["Framework Building", "Documentation", "Best Practices"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A timeline of my career progression and key achievements in automation testing and framework development.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Timeline line and dot */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-1/2" />
                <div className="absolute left-0 top-6 w-2 h-2 rounded-full bg-primary -translate-x-0.75 md:left-1/2 md:-translate-x-0.75" />

                {/* Content */}
                <div className={`md:grid md:grid-cols-2 md:gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Text content */}
                  <motion.div
                    className={`ml-8 md:ml-0 space-y-4 ${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}
                    whileHover={{ x: index % 2 === 0 ? -8 : 8 }}
                  >
                    <p className="text-sm font-medium text-primary">{exp.period}</p>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
