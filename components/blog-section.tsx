import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const posts = [
  {
    title: "Building an AI Code Review Agent for a Test Automation Framework",
    excerpt:
      "Learn how to integrate an AI code review agent into your test automation framework without breaking the existing codebase, improving code quality and review efficiency.",
    date: "2025",
    url: "https://medium.com/@vipulsajjanwar144/building-an-ai-code-review-agent-for-a-test-automation-framework-without-breaking-the-existing-d1bd15228b58",
    readTime: "10 min read",
  },
  {
    title: "Building Scalable Test Automation Frameworks",
    excerpt:
      "A comprehensive guide to creating scalable test automation frameworks using Selenium, TestNG, Jenkins, and real-time dashboards for enterprise testing.",
    date: "2025",
    url: "https://medium.com/@vipulsajjanwar144/scalable-test-automation-framework-using-selenium-testng-jenkins-real-time-dashboards-779d747e72b6",
    readTime: "12 min read",
  },
  {
    title: "Introduction to Elasticsearch & Kibana for Automation Testing",
    excerpt:
      "Discover how to leverage Elasticsearch and Kibana for test analytics, log aggregation, and building real-time dashboards for your automation suite.",
    date: "2024",
    url: "https://medium.com/@vipulsajjanwar144/introduction-to-elasticsearch-kibana-for-automation-testing-e0f9ff59c22e",
    readTime: "8 min read",
  },
  {
    title: "Building an Enterprise-Grade REST Assured API Automation Framework",
    excerpt:
      "Step-by-step guide to building a robust REST Assured API automation framework with chain testing, validation strategies, and CI/CD integration.",
    date: "2024",
    url: "https://medium.com/@vipulsajjanwar144/building-an-enterprise-grade-rest-assured-api-automation-framework-730f043fc1a4",
    readTime: "15 min read",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-sm uppercase tracking-widest text-muted-foreground">
          Writing
        </h2>

        <div className="space-y-2">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-4 block rounded-lg p-4 transition-all hover:bg-card"
            >
              <div className="grid gap-4 md:grid-cols-[140px_1fr]">
                <div className="flex flex-col text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="text-xs">{post.readTime}</span>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    {post.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="https://medium.com/@vipulsajjanwar144"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
        >
          View All Posts on Medium
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}
