"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:vipulsajjanwar07@gmail.com",
    text: "vipulsajjanwar07@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/vipulsajjanwar",
    text: "github.com/vipulsajjanwar",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vipulsajjanwar07/",
    text: "linkedin.com/in/vipulsajjanwar07",
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

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I&apos;m always open to discussing new projects, opportunities, or collaborations. Feel free to reach out through any of these channels.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group relative flex flex-col items-center justify-center p-8 rounded-lg border border-primary/10 bg-card/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:bg-card/30"
                  >
                    <div className="absolute -inset-px bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                    <div className="mb-4 p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                      {link.label}
                    </h3>

                    <p className="text-sm text-muted-foreground text-center group-hover:text-primary transition-colors flex items-center gap-2">
                      {link.text}
                      {!link.href.startsWith("mailto") && (
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </p>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center pt-12 space-y-4 border-t border-primary/10">
            <p className="text-muted-foreground">
              Have a project in mind or want to collaborate?
            </p>
            <Link
              href="mailto:vipulsajjanwar07@gmail.com"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/40"
            >
              Send Me an Email
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
