"use client"

import Link from "next/link"
import { motion, useInView } from "motion/react"
import { useState, useEffect, useRef } from "react"

// One copy of the marquee content
function MarqueeSlice() {
  return (
    <span className="flex items-center gap-8 pr-8 md:gap-14 md:pr-14 shrink-0">
      <span>GLOBAL GROWTH</span>
      <span
        aria-hidden
        className="inline-block h-[0.22em] w-[0.22em] shrink-0"
        style={{ background: "linear-gradient(135deg, #E515AB, #FFBD1E)" }}
      />
      <span>CREATORS</span>
      <span
        aria-hidden
        className="inline-block h-[0.22em] w-[0.22em] shrink-0"
        style={{ background: "linear-gradient(135deg, #E515AB, #FFBD1E)" }}
      />
      <span>MENA DOMINANCE</span>
      <span
        aria-hidden
        className="inline-block h-[0.22em] w-[0.22em] shrink-0"
        style={{ background: "linear-gradient(135deg, #E515AB, #FFBD1E)" }}
      />
      <span>STRATEGIC INFLUENCE</span>
      <span
        aria-hidden
        className="inline-block h-[0.22em] w-[0.22em] shrink-0"
        style={{ background: "linear-gradient(135deg, #E515AB, #FFBD1E)" }}
      />
    </span>
  )
}

// A full set of slices that guarantees it exceeds any screen width
function MarqueeSet() {
  return (
    <div className="flex shrink-0 items-center">
      <MarqueeSlice />
      <MarqueeSlice />
      <MarqueeSlice />
      <MarqueeSlice />
    </div>
  )
}

export default function CtaStrip() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ctaRef, { once: true, margin: "-20% 0px" })

  // Duration tuning: Desktop is slower for a premium feel (45s), 
  // Mobile is faster (25s) to prevent it from feeling static on narrow screens.
  const [duration, setDuration] = useState(45)

  useEffect(() => {
    const update = () => setDuration(window.innerWidth < 768 ? 25 : 45)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden bg-black text-white border-b border-white/10">
        {/* ── Autonomous Infinite Marquee ── */}
        <div
          className="relative overflow-hidden py-10 md:py-20 w-full"
          aria-hidden
        >
          <motion.div
            className="flex w-max whitespace-nowrap font-sans font-bold leading-none tracking-[-0.04em] text-white select-none text-[15vw] md:text-[12vw] lg:text-[10vw]"
            style={{ willChange: "transform" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* 
              Bulletproof Seamless Loop Logic:
              By placing exactly two identical wrapper groups, 50% of the motion.div's width 
              perfectly equals the start of the second group. This makes the loop jump invisible.
            */}
            <MarqueeSet />
            <MarqueeSet />
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA (Sunset Gradient Theme - Mirrored from Services) ── */}
      <section ref={ctaRef} className="bg-gradient-to-r from-[#E515AB] via-[#FA1702] to-[#FFBD1E] text-white py-24 md:py-36 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center relative z-10 flex flex-col items-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/90 font-bold mb-6">
            / Let us begin
          </p>
          
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance mb-6 text-white">
            Architect your global <br className="hidden md:block" /> influence.
          </h2>
          
          <p className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-white/90 mb-10">
            Transforming attention into regional dominance. From high-fidelity production to market entry in MENA, step into the future of brand scaling.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-12 py-6 text-lg font-bold text-white transition-transform hover:scale-105 shadow-xl"
          >
            Start a Project
          </Link>
        </motion.div>
      </section>
    </>
  )
}


