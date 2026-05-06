"use client"

import { motion } from "motion/react"

export default function ProjectsHeader() {
  return (
    <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ 2019 - 2026 | 480+ campaigns</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} className="mt-6 font-display text-[clamp(3rem,11vw,12rem)] font-bold leading-[0.85] tracking-[-0.05em] text-balance">
          Scroll sideways.
          <br />
          <span className="text-muted-foreground">Every frame is a case study.</span>
        </motion.h1>
      </div>
    </section>
  )
}
