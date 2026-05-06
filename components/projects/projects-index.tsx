"use client"

import { motion } from "motion/react"

const ROWS = [
  { year: "2026", client: "Aura Studios", cat: "Fashion", service: "Campaign + Influencer Program", metric: "2.4M reach" },
  { year: "2026", client: "Noir Skin", cat: "Beauty", service: "Launch + Performance", metric: "14x ROAS" },
  { year: "2025", client: "Grid Motors", cat: "Automotive", service: "Showroom Activation", metric: "+320%" },
  { year: "2025", client: "Hertz Audio", cat: "Technology", service: "Commerce + Reels", metric: "180K sales" },
  { year: "2025", client: "Maison Volt", cat: "Fashion", service: "Editorial + PR", metric: "Vogue feature" },
  { year: "2024", client: "Studio Ritual", cat: "Content", service: "Documentary Series", metric: "+420% subscribers" },
  { year: "2024", client: "Kartal Coffee", cat: "F&B", service: "Organic Growth", metric: "890K followers" },
  { year: "2024", client: "Vela Moda", cat: "Fashion", service: "Creator Team", metric: "8x CTR" },
  { year: "2023", client: "Lumen Cosmetics", cat: "Beauty", service: "TikTok Shop", metric: "$3M GMV" },
]

export default function ProjectsIndex() {
  return (
    <section className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Index</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.035em] text-balance">All work in one view.</h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{"//"} Hover rows to reveal detail</p>
        </div>

        <div className="border-t border-border">
          <div className="hidden md:grid grid-cols-12 py-4 border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <div className="col-span-1">Year</div>
            <div className="col-span-3">Brand</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-4">Service</div>
            <div className="col-span-2 text-right">Outcome</div>
          </div>

          {ROWS.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-5% 0px" }} transition={{ duration: 0.5, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }} className="group grid grid-cols-2 md:grid-cols-12 items-center py-5 md:py-6 border-b border-border hover:bg-foreground/[0.02] transition-colors">
              <p className="col-span-1 font-mono text-xs text-muted-foreground">{r.year}</p>
              <p className="col-span-2 md:col-span-3 font-display text-lg md:text-2xl font-bold tracking-[-0.02em] group-hover:text-primary transition-colors">{r.client}</p>
              <p className="col-span-1 md:col-span-2 text-sm text-muted-foreground">{r.cat}</p>
              <p className="col-span-2 md:col-span-4 text-sm text-foreground/80">{r.service}</p>
              <p className="col-span-2 md:col-span-2 md:text-right font-mono text-xs md:text-sm text-primary font-semibold">{r.metric}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
