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
      "Step-by-step guide to building a robust REST Assured API automation framework with chain testing capabilities, comprehensive validation, and CI/CD integration.",
    date: "2024",
    url: "https://medium.com/@vipulsajjanwar144/building-an-enterprise-grade-rest-assured-api-automation-framework-730f043fc1a4",
    readTime: "15 min read",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-sm uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
          Writing
        </h2>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/post relative block rounded-2xl backdrop-blur-xl bg-card/30 border border-purple-500/20 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]"
            >
              {/* Animated Border Gradient on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/5 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover/post:opacity-100" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-2xl transition-all duration-300 group-hover/post:w-10 group-hover/post:h-10 group-hover/post:border-cyan-400/60" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-purple-500/30 rounded-br-2xl transition-all duration-300 group-hover/post:w-10 group-hover/post:h-10 group-hover/post:border-purple-400/60" />
              
              <div className="relative grid gap-4 md:grid-cols-[140px_1fr]">
                <div className="flex flex-col text-sm">
                  <span className="text-cyan-400">{post.date}</span>
                  <span className="text-xs text-purple-400/70">{post.readTime}</span>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-medium text-foreground group-hover/post:text-cyan-300 transition-colors">
                    {post.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover/post:-translate-y-0.5 group-hover/post:translate-x-0.5 group-hover/post:text-purple-400" />
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
          className="group/viewposts mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl bg-card/30 border border-purple-500/30 text-foreground transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:text-purple-300"
        >
          View All Posts on Medium
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/viewposts:-translate-y-0.5 group-hover/viewposts:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}
