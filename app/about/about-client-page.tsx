"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import {
  TrendingUp, Coins,
  Scale, Lock,
  Target, Camera,
  Film, Zap,
  Users, Star,
  Package, Flag,
} from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const PRESENCE = [
  {
    region: "TR",
    city: "Istanbul",
    note: "Creative strategy and high-fidelity production operations.",
  },
  {
    region: "Dubai",
    city: "UAE",
    note: "Regional headquarters for GCC partnerships and strategic market entry.",
  },
  {
    region: "MENA",
    city: "Regional Network",
    note: "Holistic campaign execution and cultural adaptation across the region.",
  },
]

const METRICS = [
  { value: "10,000+", label: "Verified Influencers" },
  { value: "150+", label: "Global Brand Partners" },
  { value: "360°", label: "Growth Solutions" },
]

const PARTNERS = [
  { name: "Amazon", sector: "E-Commerce" },
  { name: "Trendyol", sector: "Fashion & Retail" },
  { name: "Çiçeksepeti", sector: "Lifestyle" },
  { name: "Hepsiburada", sector: "Technology" },
]

const CAPABILITIES = [
  {
    index: "01",
    title: "Creator Strategy",
    description:
      "Managing careers and campaigns for the digital elite. From talent discovery to brand alignment, we engineer influence that converts.",
  },
  {
    index: "02",
    title: "Market Entry & Growth",
    description:
      "Bridging the gap for brands entering the Dubai and MENA markets. We deliver the cultural intelligence and network access to accelerate your launch.",
  },
  {
    index: "03",
    title: "Production & Media",
    description:
      "High-fidelity content creation and targeted ad performance. Every asset is built to command attention across every platform.",
  },
  {
    index: "04",
    title: "Strategic Consultancy",
    description:
      "Legal, financial, and strategic blueprints for digital expansion. We are the operating system behind your international growth.",
  },
]

