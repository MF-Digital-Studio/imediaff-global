"use client"

import { motion } from "motion/react"

const STEPS = [
  { n: "01", title: "Brief & Discovery", body: "Audience, category, and competitive analysis delivered with a strategic blueprint in 48 hours." },
  { n: "02", title: "Strategy Workshop", body: "A focused session to align positioning, channel mix, narrative, and KPI framework." },
  { n: "03", title: "Creative Sprint", body: "A two-week production cycle including scripts, storyboards, filming, and edits." },
  { n: "04", title: "Launch & Optimization", body: "A/B testing, live bidding, and weekly insight reporting across active campaigns." },
  { n: "05", title: "Measurement & Scale", body: "Quarterly performance reviews with roadmap refinements for sustained growth." },
]

export default function ProcessTimeline() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 md:sticky md:top-28">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ Process</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.035em] text-balance">Five steps. Clear timeline.</h2>
            <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">Our operating model is consistent. What changes for each brand is the message, format, and execution layer.</p>
          </div>

          <ol className="md:col-span-8 relative">
            <div aria-hidden className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
            {STEPS.map((s, i) => (
              <motion.li key={s.n} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative pl-16 md:pl-24 pb-12 last:pb-0">
                <span className="absolute left-0 top-0 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center border border-border bg-background font-mono text-xs tracking-[0.2em]">{s.n}</span>
                <h3 className="font-display text-2xl md:text-4xl font-bold tracking-[-0.025em]">{s.title}</h3>
                <p className="mt-3 max-w-lg text-sm md:text-base text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
