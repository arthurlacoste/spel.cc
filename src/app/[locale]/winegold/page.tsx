import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { withBasePath } from "@/lib/base-path"
import { isLocale, messages, type Locale } from "@/lib/i18n"
import { RiDragDropLine, RiMacLine, RiTerminalBoxLine } from "@remixicon/react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductHero } from "@/components/startup/hero"
import { SiteFooter } from "@/components/startup/footer"
import { SiteHeader } from "@/components/startup/header"

const featureIcons = [RiDragDropLine, RiTerminalBoxLine, RiMacLine]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return { title: "Winegold", description: messages[locale].winegold.description, alternates: { languages: { fr: "/fr/winegold/", en: "/en/winegold/" } } }
}

export default async function WinegoldPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale: Locale = value
  const t = messages[locale].winegold
  return <div className="min-h-svh bg-background text-foreground"><SiteHeader locale={locale}/><main className="divide-y divide-border/50"><ProductHero logo={withBasePath("/branding/winegold-logo.svg")} badge={t.badge} title={t.title} copy={t.intro} primaryHref="#install" primaryLabel={t.installButton} githubHref="https://github.com/spelcc/winegold" monochromeLogo/><section id="install" className="px-6 py-20"><div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-center"><div><span className="text-sm uppercase tracking-widest text-muted-foreground">{t.install}</span><h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t.installTitle}</h2><p className="mt-4 text-muted-foreground">{t.installCopy}</p></div><pre className="overflow-x-auto border bg-card p-5 text-sm"><code>curl -fsSL https://spel.cc/winegold.sh | bash</code></pre></div></section><section className="px-6 py-20 sm:py-28"><div className="mx-auto max-w-5xl"><div className="grid gap-6 md:grid-cols-3">{t.features.map(([title,copy],index)=>{const Icon=featureIcons[index];return <Card key={title} className="p-6"><CardHeader className="p-0"><span className="flex size-11 items-center justify-center border bg-muted"><Icon className="size-5"/></span><CardTitle className="mt-5">{title}</CardTitle><CardDescription className="mt-2 leading-6">{copy}</CardDescription></CardHeader></Card>})}</div><div className="mt-12 border bg-card p-6"><p className="text-sm font-medium">{t.recipe}</p><pre className="mt-4 overflow-x-auto text-sm text-muted-foreground"><code>{`name: Copy file path\ntrigger:\ncmd:\n  exec: 'echo "{input}" | pbcopy'`}</code></pre></div></div></section></main><SiteFooter locale={locale}/></div>
}
