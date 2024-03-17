import "@/styles/globals.scss"
import { Metadata } from "next"
import Head from "next/head"
import Link from "next/link"
import { useScroll, useTransform } from "framer-motion"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html className="h-full" lang="en" suppressHydrationWarning>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased h-full",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="min-h-screen h-full">
              <header className="fixed flex w-full z-50 p-xs px-lg">
                <div className="flex ml-auto gap-md">
                  <Link className="text-xl hover:text-primary" href={"#"}>
                    skills.
                  </Link>
                  <Link className="text-lg hover:text-primary" href={"#"}>
                    about me.
                  </Link>
                  <Link className="text-xl hover:text-primary" href={"#"}>
                    projects.
                  </Link>
                  <Link className="text-xl hover:text-primary" href={"#"}>
                    contacts
                  </Link>
                </div>
              </header>
              <div id="main" className="flex-1">
                {children}
              </div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
