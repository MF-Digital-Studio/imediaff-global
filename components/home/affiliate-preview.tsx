"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { useState } from "react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function AffiliatePreview() {
  const [trendyolLogoError, setTrendyolLogoError] = useState(false)
  const [noonLogoError, setNoonLogoError] = useState(false)

  return (
    <section className="relative overflow-hidden bg-black flex flex-col">

      {/* TRENDYOL FULL SCREEN */}
      <div className="w-full min-h-[80vh] flex flex-col justify-center bg-[#FFA101] text-white py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-12">
                <div className="h-20 flex items-center relative">
                  <img
                    src="/logos/trendyol-logo.png"
                    alt="trendyol"
                    className="w-[180px] h-auto object-contain brightness-0 invert"
                    style={{ display: trendyolLogoError ? 'none' : 'block' }}
                    onError={() => setTrendyolLogoError(true)}
                  />
                  {trendyolLogoError && (
                    <div className="flex flex-col">
                      <div className="text-white font-bold text-3xl leading-none tracking-tight">trendyol</div>
                      <div className="text-white text-[12px] mt-1 opacity-90 font-semibold tracking-wider">× iMediaff</div>
                    </div>
                  )}
                </div>
                <span className="inline-flex rounded-full bg-white px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.15em] text-[#FFA101] font-bold">
                  Top 3 Global Partner
                </span>
              </div>

              <h3 className="font-sans text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white mb-6 leading-none">
                TrendFam by Trendyol
              </h3>
              <p className="text-white/90 leading-relaxed text-lg md:text-xl font-sans max-w-2xl">
                Access Turkey's largest marketplace affiliate network across CEE, Gulf, and Azerbaijan — with the highest commission rates in the market and full agency support.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-12 lg:pl-12">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                {[
                  { label: "Regions", value: "4 Regions" },
                  { label: "Commission cap", value: "150% Max" }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-white/40 pl-5 py-1">
                    <div className="text-white font-bold text-xl md:text-2xl uppercase tracking-tight">{stat.value}</div>
                    <div className="text-white/80 text-xs font-mono uppercase tracking-wider mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/affiliate-programs"
                className="group inline-flex items-center justify-center rounded-full bg-white text-[#FFA101] font-bold hover:bg-black hover:text-white transition-colors duration-300 px-8 py-5 text-sm uppercase tracking-widest w-fit"
              >
                Explore Programs
                <span className="transition-transform duration-300 group-hover:translate-x-2 ml-3">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* NOON FULL SCREEN */}
      <div className="w-full min-h-[80vh] flex flex-col justify-center bg-[#FFEF00] text-black py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-12">
                <div className="h-20 flex items-center relative">
                  <img
                    src="/logos/noon-logo.png"
                    alt="noon"
                    className="w-[140px] h-auto object-contain brightness-0"
                    style={{ display: noonLogoError ? 'none' : 'block' }}
                    onError={() => setNoonLogoError(true)}
                  />
                  {noonLogoError && (
                    <div className="flex flex-col">
                      <div className="text-black font-bold text-3xl leading-none tracking-tight">noon</div>
                      <div className="text-black text-[12px] mt-1 opacity-90 font-semibold tracking-wider">× iMediaff</div>
                    </div>
                  )}
                </div>
                <span className="inline-flex rounded-full bg-black px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.15em] text-[#FFEF00] font-bold">
                  MENA Region Partner
                </span>
              </div>

              <h3 className="font-sans text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-black mb-6 leading-none">
                Noon Affiliate Program
              </h3>
              <p className="text-black/90 leading-relaxed text-lg md:text-xl font-sans max-w-2xl">
                Strategic e-commerce partnerships across UAE, Saudi Arabia, and Egypt — with personalised promo codes, advanced analytics, and cross-border payment management.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-12 lg:pl-12">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                {[
                  { label: "Reach", value: "3 Countries" },
                  { label: "Coverage", value: "UAE · KSA · EG" },
                  { label: "Target Segment", value: "GCC Market" }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-black/40 pl-5 py-1">
                    <div className="text-black font-bold text-xl md:text-2xl uppercase tracking-tight">{stat.value}</div>
                    <div className="text-black/80 text-xs font-mono uppercase tracking-wider mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/affiliate-programs"
                className="group inline-flex items-center justify-center rounded-full bg-black text-[#FFEF00] font-bold hover:bg-white hover:text-black transition-colors duration-300 px-8 py-5 text-sm uppercase tracking-widest w-fit"
              >
                Explore Noon Program
                <span className="transition-transform duration-300 group-hover:translate-x-2 ml-3">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
