"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Influencerlar", href: "/influencerlar" },
  { label: "İşletmeler", href: "/isletmeler" },
  { label: "Projeler", href: "/projeler" },
  { label: "İletişim", href: "/iletisim" },
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_20px_var(--primary)] group-hover:scale-125 transition-transform"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            VOLT
            <span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium tracking-tight transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/iletisim"
            className="group relative inline-flex items-center gap-2 overflow-hidden border border-foreground/20 bg-foreground text-background px-4 py-2 text-sm font-semibold tracking-tight transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
          >
            <span>Teklif Al</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-border"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="flex flex-col p-6 gap-1">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between border-b border-border/60 py-4 text-2xl font-semibold tracking-tight",
                      active ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden className="text-primary">
                      →
                    </span>
                  </Link>
                )
              })}
              <Link
                href="/iletisim"
                className="mt-4 inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-4 text-base font-semibold"
              >
                Teklif Al
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
