import { withBasePath } from "@/lib/base-path"
import {
  RiArrowRightLine,
  RiHandHeartLine,
  RiSparklingLine,
  RiTimeLine,
} from "@remixicon/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProjectCard } from "@/components/site/project-card"
import { SiteFooter } from "@/components/startup/footer"
import { SiteHeader } from "@/components/startup/header"

const principles = [
  {
    icon: RiHandHeartLine,
    title: "Made for real work",
    copy: "Tools shaped around the daily reality of independent professionals, not abstract enterprise workflows.",
  },
  {
    icon: RiTimeLine,
    title: "Less admin, more craft",
    copy: "Reduce repetitive tasks, keep things organized and spend more time on the work your clients actually value.",
  },
  {
    icon: RiSparklingLine,
    title: "Simple from day one",
    copy: "Useful when you are starting out, clear enough to understand and flexible enough to grow with your activity.",
  },
]

export default function Home() {
  return (
    <div className="relative isolate flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="divide-y divide-border/50">
        <section className="relative overflow-hidden px-6 py-24 text-center sm:py-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_35%,black,transparent)]"
          />
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary">Tools for independent work</Badge>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-balance sm:text-7xl">
              Spend less time managing. More time making.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-balance text-muted-foreground">
              Spel creates simple, practical tools for artisans, artists and
              independent entrepreneurs. Organize the everyday work, remove
              repetitive friction and keep your attention on your craft and
              your clients.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                render={<a href="#projects" />}
                nativeButton={false}
              >
                Explore the tools
                <RiArrowRightLine data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<a href="https://github.com/spelcc" />}
                nativeButton={false}
              >
                View open source projects
              </Button>
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Our tools
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Practical help for the everyday work.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Focused products for small teams and independent professionals
                who need useful software, not another job managing software.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <ProjectCard
                logo={withBasePath("/branding/box-logo.svg")}
                title="Box"
                kind="Inventory"
                monochrome
                description="Keep products, supplies and stock movements clear without turning inventory into a full-time occupation."
                href="https://box.spel.cc/"
              />
              <ProjectCard
                logo={withBasePath("/branding/spel-logo.svg")}
                title="Gate"
                kind="Automation"
                description="Connect the tools on your computer to an AI assistant when a repetitive task deserves a shortcut."
                href={withBasePath("/gate/")}
              />
              <ProjectCard
                logo={withBasePath("/branding/winegold-logo.svg")}
                title="Winegold"
                kind="macOS utility"
                monochrome
                description="Drop a file at the edge of your screen and launch a useful action without interrupting your flow."
                href={withBasePath("/winegold/")}
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Our approach
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Technology should support the work, not replace its meaning.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, copy }) => (
                <Card key={title} className="p-6">
                  <CardHeader className="p-0">
                    <span className="flex size-11 items-center justify-center border bg-muted">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="mt-5">{title}</CardTitle>
                    <CardDescription className="mt-2 leading-6">
                      {copy}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
