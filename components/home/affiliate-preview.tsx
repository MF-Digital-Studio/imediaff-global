"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

// ── Fade-in variant ──
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function AffiliatePreview() {
  return (
    <section className="relative border-b border-black/10 bg-[#0a0a0a] py-24 md:py-32 text-white overflow-hidden">
      {/* Ambient Orbs for Dark Theme Break */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#FF8A1E]/5 blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#FEF08A]/5 blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      {/* Grid texture overlay */}
      <div className="absolute inset-0 hero-grid-overlay opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
        <motion.div {...fadeUp(0)} className="mb-16 md:mb-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#2563EB]">
            / Affiliate Programs
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white text-balance">
            Two Platforms. <br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent">
              Global Reach.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/50 font-sans">
            Commission-based affiliate partnerships with Trendyol and Noon — the region's most powerful e-commerce platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CARD 1: Trendyol */}
          <motion.div 
            {...fadeUp(0.1)}
            className="group relative rounded-3xl p-8 md:p-12 border border-[#FF8A1E]/15 hover:border-[#FF8A1E]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,138,30,0.02) 0%, rgba(255,138,30,0.06) 100%), #0d0d0d'
            }}
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-[#FF8A1E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              {/* Image Banner */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-white/[0.06]">
                <Image
                  src="/home/trendyol-card.jpg"
                  alt="Trendyol TrendFam affiliate dashboard preview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  unoptimized
                />
              </div>

              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="inline-flex rounded-full bg-[#FF8A1E]/10 border border-[#FF8A1E]/20 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[#FF8A1E] font-bold">
                  Top 3 Global Partner
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">TRENDYOL × IMEDIAFF</span>
              </div>

              {/* Title & Body */}
              <h3 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                TrendFam by Trendyol
              </h3>
              <p className="text-white/60 leading-relaxed text-sm font-sans mb-8">
                Access Turkey's largest marketplace affiliate network across CEE, Gulf, and Azerbaijan — with the highest commission rates in the market and full agency support.
              </p>
            </div>

            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 border-t border-b border-white/[0.08] py-4 mb-8">
                {[
                  { label: "Regions", value: "4 Regions" },
                  { label: "Commission cap", value: "150% Max" },
                  { label: "Agreement", value: "1-Year Contract" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-white font-bold text-xs uppercase tracking-wide">{stat.value}</div>
                    <div className="text-[9px] font-mono uppercase tracking-wider text-white/30 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <Link 
                href="/affiliate-programs"
                className="group/btn inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#FF8A1E] hover:text-white transition-all w-full"
              >
                Explore Programs
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1 ml-2">→</span>
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: Noon */}
          <motion.div 
            {...fadeUp(0.2)}
            className="group relative rounded-3xl p-8 md:p-12 border border-[#FEF08A]/10 hover:border-[#FEF08A]/30 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(254,240,138,0.02) 0%, rgba(254,240,138,0.06) 100%), #0d0d0d'
            }}
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-[#FEF08A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              {/* Image Banner */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-white/[0.06]">
                <Image
                  src="/home/noon-card.jpg"
                  alt="Noon affiliate Dubai skyline visual overlay"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  unoptimized
                />
              </div>

              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="inline-flex rounded-full bg-[#FEF08A]/10 border border-[#FEF08A]/20 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[#FEF08A] font-bold">
                  MENA Region Partner
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">NOON × IMEDIAFF</span>
              </div>

              {/* Title & Body */}
              <h3 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                Noon Affiliate Program
              </h3>
              <p className="text-white/60 leading-relaxed text-sm font-sans mb-8">
                Strategic e-commerce partnerships across UAE, Saudi Arabia, and Egypt — with personalised promo codes, advanced analytics, and cross-border payment management.
              </p>
            </div>

            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 border-t border-b border-white/[0.08] py-4 mb-8">
                {[
                  { label: "Reach", value: "3 Countries" },
                  { label: "Coverage", value: "UAE · KSA · EG" },
                  { label: "Target Segment", value: "GCC Market" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-white font-bold text-xs uppercase tracking-wide">{stat.value}</div>
                    <div className="text-[9px] font-mono uppercase tracking-wider text-white/30 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <Link 
                href="/affiliate-programs"
                className="group/btn inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#FEF08A] hover:text-black transition-all w-full"
              >
                Explore Noon Program
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1 ml-2">→</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
