import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RiArrowRightUpLine } from "@remixicon/react"
import { MonochromeLogo } from "@/components/site/monochrome-logo"

export function ProjectCard({
  logo,
  title,
  kind,
  description,
  href,
  monochrome = false,
}: {
  logo: string
  title: string
  kind: string
  description: string
  href: string
  monochrome?: boolean
}) {
  return (
    <a href={href} className="group">
      <Card className="h-full p-6 transition-transform group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="flex items-start justify-between">
            <span className="flex size-14 shrink-0 items-center justify-center">
              {monochrome ? (
                <MonochromeLogo
                  src={logo}
                  label={`${title} logo`}
                  className="size-10"
                />
              ) : (
                <Image
                  src={logo}
                  alt={`${title} logo`}
                  width={40}
                  height={40}
                  className="size-10 rounded-lg object-contain"
                />
              )}
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              {kind}
            </span>
          </div>
          <CardTitle className="mt-8 text-2xl">{title}</CardTitle>
          <CardDescription className="mt-2 min-h-20 text-sm leading-6">
            {description}
          </CardDescription>
          <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium">
            Discover <RiArrowRightUpLine className="size-4" />
          </span>
        </CardHeader>
      </Card>
    </a>
  )
}
