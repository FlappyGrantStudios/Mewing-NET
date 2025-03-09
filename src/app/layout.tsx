import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import NavBar from "@/components/NavBar"

export const metadata: Metadata = {
  title: "Mewing NET",
  description: "The ultimate online platform for mastering mewing. Here, you can join exciting contests, share your mewing videos, and see how you stack up against fellow enthusiasts.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <div id="root" className="h-screen aspect-[828/1792] top-0 left-[50%] translate-x-[-50%] absolute overflow-x-hidden overflow-y-scroll">
          <div className="flex items-center justify-center text-4xl font-anton bg-3 w-full h-[100px]">
            <Link href="/">Mewing <i>NET</i></Link>
          </div>

          <div id="wrapper">
            {children}
          </div>

          <NavBar />
        </div>
      </body>
    </html>
  )
}
