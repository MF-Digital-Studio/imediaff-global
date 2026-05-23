"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react"

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Height of 250vh allows for a long, smooth scroll transition before the next section appears
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.8 })

  // ── Layer A (Text) Animation Logic ──
  // Shrinks slightly and fades out early in the scroll
  const textOpacity = useTransform(progress, [0, 0.4], [1, 0])
  const textScale = useTransform(progress, [0, 0.4], [1, 0.95])

  // ── Layer B (World Map) Animation Logic ──
  // Floats up, scales into focus, and fades in as the text disappears
  const mapOpacity = useTransform(progress, [0.2, 0.8], [0, 1])
  const mapY = useTransform(progress, [0.2, 0.8], [100, 0])
  const mapScale = useTransform(progress, [0.2, 0.8], [0.8, 1])

  return (
    <motion.section
      ref={containerRef}
      className="relative h-[250vh] text-[#0F172A]"
      aria-label="Hero"
      style={{
        background: 'radial-gradient(ellipse at top left, #BFDBFE 0%, transparent 50%), radial-gradient(ellipse at bottom right, #BBF7D0 0%, transparent 50%), radial-gradient(ellipse at top right, #DDD6FE 0%, transparent 40%), #F8FAFC'
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* ── Aurora/Mesh Background Effect (Light Theme) ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 hero-grid-overlay" />

          {/* Orb 1 — Soft Blue */}
          <div
            className="absolute rounded-full w-[250px] h-[250px] md:w-[500px] md:h-[500px] blur-[40px] md:blur-[80px] animate-float-1 delay-0 top-[-50px] left-[-50px] md:left-[-100px]"
            style={{
              background: '#93C5FD',
              opacity: 0.40,
            }}
          />

          {/* Orb 2 — Soft Green */}
          <div
            className="absolute rounded-full w-[220px] h-[220px] md:w-[450px] md:h-[450px] blur-[40px] md:blur-[80px] animate-float-2 delay-2 bottom-[10%] right-[-50px] md:bottom-[15%] md:right-[-100px]"
            style={{
              background: '#86EFAC',
              opacity: 0.35,
            }}
          />

          {/* Orb 3 — Soft Violet */}
          <div
            className="absolute rounded-full w-[180px] h-[180px] md:w-[350px] md:h-[350px] blur-[35px] md:blur-[70px] animate-float-3 delay-4 top-[15%] right-[10%] md:right-[15%]"
            style={{
              background: '#C4B5FD',
              opacity: 0.25,
            }}
          />
        </div>

        {/* ── Layer B: The Global Map Anchor ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          style={{ opacity: mapOpacity, y: mapY, scale: mapScale }}
        >
          <div className="relative w-full max-w-[1400px] aspect-[16/9] md:aspect-video px-6 flex items-center justify-center">

            {/* Minimalist World Map Silhouette with Soft Elliptical Edges */}
            <div
              className="absolute inset-0 opacity-[0.06] flex items-center justify-center"
              style={{
                maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)'
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                alt="World Map Silhouette"
                className="w-full h-auto max-h-[80vh] object-contain"
                style={{
                  filter: 'invert(27%) sepia(91%) saturate(2258%) hue-rotate(216deg) brightness(96%) contrast(97%)',
                }}
                draggable={false}
              />
            </div>

            {/* Ambient Neutral Glow (B&W Theme) */}
            <div className="absolute inset-0 rounded-full bg-white blur-[150px] opacity-[0.03]" />

            {/* Central Anchor: iMediaff Logo */}
            <div className="relative z-50 flex flex-col items-center justify-center pointer-events-auto">
              <div className="relative w-48 h-20 md:w-72 md:h-28 flex items-center justify-center drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Image
                  src="/logo.png"
                  alt="iMediaff"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Radar/Beacon Pulse Effect (Neutral) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border border-black/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Layer A: The Text & CTAs ── */}
        <motion.div
          className="relative z-20 flex flex-col items-center px-6 text-center"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#2563EB] mb-6">
            / Global Digital Authority
          </p>

          <h1 className="font-display font-bold leading-[0.9] tracking-[-0.035em] text-balance text-[clamp(2.5rem,7vw,7rem)] max-w-6xl mx-auto pointer-events-auto">
            Architecting <br className="hidden md:block" /> Extraordinary <br className="hidden md:block" />
            <span className="bg-gradient-to-br from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent">
              Global Narratives
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-[#374151] leading-relaxed font-medium text-balance pointer-events-auto">
            A Dubai-headquartered influencer and affiliate marketing agency — one of Trendyol&apos;s top 3 global partner agencies, operating across MENA, CEE, Gulf, Turkey, and Azerbaijan.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition-all hover:scale-105 bg-gradient-to-br from-[#2563EB] to-[#16A34A] shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#0F172A] bg-transparent px-8 py-4 font-semibold text-[#0F172A] transition-all hover:bg-[#0F172A] hover:text-white"
            >
              I am a Creator
            </Link>
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}
