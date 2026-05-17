"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useSpring, useTransform, animate } from "motion/react"

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  baseVy: number
  radius: number
  color: string
  glowColor: string
  opacity: number
  opacityDir: number
  opacitySpeed: number
  opacityMin: number
  opacityMax: number
  phaseOffset: number
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const PARTICLE_COUNT = 72
const REPEL_RADIUS   = 100
const REPEL_STRENGTH = 2.2
const FRICTION       = 0.88

const BRAND_PALETTE = [
  { color: "#2563EB", glow: "rgba(37,99,235," },
  { color: "#2563EB", glow: "rgba(255,138,30," },
  { color: "#2563EB", glow: "rgba(255,189,30," },
]

// ─── DATA ─────────────────────────────────────────────────────────────────────

const METRICS = [
  { value: 17000, suffix: "+", label: "Verified Influencers", sublabel: "across MENA" },
  { value: 150,   suffix: "+", label: "Global Brand",         sublabel: "Consultancies" },
  { value: 850,   suffix: "+", label: "Completed Projects",   sublabel: "since inception" },
  { value: 4,     suffix: "",  label: "Continents of",        sublabel: "Operational Reach" },
]

function formatDisplay(n: number, max: number): string {
  if (max >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".0", "") + "M"
  if (max >= 1_000)     return Math.floor(n / 1_000).toFixed(0) + "K"
  return Math.floor(n).toString()
}

// ─── CANVAS PARTICLE SYSTEM ───────────────────────────────────────────────────

