import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MonochromeLogo } from "@/components/site/monochrome-logo"
import { RiArrowRightLine, RiGithubLine } from "@remixicon/react"

export function ProductHero({
  logo,
  badge,
  title,
  copy,
  primaryHref,
  primaryLabel,
  githubHref,
  children,
  monochromeLogo = false,
}: {
  logo: string
  badge: string
  title: string
  copy: string
  primaryHref: string
  primaryLabel: string
  githubHref: string
  children?: React.ReactNode
  monochromeLogo?: boolean
}) {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {monochromeLogo ? (
          <MonochromeLogo src={logo} label={`${title} logo`} className="size-20" />
        ) : (
          <Image
            src={logo}
            alt=""
            width={88}
            height={88}
            className="size-20 rounded-2xl object-contain shadow-lg"
          />
        )}
        <Badge variant="secondary" className="mt-6">{badge}</Badge>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-balance text-muted-foreground">{copy}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button size="lg" render={<a href={primaryHref} />} nativeButton={false}>
            {primaryLabel}<RiArrowRightLine data-icon="inline-end" />
          </Button>
          <Button size="lg" variant="outline" render={<a href={githubHref} />} nativeButton={false}>
            <RiGithubLine data-icon="inline-start" />GitHub
          </Button>
        </div>
        {children}
      </div>
    </section>
  )
}
