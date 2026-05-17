"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Target, Zap, ShieldCheck } from "lucide-react"

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    title: "Strategic Precision",
    description: "Targeting the right influence, not just the highest reach. We optimize for conversion, not just impressions.",
    icon: <Target className="w-6 h-6 text-black" strokeWidth={1.5} />,
    glowColor: "rgba(37,99,235,0.15)",
  },
  {
    title: "Operational Speed",
    description: "Rapid market entry and campaign deployment across the Dubai and MENA landscape.",
    icon: <Zap className="w-6 h-6 text-black" strokeWidth={1.5} />,
    glowColor: "rgba(255,138,30,0.15)",
  },
  {
    title: "Radical Transparency",
    description: "Real-time, data-backed reporting and absolute compliance for every global move.",
    icon: <ShieldCheck className="w-6 h-6 text-black" strokeWidth={1.5} />,
    glowColor: "rgba(255,189,30,0.15)",
  },
]

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function GlobalValue() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-12% 0px" })

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32 overflow-hidden" aria-label="Global Value Proposition">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-sans text-[clamp(2.8rem,6vw,5.5rem)] font-bold text-black tracking-[-0.04em] leading-[0.95] mb-8">
              Architects of Global Influence.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-black/60 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto"
          >
            We don&apos;t just connect brands with creators; we build the infrastructure for regional dominance. iMediaff Global combines data-led strategy with cultural fluency to transform global ambition into local market share.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col p-8 md:p-10 rounded-2xl bg-black/[0.02] border border-black/10 transition-all duration-500 hover:bg-white hover:-translate-y-2"
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = `0 20px 40px -10px ${pillar.glowColor}`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
              }}
            >
              {/* Sunset Gradient Border using Mask on Hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #16A34A)",
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div className="mb-8 w-14 h-14 rounded-full bg-black/[0.04] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>

              <h3 className="font-sans text-2xl font-bold text-black mb-4 tracking-tight">
                {pillar.title}
              </h3>

              <p className="text-black/60 text-[0.95rem] leading-relaxed font-medium">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
