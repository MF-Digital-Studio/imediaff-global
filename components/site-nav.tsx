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
            className="btn-request-proposal group relative inline-flex items-center gap-2.5 rounded-full px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 bg-transparent hover:bg-white/10"
            style={{
              boxShadow: "0 0 20px rgba(229,21,171,0.3)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 35px rgba(255,189,30,0.5)"
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(229,21,171,0.3)"
            }}
          >
            <span 
              className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#E515AB] via-[#FF8A1E] to-[#FFBD1E]"
              style={{
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude"
              }}
            />
            <span className="relative z-10">Request Proposal</span>
            <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
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
                className="mt-6 group relative inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-bold uppercase tracking-widest text-white bg-transparent hover:bg-white/10 transition-all duration-300"
                style={{
                  boxShadow: "0 0 20px rgba(229,21,171,0.3)"
                }}
              >
                <span 
                  className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#E515AB] via-[#FF8A1E] to-[#FFBD1E]"
                  style={{
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />
                <span className="relative z-10">Request Proposal</span>
                <span aria-hidden className="relative z-10">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
