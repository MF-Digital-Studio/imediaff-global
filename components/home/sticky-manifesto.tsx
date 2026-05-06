"use client"

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"

type ManifestoSection = {
  kicker: string
  title: string
  body: string
}

const SECTIONS: ManifestoSection[] = [
  {
    kicker: "01 - Strategy",
    title: "We do not chase algorithms. We design for them.",
    body: "Every platform has its own language. We architect cross-platform narratives that convert attention into brand equity and measurable growth.",
  },
  {
    kicker: "02 - Creativity",
    title: "We do not publish content. We build cultural relevance.",
    body: "From concept to execution, we shape ideas that travel across markets, communities, and categories while preserving brand consistency.",
  },
  {
    kicker: "03 - Performance",
    title: "Every impression, click, and conversion is accountable.",
    body: "Creative and data operate as one system. We optimize continuously and scale what performs across Dubai and the wider MENA region.",
  },
]

const SPRING = { stiffness: 50, damping: 20 }

export default function StickyManifesto() {
  const parentRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"],
  })

  return (
    <section className="relative" aria-label="Manifesto">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-24 pb-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              / Manifesto
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-balance max-w-4xl">
              What do we build?
              <br />
              We build brands people <span className="text-primary">talk about</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
            A three-layer growth model from strategy to culture to measurable business outcomes.
          </p>
        </div>
      </div>

      <div ref={parentRef} className="relative h-[300vh]">
        {SECTIONS.map((section, index) => (
          <ManifestoStackCard
            key={section.kicker}
            index={index}
            total={SECTIONS.length}
            progress={scrollYProgress}
            kicker={section.kicker}
            title={section.title}
            body={section.body}
          />
        ))}
      </div>
    </section>
  )
}

function ManifestoStackCard({
  kicker,
  title,
  body,
  index,
  total,
  progress,
}: {
  kicker: string
  title: string
  body: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const zIndex = (index + 1) * 10

  const yTarget =
    index === 0
      ? useTransform(progress, [0, 1], ["0%", "0%"])
      : index === 1
        ? useTransform(progress, [0, 0.1, 0.33, 1], ["100%", "100%", "0%", "0%"])
        : useTransform(progress, [0, 0.45, 0.75, 1], ["100%", "100%", "0%", "0%"])

  const scaleTarget =
    index === 0
      ? useTransform(progress, [0, 0.33, 0.66, 1], [1, 1, 0.9, 0.9])
      : index === 1
        ? useTransform(progress, [0, 0.45, 0.75, 1], [1, 1, 0.92, 0.92])
        : useTransform(progress, [0, 1], [1, 1])

  const dimTarget =
    index === 0
      ? useTransform(progress, [0, 0.1, 0.33, 0.66, 1], [0, 0.12, 0.22, 0.45, 0.55])
      : index === 1
        ? useTransform(progress, [0, 0.45, 0.75, 1], [0, 0.06, 0.28, 0.4])
        : useTransform(progress, [0, 1], [0, 0])

  const opacityTarget =
    index === 0
      ? useTransform(progress, [0, 0.33, 0.66, 1], [1, 0.94, 0.72, 0.62])
      : index === 1
        ? useTransform(progress, [0, 0.45, 0.75, 1], [1, 0.96, 0.82, 0.74])
        : useTransform(progress, [0, 1], [1, 1])

  const y = useSpring(yTarget, SPRING)
  const scale = useSpring(scaleTarget, SPRING)
  const dimOpacity = useSpring(dimTarget, SPRING)
  const opacity = useSpring(opacityTarget, SPRING)

  return (
    <motion.article
      style={{ y, scale, opacity, zIndex }}
      className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#050505]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ opacity: dimOpacity }} className="absolute inset-0 bg-black" />
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/35 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1600px] w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-3 hidden md:block">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{kicker}</p>
          <p className="mt-4 font-display text-[10rem] leading-none font-semibold tracking-[-0.05em] text-foreground/25">
            {String(index + 1).padStart(2, "0")}
          </p>
        </div>

        <div className="md:col-span-8 md:col-start-5">
          <p className="md:hidden font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            {kicker}
          </p>
          <h3 className="font-display text-[clamp(2rem,5.5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-balance">
            {title}
          </h3>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            {body}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <p className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

