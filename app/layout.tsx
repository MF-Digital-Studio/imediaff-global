import type { Metadata } from "next"
import { Inter_Tight, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import LenisProvider from "@/components/providers/LenisProvider"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VOLT / Sınırları Zorla — Sosyal Medya Ajansı",
  description:
    "VOLT, influencer'ları ve markaları viral döngünün merkezine taşıyan yeni nesil sosyal medya ajansıdır. Sınırları zorla, markanı dönüştür.",
  generator: "v0.app",
  openGraph: {
    title: "VOLT / Sınırları Zorla",
    description:
      "Influencer'lar ve markalar için yeni nesil sosyal medya ajansı. Viral döngünün merkezinde.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${interTight.variable} ${geistMono.variable} bg-background dark`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden grain">
        <LenisProvider>
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
          {process.env.NODE_ENV === "production" && <Analytics />}
        </LenisProvider>
      </body>
    </html>
  )
}
