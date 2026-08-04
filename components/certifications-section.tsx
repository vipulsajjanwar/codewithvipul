"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Certified Selenium WebDriver Expert",
    issuer: "Selenium Training Academy",
    year: "2023",
    description: "Advanced expertise in Selenium WebDriver automation and framework design",
  },
  {
    title: "ISTQB Certified Test Engineer",
    issuer: "International Software Testing Qualifications Board",
    year: "2021",
    description: "Professional certification in software testing methodologies and practices",
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    year: "2022",
    description: "Proficiency in containerization and Docker ecosystem",
  },
  {
    title: "Jenkins Certified Engineer",
    issuer: "Linux Academy",
    year: "2021",
    description: "Advanced CI/CD pipeline design and Jenkins administration",
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023",
    description: "Cloud-based testing infrastructure and AWS services integration",
  },
  {
    title: "JMeter Performance Testing",
    issuer: "Apache JMeter",
    year: "2022",
    description: "Load testing and performance testing with JMeter",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 md:py-32 px-6">
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
                Certifications & Credentials
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Industry-recognized certifications demonstrating commitment to professional excellence and continuous learning.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-lg border border-primary/10 bg-card/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Icon */}
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm font-medium text-accent mb-2">{cert.issuer}</p>

                <p className="text-xs text-muted-foreground mb-3">{cert.year}</p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
