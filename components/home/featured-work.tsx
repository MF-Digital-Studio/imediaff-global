"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

const FEATURED = [
  {
    client: "AURA STUDIOS",
    title: "Luxury launch amplified globally in 48 hours",
    metric: "2.4M organic views",
    tag: "Fashion",
    image: "/showcase/project-1.jpg",
  },
  {
    client: "NOIR SKIN",
    title: "New product launch converted into demand in 7 days",
    metric: "14x ROAS",
    tag: "Beauty",
    image: "/showcase/project-2.jpg",
  },
  {
    client: "GRID MOTORS",
    title: "Showroom debut drove a 320% engagement lift",
    metric: "+320% reach",
    tag: "Automotive",
    image: "/showcase/project-4.jpg",
  },
]

export default function FeaturedWork() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              / Featured Work
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-balance max-w-3xl">
              Recent campaigns.
              <br />
              <span className="text-muted-foreground">Proven impact.</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 border border-foreground/20 px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary"
          >
            All case studies
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURED.map((f, i) => (
            <motion.article
              key={f.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
                <Image
                  src={f.image || "/placeholder.svg"}
                  alt={f.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-background/70 backdrop-blur px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                  {f.tag}
                </div>
                <div className="absolute bottom-4 right-4 bg-sunset-gradient px-3 py-1.5 font-mono text-xs font-semibold text-black">
                  {f.metric}
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    {f.client}
                  </p>
                  <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold tracking-tight text-balance">
                    {f.title}
                  </h3>
                </div>
                <span
                  aria-hidden
                  className="shrink-0 inline-flex h-10 w-10 items-center justify-center border border-border group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


