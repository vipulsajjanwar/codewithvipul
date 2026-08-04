"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Automation Frameworks",
    color: "primary",
    skills: ["Selenium WebDriver", "TestNG", "Cucumber", "Page Object Model"],
  },
  {
    category: "Programming Languages",
    color: "secondary",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    category: "API & Performance Testing",
    color: "accent",
    skills: ["REST Assured", "JMeter", "Postman", "Load Testing"],
  },
  {
    category: "CI/CD & DevOps",
    color: "primary",
    skills: ["Jenkins", "Docker", "GitHub Actions", "Maven"],
  },
  {
    category: "Tools & Platforms",
    color: "secondary",
    skills: ["Git", "JIRA", "Azure DevOps", "Confluence"],
  },
  {
    category: "Specialized Skills",
    color: "accent",
    skills: ["Cross-browser Testing", "Mobile Testing", "Database Testing", "Security Testing"],
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

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-32 px-6">
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
                Technical Skills
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive toolkit built over 7.5+ years of automation engineering, covering frameworks, languages, tools, and specialized testing domains.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max"
            variants={containerVariants}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative p-6 rounded-lg border transition-all duration-300 hover:shadow-lg`}
                style={{
                  backgroundColor: `hsl(from var(--${category.color}) h s calc(l + 5%))`,
                  borderColor: `hsl(from var(--${category.color}) h s calc(s - 20%) / 0.2)`,
                }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="absolute -inset-px bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Category Title */}
                <h3 className={`text-lg font-semibold mb-4 bg-gradient-to-r from-${category.color} to-${category.color === 'primary' ? 'secondary' : category.color === 'secondary' ? 'accent' : 'primary'} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm text-muted-foreground group/skill"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary group-hover/skill:scale-150 transition-transform" />
                      <span className="group-hover/skill:text-foreground transition-colors">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
