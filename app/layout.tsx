import type React from "react"
import type { Metadata } from "next"
import { Anton, Outfit } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
})

const outfit = Outfit({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Heureux DAphné N'ZITA ",
  description: "Portfolio moderne présentant mes compétences en développement, community management et photographie",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr"  suppressHydrationWarning>
      <body className={`${anton.variable} ${outfit.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
