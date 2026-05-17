"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { useRef } from "react"
import { useInView } from "motion/react"
import { ArrowRight } from "lucide-react"

const REGIONS = [
  {
    emoji: "🇹🇷",
    title: "Turkey",
    tag: "Founding Market",
    desc: "Our founding market. 5,000+ influencer partners operating through Trendyol's affiliate program with full legal, financial, and strategic support.",
    href: "/talent/turkey",
    accentColor: "rgba(37,99,235,0.12)",
    hoverBorder: "#2563EB",
  },
  {
    emoji: "🇸🇦 🇦🇪 🇰🇼",
    title: "Gulf",
    tag: "KSA · UAE · Kuwait",
    desc: "TrendFam Gulf operations across KSA, UAE, and Kuwait. Link and code commission model with up to 150% commission for new buyers.",
    href: "/talent/gulf",
    accentColor: "rgba(22,163,74,0.10)",
    hoverBorder: "#16A34A",
  },
  {
    emoji: "🇷🇴 🇵🇱 🇧🇬 🇬🇷",
    title: "CEE",
    tag: "Active since Oct 2024",
    desc: "Active since October 2024 across Romania, Poland, Bulgaria, and Greece. Performance-based affiliate program via TrendFam.",
    href: "/talent/cee",
    accentColor: "rgba(37,99,235,0.10)",
    hoverBorder: "#2563EB",
  },
  {
    emoji: "🇦🇿",
    title: "Azerbaijan",
    tag: "Growth Market",
    desc: "Trendyol affiliate operations with segment-based commission rates and monthly coupon reward system.",
    href: "/talent/azerbaijan",
    accentColor: "rgba(22,163,74,0.08)",
    hoverBorder: "#16A34A",
  },
]

export default function RegionsGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" })

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-24 md:py-32 border-t border-white/[0.06]"
      aria-label="Our Regions"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-5">
            / Our Regions
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-sans text-[clamp(2.5rem,6vw,5rem)] font-bold text-white leading-[0.92] tracking-[-0.03em]">
              Active operations across{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #2563EB 0%, #16A34A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                4 global markets.
              </span>
            </h2>
            <Link
              href="/talent"
              className="group inline-flex items-center gap-2 border border-white/20 rounded-full px-6 py-3 text-sm font-semibold text-white/70 hover:border-white hover:text-white transition-all duration-300 shrink-0"
            >
              View all talent programs
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {REGIONS.map((region, i) => (
            <motion.div
              key={region.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={region.href}
                className="group relative flex flex-col h-full p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Subtle gradient glow on hover */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: region.accentColor }}
                />
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 inset-x-0 h-[1.5px] rounded-t-2xl bg-gradient-to-r from-[#2563EB] to-[#16A34A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Emoji */}
                <div className="text-2xl mb-5 relative z-10">{region.emoji}</div>

                {/* Title + Tag */}
                <div className="mb-4 relative z-10">
                  <h3 className="font-sans text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-white transition-colors">
                    {region.title}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                    {region.tag}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed font-medium flex-1 relative z-10">
                  {region.desc}
                </p>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/40 group-hover:text-white transition-colors duration-300 relative z-10">
                  View program
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
