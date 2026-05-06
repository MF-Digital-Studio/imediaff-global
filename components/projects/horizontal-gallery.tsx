"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, type MotionValue } from "motion/react"
import { useLenis } from "@/components/providers/LenisProvider"

type Project = { n: string; client: string; title: string; tag: string; metric: string; image: string }

const PROJECTS: Project[] = [
  { n: "01", client: "AURA STUDIOS", title: "Quiet Luxury Campaign", tag: "Fashion", metric: "2.4M organic views", image: "/showcase/project-1.jpg" },
  { n: "02", client: "NOIR SKIN", title: "New Serum Launch", tag: "Beauty", metric: "14x ROAS | 7 days", image: "/showcase/project-2.jpg" },
  { n: "03", client: "STUDIO RITUAL", title: "Creator Lab Documentary", tag: "Content", metric: "+420% subscribers", image: "/showcase/project-3.jpg" },
  { n: "04", client: "GRID MOTORS", title: "Showroom Launch", tag: "Automotive", metric: "+320% reach", image: "/showcase/project-4.jpg" },
  { n: "05", client: "MAISON VOLT", title: "Midnight Editorial Release", tag: "Fashion", metric: "Vogue feature", image: "/showcase/project-5.jpg" },
  { n: "06", client: "HERTZ AUDIO", title: "Premium Product Release", tag: "Technology", metric: "180K sales | 30 days", image: "/showcase/project-6.jpg" },
]

export default function HorizontalGallery() {
  const { getLenis, setLerp, defaultLerp } = useLenis()
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  useEffect(() => {
    const lenis = getLenis()
    if (!lenis) return
    setLerp(0.15, { durationMs: 280 })
    return () => setLerp(defaultLerp, { durationMs: 320 })
  }, [defaultLerp, getLenis, setLerp])

  const x = useTransform(scrollYProgress, [0, 1], ["2vw", "-82%"])

  return (
    <section ref={ref} className="relative h-[520vh] bg-background" aria-label="Featured projects horizontal gallery">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="mx-auto max-w-[1600px] w-full px-6 md:px-10 pt-24 pb-4 flex items-end justify-between flex-wrap gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Selection | 06 projects</p>
          <p className="font-mono text-xs text-muted-foreground">{"// "}Scroll down to move sideways</p>
        </div>

        <div className="flex-1 flex items-center">
          <motion.div style={{ x }} className="flex items-center gap-6 md:gap-10 px-6 md:px-10 will-change-transform">
            {PROJECTS.map((p, i) => (<ProjectCard key={p.n} p={p} i={i} total={PROJECTS.length} />))}
            <div className="shrink-0 w-[40vw]" aria-hidden />
          </motion.div>
        </div>

        <ScrollIndicator progress={scrollYProgress} />
      </div>
    </section>
  )
}

function ProjectCard({ p, i, total }: { p: Project; i: number; total: number }) {
  return (
    <article className="shrink-0 w-[80vw] md:w-[60vw] lg:w-[48vw] xl:w-[42vw] group">
      <div className="relative aspect-[16/10] overflow-hidden border border-border bg-card">
        <Image src={p.image || "/placeholder.svg"} alt={p.title} fill sizes="(max-width: 768px) 80vw, 48vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" priority={i < 2} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 bg-background/70 backdrop-blur px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">{p.tag}</div>
        <div className="absolute top-4 right-4 bg-background/70 backdrop-blur px-2 py-1 font-mono text-[10px] tracking-[0.2em]">{p.n} / {String(total).padStart(2, "0")}</div>
        <div className="absolute bottom-4 left-4 bg-sunset-gradient px-3 py-1.5 font-mono text-xs font-semibold text-black">{p.metric}</div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{p.client}</p>
          <h3 className="mt-2 font-display text-2xl md:text-4xl font-bold tracking-[-0.03em] text-balance">{p.title}</h3>
        </div>
        <span aria-hidden className="shrink-0 mt-2 inline-flex h-10 w-10 items-center justify-center border border-border group-hover:border-primary group-hover:text-primary transition-colors">→</span>
      </div>
    </article>
  )
}

function ScrollIndicator({ progress }: { progress: MotionValue<number> }) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"])
  return (
    <div className="mx-auto max-w-[1600px] w-full px-6 md:px-10 py-6">
      <div className="relative h-px bg-border"><motion.div style={{ width }} className="absolute left-0 top-0 h-px bg-sunset-gradient" /></div>
    </div>
  )
}
