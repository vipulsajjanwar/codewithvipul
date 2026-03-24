import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Java", "TestNG", "Maven", "REST Assured", "Selenium WebDriver"],
  },
  {
    title: "Automation & CI/CD",
    skills: ["Jenkins", "Docker", "Selenium Grid", "Git", "ExtentReports"],
  },
  {
    title: "API & Performance Testing",
    skills: ["Postman", "Newman", "JMeter", "Swagger", "API Testing"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Apache POI", "ELK Stack", "SQL", "PostgreSQL", "POM Design"],
  },
]

const coreStrengths = [
  "Framework Design",
  "API & UI Automation",
  "CI/CD Integration",
  "Debugging & Optimization",
  "Agile Testing",
  "Clean Code",
  "AI Integration in QA",
]

const softSkills = [
  "Team Leadership",
  "Communication",
  "Problem Solving",
  "Design Thinking",
]

export function ExperienceSection() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-sm uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
          Technical Stack
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-2xl backdrop-blur-xl bg-card/30 border border-cyan-500/20 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/40 rounded-tl-2xl transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-cyan-400/60" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500/40 rounded-br-2xl transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-purple-400/60" />
              
              <h3 className="mb-4 font-medium text-cyan-300">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="group relative rounded-2xl backdrop-blur-xl bg-card/30 border border-purple-500/20 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-purple-500/40 rounded-tl-2xl transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-purple-400/60" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-500/40 rounded-br-2xl transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-cyan-400/60" />
            
            <h3 className="mb-4 font-medium text-purple-300">Core Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {coreStrengths.map((strength) => (
                <Badge
                  key={strength}
                  variant="outline"
                  className="border-purple-500/30 text-purple-300/80 hover:border-purple-500/60 hover:text-purple-300 hover:shadow-[0_0_10px_rgba(147,51,234,0.3)] transition-all"
                >
                  {strength}
                </Badge>
              ))}
            </div>
          </div>

          <div className="group relative rounded-2xl backdrop-blur-xl bg-card/30 border border-cyan-500/20 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/40 rounded-tl-2xl transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-cyan-400/60" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500/40 rounded-br-2xl transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-purple-400/60" />
            
            <h3 className="mb-4 font-medium text-cyan-300">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-300/80 hover:border-cyan-500/60 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
