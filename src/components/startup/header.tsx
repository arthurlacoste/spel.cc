"use client"
import { withBasePath } from "@/lib/base-path"
import Image from "next/image"
import Link from "next/link"
import { RiArrowRightUpLine, RiMenuLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
const links = [{label:"Projects",href:"/#projects"},{label:"Gate",href:"/gate/"},{label:"Winegold",href:"/winegold/"}]
export function SiteHeader() {
  return <header className="sticky top-0 z-30 w-full border-b border-border bg-background/85 backdrop-blur">
    <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-6 px-6">
      <Link href="/" className="flex items-center gap-2"><Image src={withBasePath("/branding/spel-logo.svg")} alt="" width={28} height={28} className="size-7 rounded-md"/><span className="text-lg font-bold tracking-tight">Spel</span></Link>
      <nav className="hidden items-center gap-6 md:flex">{links.map(x=><a key={x.label} href={x.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{x.label}</a>)}</nav>
      <div className="ml-auto flex items-center gap-2"><Button render={<a href="https://github.com/spelcc"/>} nativeButton={false} className="hidden md:inline-flex">GitHub<RiArrowRightUpLine data-icon="inline-end"/></Button>
      <Sheet><SheetTrigger render={<Button variant="outline" size="icon" className="md:hidden"/>} aria-label="Open menu"><RiMenuLine/></SheetTrigger><SheetContent side="right" className="w-full sm:max-w-xs"><SheetHeader><SheetTitle className="flex items-center gap-2"><Image src={withBasePath("/branding/spel-logo.svg")} alt="" width={24} height={24}/>Spel</SheetTitle></SheetHeader><nav className="flex flex-col px-2">{links.map(x=><SheetClose key={x.label} render={<a href={x.href}/>} nativeButton={false} className="px-2 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">{x.label}</SheetClose>)}</nav></SheetContent></Sheet></div>
    </div></header>
}
