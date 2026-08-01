import { withBasePath } from "@/lib/base-path"
import { localePath, messages, type Locale } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/site/language-switcher"
import Image from "next/image"

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto grid w-full max-w-5xl gap-5 px-6 py-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="flex items-center gap-3">
          <Image src={withBasePath("/branding/spel-logo.svg")} alt="" width={26} height={26} className="rounded-md" />
          <div><div className="text-sm font-bold">Spel</div><div className="text-xs text-muted-foreground">{messages[locale].footer.tagline}</div></div>
        </div>
        <nav className="flex gap-5 text-xs text-muted-foreground md:justify-center">
          <a href={withBasePath(localePath(locale, "gate"))}>Gate</a>
          <a href={withBasePath(localePath(locale, "winegold"))}>Winegold</a>
          <a href="https://github.com/spelcc">GitHub</a>
        </nav>
        <div className="hidden items-center justify-end gap-4 md:flex"><LanguageSwitcher locale={locale} /><p className="text-xs text-muted-foreground">© 2026 Spel</p></div>
        <p className="text-xs text-muted-foreground md:hidden">© 2026 Spel</p>
      </div>
    </footer>
  )
}
