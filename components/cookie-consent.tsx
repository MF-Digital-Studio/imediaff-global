"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"

interface ToggleProps {
  checked: boolean
  onChange?: (val: boolean) => void
  disabled?: boolean
}

function Toggle({ checked, onChange, disabled = false }: ToggleProps) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <span className="font-mono text-[10px] uppercase tracking-widest text-[#888] w-6 text-right select-none">
        {checked ? "ON" : "OFF"}
      </span>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        aria-pressed={checked}
        className={`relative inline-flex h-7 w-14 shrink-0 items-center transition-colors duration-300 focus:outline-none rounded-none ${checked
          ? disabled
            ? "bg-[#555555]"
            : "bg-[#2563EB]"
          : "bg-[#2a2a2a]"
          } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-5 w-5 bg-white transition-transform duration-300 ${checked ? "translate-x-8" : "translate-x-1"
            }`}
        />
      </button>
    </div>
  )
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const consent = localStorage.getItem("cookie-consent-global")

    if (consent === "custom") {
      try {
        const savedPrefs = localStorage.getItem("cookie-preferences-global")
        if (savedPrefs) {
          const parsed = JSON.parse(savedPrefs)
          setAnalytics(!!parsed.analytics)
          setMarketing(!!parsed.marketing)
        }
      } catch (e) {
        console.error("Failed to parse cookie preferences", e)
      }
    }

    if (!consent) {
      const timer = setTimeout(() => setIsOpen(true), 400)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.paddingBottom = "0px"
      return
    }
    const updatePadding = () => {
      if (containerRef.current) {
        document.body.style.paddingBottom = `${containerRef.current.offsetHeight}px`
      }
    }
    updatePadding()
    window.addEventListener("resize", updatePadding)
    const ro = new ResizeObserver(updatePadding)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => {
      window.removeEventListener("resize", updatePadding)
      ro.disconnect()
      document.body.style.paddingBottom = "0px"
    }
  }, [isOpen, showPreferences])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-global", "accepted")
    localStorage.setItem("cookie-preferences-global", JSON.stringify({ essential: true, analytics: true, marketing: true }))
    setIsOpen(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent-global", "rejected")
    localStorage.setItem("cookie-preferences-global", JSON.stringify({ essential: true, analytics: false, marketing: false }))
    setIsOpen(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent-global", "custom")
    localStorage.setItem("cookie-preferences-global", JSON.stringify({ essential: true, analytics, marketing }))
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          key="cookie-banner"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2147483647,
            pointerEvents: "auto",
            isolation: "isolate",
          }}
          className="w-full bg-[#0a0a0a] border-t border-[#2a2a2a] shadow-2xl"
        >
          {/* Preferences Panel */}
          <AnimatePresence>
            {showPreferences && (
              <motion.div
                key="preferences-panel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border-b border-[#2a2a2a]"
              >
                <div className="px-6 md:px-10 py-6 md:py-8 flex flex-col gap-6">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#2563EB] font-semibold">
                        / PREFERENCES
                      </span>
                      <h3 className="font-sans text-sm font-bold text-white tracking-tight mt-1 uppercase">
                        Cookie Categories
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPreferences(false)}
                      className="text-white/60 hover:text-white font-mono text-[10px] tracking-widest uppercase flex items-center gap-1 transition-colors cursor-pointer ml-4 shrink-0 font-semibold"
                    >
                      ✕ BACK
                    </button>
                  </div>

                  {/* Toggle Rows */}
                  <div className="flex flex-col divide-y divide-[#2a2a2a]">
                    {[
                      {
                        title: "Essential Cookies",
                        desc: "Required for the site to function correctly. Cannot be disabled.",
                        checked: true,
                        disabled: true,
                      },
                      {
                        title: "Analytics Cookies",
                        desc: "Helps us understand visitor behaviour and improve performance. (e.g. Google Analytics)",
                        checked: analytics,
                        onChange: setAnalytics,
                      },
                      {
                        title: "Marketing & Tracking Cookies",
                        desc: "Used for ad performance measurement and affiliate tracking across our global operations.",
                        checked: marketing,
                        onChange: setMarketing,
                      },
                    ].map((row) => (
                      <div key={row.title} className="flex items-center justify-between gap-8 py-4">
                        <div>
                          <h4 className="text-white font-bold text-sm uppercase tracking-tight">{row.title}</h4>
                          <p className="text-white/70 text-xs mt-0.5 leading-relaxed">{row.desc}</p>
                        </div>
                        <Toggle
                          checked={row.checked}
                          onChange={row.onChange}
                          disabled={row.disabled}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Save */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleSavePreferences}
                      className="px-6 py-3 bg-[#2563EB] border border-[#2563EB] text-white font-bold text-xs tracking-tight uppercase hover:bg-[#1D4ED8] hover:border-[#1D4ED8] transition-all duration-300 rounded-none cursor-pointer font-sans"
                    >
                      SAVE PREFERENCES
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Banner */}
          <div className="px-6 md:px-10 py-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#2563EB] font-semibold mb-3 block">
              / COOKIES
            </span>

            {/* Single flex row — title | description | buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 md:gap-6">
              {/* Title */}
              <h3 className="font-sans text-sm font-bold text-white tracking-tight uppercase shrink-0">
                Your Cookie Preferences
              </h3>

              {/* Divider */}
              <div className="hidden lg:block w-px h-5 bg-[#2a2a2a] shrink-0" />

              {/* Description */}
              <p className="text-white/70 text-xs md:text-sm leading-relaxed flex-1">
                We use cookies to personalise your experience and improve our services. For details, please review our{" "}
                <Link href="/kvkk" className="text-[#2563EB] hover:underline font-semibold transition-colors duration-200">
                  Privacy Policy
                </Link>
                .
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowPreferences((p) => !p)}
                  className="px-5 py-3 border border-white text-white font-bold text-xs tracking-tight uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-none cursor-pointer font-sans whitespace-nowrap"
                >
                  MANAGE PREFERENCES
                </button>
                <button
                  type="button"
                  onClick={handleReject}
                  className="px-5 py-3 border border-white text-white font-bold text-xs tracking-tight uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-none cursor-pointer font-sans whitespace-nowrap"
                >
                  DECLINE
                </button>
                <button
                  type="button"
                  onClick={handleAccept}
                  className="px-6 py-3 bg-[#2563EB] border border-[#2563EB] text-white font-bold text-xs tracking-tight uppercase hover:bg-[#1D4ED8] hover:border-[#1D4ED8] transition-all duration-300 rounded-none cursor-pointer font-sans whitespace-nowrap"
                >
                  ACCEPT ALL
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
