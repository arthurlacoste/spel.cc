import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { withBasePath } from "@/lib/base-path"
import { isLocale, messages, type Locale } from "@/lib/i18n"
import { RiCommandLine, RiFolderTransferLine, RiShieldKeyholeLine } from "@remixicon/react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductHero } from "@/components/startup/hero"
import { SiteFooter } from "@/components/startup/footer"
import { SiteHeader } from "@/components/startup/header"

const featureIcons = [RiCommandLine, RiShieldKeyholeLine, RiFolderTransferLine]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return { title: "Gate", description: messages[locale].gate.description, alternates: { languages: { fr: "/fr/gate/", en: "/en/gate/" } } }
}

export default async function GatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale: Locale = value
  const t = messages[locale].gate
  return <div className="min-h-svh bg-background text-foreground"><SiteHeader locale={locale}/><main className="divide-y divide-border/50"><ProductHero logo={withBasePath("/branding/spel-logo.svg")} badge={t.badge} title={t.title} copy={t.intro} primaryHref="#install" primaryLabel={t.installButton} githubHref="https://github.com/spelcc/gate"><div className="mt-12 w-full max-w-2xl border bg-card p-5 text-left font-mono text-sm shadow-xl"><p className="text-muted-foreground">{t.you}</p><p className="mt-1">{t.prompt}</p><p className="mt-5 text-primary">Gate</p><p>✓ {t.connected}<br/>✓ {t.restarted}<br/>✓ {t.logs}</p></div></ProductHero><section id="install" className="px-6 py-20"><div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-center"><div><span className="text-sm uppercase tracking-widest text-muted-foreground">{t.install}</span><h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t.installTitle}</h2><p className="mt-4 text-muted-foreground">{t.installCopy}</p></div><pre className="overflow-x-auto border bg-card p-5 text-sm"><code>curl -fsSL https://spel.cc/gate.sh | bash</code></pre></div></section><section className="px-6 py-20 sm:py-28"><div className="mx-auto max-w-5xl"><div className="grid gap-6 md:grid-cols-3">{t.features.map(([title,copy],index)=>{const Icon=featureIcons[index];return <Card key={title} className="p-6"><CardHeader className="p-0"><span className="flex size-11 items-center justify-center border bg-muted"><Icon className="size-5"/></span><CardTitle className="mt-5">{title}</CardTitle><CardDescription className="mt-2 leading-6">{copy}</CardDescription></CardHeader></Card>})}</div></div></section></main><SiteFooter locale={locale}/></div>
}
