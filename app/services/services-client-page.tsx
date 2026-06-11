"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

const DETAILED_SERVICES = [
  {
    title: "Affiliate Marketing Management",
    description: "Full-service TrendFam affiliate program management — influencer onboarding, link creation, commission tracking, and payment processing. We are one of Trendyol's top 3 authorized partner agencies globally.",
    image: "/services/service-01.jpg",
    features: ["TrendFam Partner", "4 Regions", "Commission Tracking"],
  },
  {
    title: "Influencer & Brand Partnerships",
    description: "Strategic matchmaking between brands and vetted influencers. Every partnership operates under a structured 1-year contract with clear KPIs, transparent reporting, and protected rights for both parties.",
    image: "/services/service-02.jpg",
    features: ["5,000+ Influencers", "1-Year Contracts", "Performance-Based"],
  },
  {
    title: "Creator Consultancy & Growth",
    description: "One-on-one guidance for influencers — from link strategy and content optimization to audience analytics and earnings maximization. Regular webinars and active campaign channels keep creators ahead.",
    image: "/services/service-06.jpg",
    features: ["1-on-1 Advisory", "Webinars", "WhatsApp Channel"],
  },
  {
    title: "Campaign Production & Content",
    description: "High-fidelity content creation and advertising production for brands seeking regional relevance. From concept to delivery, every asset is built to perform across social platforms.",
    image: "/services/service-03.jpg",
    features: ["Set Production", "Social Formats", "Regional Adaptation"],
  },
  {
    title: "Market Entry & Regional Expansion",
    description: "Strategic entry into MENA, Europe, Gulf, and Azerbaijan markets. Cultural fluency, local network access, and full operational infrastructure for confident regional scaling.",
    image: "/services/service-04.jpg",
    features: ["MENA", "Europe", "Gulf & Azerbaijan"],
  },
  {
    title: "Legal & Financial Advisory",
    description: "Contract architecture, tax compliance, KVKK/GDPR data protection, and cross-border payment management. Commission-only model — no upfront fees, no hidden costs.",
    image: "/services/service-05.jpg",
    features: ["Contract Architecture", "Tax Compliance", "KVKK/GDPR"],
  },
]

const PROCESS = [
  {
    step: "01",
    title: "Onboarding & Eligibility Review",
    description: "Profile reviewed within 1–5 business days. Eligibility confirmed against regional TrendFam requirements.",
  },
  {
    step: "02",
    title: "Contract & Agreement",
    description: "1-year partnership contract signed. Commission rates, payment schedule, and compliance rules clearly defined for both parties.",
  },
  {
    step: "03",
    title: "Program Activation",
    description: "Affiliate links activated, Influencer Center access granted, agency campaign channel onboarded.",
  },
  {
    step: "04",
    title: "Active Management & Optimization",
    description: "Real-time performance tracking, bonus mission alerts, campaign updates via dedicated channel, and 1-on-1 advisory.",
  },
  {
    step: "05",
    title: "Reporting & Payment",
    description: "Monthly commission reports with transparent breakdowns. 30-day payment cycle. Direct IBAN or local account transfer. No upfront fees — commission only.",
  },
]

export default function ServicesClientPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ── Hero Section (Black Theme) ── */}
      <section className="bg-black text-white border-b border-white/10 pt-32 pb-16 md:pt-48 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB]">
            / Capabilities
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
            Not just growth,<br />transformation.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-xl">
            From affiliate program management to creative production and legal advisory — iMediaff Global delivers end-to-end solutions for brands and creators across Turkey, Europe, Gulf, and Azerbaijan.
          </p>
        </motion.div>
      </section>

      {/* ── 6 Detailed Pillars (White Theme) ── */}
      <section className="bg-white text-black border-b border-gray-200 py-16 md:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-32 text-center md:text-left"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB]">
              / Integrated Capabilities
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-black">
              End-to-End <br className="hidden md:block" /> Enterprise Solutions.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-40">
            {DETAILED_SERVICES.map((service, i) => {
              const isEven = i % 2 === 0
              const serviceIds = [
                "affiliate-marketing-management",
                "influencer-brand-partnerships",
                "creator-consultancy-growth",
                "campaign-production-content",
                "market-entry-regional-expansion",
                "legal-financial-advisory"
              ]
              return (
                <div 
                  id={serviceIds[i]}
                  key={service.title} 
                  className={`relative flex flex-col items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} scroll-mt-28`}
                >
                  
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full md:w-2/3 relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden group shadow-lg"
                  >
                    <div className="absolute inset-0 bg-black/5 z-10 transition-colors duration-700 group-hover:bg-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="w-full h-full relative"
                    >
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        unoptimized
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Text Side (Overlapping Glassmorphism Card on White) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className={`w-[90%] md:w-1/2 lg:w-5/12 -mt-20 md:mt-0 relative z-20 rounded-[2rem] bg-white/80 backdrop-blur-2xl border border-gray-200 p-8 md:p-14 shadow-xl ${isEven ? "md:-ml-24 lg:-ml-32" : "md:-mr-24 lg:-mr-32"}`}
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB] mb-6 font-bold">
                      / {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-black mb-6 leading-[1.05]">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-600 font-sans mb-10">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-col gap-5">
                      {service.features.map(feat => (
                        <div key={feat} className="flex items-center gap-4 group/feat">
                          <div className="h-px w-6 bg-gray-300 transition-all duration-300 group-hover/feat:w-10 group-hover/feat:bg-gradient-to-r group-hover/feat:from-[#2563EB] group-hover/feat:to-[#2563EB]" />
                          <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] text-gray-600 font-medium transition-colors duration-300 group-hover/feat:text-black">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 5-Step Process (Black Theme) ── */}
      <section className="bg-black text-white border-b border-white/10 py-16 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB]">
                / Clear Timeline
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance text-white">
                Operational <br /> Excellence.
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col group"
              >
                {/* Connecting line for desktop */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-[1px] bg-white/10 group-hover:bg-[#2563EB]/50 transition-colors duration-500" />
                )}
                
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black font-mono text-sm text-[#2563EB] transition-colors duration-500 group-hover:border-[#2563EB] group-hover:text-[#2563EB] mb-6">
                  {step.step}
                </div>
                
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA (Sunset Gradient Theme) ── */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#16A34A] text-white py-24 md:py-36 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center relative z-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold mb-6">
            / Expand your reach
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance mb-10 text-white">
            Build measurable <br className="hidden md:block" /> momentum.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-12 py-6 text-lg font-bold text-white transition-transform hover:scale-105 shadow-xl"
          >
            Start Pilot
          </Link>
        </motion.div>
      </section>
    </main>
  )
}

