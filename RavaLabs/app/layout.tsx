import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rava Labs | Building the Future of Decentralized Finance",
  description:
    "Rava Labs is a technology company focused on building decentralized financial infrastructure for the next generation of digital finance. The platform develops secure, scalable blockchain-based products including decentralized exchanges, institutional-grade wallets, core blockchain protocols, scalable financial systems and security & compliance tools.",
  icons: {
    icon: "/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
