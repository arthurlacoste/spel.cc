"use client"

import { useEffect } from "react"
import { withBasePath } from "@/lib/base-path"

export function LocaleRedirect({ suffix = "" }: { suffix?: string }) {
  useEffect(() => {
    const saved = localStorage.getItem("spel-locale")
    const detected = navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en"
    const locale = saved === "fr" || saved === "en" ? saved : detected
    window.location.replace(withBasePath(`/${locale}${suffix}/`))
  }, [suffix])

  return <main className="flex min-h-svh items-center justify-center text-sm text-muted-foreground">Spel…</main>
}
