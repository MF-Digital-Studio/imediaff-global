"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Sparkles, Target, Users, LineChart, Globe2, LayoutDashboard } from "lucide-react"

const SERVICES = [
  { icon: Users, title: "Creator Strategy", desc: "Engineering high-conversion creator roadmaps that align with your brand’s global DNA." },
  { icon: Globe2, title: "Market Entry", desc: "Your strategic gateway to the Dubai and MENA markets, ensuring cultural fluency and rapid scaling." },
  { icon: Target, title: "Performance Ads", desc: "Data-led ad buying and precision targeting across major social platforms for maximum ROI." },
  { icon: LayoutDashboard, title: "Campaign Management", desc: "End-to-end execution of multi-platform campaigns with transparent, real-time reporting." },
  { icon: Sparkles, title: "Creative Production", desc: "High-fidelity digital content production built for speed and regional resonance." },
  { icon: LineChart, title: "Analytics & Insights", desc: "Real-time dashboards and comprehensive performance reporting to track global growth." },
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
                  backgroundImage: "linear-gradient(90deg, #E515AB 0%, #FF8A1E 55%, #FFBD1E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                global growth
              </span>.
            </h2>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-2 border border-black/20 px-5 py-3 text-sm font-semibold text-black hover:border-[#E515AB] hover:text-[#E515AB] transition-colors">
            View all services
            <span aria-hidden className="transition-transform group-hover:translate-x-1">-&gt;</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative min-h-[280px] border-b border-r border-black/10 bg-white p-8 md:p-10 flex flex-col justify-between overflow-hidden hover:bg-black/[0.02] transition-colors duration-500"
            >
              {/* Subtle top border glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#E515AB] to-[#FF8A1E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/30 group-hover:text-black/70 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-6 inline-flex h-12 w-12 items-center justify-center border border-black/10 bg-black/[0.02] transition-colors duration-500 group-hover:border-[#E515AB]/30 group-hover:bg-[#E515AB]/10">
                  <service.icon strokeWidth={1.5} className="h-5 w-5 text-[#E515AB] group-hover:text-[#FF8A1E] transition-colors duration-500" />
                </div>
              </div>

              <div className="relative mt-8">
                <h3 className="font-sans text-2xl font-bold tracking-[-0.02em] text-black transition-colors">{service.title}</h3>
                <p className="mt-3 text-[0.95rem] font-medium leading-relaxed text-black/60 transition-colors">{service.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

