import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
const read=(p)=>fs.readFileSync(p,"utf8")
test("uses actual 7Ovr registry components",()=>{assert.ok(fs.existsSync("src/components/startup/hero.tsx"));assert.match(read("components.json"),/shadcn/)})
test("contains all project routes and logos",()=>{for(const p of ["src/app/page.tsx","src/app/gate/page.tsx","src/app/winegold/page.tsx","public/branding/spel-logo.svg","public/branding/box-logo.svg","public/branding/winegold-logo.png"]) assert.ok(fs.existsSync(p),p)})
test("theme follows system",()=>assert.match(read("src/components/site/theme-provider.tsx"),/defaultTheme="system"/))
