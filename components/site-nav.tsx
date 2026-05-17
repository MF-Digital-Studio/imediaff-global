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
  { 
    label: "Talent", 
    href: "/talent",
    subItems: [
      { label: "CEE Region", href: "/talent/cee", flags: "🇷🇴 🇵🇱 🇧🇬 🇬🇷" },
      { label: "Gulf Region", href: "/talent/gulf", flags: "🇸🇦 🇦🇪 🇰🇼" },
      { label: "Turkey", href: "/talent/turkey", flags: "🇹🇷" },
      { label: "Azerbaijan", href: "/talent/azerbaijan", flags: "🇦🇿" }
    ]
  },
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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

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
              const active = pathname === item.href || (item.subItems && pathname.startsWith(item.href + '/'))
              
              if (item.subItems) {
                return (
                  <div key={`${item.label}-${item.href}`} className="relative group">
                    <Link 
                      href={item.href} 
                      className={cn(
                        "group/link nav-link-underline py-2 text-[13px] px-[10px] font-medium tracking-wide transition-colors inline-flex items-center gap-1",
                        active ? "text-white active" : "text-white/70 hover:text-white"
                      )}
                    >
                      {item.label}
                      <span className="text-[10px] opacity-70 group-hover/link:opacity-100 transition-opacity">▾</span>
                    </Link>
                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[100]">
                      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-2 w-[280px] shadow-2xl flex flex-col gap-1">
                        {item.subItems.map(subItem => (
                          <Link 
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors group/sub"
                          >
                            <span className="group-hover/sub:text-[#2563EB] transition-colors">{subItem.label}</span>
                            <span className="text-sm opacity-80">{subItem.flags}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

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
              <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#16A34A] translate-y-full group-hover:translate-y-0 transition-transform duration-[250ms] ease-out -z-10" />
              
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
                className="h-[2px] bg-gradient-to-r from-[#2563EB] to-[#16A34A] transition-all duration-300"
              />
              <motion.span 
                animate={open ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                className="h-[2px] w-5 bg-gradient-to-r from-[#2563EB] to-[#16A34A] transition-all duration-300"
              />
              <motion.span 
                animate={open ? { rotate: -45, y: -8, width: 24 } : { rotate: 0, y: 0, width: 16 }}
                className="h-[2px] bg-gradient-to-r from-[#2563EB] to-[#16A34A] transition-all duration-300"
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
            <div className="fixed top-1/2 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-[100px] pointer-events-none" />
            
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
                    {item.subItems ? (
                      <div className="w-full py-2 flex flex-col">
                        <div className="flex items-center justify-between w-full group">
                          <Link 
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block py-1 text-[clamp(28px,8vw,48px)] font-bold uppercase leading-none tracking-tighter text-white hover:bg-gradient-to-r hover:from-[#2563EB] hover:via-[#2563EB] hover:to-[#2563EB] hover:bg-clip-text hover:text-transparent transition-all duration-300"
                          >
                            {item.label}
                          </Link>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenSubmenu(openSubmenu === item.label ? null : item.label);
                            }}
                            className="p-2 text-white/50 hover:text-white"
                          >
                            <span className={cn("inline-block transform transition-transform text-2xl", openSubmenu === item.label ? "rotate-180" : "rotate-0")}>▾</span>
                          </button>
                        </div>
                        <AnimatePresence>
                          {openSubmenu === item.label && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 flex flex-col gap-4 pl-4 border-l border-white/10 ml-2 py-2">
                                {item.subItems.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium text-white/70 hover:text-[#2563EB] transition-colors flex items-center justify-between pr-4 group/sublink"
                                  >
                                    <span className="flex items-center">
                                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/20 mr-3 group-hover/sublink:bg-[#2563EB] transition-colors" />
                                      {sub.label}
                                    </span>
                                    <span className="text-xl">{sub.flags}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group block w-full py-3 text-[clamp(28px,8vw,48px)] font-bold uppercase leading-none tracking-tighter text-white hover:bg-gradient-to-r hover:from-[#2563EB] hover:via-[#2563EB] hover:to-[#2563EB] hover:bg-clip-text hover:text-transparent transition-all duration-300"
                      >
                        {item.label}
                        <span className="ml-4 inline-block opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 bg-gradient-to-r from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent">
                          →
                        </span>
                      </Link>
                    )}
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
                  className="inline-flex items-center justify-center gap-2 w-full py-4 text-base font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#2563EB] to-[#16A34A] rounded-none transition-transform hover:scale-[1.02]"
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
