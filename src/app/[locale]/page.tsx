import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { withBasePath } from "@/lib/base-path"
import { isLocale, messages, type Locale } from "@/lib/i18n"
import { RiArrowRightLine, RiHandHeartLine, RiSparklingLine, RiTimeLine } from "@remixicon/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectCard } from "@/components/site/project-card"
import { SiteFooter } from "@/components/startup/footer"
import { SiteHeader } from "@/components/startup/header"

const principleIcons = [RiHandHeartLine, RiTimeLine, RiSparklingLine]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return {
    title: "Spel",
    description: locale === "fr"
      ? "Des outils simples et pratiques pour les artisans, les artistes et les entrepreneurs indépendants."
      : "Simple, practical tools for artisans, artists and independent entrepreneurs.",
    alternates: { languages: { fr: "/fr/", en: "/en/" } },
  }
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale: Locale = value
  const t = messages[locale].home

  return (
    <div className="relative isolate flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader locale={locale} />
      <main className="divide-y divide-border/50">
        <section className="relative overflow-hidden px-6 py-24 text-center sm:py-36">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_35%,black,transparent)]" />
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary">{t.badge}</Badge>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-balance sm:text-7xl">{t.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-balance text-muted-foreground">{t.intro}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button size="lg" render={<a href="#projects" />} nativeButton={false}>{t.explore}<RiArrowRightLine data-icon="inline-end" /></Button>
              <Button size="lg" variant="outline" render={<a href="https://github.com/spelcc" />} nativeButton={false}>{t.source}</Button>
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{t.toolsEyebrow}</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.toolsTitle}</h2>
              <p className="mt-3 text-muted-foreground">{t.toolsIntro}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <ProjectCard logo={withBasePath("/branding/box-logo.svg")} title="Box" kind={t.boxKind} monochrome description={t.boxDescription} href="https://box.spel.cc/" />
              <ProjectCard logo={withBasePath("/branding/spel-logo.svg")} title="Gate" kind={t.gateKind} description={t.gateDescription} href={withBasePath(`/${locale}/gate/`)} />
              <ProjectCard logo={withBasePath("/branding/winegold-logo.svg")} title="Winegold" kind={t.winegoldKind} monochrome description={t.winegoldDescription} href={withBasePath(`/${locale}/winegold/`)} />
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{t.approachEyebrow}</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.approachTitle}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {t.principles.map(([title, copy], index) => {
                const Icon = principleIcons[index]
                return <Card key={title} className="h-full p-8 text-center"><CardHeader className="flex h-full flex-col items-center p-0"><span className="flex size-12 items-center justify-center rounded-full border bg-muted"><Icon className="size-5" /></span><CardTitle className="mt-6 text-xl">{title}</CardTitle><CardDescription className="mt-3 max-w-xs text-pretty leading-6">{copy}</CardDescription></CardHeader></Card>
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  )
}
