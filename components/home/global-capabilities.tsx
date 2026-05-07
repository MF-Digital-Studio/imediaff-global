"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, useInView } from "motion/react"

// ─── CAPABILITY DATA ──────────────────────────────────────────────────────────

const CAPABILITIES = [
  {
    index: "01",
    title: "Creator Strategy",
    description:
      "Engineering high-conversion creator roadmaps that align with your brand's global DNA — from talent selection to content architecture.",
    glow: "rgba(229,21,171,0.22)",
    glowHover: "rgba(229,21,171,0.45)",
    accentFrom: "#E515AB",
    accentTo: "#FF8A1E",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden>
        <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M22 7l3-3M22 15l3 3M10 7L7 4M10 15l-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: "02",
    title: "Market Entry & Growth",
    description:
      "Your strategic gateway to the Dubai and MENA markets, ensuring cultural fluency and rapid scaling through established regional networks.",
    glow: "rgba(255,138,30,0.20)",
    glowHover: "rgba(255,138,30,0.42)",
    accentFrom: "#FF8A1E",
    accentTo: "#FFBD1E",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden>
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 16h22M16 5c-3 3-5 6.5-5 11s2 8 5 11M16 5c3 3 5 6.5 5 11s-2 8-5 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M7.5 9.5h17M7.5 22.5h17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: "03",
    title: "Campaign Management",
    description:
      "End-to-end execution of multi-platform campaigns with transparent, real-time reporting and performance guarantees built in.",
    glow: "rgba(255,189,30,0.18)",
    glowHover: "rgba(255,189,30,0.38)",
    accentFrom: "#FFBD1E",
    accentTo: "#FF8A1E",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden>
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10 20l4-5 4 3 4-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="11" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    index: "04",
    title: "Strategic Consultancy",
    description:
      "Expert advisory on digital expansion, tax-efficient structures, and legal contract architecture across international jurisdictions.",
    glow: "rgba(229,21,171,0.20)",
    glowHover: "rgba(229,21,171,0.42)",
    accentFrom: "#E515AB",
    accentTo: "#FFBD1E",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden>
        <path d="M16 4L4 10v6c0 7 5.4 13 12 14 6.6-1 12-7 12-14v-6L16 4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

// ─── LIGHTWEIGHT PARTICLE CANVAS ─────────────────────────────────────────────
// Smaller, slower particle set for continuity with the Metrics section above

interface LiteParticle {
  x: number; y: number
  vx: number; vy: number
  r: number
  opacity: number; opDir: number; opSpeed: number
  opMin: number; opMax: number
  phase: number
}

function LiteParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)

  const PALETTE = [
    { dot: "#E515AB", glow: "rgba(229,21,171," },
    { dot: "#FF8A1E", glow: "rgba(255,138,30," },
    { dot: "#FFBD1E", glow: "rgba(255,189,30," },
  ]

  const mkP = useCallback((w: number, h: number): LiteParticle => {
    const opMin = 0.06 + Math.random() * 0.10
    return {
      x: Math.random() * w,
      y: h + Math.random() * 60,
      vx: 0,
      vy: -(0.08 + Math.random() * 0.18),
      r: 1.0 + Math.random() * 2.0,
      opacity: opMin,
      opDir: 1,
      opSpeed: 0.0015 + Math.random() * 0.003,
      opMin,
      opMax: opMin + 0.12 + Math.random() * 0.16,
      phase: Math.random() * Math.PI * 2,
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const resize = () => {
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const N = 42
    let particles: LiteParticle[] = []
    const init = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      // scatter across full height on init (not just from bottom)
      particles = Array.from({ length: N }, () => {
        const p = mkP(w, h)
        p.y = Math.random() * h    // spread vertically on load
        return p
      })
    }
    init()

    const loop = (ts: number) => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        // sway
        p.x += p.vx + Math.sin(ts * 0.00035 + p.phase) * 0.05
        p.y += p.vy

        if (p.x < -8) p.x = w + 8
        if (p.x > w + 8) p.x = -8
        if (p.y < -16) particles[i] = mkP(w, h)

        // opacity pulse
        p.opacity += p.opDir * p.opSpeed
        if (p.opacity >= p.opMax) { p.opacity = p.opMax; p.opDir = -1 }
        if (p.opacity <= p.opMin) { p.opacity = p.opMin; p.opDir =  1 }

        const pal = PALETTE[i % 3]

        // halo
        const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
        halo.addColorStop(0, `${pal.glow}${(p.opacity * 0.6).toFixed(3)})`)
        halo.addColorStop(1, `${pal.glow}0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = halo
        ctx.fill()

        // core
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = pal.dot
        ctx.globalAlpha = p.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      }

      ctx.restore()
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [mkP])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
      aria-hidden
    />
  )
}

// ─── CAPABILITY CARD ──────────────────────────────────────────────────────────

function CapabilityCard({
  cap, index, inView,
}: {
  cap: typeof CAPABILITIES[number]
  index: number
  inView: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: 0.15 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Gradient border wrapper */}
      <div
        className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${cap.accentFrom}, ${cap.accentTo})`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Card body */}
      <div
        ref={cardRef}
        className="relative flex flex-col h-full rounded-2xl p-8 md:p-9 cursor-default transition-all duration-500"
        style={{ background: "rgba(255,255,255,0.03)" }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.background = "rgba(255,255,255,0.055)"
          el.style.boxShadow  = `0 0 60px ${cap.glowHover}, inset 0 0 30px rgba(255,255,255,0.02)`
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.background = "rgba(255,255,255,0.03)"
          el.style.boxShadow  = "none"
        }}
      >
        {/* Index + Icon row */}
        <div className="flex items-start justify-between mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/25">
            {cap.index}
          </span>
          <div
            className="text-white/30 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-0.5"
          >
            {cap.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-sans text-[1.4rem] md:text-[1.55rem] font-bold text-white leading-tight tracking-tight mb-4">
          {cap.title}
        </h3>

        {/* Description */}
        <p className="text-white/45 text-[0.93rem] leading-relaxed font-medium flex-1">
          {cap.description}
        </p>

        {/* Bottom accent line */}
        <div
          className="mt-8 h-[1.5px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${cap.accentFrom} 0%, ${cap.accentTo} 60%, transparent 100%)` }}
        />
      </div>
    </motion.div>
  )
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────

export default function GlobalCapabilities() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: "-12% 0px" })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black"
      aria-label="Global Capabilities"
    >
      {/* White → Black gradient seam at top */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#E515AB] via-[#FF8A1E] to-[#FFBD1E]" />

      {/* Living Ocean particles — continuity layer */}
      <LiteParticleCanvas />

      {/* Atmospheric warm bloom — bottom center */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[50%] w-[70%]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(229,21,171,0.10) 0%, rgba(255,138,30,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">

        {/* ── HEADER ──────────────────────────────────────────────────── */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-5">
              / Capabilities
            </p>
            <h2 className="font-sans text-[clamp(2.4rem,5vw,4.5rem)] font-bold text-white leading-[0.92] tracking-[-0.03em] text-balance">
              Built to{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #E515AB 0%, #FF8A1E 55%, #FFBD1E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                perform
              </span>{" "}
              at every scale.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-[0.95rem] text-white/40 leading-relaxed font-medium md:text-right"
          >
            Four integrated service verticals, designed for brands operating at the intersection of
            global ambition and regional precision.
          </motion.p>
        </div>

        {/* ── CAPABILITY GRID ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.index} cap={cap} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  )
}
