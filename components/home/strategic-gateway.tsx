"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

// ─── DATA ─────────────────────────────────────────────────────────────────────

const REGIONS = [
  {
    city: "Istanbul",
    role: "Headquarters",
    description:
      "Strategic hub and high-fidelity production center connecting Europe and Asia. The creative core where every global campaign originates.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden>
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 6v28M6 20h28M9 12q5 4 11 2t11-2M9 28q5-4 11-2t11 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    stat: "HQ Since 2019",
  },
  {
    city: "Dubai",
    role: "Operations",
    description:
      "The pulse of our MENA network, driving regional influence and elite creator partnerships across the Gulf, Levant, and North Africa.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden>
        <path d="M8 30h24M12 30V18l3-3 3 3v-6l2-2 2 2v-4l2-2 2 2V30M11 22h2M11 26h2M22 18h2M22 22h2M22 26h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stat: "Primary Market",
  },
  {
    city: "Wyoming",
    role: "Global Anchor",
    description:
      "Our international corporate anchor, ensuring global standards, legal compliance, and seamless access to Western markets and partnerships.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden>
        <rect x="8" y="14" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M14 14V10a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="20" cy="21" r="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M20 23v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    stat: "Global Compliance",
  },
]

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function StrategicGateway() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: "-12% 0px" })

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
      aria-label="Strategic Gateway"
    >
      {/* Top rule — flushes the black→white seam */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#E515AB] via-[#FF8A1E] to-[#FFBD1E]" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">

        {/* ── EDITORIAL HEADER ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20 md:mb-28">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/35 mb-5">
              / Strategic Positioning
            </p>

            <h2 className="font-sans text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold leading-[0.92] tracking-[-0.03em] text-black text-balance">
              The Strategic Gateway{" "}
              <br className="hidden md:block" />
              to the{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #E515AB 0%, #FF8A1E 55%, #FFBD1E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MENA Region.
              </span>
            </h2>
          </motion.div>

          {/* Right — body copy + divider */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-4"
          >
            {/* Magenta accent rule */}
            <div className="w-10 h-[2px] bg-gradient-to-r from-[#E515AB] to-[#FF8A1E] mb-7" />

            <p className="text-black/60 leading-relaxed text-[1.05rem] font-medium max-w-lg">
              Bridging the gap between Western excellence and Middle Eastern market dynamics.
              iMediaff Global acts as your operational anchor, providing the cultural fluency and
              strategic infrastructure required for seamless market entry.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Cultural Fluency", "Operational Depth", "Creator Networks", "Compliance Ready"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5 text-xs font-semibold text-black/60 tracking-wide"
                >
                  <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E515AB] to-[#FF8A1E] flex-shrink-0" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── REGION CARDS ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REGIONS.map((region, i) => (
            <motion.article
              key={region.city}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col p-8 md:p-10 bg-white rounded-2xl border border-black/[0.07] transition-all duration-500 hover:-translate-y-1.5"
              style={{ boxShadow: "0 2px 20px -8px rgba(0,0,0,0)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 48px -16px rgba(0,0,0,0.08)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px -8px rgba(0,0,0,0)"
              }}
            >
              {/* Gradient top line — reveals on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#E515AB] via-[#FF8A1E] to-[#FFBD1E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="mb-7 text-black/25 group-hover:text-black transition-colors duration-400">
                {region.icon}
              </div>

              {/* City + Role */}
              <div className="mb-5">
                <h3 className="font-sans text-2xl font-bold text-black tracking-tight leading-none mb-1">
                  {region.city}
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-black/35">
                  {region.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-black/55 leading-relaxed text-[0.93rem] font-medium flex-1">
                {region.description}
              </p>

              {/* Footer stat badge */}
              <div className="mt-8 flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(90deg, #E515AB 0%, #FF8A1E 100%)" }}
                />
                <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-black/35">
                  {region.stat}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Bottom accent rule */}
      <div className="w-full h-px bg-black/5" />
    </section>
  )
}
