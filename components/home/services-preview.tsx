"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Sparkles, TrendingUp, Target, Users, Video, LineChart } from "lucide-react"

const SERVICES = [
  { icon: TrendingUp, title: "Viral Growth", desc: "Platform-ozel buyume motorlari." },
  { icon: Video, title: "Icerik Stratejisi", desc: "Format, ritim, hikaye. Uctan uca." },
  { icon: Target, title: "Performans Reklam", desc: "Her TL olculur, her tiklama hesaplanir." },
  { icon: Users, title: "Influencer Yonetimi", desc: "Dogru ses, dogru kitle, dogru zaman." },
  { icon: LineChart, title: "Veri ve Analitik", desc: "Canli dashboardlarla tam seffaflik." },
  { icon: Sparkles, title: "Kreatif Produksiyon", desc: "Studyo, set, reels. Hepsi iceride." },
]

export default function ServicesPreview() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              / Hizmetler
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.9] tracking-normal text-balance max-w-3xl">
              Markani <span className="text-primary">donustur</span>.
            </h2>
          </div>
          <Link
            href="/isletmeler"
            className="group inline-flex items-center gap-2 border border-foreground/20 px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary"
          >
            Tum hizmetleri gor
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              {"->"}
            </span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[260px] border-b border-r border-border bg-background/80 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-6 inline-flex h-12 w-12 items-center justify-center border border-border transition-colors group-hover:border-primary-foreground/30">
                  <service.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>

              <div className="relative">
                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-normal group-hover:text-primary-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
