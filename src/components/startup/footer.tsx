import { withBasePath } from "@/lib/base-path"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={withBasePath("/branding/spel-logo.svg")}
            alt=""
            width={26}
            height={26}
            className="rounded-md"
          />
          <div>
            <div className="text-sm font-bold">Spel</div>
            <div className="text-xs text-muted-foreground">
              Useful tools for independent work.
            </div>
          </div>
        </div>
        <nav className="flex gap-5 text-xs text-muted-foreground">
          <a href={withBasePath("/gate/")}>Gate</a>
          <a href={withBasePath("/winegold/")}>Winegold</a>
          <a href="https://github.com/spelcc">GitHub</a>
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 Spel</p>
      </div>
    </footer>
  )
}
