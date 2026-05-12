"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
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

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
]

export default function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const menuVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, transition: { delay: 0.2, duration: 0.3 } }
  }

  const linkVars = {
    initial: { y: "20px", opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    close: { y: "20px", opacity: 0, transition: { duration: 0.3 } }
  }

  const containerVars = {
    initial: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.1, staggerChildren: 0.08, staggerDirection: 1 } },
    close: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  }

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-[110] transition-all duration-500",
          scrolled 
            ? "h-[56px] backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/[0.08]" 
            : "h-[64px] min-[992px]:h-[72px] bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 min-[992px]:px-10">
          {/* LEFT: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="group flex items-center relative z-[60]">
              <img src="/logo.png" alt="imediaff" className="h-8 w-auto object-contain" />
            </Link>
          </div>

          {/* CENTER: Desktop Nav */}
          <nav className="hidden min-[992px]:flex items-center gap-1 min-[1200px]:gap-3">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href
              return (
                <Link 
                  key={`${item.label}-${item.href}`} 
                  href={item.href} 
                  className={cn(
                    "group nav-link-underline py-2 text-[13px] px-[10px] font-medium tracking-wide transition-colors",
                    active ? "text-white active" : "text-white/70 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* RIGHT: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link 
              href="/contact" 
              className="hidden min-[992px]:inline-flex group relative items-center justify-center gap-2 border border-white/20 px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-white overflow-hidden transition-all duration-[250ms] hover:border-transparent"
            >
              {/* Fill layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF2D8D] via-[#FF6B2D] to-[#FFB800] translate-y-full group-hover:translate-y-0 transition-transform duration-[250ms] ease-out -z-10" />
              
              <span className="relative z-10 group-hover:text-black transition-colors duration-[250ms]">Request Proposal</span>
              <span aria-hidden className="relative z-10 group-hover:text-black transition-all group-hover:translate-x-1 duration-[250ms]">→</span>
            </Link>

            {/* Hamburger Icon */}
            <button 
              onClick={() => setOpen(!open)} 
              className="group relative z-[60] flex h-10 w-10 flex-col items-end justify-center gap-[6px] min-[992px]:hidden"
              aria-label="Toggle menu"
            >
              <motion.span 
                animate={open ? { rotate: 45, y: 8, width: 24 } : { rotate: 0, y: 0, width: 24 }}
                className="h-[2px] bg-gradient-to-r from-[#FF2D8D] to-[#FF6B2D] transition-all duration-300"
              />
              <motion.span 
                animate={open ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                className="h-[2px] w-5 bg-gradient-to-r from-[#FF6B2D] to-[#FFB800] transition-all duration-300"
              />
              <motion.span 
                animate={open ? { rotate: -45, y: -8, width: 24 } : { rotate: 0, y: 0, width: 16 }}
                className="h-[2px] bg-gradient-to-r from-[#FFB800] to-[#FF2D8D] transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[100] flex flex-col bg-[#0a0a0a] px-6 overflow-y-auto min-[992px]:hidden"
          >
            {/* Ambient Glow Orb */}
            <div className="fixed top-1/2 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B2D]/10 blur-[100px] pointer-events-none" />
            
            {/* Noise Texture */}
            <div className="fixed inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

            <div className="flex flex-col min-h-full py-24">
              <motion.nav 
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="close"
                className="relative z-10 flex flex-col items-start justify-center flex-grow"
              >
                {NAV_ITEMS.map((item) => (
                  <motion.div key={`mobile-${item.label}`} variants={linkVars} className="w-full">
                    <Link 
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group block w-full py-3 text-[clamp(28px,8vw,48px)] font-bold uppercase leading-none tracking-tighter text-white hover:bg-gradient-to-r hover:from-[#FF2D8D] hover:via-[#FF6B2D] hover:to-[#FFB800] hover:bg-clip-text hover:text-transparent transition-all duration-300"
                    >
                      {item.label}
                      <span className="ml-4 inline-block opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 bg-gradient-to-r from-[#FF2D8D] via-[#FF6B2D] to-[#FFB800] bg-clip-text text-transparent">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="relative z-10 mt-auto pt-10 flex flex-col gap-6"
              >
                <Link 
                  href="/contact" 
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 w-full py-4 text-base font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#FF2D8D] via-[#FF6B2D] to-[#FFB800] rounded-none transition-transform hover:scale-[1.02]"
                >
                  Request Proposal
                </Link>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {SOCIAL_LINKS.map((link) => (
                    <Link key={link.label} href={link.href} className="text-sm font-medium text-white/50 hover:text-white uppercase tracking-wider transition-colors hover:cursor-crosshair">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="h-px w-full bg-white/10" />
                <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                  IST · DXB · WY
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
