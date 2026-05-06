"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Sparkles, TrendingUp, Target, Users, Video, LineChart } from "lucide-react"

const SERVICES = [
  { icon: TrendingUp, title: "Viral Growth", desc: "Viral growth engines for global platforms." },
  { icon: Video, title: "Content Strategy", desc: "End-to-end format, rhythm, and story architecture." },
  { icon: Target, title: "Performance Ads", desc: "Every dollar measured, every click calculated." },
  { icon: Users, title: "Creator Management", desc: "The right voice for the right audience at the right time." },
  { icon: LineChart, title: "Data & Insights", desc: "Live dashboards and transparent reporting." },
  { icon: Sparkles, title: "Creative Production", desc: "End-to-end production built for digital velocity." },
]

export default function ServicesPreview() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Services</p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.9] tracking-normal text-balance max-w-3xl">
              We turn attention into <span className="text-primary">global growth</span>.
            </h2>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-2 border border-foreground/20 px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary">
            View all services
            <span aria-hidden className="transition-transform group-hover:translate-x-1">-&gt;</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative min-h-[260px] border-b border-r border-border bg-background/80 p-8 md:p-10 flex flex-col justify-between overflow-hidden"
            >
              <div aria-hidden className="absolute inset-0 bg-sunset-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-black/70 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-6 inline-flex h-12 w-12 items-center justify-center border border-border transition-colors group-hover:border-black/30">
                  <service.icon className="h-5 w-5 text-primary group-hover:text-black transition-colors" />
                </div>
              </div>

              <div className="relative">
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-normal group-hover:text-black transition-colors">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-black/80 transition-colors">{service.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

