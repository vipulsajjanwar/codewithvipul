import Link from "next/link"
import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-cyan-500/20 py-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Designed & Built by <span className="text-cyan-400">Vipul Sajjanwar</span>
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="mailto:vipulsajjanwar144@gmail.com"
              className="text-sm text-muted-foreground transition-all hover:text-cyan-400"
            >
              vipulsajjanwar144@gmail.com
            </Link>
            <Link
              href="https://github.com/vipulsajjanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-all hover:text-cyan-400"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/vipulsajjanwar07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-all hover:text-purple-400"
            >
              LinkedIn
            </Link>
            <Link
              href="https://medium.com/@vipulsajjanwar144"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-all hover:text-purple-400"
            >
              Medium
            </Link>
            <Link
              href="https://buymeacoffee.com/vipulsajjaq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full backdrop-blur-xl bg-card/30 border border-purple-500/30 px-4 py-2 text-sm text-purple-300 transition-all hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:text-purple-200"
            >
              <Coffee className="h-4 w-4" />
              Buy me a coffee
            </Link>
          </nav>
        </div>
        
        {/* Bottom Decorative Line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>
    </footer>
  )
}
