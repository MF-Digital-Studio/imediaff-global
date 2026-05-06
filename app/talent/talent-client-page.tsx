"use client"

import { motion } from "motion/react"

const BENEFITS = [
  "Global brand deal access",
  "Strategic content planning support",
  "Performance analytics and reporting",
  "Long-term career partnership model",
]

export default function TalentClientPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="pt-32 md:pt-40 pb-14 md:pb-20 border-b border-border">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Talent</p>
          <h1 className="mt-6 font-display text-[clamp(3rem,11vw,10rem)] font-bold leading-[0.86] tracking-[-0.05em]">Apply to Join.</h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">We partner with creators who combine originality, consistency, and audience trust.</p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 border-b border-border">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          <article className="md:col-span-7 border border-border p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ Why Join</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="border border-border p-4 text-sm text-muted-foreground">{benefit}</div>
              ))}
            </div>
            <button className="mt-6 inline-flex items-center gap-2 bg-sunset-gradient px-5 py-3 text-sm font-semibold text-black">Apply Now</button>
          </article>
          <aside className="md:col-span-5 border border-border p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Who We Look For</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Creators with consistent output, audience clarity, and campaign professionalism across Instagram, TikTok, YouTube, or multi-platform ecosystems.</p>
          </aside>
        </motion.div>
      </section>
    </main>
  )
}
