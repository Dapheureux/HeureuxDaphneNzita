import type React from "react"
import type { Metadata } from "next"
import { Anton } from "next/font/google"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
})

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Heureux Daphné N'ZITA ",
  description: "Portfolio moderne présentant mes compétences en développement, community management et photographie",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${anton.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-outfit antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
