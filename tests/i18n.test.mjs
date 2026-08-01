import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
const read=(p)=>fs.readFileSync(p,"utf8")
test("exports French and English pages",()=>{for(const p of ["src/app/[locale]/page.tsx","src/app/[locale]/gate/page.tsx","src/app/[locale]/winegold/page.tsx"])assert.ok(fs.existsSync(p));const i18n=read("src/lib/i18n.ts");assert.match(i18n,/Moins de gestion\. Plus de création\./);assert.match(i18n,/Spend less time managing\. More time making\./)})
test("auto detects and remembers locale",()=>{const source=read("src/components/site/locale-redirect.tsx");assert.match(source,/navigator\.language/);assert.match(source,/spel-locale/);assert.match(read("src/components/site/language-switcher.tsx"),/localStorage\.setItem/)})
test("shows globe selector in mobile menu and desktop footer",()=>{assert.match(read("src/components/site/language-switcher.tsx"),/RiGlobalLine/);assert.match(read("src/components/startup/header.tsx"),/LanguageSwitcher/);assert.match(read("src/components/startup/footer.tsx"),/hidden items-center justify-end gap-4 md:flex/)})
