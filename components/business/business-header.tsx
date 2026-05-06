"use client"

import { motion } from "motion/react"

export default function BusinessHeader() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            / İşletmeler için
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 font-display text-[clamp(3rem,10vw,10rem)] font-semibold leading-[0.85] tracking-[-0.045em] text-balance"
          >
            Büyümek değil,
            <br />
            <span className="text-primary">dönüşmek</span>.
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="md:col-span-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm"
        >
          Strateji, kreatif prodüksiyon, performans reklam ve veri analitiği —
          hepsi aynı çatı altında. Markanı viral döngünün motoruna bağlıyoruz.
        </motion.p>
      </div>
    </section>
  )
}
