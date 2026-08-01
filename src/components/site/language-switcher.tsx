"use client"

import { RiGlobalLine } from "@remixicon/react"
import { usePathname } from "next/navigation"
import type { Locale } from "@/lib/i18n"
import { withBasePath } from "@/lib/base-path"

export function LanguageSwitcher({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const pathname = usePathname()

  function switchTo(nextLocale: Locale) {
    localStorage.setItem("spel-locale", nextLocale)
    const cleanPath = pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/"
    window.location.assign(withBasePath(`/${nextLocale}${cleanPath}`))
  }

  return (
    <div className={`flex items-center gap-2 ${compact ? "py-3" : ""}`} aria-label="Language selector">
      <RiGlobalLine className="size-4 text-muted-foreground" aria-hidden="true" />
      <div className="flex rounded-lg border bg-background p-0.5 text-xs font-medium">
        {(["fr", "en"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => switchTo(item)}
            className={`rounded-md px-2 py-1 transition-colors ${item === locale ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            aria-pressed={item === locale}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
