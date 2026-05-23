"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Sparkles, Target, Users, LineChart, Globe2, LayoutDashboard } from "lucide-react"

const SERVICES = [
  { icon: Users, title: "Affiliate Marketing Management", desc: "End-to-end TrendFam affiliate program management across CEE, Gulf, Turkey, and Azerbaijan. Onboarding, tracking, and payments." },
  { icon: Globe2, title: "Influencer Partnerships", desc: "Structured matchmaking between brands and vetted influencers through 1-year performance contracts." },
  { icon: Target, title: "Campaign Production", desc: "High-fidelity content and advertising production for brands scaling across MENA and beyond." },
  { icon: LayoutDashboard, title: "Market Entry", desc: "Strategic entry into MENA, CEE, and Gulf markets with cultural fluency and operational infrastructure." },
  { icon: Sparkles, title: "Legal & Financial Advisory", desc: "Contract architecture, tax compliance (KVKK/GDPR), and cross-border payment management." },
  { icon: LineChart, title: "Creator Consultancy", desc: "1-on-1 advisory, webinars, campaign channel access, and performance analytics to maximize creator earnings." },
]

export default function ServicesPreview() {
  return (
    <section className="relative border-b border-black/10 bg-white" aria-label="Services">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/40">/ Services</p>
            <h2 className="mt-4 font-sans text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-black text-balance max-w-3xl">
              We turn attention into{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #2563EB 0%, #16A34A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                global growth
              </span>.
            </h2>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-2 border border-black/20 px-5 py-3 text-sm font-semibold text-black hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">
            View all services
            <span aria-hidden className="transition-transform group-hover:translate-x-1">-&gt;</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, index) => {
            const serviceImages = [
              "/services/service-01.jpg",
              "/services/service-02.jpg",
              "/services/service-03.jpg",
              "/services/service-04.jpg",
              "/services/service-05.jpg",
              "/services/service-06.jpg"
            ]
            const serviceAlts = [
              "Affiliate marketing and e-commerce performance",
              "Influencer creating content for brand partnership",
              "Professional campaign production and content creation",
              "Global market entry strategy and regional expansion",
              "Legal contract and financial advisory services",
              "One-on-one creator consultancy and growth session"
            ]

            const serviceUrls = [
              "/services#affiliate-marketing-management",
              "/services#influencer-brand-partnerships",
              "/services#campaign-production-content",
              "/services#market-entry-regional-expansion",
              "/services#legal-financial-advisory",
              "/services#creator-consultancy-growth"
            ]

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[360px] lg:h-[480px] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] border border-transparent hover:border-white/15 cursor-pointer"
              >
                {/* Full Card Background Image */}
                <img 
                  src={serviceImages[index]} 
                  alt={serviceAlts[index]} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />

                {/* Default Gradient Overlay (rgba(0,0,0,0.92) at bottom) */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 z-10" 
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.92) 100%)"
                  }}
                />

                {/* Hover Gradient Overlay (rgba(0,0,0,0.75) at bottom) */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" 
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.75) 100%)"
                  }}
                />

                {/* Card Content (wrapped in Link, making the entire card clickable) */}
                <Link 
                  href={serviceUrls[index]}
                  className="relative z-20 p-8 md:p-10 flex flex-col justify-between h-full w-full"
                >
                  {/* Service Number: small, muted white, top-left corner */}
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="flex flex-col items-start gap-4">
                    {/* Icon: white, above title */}
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                      <service.icon strokeWidth={1.5} className="h-5 w-5 text-white" />
                    </div>

                    {/* Title & Description: white/light gray */}
                    <div className="space-y-2 text-left">
                      <h3 className="font-sans text-2xl font-bold tracking-[-0.02em] text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-white/70">
                        {service.desc}
                      </p>
                    </div>

                    {/* Accent Color link */}
                    <div className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      Learn more <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