function ParticleCanvas({ visible }: { visible: boolean }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const mouseRef   = useRef({ x: -9999, y: -9999 })
  const particles  = useRef<Particle[]>([])
  const rafRef     = useRef<number>(0)
  const timeRef    = useRef(0)

  const mkParticle = useCallback((w: number, h: number, fromBottom = false): Particle => {
    const palette = BRAND_PALETTE[Math.floor(Math.random() * BRAND_PALETTE.length)]
    const opMin   = 0.08 + Math.random() * 0.12
    const opMax   = opMin + 0.15 + Math.random() * 0.25
    return {
      x: Math.random() * w,
      y: fromBottom ? h + Math.random() * 80 : Math.random() * h,
      vx: 0,
      vy: 0,
      baseVy: -(0.12 + Math.random() * 0.28),   // slow upward drift
      radius: 1.2 + Math.random() * 2.4,
      color: palette.color,
      glowColor: palette.glow,
      opacity: opMin + Math.random() * (opMax - opMin),
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      opacitySpeed: 0.002 + Math.random() * 0.004,
      opacityMin: opMin,
      opacityMax: opMax,
      phaseOffset: Math.random() * Math.PI * 2,
    }
  }, [])

  // initialise
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    canvas.width  = w * (window.devicePixelRatio || 1)
    canvas.height = h * (window.devicePixelRatio || 1)
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => mkParticle(w, h))
  }, [mkParticle])

  // resize
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ro = new ResizeObserver(() => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width  = w * dpr
      canvas.height = h * dpr
      particles.current = Array.from({ length: PARTICLE_COUNT }, () => mkParticle(w, h))
    })
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [mkParticle])

  // mouse
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }
    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave", onLeave)
    return () => {
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  // animation loop
  useEffect(() => {
    if (!visible) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const dpr = window.devicePixelRatio || 1

    const loop = (ts: number) => {
      timeRef.current = ts
      const w  = canvas.offsetWidth
      const h  = canvas.offsetHeight
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(dpr, dpr)

      for (const p of particles.current) {
        // mouse repel
        const dx   = p.x - mx
        const dy   = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS
          p.vx += (dx / dist) * force * REPEL_STRENGTH
          p.vy += (dy / dist) * force * REPEL_STRENGTH
        }

        // friction + drift
        p.vx *= FRICTION
        p.vy  = (p.vy + p.baseVy) * FRICTION + p.baseVy * (1 - FRICTION)

        // slight horizontal sine sway
        const sway = Math.sin(ts * 0.0004 + p.phaseOffset) * 0.06
        p.x += p.vx + sway
        p.y += p.vy

        // wrap horizontally
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10

        // reset to bottom when past top
        if (p.y < -20) {
          Object.assign(p, mkParticle(w, h, true))
        }

        // opacity bioluminescence pulse
        p.opacity += p.opacityDir * p.opacitySpeed
        if (p.opacity >= p.opacityMax) { p.opacity = p.opacityMax; p.opacityDir = -1 }
        if (p.opacity <= p.opacityMin) { p.opacity = p.opacityMin; p.opacityDir =  1 }

        // draw
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4)
        grd.addColorStop(0,   `${p.glowColor}${p.opacity.toFixed(2)})`)
        grd.addColorStop(0.3, `${p.glowColor}${(p.opacity * 0.55).toFixed(2)})`)
        grd.addColorStop(1,   `${p.glowColor}0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
        ctx.globalAlpha = 1

        // soft glow halo
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
      }

      ctx.restore()
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [visible, mkParticle])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: "screen" }}
      aria-hidden
    />
  )
}

// ─── METRIC CARD ──────────────────────────────────────────────────────────────

function MetricCard({
  value, suffix, label, sublabel, index,
}: {
  value: number; suffix: string; label: string; sublabel: string; index: number
}) {
  const ref    = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const [display, setDisplay] = useState("0")

  const spring  = useSpring(0, { stiffness: 45, damping: 16, mass: 0.9 })
  const rounded = useTransform(spring, (v) => v)

  useEffect(() => { if (inView) spring.set(value) }, [inView, spring, value])
  useEffect(() => {
    const unsub = rounded.on("change", (n) => setDisplay(formatDisplay(n, value)))
    return () => unsub()
  }, [rounded, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col justify-center px-6 py-10 border-r border-white/[0.07] last:border-r-0"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/25 mb-4">
        0{index + 1}
      </p>

      <p
        className="font-sans text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.88] tracking-[-0.04em]"
        style={{
          backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.55) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {display}<span>{suffix}</span>
      </p>

      <p className="mt-4 text-sm font-semibold text-white/85 leading-snug tracking-tight">{label}</p>
      <p className="mt-0.5 text-xs text-white/40 font-medium tracking-tight">{sublabel}</p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: index * 0.11 + 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-br from-[#2563EB] to-[#16A34A] opacity-50"
      />
    </motion.div>
  )
}

// ─── PRODUCTION VISUAL ──────────────────────────────────────────────────────────

function ProductionVisual({ visible }: { visible: boolean }) {
  const floatRef = useRef<HTMLDivElement>(null)

  // Autonomous float loop — pure Framer Motion, zero canvas
  useEffect(() => {
    if (!visible || !floatRef.current) return
    const ctrl = animate(
      floatRef.current,
      { y: [-8, 8, -8] },
      { duration: 7, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
    )
    return () => ctrl.stop()
  }, [visible])

  return (
    <div className="relative flex items-center justify-center">
      {/* Pulsing ambient glow behind the image */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
        style={{ filter: "blur(60px)" }}
        animate={
          visible
            ? {
                background: [
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(255,138,30,0.08) 50%, transparent 75%)",
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.32) 0%, rgba(255,189,30,0.14) 50%, transparent 75%)",
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(255,138,30,0.08) 50%, transparent 75%)",
                ],
              }
            : {}
        }
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
      />

      {/* Floating image wrapper */}
      <div ref={floatRef} className="relative will-change-transform">
        <div 
          className="relative w-[340px] h-[460px] md:w-[420px] md:h-[580px] rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 0 40px rgba(37,99,235,0.25), 0 0 80px rgba(37,99,235,0.1)",
            border: "1px solid rgba(255,255,255,0.05)"
          }}
        >
          <Image
            src="/cinematic-production.png"
            alt="Cinematic production setup representing iMediaff's high-end influencer marketing content"
            fill
            sizes="(max-width: 768px) 340px, 420px"
            className="object-cover object-center"
            quality={90}
            priority
          />
          {/* Inner vignette to help blend edges */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────

export default function AuthorityMetrics() {
  const sectionRef    = useRef<HTMLDivElement | null>(null)
  const contentInView = useInView(sectionRef, { once: true, margin: "-8% 0px" })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black"
      aria-label="Authority Metrics"
    >
      {/* ── STATIC ATMOSPHERIC GRADIENTS (non-animated, CSS only) ─────────── */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        {/* warm seafloor bloom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[75%] w-[85%]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(37,99,235,0.16) 0%, rgba(255,138,30,0.09) 38%, transparent 70%)",
          }}
        />
        {/* right gold accent */}
        <div
          className="absolute bottom-0 right-[8%] h-[50%] w-[40%]"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 85% 100%, rgba(255,189,30,0.08) 0%, transparent 65%)",
          }}
        />
        {/* rising graph lines — pure CSS, no JS */}
        {([10, 22, 36, 50, 64, 76, 88] as number[]).map((x, i) => (
          <div
            key={`gl-${i}`}
            className="absolute bottom-0 w-px"
            style={{
              left: `${x}%`,
              height: `${28 + (i % 3) * 14}%`,
              opacity: 0.05 + (i % 2) * 0.02,
              background:
                i % 2 === 0
                  ? "linear-gradient(to top, rgba(37,99,235,0.8) 0%, rgba(255,138,30,0.4) 60%, transparent 100%)"
                  : "linear-gradient(to top, rgba(255,138,30,0.7) 0%, rgba(255,189,30,0.3) 60%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* ── CANVAS PARTICLE SYSTEM ────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <ParticleCanvas visible={contentInView} />
      </div>

      {/* ── FOREGROUND ────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">

        {/* HERO ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6"
            >
              / Trusted Data
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-bold text-white leading-[0.92] tracking-[-0.03em] text-[clamp(2.2rem,5.5vw,4.5rem)] text-balance"
            >
              iMediaff Global —{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #2563EB 0%, #16A34A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Where influence meets
              </span>{" "}
              measurable growth.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-lg text-base md:text-[1.05rem] text-white/55 leading-relaxed font-sans"
            >
              iMediaff Global is a next-generation influencer and digital media powerhouse — built to explore, design, and amplify brand stories across the world&apos;s most dynamic markets. We connect creators with companies, forging partnerships that drive real, lasting impact.
            </motion.p>

            {/* Learn More CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #2563EB 0%, #2563EB 50%, #2563EB 100%)",
                  boxShadow: "0 0 30px rgba(37,99,235,0.45), inset 0 0 12px rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 50px 8px rgba(255,189,30,0.5), inset 0 0 18px rgba(255,255,255,0.10)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 30px rgba(37,99,235,0.45), inset 0 0 12px rgba(255,255,255,0.07)"
                }}
              >
                <span>Learn more</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Production Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={contentInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProductionVisual visible={contentInView} />
          </motion.div>
        </div>

        {/* METRICS ROW */}
        <div className="mt-20 border-t border-white/[0.07] grid grid-cols-2 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <MetricCard key={i} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
