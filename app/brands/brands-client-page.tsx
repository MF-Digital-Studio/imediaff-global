"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

const METRICS = [
  { title: "Global Presence",  value: "150+",    desc: "Strategic Brand Consultancies"      },
  { title: "Network Power",    value: "17,000+", desc: "Verified Influencers across MENA"   },
  { title: "Track Record",     value: "850+",    desc: "Successfully Completed Projects"    },
  { title: "Execution",        value: "450+",    desc: "Active Digital Campaigns"           },
]

const ALL_BRANDS = [
  "purebaby","züber","letsbechild","ariel","atawich","bepanthol","biofeline","cif",
  "dove","hepsiburada","hipp","hobby","karcher","kinderkraft","loreal","luisbien",
  "lumberjack","mustela","schafer","şok","xiaomi","amazon","arkonem","sleepy","yayla",
  "dermokil","avon","babyturco","omo","tefal","defacto","elidor","indo","procsın",
  "çiçeksepeti","yemeksepeti","trendyol","bio-oil","flo",
]

// ── Parallax image wrapper ──────────────────────────────────────────────────
function ParallaxImage({
  src, alt, direction = "right", theme = "black"
}: {
  src: string; alt: string; direction?: "left" | "right"; theme?: "black" | "white"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const gradientFrom = theme === "black" ? "from-black" : "from-white"
  const topBottomGradient = theme === "black" ? "from-black/40 via-transparent to-black/40" : "from-white/40 via-transparent to-white/40"

  return (
    <div ref={ref} className={`relative w-full h-[480px] md:h-[600px] overflow-hidden rounded-2xl ${theme === 'white' ? 'shadow-2xl' : ''}`}>
      {/* image */}
      <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
        <Image src={src} alt={alt} fill className="object-cover" unoptimized />
      </motion.div>

      {/* gradient masks – blend left or right edge into background */}
      {direction === "right" && (
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-l ${gradientFrom} via-transparent to-transparent opacity-80`} />
      )}
      {direction === "left" && (
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${gradientFrom} via-transparent to-transparent opacity-80`} />
      )}
      {/* top & bottom masks */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${topBottomGradient}`} />
    </div>
  )
}

export default function BrandsClientPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ── Hero (Black Theme) ────────────────────────────────────────────────── */}
      <section className="bg-black text-white pt-32 pb-16 md:pt-48 md:pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-0 w-full max-w-[800px] h-[800px] bg-gradient-to-bl from-[#2563EB]/10 to-transparent blur-[120px] rounded-full opacity-50 translate-x-1/3 -translate-y-1/3" />
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB]">/ Brand Partnerships</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
              International <br /> Authority.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed font-sans">
              Bridging the gap between global enterprises and the MENA region. We provide the strategic infrastructure for brands to scale with precision and cultural relevance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Success Metrics (Black Theme) ──────────────────────────────────────── */}
      <section className="bg-black text-white py-16 md:py-24 border-b border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {METRICS.map((metric, i) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col border-l border-white/20 pl-6 md:pl-8"
              >
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/40 mb-4">{metric.title}</p>
                <h3 className="font-display text-5xl md:text-6xl font-bold tracking-[-0.02em] text-white mb-3">{metric.value}</h3>
                <p className="text-sm md:text-base text-white/60 max-w-[200px]">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infinite Marquee (White Theme) ─────────────────────────────────────── */}
      <section className="bg-white text-black py-20 md:py-28 overflow-hidden border-b border-gray-200 relative">
        {/* Sunset glow behind the marquee (subtle for white bg) */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-br from-[#2563EB]/5 to-[#16A34A]/5 blur-3xl" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 mb-12 relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB]">/ Trusted by Industry Leaders</p>
        </div>

        {/* Fading edge masks for white background */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max relative z-0">
          <motion.div
            className="flex gap-16 md:gap-24 px-8 md:px-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...ALL_BRANDS, ...ALL_BRANDS].map((brand, i) => (
              <div key={`${brand}-${i}`} className="group cursor-default whitespace-nowrap">
                <span className="font-display text-3xl md:text-5xl font-bold tracking-tight lowercase text-black/20 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#2563EB]">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: The MENA Gateway (White Theme) ────────────────────────── */}
      <section className="bg-white text-black py-20 md:py-32 border-b border-gray-200 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB] mb-6 font-bold">/ The MENA Gateway</p>
              <h2 className="font-display text-[clamp(2.5rem,4.5vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-black mb-10">
                Your Strategic <br /> Gateway to the <br /> MENA Region.
              </h2>
              <div className="h-px w-full bg-gradient-to-br from-[#2563EB] to-[#16A34A] mb-10" />
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-sans mb-6">
                We don't just run campaigns; we navigate cultures.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-sans">
                iMediaff Global provides the operational infrastructure and cultural fluency required for Western brands to dominate the Middle Eastern and Turkish markets. We translate global equity into local resonance.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <ParallaxImage
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop"
                alt="Dubai skyline at dusk — the MENA gateway"
                direction="left"
                theme="white"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Section 2: Data-Led Creator Selection (Black Theme) ──────────────── */}
      <section className="bg-black text-white py-20 md:py-32 border-b border-white/10 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <ParallaxImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="High-fidelity data analytics dashboard — creator selection intelligence"
                direction="right"
                theme="black"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB] mb-6">/ Data-Led Creator Selection</p>
              <h2 className="font-display text-[clamp(2.5rem,4.5vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-white mb-10">
                Proprietary Tech, <br /> Proven Creators.
              </h2>
              <div className="h-px w-full bg-gradient-to-br from-[#2563EB] to-[#16A34A] mb-10" />
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-sans mb-6">
                Leveraging our database of 17,000+ verified influencers.
              </p>
              <p className="text-lg text-white/60 leading-relaxed font-sans">
                We use predictive analytics to match your brand with creators who don't just have followers—they have influence. It's an exact science designed for maximum conversion and authentic engagement.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Global Standards (White Theme) ─────────────────────────────────────── */}
      <section className="bg-white text-black py-20 md:py-32 border-b border-gray-200">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-24 text-center"
          >
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] text-black">
              Global Standards, Local Expertise.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Compliance", desc: "Adhering strictly to GCC & international advertising standards, ensuring brand safety at scale." },
              { title: "Logistics",  desc: "Seamless cross-border campaign management, handling every detail from contracting to payouts." },
              { title: "Strategy",   desc: "360° digital mastery from Istanbul to Dubai, executing tailored roadmaps for every region." },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 md:p-12 rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-px w-12 bg-gradient-to-br from-[#2563EB] to-[#16A34A] mb-8" />
                <h3 className="font-display text-3xl font-bold text-black mb-4">{col.title}.</h3>
                <p className="text-gray-600 leading-relaxed font-sans">{col.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA (Sunset Gradient Theme) ─────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#16A34A] text-white py-24 md:py-36 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center relative z-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold mb-6">
            / Expand your empire
          </p>
          <h2 className="font-display text-[clamp(3rem,6vw,6rem)] font-bold tracking-[-0.03em] text-white mb-10">
            Expand your empire.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-12 py-6 text-lg font-bold text-white transition-transform hover:scale-105 shadow-xl"
          >
            Start the Conversation
          </Link>
        </motion.div>
      </section>

    </main>
  )
}
