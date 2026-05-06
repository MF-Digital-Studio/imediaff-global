"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useSpring, useTransform } from "motion/react"

const STATS = [
  { value: 2400000000, suffix: "", prefix: "", label: "Organic views", note: "last 12 months" },
  { value: 480, suffix: "+", prefix: "", label: "Campaigns delivered", note: "since 2019" },
  { value: 34, suffix: "x", prefix: "", label: "Average ROAS", note: "performance media programs" },
  { value: 96, suffix: "%", prefix: "", label: "Client retention", note: "repeat engagements" },
]

function formatNumber(n: number) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace(".0", "") + "B"
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(0) + "M"
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(".0", "") + "K"
  return n.toString()
}

export default function StatsCounter() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              / Performance
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-balance max-w-3xl">
              What gets measured gets scaled.
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{"//"} live dashboard</p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {STATS.map((s, i) => (
            <StatCell key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCell({
  value,
  prefix,
  suffix,
  label,
  note,
  index,
}: {
  value: number
  prefix: string
  suffix: string
  label: string
  note: string
  index: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })
  const [display, setDisplay] = useState("0")

  const spring = useSpring(0, { stiffness: 60, damping: 20 })
  const rounded = useTransform(spring, (latest) => Math.floor(latest))

  useEffect(() => {
    if (inView) spring.set(value)
  }, [inView, spring, value])

  useEffect(() => {
    const unsub = rounded.on("change", (n) => {
      setDisplay(formatNumber(n))
    })
    return () => unsub()
  }, [rounded])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative px-4 md:px-8 py-10 md:py-14 border-b md:border-b-0 md:border-r border-border last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
        0{index + 1}
      </p>
      <p className="mt-4 font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
        {prefix}
        {display}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-4 text-base md:text-lg font-semibold">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{note}</p>
    </motion.div>
  )
}