const CORE_SERVICES = [
  {
    PrimaryIcon: TrendingUp,
    AccentIcon: Coins,
    title: "Financial & Strategic Advisory",
    description: "Tailored financial roadmaps and strategic business growth for digital-first enterprises.",
  },
  {
    PrimaryIcon: Scale,
    AccentIcon: Lock,
    title: "Legal & Rights Management",
    description: "Comprehensive legal support for contract architecture and intellectual property in the creator economy.",
  },
  {
    PrimaryIcon: Target,
    AccentIcon: Camera,
    title: "Advertising & Marketing Production",
    description: "End-to-end campaign creation that resonates across cultures and platforms.",
  },
  {
    PrimaryIcon: Film,
    AccentIcon: Zap,
    title: "Creative Production",
    description: "High-fidelity visual storytelling and content assets built for the modern attention economy.",
  },
  {
    PrimaryIcon: Users,
    AccentIcon: Star,
    title: "Global Talent Management",
    description: "360-degree career growth and partnership management for the digital elite.",
  },
  {
    PrimaryIcon: Package,
    AccentIcon: Flag,
    title: "Brand & Product Development",
    description: "Developing unique brand identities and product lines that dominate markets.",
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutClientPage() {
  const brandRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: brandRef,
    offset: ["start end", "end start"],
  })
  const brandY = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ── Hero ── */}
      <section className="bg-black text-white border-b border-white/10 pt-32 pb-14 md:pt-40 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            / About
          </p>
          <h1 className="mt-6 font-display text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.85] tracking-[-0.05em] text-balance text-white">
            Global Vision.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-xl">
            imediaff Global connects brands and creators through a unified strategic model built for market relevance, cultural fluency, and measurable growth.
          </p>
        </motion.div>
      </section>

      {/* ── Regional Presence (White Theme) ── */}
      <section className="bg-white text-black py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E515AB]">
            / Regional Power
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRESENCE.map((item, index) => (
              <motion.article
                key={item.region}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-gray-200 bg-white p-8 md:p-10 shadow-sm transition-shadow hover:shadow-md rounded-2xl"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#E515AB]">
                  {item.region}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-black">
                  {item.city}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {item.note}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Legacy of Influence (Black Theme) ── */}
      <section className="bg-black text-white py-16 md:py-28 relative z-10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFBD1E]">
              / Heritage
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.045em] text-balance text-white">
              A Legacy of<br />Global Influence.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/50 md:text-lg">
              Rooted in the powerhouse of the Turkish digital landscape, imediaff has evolved into a strategic gateway for the MENA region. We operate with a network of 10,000+ verified influencers, delivering 360° growth solutions.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-black px-8 py-10 md:px-12 md:py-14"
              >
                <p
                  className="font-display font-bold leading-none tracking-[-0.05em] text-white"
                  style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                >
                  <span className="bg-gradient-to-r from-[#E515AB] via-[#FA1702] to-[#FFBD1E] bg-clip-text text-transparent">
                    {m.value}
                  </span>
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Visual Divider (Immersive Section Break) ── */}
      <section
        ref={brandRef}
        className="relative w-full aspect-[2/1] min-h-[400px] max-h-[1000px] overflow-hidden bg-black text-white"
      >
        <motion.div style={{ y: brandY }} className="absolute inset-0 scale-[1.2]">
          <Image
            src="/brand.png"
            alt="imediaff Global brand visual"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
            }}
          />
        </motion.div>
        
        {/* Caption */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 pb-12 md:pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              / Brand System
            </p>
            <p className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl">
              Built for visibility across cultures, platforms, and markets.
            </p>
          </div>
        </div>
      </section>

      {/* ── Global Capabilities / Four Pillars (Black Theme) ── */}
      <section className="bg-black text-white py-16 md:py-28 relative z-10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E515AB]">
              / Global Capabilities
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-white">
              Four Pillars of<br />Digital Excellence.
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 rounded-2xl overflow-hidden">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-black px-8 py-10 transition-colors duration-300 hover:bg-white/[0.03] md:px-10 md:py-12"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#E515AB] to-[#FFBD1E] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                  {cap.index}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl">
                  {cap.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Services (Black Theme) ── */}
      <section className="bg-black text-white pb-16 md:pb-28 relative overflow-hidden z-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#E515AB]/10 via-[#FA1702]/10 to-[#FFBD1E]/10 blur-[100px] rounded-full opacity-50" />
        
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFBD1E]">
              / Core Expertise
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-white">
              End-to-End <br className="hidden md:block" /> Digital Mastery.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 lg:pb-24">
            {CORE_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-md p-[1px] transition-all duration-500 ${i % 3 === 1 ? 'lg:translate-y-12' : i % 3 === 2 ? 'lg:translate-y-24' : ''}`}
              >
                <div className="absolute inset-0 bg-white/10 transition-colors duration-500 group-hover:bg-gradient-to-r group-hover:from-[#E515AB] group-hover:via-[#FA1702] group-hover:to-[#FFBD1E]" />
                
                <div className="relative flex flex-col h-full bg-black/90 backdrop-blur-md rounded-[15px] p-8 md:p-10">
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-gradient-to-br group-hover:from-[#E515AB]/20 group-hover:to-[#FFBD1E]/20 transition-colors duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-10 relative inline-flex h-20 w-20 items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <div className="absolute inset-0 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-colors duration-500 group-hover:ring-[#E515AB]/40" />
                      <service.PrimaryIcon
                        size={36}
                        strokeWidth={1.4}
                        className="relative z-10 text-white transition-all duration-500"
                        style={{
                          filter: "drop-shadow(0 0 6px rgba(229,21,171,0.55)) drop-shadow(0 0 14px rgba(229,21,171,0.25))",
                        }}
                      />
                      <service.AccentIcon
                        size={16}
                        strokeWidth={2}
                        className="absolute bottom-2 right-2 z-20 text-[#FFBD1E] transition-all duration-500 group-hover:text-[#FFBD1E]"
                        style={{
                          filter: "drop-shadow(0 0 4px rgba(255,189,30,0.7))",
                        }}
                      />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="mt-auto text-base leading-relaxed text-white/50 font-sans">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Partnerships (White Theme) ── */}
      <section className="bg-white text-black py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E515AB]">
                / Strategic Partnerships
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-black">
                Empowering<br />Industry Leaders.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500 md:text-base">
              Empowering industry leaders across e-commerce, technology, and lifestyle sectors.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-px border border-gray-200 bg-gray-200 md:grid-cols-4 rounded-xl overflow-hidden">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white px-6 py-8 transition-colors duration-300 hover:bg-gray-50 md:px-8 md:py-10"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 transition-colors duration-300 group-hover:text-[#E515AB]">
                  {p.sector}
                </p>
                <p className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-black md:text-3xl">
                  {p.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision Statement (Philosophy) (Black Theme) ── */}
      <section className="bg-black text-white border-t border-white/10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 px-6 md:grid-cols-12 md:px-10"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              / New Generation 360° Agency
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.035em] text-balance text-white">
              Market-first strategy for international brands entering MENA.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/50 md:text-lg">
              imediaff Global operates as a new generation 360° agency, combining data-driven creativity, talent management, and market-first strategy into one accountable growth system.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3 rounded-lg overflow-hidden">
              {["Data-driven creativity", "Talent management", "Market-first strategies"].map((item) => (
                <div key={item} className="bg-black px-4 py-5 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E515AB]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Scale CTA (Sunset Gradient Theme) ── */}
      <section className="bg-gradient-to-r from-[#E515AB] via-[#FA1702] to-[#FFBD1E] text-black py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center md:text-left"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/60 font-bold">
            / Start Today
          </p>
          <h2 className="mt-6 font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.045em] text-balance text-black">
            Scale beyond borders.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/80 md:text-xl font-medium mx-auto md:mx-0">
            Whether you are a brand seeking MENA entry or a creator ready for global reach — your next chapter starts here.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black px-10 py-5 text-base font-bold text-white transition-transform hover:scale-105 rounded-full"
            >
              Start a Project
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border-2 border-black px-10 py-5 text-base font-bold text-black transition-all hover:bg-black hover:text-white rounded-full"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
