"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "Talent", href: "/talent" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export default function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent")}>
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="imediaff Global" width={168} height={40} className="h-8 w-auto md:h-10" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href
            return (
              <Link key={`${item.label}-${item.href}`} href={item.href} className={cn("relative px-3 py-2 text-sm font-medium tracking-tight transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground")}>
                {item.label}
                {active && <motion.span layoutId="nav-underline" className="absolute left-3 right-3 -bottom-0.5 h-px bg-sunset-gradient" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#E515AB] via-[#FA1702] to-[#FFBD1E] px-8 py-3 rounded-full text-sm font-display font-bold tracking-tight text-black transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(229,21,171,0.3)] hover:shadow-[0_0_30px_rgba(229,21,171,0.5)]"
          >
            <span>Request Proposal</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-border" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="md:hidden overflow-hidden border-t border-border bg-background">
            <div className="flex flex-col p-6 gap-1">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href
                return (
                  <Link key={`${item.label}-${item.href}`} href={item.href} className={cn("flex items-center justify-between border-b border-border/60 py-4 text-2xl font-semibold tracking-tight", active ? "text-foreground" : "text-muted-foreground")}>
                    <span>{item.label}</span>
                    <span aria-hidden className="text-primary">→</span>
                  </Link>
                )
              })}
              <Link 
                href="/contact" 
                className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E515AB] via-[#FA1702] to-[#FFBD1E] px-8 py-4 rounded-full text-base font-display font-bold tracking-tight text-black shadow-[0_0_20px_rgba(229,21,171,0.3)]"
              >
                <span>Request Proposal</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
