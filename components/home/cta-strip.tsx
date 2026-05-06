"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function CtaStrip() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])

  return (
    <section
      ref={ref}
      className="relative border-b border-border py-24 md:py-32 overflow-hidden bg-background"
    >
      <motion.div
        style={{ x }}
        className="whitespace-nowrap font-display text-[clamp(5rem,18vw,18rem)] font-semibold leading-[0.85] tracking-[-0.05em] will-change-transform"
      >
        VIRAL DÖNGÜ<span className="text-primary"> · </span>
        MARKANI DÖNÜŞTÜR<span className="text-primary"> · </span>
        SINIRLARI ZORLA<span className="text-primary"> · </span>
      </motion.div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            / Hadi başlayalım
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-balance">
            Bir sonraki viral seni bekliyor.
          </h2>
        </div>
        <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-semibold"
          >
            Brief Gönder
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-4 font-semibold hover:border-primary hover:text-primary"
          >
            Çalışmaları Keşfet
          </Link>
        </div>
      </div>
    </section>
  )
}
