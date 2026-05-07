"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Lightbulb, Globe2, MousePointerClick, LayoutDashboard } from "lucide-react"

const SERVICES = [
  {
    title: "Creator Strategy",
    description: "Engineering high-conversion creator roadmaps that align with your brand’s global DNA.",
    icon: Lightbulb,
  },
  {
    title: "Market Entry & Growth",
    description: "Your gateway to the Dubai and MENA markets, ensuring cultural fluency and rapid scaling.",
    icon: Globe2,
  },
  {
    title: "Performance Media",
    description: "Data-led ad buying and precision targeting across all major social platforms for maximum ROI.",
    icon: MousePointerClick,
  },
  {
    title: "Campaign Management",
    description: "End-to-end execution of multi-platform campaigns with transparent, real-time reporting.",
    icon: LayoutDashboard,
  },
]

export default function StrategicServices() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-15% 0px" })

  return (
    <section ref={sectionRef} className="relative bg-black py-24 md:py-32" aria-label="Strategic Services">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4">
            / Strategic Services
          </p>
          <h2 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white max-w-3xl text-balance">
            Driving global impact through <br />
            <span className="text-white/30">precision</span> and <span className="text-white/30">scale.</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col bg-white/[0.03] p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-[5px] overflow-hidden"
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 25px 50px -12px rgba(229,21,171,0.06)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)"
              }}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E515AB] to-[#FF8A1E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.05] text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                <service.icon strokeWidth={1.5} className="h-5 w-5" />
              </div>

              <h3 className="font-sans text-xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed text-[0.95rem] font-medium">
                {service.description}
              </p>
              
              {/* Bottom Right Dot */}
              <div className="absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E515AB] to-[#FF8A1E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
