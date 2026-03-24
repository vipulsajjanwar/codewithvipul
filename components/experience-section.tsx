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
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-sm uppercase tracking-widest text-muted-foreground">
          Technical Stack
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <h3 className="mb-4 font-medium text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
            <h3 className="mb-4 font-medium text-foreground">Core Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {coreStrengths.map((strength) => (
                <Badge
                  key={strength}
                  variant="outline"
                  className="border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
                >
                  {strength}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
            <h3 className="mb-4 font-medium text-foreground">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
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
