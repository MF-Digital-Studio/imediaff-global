"use client"

import { useRef } from "react"
import Image from "next/image"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionStyle,
  type MotionValue,
} from "motion/react"

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.6 })

  const titleScale = useTransform(progress, [0, 0.35], [1, 2.2])
  const titleOpacity = useTransform(progress, [0, 0.25, 0.38], [1, 0.7, 0])
  const titleY = useTransform(progress, [0, 0.4], [0, -60])
  const subOpacity = useTransform(progress, [0, 0.15, 0.3], [1, 0.6, 0])
  const bgColor = useTransform(progress, [0, 0.3, 0.7], ["oklch(0.08 0 0)", "oklch(0.04 0 0)", "oklch(0 0 0)"])
  const copyOpacity = useTransform(progress, [0.55, 0.75], [0, 1])
  const copyY = useTransform(progress, [0.55, 0.75], [40, 0])

  return (
    <motion.section ref={containerRef} style={{ backgroundColor: bgColor }} className="relative h-[320vh]" aria-label="Hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 40%, color-mix(in oklab, var(--primary) 12%, transparent) 0%, transparent 55%)" }} />

        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)" }} />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p style={{ opacity: subOpacity }} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Global Influencer & Digital Media Agency</motion.p>

          <motion.h1 style={{ scale: titleScale, opacity: titleOpacity, y: titleY }} className="mt-6 font-display font-bold leading-[0.85] tracking-[-0.045em] text-balance text-[clamp(3.25rem,14vw,14rem)] will-change-transform">
            The Global Hub for
            <br />
            Influencer Power &amp; <span className="text-primary">360° Digital Media.</span>
          </motion.h1>

          <motion.p style={{ opacity: subOpacity }} className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            Bridging the gap between world-class influencers and industry-leading brands through data-driven creativity and strategic execution.
          </motion.p>

          <motion.div style={{ opacity: subOpacity }} className="mt-12 flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="inline-block h-8 w-px bg-foreground/30" />
            <span>SCROLL</span>
          </motion.div>
        </div>

        <FlyInMockups progress={progress} />

        <motion.div style={{ opacity: copyOpacity, y: copyY }} className="pointer-events-none absolute inset-x-0 bottom-16 z-20 mx-auto max-w-2xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ Global Momentum</p>
          <p className="mt-4 text-xl md:text-3xl font-bold tracking-tight text-balance">
            Three platforms. One strategy.
            <span className="text-muted-foreground"> Unlimited reach.</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function FlyInMockups({ progress }: { progress: MotionValue<number> }) {
  const leftX = useTransform(progress, [0.05, 0.55], ["-70vw", "-12vw"])
  const leftRot = useTransform(progress, [0.05, 0.55], [-22, -8])
  const leftY = useTransform(progress, [0.05, 0.55], ["10vh", "0vh"])
  const leftScale = useTransform(progress, [0.05, 0.55], [0.85, 1])
  const leftOpacity = useTransform(progress, [0.05, 0.2, 0.85, 1], [0, 1, 1, 0.4])

  const rightX = useTransform(progress, [0.05, 0.55], ["70vw", "12vw"])
  const rightRot = useTransform(progress, [0.05, 0.55], [22, 8])
  const rightY = useTransform(progress, [0.05, 0.55], ["10vh", "0vh"])
  const rightScale = useTransform(progress, [0.05, 0.55], [0.85, 1])
  const rightOpacity = useTransform(progress, [0.05, 0.2, 0.85, 1], [0, 1, 1, 0.4])

  const centerY = useTransform(progress, [0.15, 0.55], ["28vh", "0vh"])
  const centerScale = useTransform(progress, [0.15, 0.55], [0.7, 1.08])
  const centerOpacity = useTransform(progress, [0.15, 0.3, 0.85, 1], [0, 1, 1, 0.6])

  const clusterY = useTransform(progress, [0.55, 1], ["0vh", "-20vh"])
  const clusterOpacity = useTransform(progress, [0.85, 1], [1, 0.3])

  return (
    <motion.div style={{ y: clusterY, opacity: clusterOpacity }} className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center" aria-hidden>
      <div className="relative h-[62vh] w-full max-w-[1200px]">
        <MockupCard src="/mockups/tiktok-mockup.jpg" alt="TikTok" label="TIKTOK" style={{ x: leftX, y: leftY, rotate: leftRot, scale: leftScale, opacity: leftOpacity }} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <MockupCard src="/mockups/instagram-mockup.jpg" alt="Instagram" label="INSTAGRAM" style={{ y: centerY, scale: centerScale, opacity: centerOpacity }} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
        <MockupCard src="/mockups/youtube-mockup.jpg" alt="YouTube" label="YOUTUBE" style={{ x: rightX, y: rightY, rotate: rightRot, scale: rightScale, opacity: rightOpacity }} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </motion.div>
  )
}

function MockupCard({ src, alt, label, style, className }: { src: string; alt: string; label: string; style: MotionStyle; className?: string }) {
  return (
    <motion.div style={style} className={`absolute aspect-[9/19] h-[55vh] max-h-[640px] will-change-transform ${className ?? ""}`}>
      <div className="relative h-full w-full overflow-hidden border border-border/80 bg-card">
        <Image src={src || "/placeholder.svg"} alt={alt} fill sizes="(max-width: 768px) 60vw, 320px" className="object-cover" priority />
        <div className="absolute left-2 top-2 flex items-center gap-1.5 bg-background/70 backdrop-blur px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-primary">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {label}
        </div>
      </div>
    </motion.div>
  )
}
