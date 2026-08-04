"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "7.5+", label: "Years Experience" },
  { value: "50+", label: "Automation Projects" },
  { value: "100%", label: "Test Coverage" },
  { value: "15+", label: "Tech Skills" },
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

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Stats */}
          <motion.div className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tight"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                I&apos;m a passionate Software Development Engineer in Test with a deep commitment to building robust, scalable automation solutions. My journey in QA has transformed me into a framework architect who bridges the gap between quality assurance and development excellence.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-6 rounded-lg bg-card/30 border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4 rounded-lg bg-card/20 border border-primary/10 p-8 backdrop-blur">
              <motion.h3 className="text-xl font-semibold text-foreground" variants={itemVariants}>
                My Journey
              </motion.h3>
              <motion.p className="text-muted-foreground leading-relaxed" variants={itemVariants}>
                Starting with manual testing, I quickly recognized the power of automation in accelerating development cycles. Over the past 7.5 years, I&apos;ve evolved from writing test scripts to architecting comprehensive automation frameworks that serve enterprise-level applications.
              </motion.p>
            </div>

            <div className="space-y-4 rounded-lg bg-card/20 border border-secondary/10 p-8 backdrop-blur">
              <motion.h3 className="text-xl font-semibold text-foreground" variants={itemVariants}>
                My Expertise
              </motion.h3>
              <motion.p className="text-muted-foreground leading-relaxed" variants={itemVariants}>
                I specialize in designing maintainable test automation frameworks, implementing CI/CD pipelines, and optimizing test execution performance. My work spans UI automation with Selenium, API testing with REST Assured, and performance testing with JMeter, all integrated into robust DevOps workflows.
              </motion.p>
            </div>

            <div className="space-y-4 rounded-lg bg-card/20 border border-accent/10 p-8 backdrop-blur">
              <motion.h3 className="text-xl font-semibold text-foreground" variants={itemVariants}>
                What Drives Me
              </motion.h3>
              <motion.p className="text-muted-foreground leading-relaxed" variants={itemVariants}>
                I&apos;m passionate about solving complex automation challenges, mentoring junior engineers, and creating engineering solutions that increase development velocity and product quality. I believe in continuous learning and staying ahead of industry trends.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
