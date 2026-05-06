"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "motion/react"

// ── Counter Component ────────────────────────────────────────────────────────
function Counter({
  from = 0,
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
}: {
  from?: number
  to: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return
    let startTime: number
    let animationFrame: number

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / (duration * 1000), 1)
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = from + (to - from) * easeProgress
      
      setValue(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [inView, from, to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

// ── Parallax Image ───────────────────────────────────────────────────────────
function ParallaxImage({
  src,
  alt,
  theme,
}: {
  src: string
  alt: string
  theme: "black" | "white"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <div
      ref={ref}
      className={`relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-[16/10] overflow-hidden rounded-[2rem] ${
        theme === "white" ? "shadow-2xl" : "border border-white/10"
      }`}
    >
      <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
        <Image src={src} alt={alt} fill className="object-cover" unoptimized />
        {/* Subtle overlay to ensure text/UI stands out if needed, or just for mood */}
        {theme === "black" && (
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
        )}
      </motion.div>
    </div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    theme: "white",
    client: "Amazon",
    sector: "MENA Gateway",
    title: "Scaling Global Retail into the Dubai Market.",
    strategy: "Integrated creator-led market entry for high-tech consumer goods.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
    kpis: [
      { prefix: "+", to: 240, suffix: "%", label: "ROAS" },
      { to: 12, suffix: "M+", label: "Impressions" },
      { to: 48, suffix: "-hour", label: "Sell-out rate" },
    ],
  },
  {
    theme: "black",
    client: "L'Oréal",
    sector: "MENA Network",
    title: "Redefining Beauty Standards in the GCC Region.",
    strategy: "Localized 360° digital campaign involving elite MENA-based talents and high-fidelity production.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    kpis: [
      { to: 85, suffix: "%", label: "Brand Sentiment" },
      { to: 4.5, suffix: "M", decimals: 1, label: "Engagement" },
      { to: 180, suffix: "+", label: "Creator Collaborations" },
    ],
  },
  {
    theme: "white",
    client: "Trendyol",
    sector: "Global Expansion",
    title: "Transforming Market Presence through Algorithmic Dominance.",
    strategy: "Aggressive TikTok and Reels strategy focused on high-frequency, platform-native content.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    kpis: [
      { prefix: "+", to: 450, suffix: "%", label: "Follower Growth" },
      { to: 35, suffix: "M+", label: "Video Views" },
      { prefix: "Top ", to: 1, suffix: "%", label: "Trending Category" },
    ],
  },
] as const

// ── Main Component ───────────────────────────────────────────────────────────
export default function CaseStudiesClientPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* ── Section 1: Hero (Black Theme) ────────────────────────────────────── */}
      <section className="bg-black text-white pt-32 pb-16 md:pt-48 md:pb-24 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E515AB]">
            / Case Studies
          </p>
          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,9rem)] font-bold leading-[0.88] tracking-[-0.04em] text-balance">
            Market Success <br /> Stories.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed font-sans">
            Explore how we engineer influence, scale presence, and drive algorithmic dominance for global enterprises across the MENA and TR markets.
          </p>
        </motion.div>
      </section>

      {/* ── Case Studies Loop ────────────────────────────────────────────────── */}
      {CASE_STUDIES.map((study, index) => {
        const isWhite = study.theme === "white"
        const isEven = index % 2 !== 0

        return (
          <section
            key={study.client}
            className={`py-20 md:py-32 overflow-hidden ${
              isWhite
                ? "bg-white text-black border-b border-gray-200"
                : "bg-black text-white border-b border-white/10"
            }`}
          >
            <div className="mx-auto max-w-[1600px] px-6 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* ── Text Content ── */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <p className={`font-mono text-xs uppercase tracking-[0.2em] font-bold ${isWhite ? 'text-black' : 'text-white'}`}>
                      {study.client}
                    </p>
                    <div className={`h-px w-8 ${isWhite ? 'bg-black/20' : 'bg-white/20'}`} />
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E515AB]">
                      {study.sector}
                    </p>
                  </div>

                  <h2 className={`font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-8 ${isWhite ? 'text-black' : 'text-white'}`}>
                    {study.title}
                  </h2>
                  
                  <p className={`text-xl md:text-2xl leading-relaxed font-sans mb-12 ${isWhite ? 'text-gray-700' : 'text-white/80'}`}>
                    {study.strategy}
                  </p>

                  {/* ── KPI Grid ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                    {study.kpis.map((kpi, i) => (
                      <div key={kpi.label} className="flex flex-col border-l-2 border-gradient pl-4" style={{ borderImage: "linear-gradient(to bottom, #E515AB, #FFBD1E) 1" }}>
                        <p className="font-mono text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#E515AB] via-[#FA1702] to-[#FFBD1E] bg-clip-text text-transparent mb-2">
                          <Counter
                            to={kpi.to}
                            prefix={kpi.prefix}
                            suffix={kpi.suffix}
                            decimals={kpi.decimals}
                          />
                        </p>
                        <p className={`font-mono text-[10px] uppercase tracking-[0.15em] font-semibold ${isWhite ? 'text-gray-500' : 'text-white/40'}`}>
                          {kpi.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* ── Action Button ── */}
                  <div>
                    <button className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest transition-all ${
                      isWhite 
                        ? "border-[#E515AB]/30 text-black hover:border-transparent" 
                        : "border-[#E515AB]/30 text-white hover:border-transparent"
                    }`}>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#E515AB] via-[#FA1702] to-[#FFBD1E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        View Detailed Report
                      </span>
                    </button>
                  </div>
                </motion.div>

                {/* ── Image ── */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <ParallaxImage src={study.image} alt={study.title} theme={study.theme} />
                </motion.div>

              </div>
            </div>
          </section>
        )
      })}

    </main>
  )
}
