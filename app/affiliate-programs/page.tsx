"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { useState } from "react"
import {
  Target,
  Zap,
  ShieldCheck,
  Tag,
  BarChart3,
  Globe,
  ArrowRight,
  Sparkles,
  Link2,
  Trophy,
  DollarSign,
  Briefcase,
  FileCheck2,
  Award,
  Users
} from "lucide-react"

// ── Fade-in variant ──
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function AffiliateProgramsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

      {/* ── SECTION 1: HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center pt-32 pb-20 border-b border-black/10 bg-white"
      >
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 hero-grid-overlay opacity-5 pointer-events-none brightness-0" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 w-full relative z-10">
          <div className="max-w-5xl">
            <motion.div {...fadeUp(0)}>

              <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50 mb-6">
                / Performance Marketing
              </p>
              <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8 text-black text-balance font-sans">
                Performance Marketing <br />
                <span className="bg-gradient-to-r from-[#FFA101] to-[#C8B2F8] bg-clip-text text-transparent font-sans">
                  Beyond Borders.
                </span>
              </h1>
              <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-black/60 mb-12 font-sans text-balance">
                Global revenue partnerships connecting content creators with the world's leading e-commerce platforms — through transparent, commission-based affiliate programs managed end-to-end by iMediaff Global.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition-all hover:scale-105 bg-gradient-to-br from-[#FFA101] to-[#C8B2F8] shadow-[0_4px_14px_0_rgba(255,161,1,0.25)] hover:shadow-[0_6px_20px_rgba(255,161,1,0.4)] w-full sm:w-auto font-bold"
              >
                Join the Affiliate Program ↗
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PLATFORM OVERVIEW ── */}
      <section className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div {...fadeUp(0)} className="mb-16 md:mb-24">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFA101]">
              / Our Platforms
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance">
              Two Platforms. Four Regions. <br />
              <span className="bg-gradient-to-r from-[#FFA101] to-[#C8B2F8] bg-clip-text text-transparent">
                Unlimited Reach.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 - Trendyol */}
            <motion.div
              {...fadeUp(0.1)}
              className="group relative p-8 md:p-12 bg-[#FFA101] border border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logos/trendyol-logo.png"
                      alt="trendyol"
                      className="h-6 w-auto object-contain brightness-0 invert"
                    />
                    <span className="text-white text-lg font-bold">×</span>
                    <img
                      src="/logos/imediaff-global-logo.png"
                      alt="imediaff"
                      className="h-8 w-auto object-contain rounded"
                    />
                  </div>
                  <span className="inline-flex bg-white px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#FFA101] font-bold">
                    Top 3 Global Partner Agency
                  </span>
                </div>
                <p className="text-white leading-relaxed font-sans mb-8">
                  TrendFam is Trendyol's official commission-based influencer program. As one of its top 3 global partner agencies, iMediaff opens the doors of this professional affiliate network — inaccessible to individual applicants — with full corporate backing and operational support.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["CEE", "Gulf", "Turkey", "Azerbaijan"].map((reg) => (
                    <span key={reg} className="inline-flex items-center gap-1.5 border border-white/30 rounded-lg px-3 py-1.5 text-xs font-semibold text-white">
                      <span className="w-1 h-1 rounded-full bg-white" />
                      {reg}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#trendyol-programs"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-black transition-colors w-fit"
              >
                View TrendFam Programs
                <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
              </a>
            </motion.div>

            {/* Card 2 - Noon */}
            <motion.div
              {...fadeUp(0.2)}
              className="group relative p-8 md:p-12 bg-[#C8B2F8] border border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logos/noon-logo.png"
                      alt="noon"
                      className="h-6 w-auto object-contain brightness-0 invert"
                    />
                    <span className="text-white text-lg font-bold">×</span>
                    <img
                      src="/logos/imediaff-global-logo.png"
                      alt="imediaff"
                      className="h-8 w-auto object-contain rounded"
                    />
                  </div>
                  <span className="inline-flex bg-white px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#C8B2F8] font-bold">
                    MENA Region Partner
                  </span>
                </div>
                <p className="text-white leading-relaxed font-sans mb-8">
                  Strategic partnership with Noon — one of the largest e-commerce platforms in the GCC and Middle East. We integrate our influencer portfolio directly into the highest purchasing-power consumer markets in UAE, Saudi Arabia, and Egypt.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["UAE", "KSA", "Egypt"].map((reg) => (
                    <span key={reg} className="inline-flex items-center gap-1.5 border border-white/30 rounded-lg px-3 py-1.5 text-xs font-semibold text-white">
                      <span className="w-1 h-1 rounded-full bg-white" />
                      {reg}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#noon-program"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-black transition-colors w-fit"
              >
                View Noon Program
                <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TRENDYOL / TRENDFAM PROGRAMS ── */}
      <section id="trendyol-programs" className="py-24 md:py-32 bg-[#FFA101] text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div {...fadeUp(0)} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/90">
                / Trendyol · TrendFam
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white text-balance">
                The TrendFam Global <br />
                Affiliate Network.
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-white font-sans">
                Commission-based influencer partnerships across 4 active regions — managed professionally from application to payment.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/logos/trendyol-logo.png"
                alt="trendyol"
                className="w-[180px] h-auto object-contain brightness-0 invert"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Card A: CEE */}
            <motion.div
              {...fadeUp(0.1)}
              className="group relative rounded-3xl p-8 md:p-10 bg-black/10 backdrop-blur-sm border border-white/20 hover:bg-black/20 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    Central & Eastern Europe
                  </h3>
                  <span className="text-xl" title="RO, PL, BG, GR">🇷🇴 🇵🇱 🇧🇬 🇬🇷</span>
                </div>
                <p className="font-mono text-[10px] text-white/80 font-bold uppercase tracking-wider mb-6">Active since October 2024</p>
                <p className="text-white leading-relaxed font-sans mb-8 text-sm">
                  European-standard integration for high-engagement creators in CEE markets. Individual applications are not accepted — iMediaff provides the authorized agency gateway into this professional network.
                </p>

                <div className="space-y-4 border-t border-white/20 pt-6 mb-10">
                  {[
                    "In-Link & Out-Link commission model",
                    "Performance bonuses & seasonal campaigns (Black Friday, 11.11)",
                    "Community referral incentives",
                    "Transparent European e-commerce compliant payouts"
                  ].map((feat, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-white/90 font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/talent/cee"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-black transition-colors mt-auto"
              >
                View CEE Program
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

            {/* Card B: Gulf */}
            <motion.div
              {...fadeUp(0.2)}
              className="group relative rounded-3xl p-8 md:p-10 bg-black/10 backdrop-blur-sm border border-white/20 hover:bg-black/20 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    Gulf · GCC
                  </h3>
                  <span className="text-xl" title="KSA, UAE, KW">🇸🇦 🇦🇪 🇰🇼</span>
                </div>
                <p className="font-mono text-[10px] text-white/80 font-bold uppercase tracking-wider mb-6">Active Region</p>
                <p className="text-white leading-relaxed font-sans mb-8 text-sm">
                  Direct access to TrendFam's highest-commission tier for Gulf creators. Up to 150% link commission for new buyers — the most competitive affiliate rate in the region.
                </p>

                <div className="space-y-4 border-t border-white/20 pt-6 mb-10">
                  {[
                    "150% commission for new buyers",
                    "50% for returning buyers + 5% personal code commission",
                    "7-day Brand Offer attribution window",
                    "Ranking & segmentation system (Platinum/Gold/Silver/Starter)",
                    "Monthly coin bonus rewards for top 1,000 performers"
                  ].map((feat, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Trophy className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-white/90 font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/talent/gulf"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-black transition-colors mt-auto"
              >
                View Gulf Program
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

            {/* Card C: Azerbaijan */}
            <motion.div
              {...fadeUp(0.3)}
              className="group relative rounded-3xl p-8 md:p-10 bg-black/10 backdrop-blur-sm border border-white/20 hover:bg-black/20 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    Azerbaijan
                  </h3>
                  <span className="text-xl" title="AZ">🇦🇿</span>
                </div>
                <p className="font-mono text-[10px] text-white/80 font-bold uppercase tracking-wider mb-6">Active Region</p>
                <p className="text-white leading-relaxed font-sans mb-8 text-sm">
                  Connecting Azerbaijani digital creators with Trendyol's logistics and commercial power — building a direct revenue gateway through orders delivered locally within Azerbaijan.
                </p>

                <div className="space-y-4 border-t border-white/20 pt-6 mb-10">
                  {[
                    "Segment-based commission structure",
                    "Monthly AZN coupon rewards by ranking",
                    "In-link & out-link commission structure",
                    "Full agency financial & operational management"
                  ].map((feat, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Link2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-white/90 font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/talent/azerbaijan"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-black transition-colors mt-auto"
              >
                View Azerbaijan Program
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/contact?type=trendyol"
              className="group inline-flex items-center justify-center rounded-full px-8 py-4 bg-white text-[#FFA101] hover:bg-black hover:text-white transition-all hover:scale-105 shadow-xl font-bold"
            >
              Apply for Trendyol Affiliate Access ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW TRENDFAM WORKS ── */}
      <section className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div {...fadeUp(0)} className="mb-16 md:mb-24">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFA101]">
              / How It Works
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance">
              From Application <br />
              <span className="bg-gradient-to-r from-[#FFA101] to-[#C8B2F8] bg-clip-text text-transparent">
                to First Commission.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/60 font-sans">
              A structured, transparent process — managed end-to-end by iMediaff Global.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your profile through iMediaff. We review eligibility within 1–5 business days against regional TrendFam criteria."
              },
              {
                step: "02",
                title: "Contract",
                desc: "Sign a 1-year partnership agreement. Commission rates, payment schedule, and compliance rules clearly defined for both parties."
              },
              {
                step: "03",
                title: "Activate",
                desc: "Gain access to the Influencer Center. Generate affiliate links, explore Brand Offers, and join our dedicated WhatsApp campaign channel."
              },
              {
                step: "04",
                title: "Create & Share",
                desc: "Build product collections, create content around them, and share your links across Instagram, TikTok, YouTube, Snapchat, Twitter, and Facebook."
              },
              {
                step: "05",
                title: "Earn",
                desc: "Commissions tracked in real time. Monthly payouts processed on a 30-day cycle — directly to your IBAN or local account. No upfront fees, ever."
              }
            ].map((s, index) => (
              <motion.div
                key={s.step}
                {...fadeUp(index * 0.15)}
                className="relative flex flex-col group"
              >
                {/* Desktop Connecting Line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-[1px] bg-white/10 group-hover:bg-[#FFA101]/50 transition-colors duration-500" />
                )}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black font-mono text-sm text-[#FFA101] transition-colors duration-500 group-hover:border-[#FFA101] mb-6 font-bold">
                  {s.step}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: NOON AFFILIATE PROGRAM ── */}
      <section id="noon-program" className="py-24 md:py-32 bg-[#C8B2F8] text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">

            {/* Left Col - Text */}
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-6 mb-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/95">
                  / Noon · MENA
                </p>
                <img
                  src="/logos/noon-logo.png"
                  alt="noon"
                  className="w-[120px] h-auto object-contain brightness-0 invert"
                />
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.02] tracking-[-0.04em] mb-8 text-white text-balance">
                The MENA Gateway: <br />
                Noon Affiliate Program.
              </h2>
              <div className="h-px w-20 bg-white/40 mb-8" />
              <p className="text-lg text-white leading-relaxed font-sans mb-6">
                Through our strategic partnership with Noon, we connect our influencer portfolio directly to consumers across UAE, Saudi Arabia, and Egypt — markets with some of the world's highest e-commerce purchasing power.
              </p>
              <p className="text-base text-white/90 leading-relaxed font-sans">
                We segment Noon's vast product catalogue — Fashion, High-Tech, Cosmetics, Home & Living — according to each creator's niche, ensuring the right product reaches the right audience with maximum conversion impact.
              </p>
            </motion.div>

            {/* Right Col - Visual (Dark card with Noon branding accent) */}
            <motion.div
              {...fadeUp(0.15)}
              className="relative aspect-[16/10] md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 p-8 md:p-12 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(254,240,138,0.03) 0%, rgba(200,178,248,0.08) 100%), #0d0d0d'
              }}
            >
              <div className="absolute top-4 right-6 font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">NOON AFFILIATE PRO</div>

              <div className="space-y-6 mt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="font-mono text-[10px] text-white tracking-wider uppercase font-bold">ACTIVE INTEGRATION</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white/95">
                  High-converting <br />Noon revenue stack.
                </h3>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.06] pt-6 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-mono text-xs text-white font-bold">N</div>
                  <span className="font-sans text-xs text-white/80 font-semibold uppercase tracking-wider">Noon × iMediaff Global</span>
                </div>
                <div className="text-xl" title="UAE, KSA, EG">🇦🇪 🇸🇦 🇪🇬</div>
              </div>
            </motion.div>

          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tag,
                title: "Personalised Promo Codes",
                desc: "Each creator receives a unique influencer discount code — linked directly to their identity. Followers get instant basket discounts, driving trust and accelerating purchase decisions."
              },
              {
                icon: BarChart3,
                title: "Advanced Performance Analytics",
                desc: "Real-time reporting on click rates, cart abandonment patterns, and live sales performance — integrated with Noon's global affiliate panels."
              },
              {
                icon: Globe,
                title: "Cross-Border Financial Management",
                desc: "All earnings processed through our institutional finance channels. Currency fluctuation protection across regional currencies. Safe, transparent, on-time."
              },
              {
                icon: Target,
                title: "Regional Audience Matching",
                desc: "Creator niches matched algorithmically to Noon's product segments — maximising conversion rates through audience-product alignment, not just reach."
              }
            ].map((f, index) => (
              <motion.div
                key={f.title}
                {...fadeUp(index * 0.12)}
                className="group relative rounded-2xl p-8 bg-black/10 backdrop-blur-sm border border-white/20 hover:bg-black/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="mb-6 w-12 h-12 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <f.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-white/80">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/contact?type=noon"
              className="group inline-flex items-center justify-center rounded-full px-8 py-4 bg-white text-[#C8B2F8] hover:bg-black hover:text-white transition-all hover:scale-105 shadow-xl font-bold"
            >
              Apply for Affiliate Access ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY IMEDIAFF ── */}
      <section className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div {...fadeUp(0)} className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C8B2F8]">
              / The iMediaff Advantage
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance">
              More Than a Link. <br />
              <span className="bg-gradient-to-r from-[#FFA101] to-[#C8B2F8] bg-clip-text text-transparent">
                A Complete Affiliate Infrastructure.
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-36">
            {[
              {
                title: "Technical & Operational Shield",
                desc: "From link breakage resolution to panel sync errors and order discrepancy investigations — our specialist account managers liaise directly with platform teams during professional hours to resolve every technical issue fast.",
                image: "/affiliate-programs/tech-shield.jpg",
                isImageLeft: true
              },
              {
                title: "Strategic Career & Data Consultancy",
                desc: "We don't just hand you a link. Regular webinars, panel analytics training, audience targeting strategies, Link Performance audits, and content optimization guidance — continuously elevating your digital skills and earning potential.",
                image: "/affiliate-programs/consultancy.jpg",
                isImageLeft: false
              },
              {
                title: "Exclusive Brand & Campaign Network",
                desc: "We don't limit our creators to one campaign or platform. Global e-commerce seller partnerships, agency-exclusive seasonal bonus missions, and major brand sponsorships — all brought directly to our creator community.",
                image: "/affiliate-programs/brand-network.jpg",
                isImageLeft: true
              },
              {
                title: "Legal Guarantee & Transparent Payouts",
                desc: "All partnerships governed by official 1-year corporate contracts. Full compliance with international finance and legal standards — protecting the rights, payment timelines, and career investments of every creator we represent.",
                image: "/affiliate-programs/legal-payouts.jpg",
                isImageLeft: false
              }
            ].map((block, index) => (
              <div
                key={block.title}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${block.isImageLeft ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Image Side */}
                <motion.div
                  {...fadeUp(0.1)}
                  className="w-full lg:w-1/2 aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/[0.08]"
                >
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-102"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
                </motion.div>

                {/* Text Side */}
                <motion.div
                  {...fadeUp(0.2)}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <div className="mb-6 font-mono text-xs uppercase tracking-[0.30em] text-[#C8B2F8]">
                    / ADVANTAGE {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                    {block.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-sans text-base md:text-lg">
                    {block.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PLATFORM COMPARISON TABLE ── */}
      <section className="py-24 md:py-32 border-b border-white/[0.08] relative bg-white/[0.01]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div {...fadeUp(0)} className="mb-16 md:mb-24 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C8B2F8]">
              / Program Comparison
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
              Find Your Program.
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp(0.15)}
            className="overflow-x-auto rounded-3xl border border-white/[0.08]"
          >
            <table className="w-full min-w-[800px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#C8B2F8] text-[#0a0a0a]">
                  <th className="p-6 font-display text-base font-bold uppercase tracking-wider">Feature</th>
                  <th className="p-6 font-display text-base font-bold uppercase tracking-wider">TrendFam CEE</th>
                  <th className="p-6 font-display text-base font-bold uppercase tracking-wider">TrendFam Gulf</th>
                  <th className="p-6 font-display text-base font-bold uppercase tracking-wider">TrendFam Azerbaijan</th>
                  <th className="p-6 font-display text-base font-bold uppercase tracking-wider">Noon MENA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] font-medium text-white/80">
                <tr className="bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white">Regions</td>
                  <td className="p-6">RO, PL, BG, GR</td>
                  <td className="p-6">KSA, UAE, KW</td>
                  <td className="p-6">Azerbaijan</td>
                  <td className="p-6">UAE, KSA, EG</td>
                </tr>
                <tr className="bg-transparent hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white">Min. Followers</td>
                  <td className="p-6">10,000</td>
                  <td className="p-6">10,000</td>
                  <td className="p-6">10,000</td>
                  <td className="p-6">TBC</td>
                </tr>
                <tr className="bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white">Commission Model</td>
                  <td className="p-6">In-Link / Out-Link</td>
                  <td className="p-6">Link + Code</td>
                  <td className="p-6">Segment-based</td>
                  <td className="p-6">Promo Code + Link</td>
                </tr>
                <tr className="bg-transparent hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white">Max Commission</td>
                  <td className="p-6">100% in-link (RO) / 75% (BG & GR)</td>
                  <td className="p-6">150% new buyer</td>
                  <td className="p-6">Segment-based</td>
                  <td className="p-6">Varies by product</td>
                </tr>
                <tr className="bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white">Cookie Window</td>
                  <td className="p-6">24h / 12h</td>
                  <td className="p-6">2 days</td>
                  <td className="p-6">24h</td>
                  <td className="p-6">-</td>
                </tr>
                <tr className="bg-transparent hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white">Payment Currency</td>
                  <td className="p-6">EUR</td>
                  <td className="p-6">USD</td>
                  <td className="p-6">AZN (via Manat)</td>
                  <td className="p-6">AED / SAR</td>
                </tr>
                <tr className="bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white">Contract</td>
                  <td className="p-6">1 Year</td>
                  <td className="p-6">1 Year</td>
                  <td className="p-6">1 Year</td>
                  <td className="p-6">1 Year</td>
                </tr>
                <tr className="bg-transparent hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white">Agency Required</td>
                  <td className="p-6 text-green-400">✅ Yes</td>
                  <td className="p-6 text-green-400">✅ Yes</td>
                  <td className="p-6 text-green-400">✅ Yes</td>
                  <td className="p-6 text-green-400">✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 9: CTA ── */}
      <section className="bg-gradient-to-br from-[#FFA101] to-[#C8B2F8] text-white py-24 md:py-36 relative overflow-hidden">
        {/* Glow Orb */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <motion.div
          {...fadeUp(0)}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center relative z-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold mb-6">
            / Global Standard
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold tracking-[-0.03em] text-white mb-6 text-balance">
            Ready to Apply <br /> Globally?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            Apply through iMediaff Global — your authorized gateway to TrendFam and Noon affiliate programs across MENA, CEE, Gulf, and Azerbaijan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-base font-bold text-white transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Join the Affiliate Program ↗
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
