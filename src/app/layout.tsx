import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { ThemeProvider } from "@/components/site/theme-provider"
import "./globals.css"
const geist = Geist({ subsets:["latin"] })
export const metadata: Metadata = { title:{default:"Spel",template:"%s | Spel"}, description:"Open tools for agentic workflows, local automation and calmer operations.", icons:{icon:"/branding/spel-logo.svg"} }
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning><body className={geist.className}><ThemeProvider>{children}</ThemeProvider></body></html> }
