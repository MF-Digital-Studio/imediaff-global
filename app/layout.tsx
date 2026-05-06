import type { Metadata } from "next"
import { Instrument_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import LenisProvider from "@/components/providers/LenisProvider"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "imediaff Global | 360° Digital Agency",
  description:
    "imediaff Global connects world-class creators and ambitious brands across Dubai and the MENA region through strategy, creativity, and measurable growth.",
  generator: "v0.app",
  openGraph: {
    title: "imediaff Global | 360° Digital Agency",
    description:
      "The global hub for influencer power and 360° digital media execution across Dubai and MENA.",
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
    <html lang="en" className={`${instrumentSans.variable} ${geistMono.variable} bg-background dark`}>
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
