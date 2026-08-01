import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
const read=(p)=>fs.readFileSync(p,"utf8")
test("uses actual 7Ovr registry components",()=>{assert.ok(fs.existsSync("src/components/startup/hero.tsx"));assert.match(read("src/app/[locale]/gate/page.tsx"),/components\/startup\/hero/);assert.match(read("src/app/[locale]/page.tsx"),/components\/startup\/header/);assert.match(read("components.json"),/shadcn/)})
test("contains all project routes and logos",()=>{for(const p of ["src/app/page.tsx","src/app/gate/page.tsx","src/app/winegold/page.tsx","public/branding/spel-logo.svg","public/branding/box-logo.svg","public/branding/winegold-logo.svg"]) assert.ok(fs.existsSync(p),p)})
test("theme follows system",()=>assert.match(read("src/components/site/theme-provider.tsx"),/defaultTheme="system"/))

test("normalizes project logo bounds",()=>{const source=read("src/components/site/project-card.tsx");assert.match(source,/size-14 shrink-0 items-center justify-center/);assert.match(source,/className="size-10"/)})

test("centers the value proposition on independent work",()=>{const source=read("src/lib/i18n.ts");assert.match(source,/Spend less time managing\. More time making\./);assert.match(source,/artisans, artists and/);assert.doesNotMatch(source,/Agentic toolbox|Tools for agents/)})

test("centers the approach cards",()=>{const source=read("src/app/[locale]/page.tsx");assert.match(source,/h-full p-8 text-center/);assert.match(source,/flex h-full flex-col items-center/);assert.match(source,/rounded-full border bg-muted/)})
