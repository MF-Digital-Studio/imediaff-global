"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "motion/react"
import { Target, Zap, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    title: "Strategic Precision",
    description: "We match brands with the right influencers — not just the largest audiences. Every partnership is built around performance metrics, audience fit, and commission-based accountability across 4 active regions.",
    icon: <Target className="w-6 h-6 text-black" strokeWidth={1.5} />,
    glowColor: "rgba(37,99,235,0.15)",
  },
  {
    title: "Operational Speed",
    description: "From application to first commission in days. Our TrendFam partnership infrastructure and streamlined onboarding means creators start earning fast — and brands see results faster.",
    icon: <Zap className="w-6 h-6 text-black" strokeWidth={1.5} />,
    glowColor: "rgba(255,138,30,0.15)",
  },
  {
    title: "Radical Transparency",
    description: "Every influencer works under a clear 1-year contract. Every commission is tracked in real time via Influencer Center. Every payment is documented. No upfront fees, ever.",
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

        {/* Pillars List */}
        <div className="flex flex-col gap-12 md:gap-16">
          {PILLARS.map((pillar, i) => {
            const isImageLeft = i % 2 === 0
            const imageUrls = [
              "/images/home/architects/strategic-precision-v2.jpg",
              "/images/home/architects/operational-speed.jpg",
              "/images/home/architects/radical-transparency.jpg"
            ]
            const imageAlts = [
              "Strategic campaign planning and performance review workflow",
              "Mobile-first creator production setup for fast campaign execution",
              "Transparent business agreement and partnership documentation process"
            ]

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center p-6 md:p-10 rounded-2xl bg-black/[0.02] border border-black/10 transition-all duration-500 hover:bg-white"
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

                {/* Image Side */}
                <div className={cn(
                  "w-full h-full relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-xl",
                  isImageLeft ? "order-1" : "order-1 md:order-2"
                )}>
                  <Image
                    src={imageUrls[i]}
                    alt={imageAlts[i]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none rounded-xl" />
                </div>

                {/* Text Side */}
                <div className={cn(
                  "flex flex-col justify-center",
                  isImageLeft ? "order-2" : "order-2 md:order-1"
                )}>
                  <div className="mb-6 w-14 h-14 rounded-full bg-black/[0.04] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {pillar.icon}
                  </div>

                  <h3 className="font-sans text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-black/60 text-[0.95rem] md:text-base leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
