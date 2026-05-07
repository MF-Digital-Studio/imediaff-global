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
    <motion.section ref={containerRef} className="relative h-[250vh] bg-black text-white" aria-label="Hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* ── Layer B: The Global Map Anchor ── */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          style={{ opacity: mapOpacity, y: mapY, scale: mapScale }}
        >
          <div className="relative w-full max-w-[1400px] aspect-[16/9] md:aspect-video px-6 flex items-center justify-center">
            
            {/* Minimalist World Map Silhouette with Soft Elliptical Edges */}
            <div 
              className="absolute inset-0 opacity-[0.15] mix-blend-screen flex items-center justify-center"
              style={{ 
                maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)'
              }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                alt="World Map Silhouette" 
                className="w-full h-auto max-h-[80vh] object-contain invert grayscale"
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
                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border border-white/20 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Layer A: The Text & CTAs ── */}
        <motion.div 
          className="relative z-20 flex flex-col items-center px-6 text-center"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#FFBD1E] mb-6">
            / Global Digital Authority
          </p>

          <h1 className="font-display font-bold leading-[0.9] tracking-[-0.035em] text-balance text-[clamp(2.5rem,7vw,7rem)] max-w-6xl mx-auto pointer-events-auto">
            Architecting <br className="hidden md:block" /> Extraordinary <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#E515AB] via-[#FF8A1E] to-[#FFBD1E] bg-clip-text text-transparent">
              Global Narratives
            </span>
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E515AB] via-[#FF8A1E] to-[#FFBD1E] p-[2px] opacity-100 transition-shadow duration-500 group-hover:shadow-[0_0_20px_rgba(229,21,171,0.5)]">
                <div className="h-full w-full rounded-full bg-black" />
              </div>
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Explore Our Talents
            </Link>
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}
