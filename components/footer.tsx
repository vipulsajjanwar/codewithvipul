import Link from "next/link"
import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Designed & Built by Vipul Sajjanwar
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="mailto:vipulsajjanwar144@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              vipulsajjanwar144@gmail.com
            </Link>
            <Link
              href="https://github.com/vipulsajjanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/vipulsajjanwar07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              LinkedIn
            </Link>
            <Link
              href="https://medium.com/@vipulsajjanwar144"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Medium
            </Link>
            <Link
              href="https://buymeacoffee.com/vipulsajjaq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/20"
            >
              <Coffee className="h-4 w-4" />
              Buy me a coffee
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
