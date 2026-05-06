"use client"

import { motion } from "motion/react"

export default function InfluencerHeader() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-start justify-between flex-wrap gap-8">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ Global Roster - 24 creators</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} className="mt-6 font-display text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.85] tracking-[-0.045em] text-balance max-w-[14ch]">
              Not just faces,
              <br />
              but <span className="text-primary">culture.</span>
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-6 max-w-sm text-sm md:text-base text-muted-foreground leading-relaxed">
            Every creator in our roster leads a category conversation with proven audience resonance and platform-native storytelling.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {[{ k: "Total Reach", v: "48M+" }, { k: "Average Engagement", v: "8.2%" }, { k: "Daily Content", v: "64" }, { k: "Successful Campaigns", v: "380+" }].map((s, i) => (
            <div key={s.k} className="px-4 md:px-8 py-8 border-b md:border-b-0 md:border-r border-border last:md:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">0{i + 1}</p>
              <p className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.035em]">{s.v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
