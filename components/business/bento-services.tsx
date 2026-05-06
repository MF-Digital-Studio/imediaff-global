"use client"

import { motion } from "motion/react"
import { Flame, Target, Video, LineChart, Users, Zap, Brain, Megaphone } from "lucide-react"

export default function BentoServices() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              / Servisler
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.035em] max-w-3xl text-balance">
              Tek bir ekip. <span className="text-primary">Sekiz</span> uzmanlık alanı.
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-xs">
            {"// "}Her hizmet bağımsız çalışır, birlikte mükemmel çalışır.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-3 md:gap-4">
          {/* Viral Growth - hero tile */}
          <BentoTile
            className="md:col-span-4 md:row-span-2 min-h-[360px]"
            highlighted
            delay={0}
          >
            <Flame className="h-6 w-6" />
            <p className="mt-auto font-mono text-xs uppercase tracking-[0.3em] opacity-70">
              01 — Viral Growth
            </p>
            <h3 className="mt-3 font-display text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
              Algoritmayı ezmek için
              <br />
              kurduğumuz motor.
            </h3>
            <p className="mt-4 max-w-xl text-sm md:text-base opacity-80 leading-relaxed">
              TikTok, Reels, Shorts. Üçünde birden organik büyümeyi sağlayan
              çok-platform format stratejileri.
            </p>
            <MiniStats
              highlight
              stats={[
                { k: "Ortalama erişim", v: "+340%" },
                { k: "Viral oran", v: "1/18" },
                { k: "Hafta", v: "4-6" },
              ]}
            />
          </BentoTile>

          <BentoTile className="md:col-span-2 md:row-span-1" delay={0.05}>
            <Brain className="h-5 w-5 text-primary" />
            <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold tracking-[-0.025em]">
              İçerik Stratejisi
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Her platforma özel format, ritim ve hikâye mimarisi.
            </p>
          </BentoTile>

          <BentoTile className="md:col-span-2 md:row-span-1" delay={0.1}>
            <Video className="h-5 w-5 text-primary" />
            <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold tracking-[-0.025em]">
              Prodüksiyon
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              8 kişilik stüdyo, 4K çekim, post-prodüksiyon içeride.
            </p>
          </BentoTile>

          <BentoTile className="md:col-span-3" delay={0.15}>
            <Target className="h-5 w-5 text-primary" />
            <h3 className="mt-4 font-display text-2xl md:text-4xl font-semibold tracking-[-0.025em]">
              Performans Reklam
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Meta, TikTok, Google. Canlı bidding, creative testing, ölçülebilir ROAS.
            </p>
            <MiniStats
              stats={[
                { k: "Ort. ROAS", v: "14x" },
                { k: "CPA düşüş", v: "-38%" },
              ]}
            />
          </BentoTile>

          <BentoTile className="md:col-span-3" delay={0.2}>
            <Users className="h-5 w-5 text-primary" />
            <h3 className="mt-4 font-display text-2xl md:text-4xl font-semibold tracking-[-0.025em]">
              Influencer Pazarlama
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              24 yaratıcılık isimli ajanslı ağ. Brief'ten rapora uçtan uca yönetim.
            </p>
            <MiniStats
              stats={[
                { k: "Kadro", v: "24 isim" },
                { k: "Erişim", v: "48M+" },
              ]}
            />
          </BentoTile>

          <BentoTile className="md:col-span-2" delay={0.25}>
            <LineChart className="h-5 w-5 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.025em]">
              Data & Analitik
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Canlı dashboard, haftalık insight, rakip benchmark.
            </p>
          </BentoTile>

          <BentoTile className="md:col-span-2" delay={0.3}>
            <Zap className="h-5 w-5 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.025em]">
              Kriz & Tepki
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              7/24 izleme, sosyal dinleme, 1 saatte ilk yanıt garantisi.
            </p>
          </BentoTile>

          <BentoTile className="md:col-span-2" delay={0.35}>
            <Megaphone className="h-5 w-5 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.025em]">
              PR & Lansman
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Basın, etkinlik, influencer entegrasyonu — tek takvim.
            </p>
          </BentoTile>
        </div>
      </div>
    </section>
  )
}

function BentoTile({
  children,
  className = "",
  highlighted = false,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  highlighted?: boolean
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 18 },
      }}
      className={`group relative flex flex-col border border-border p-6 md:p-8 overflow-hidden transition-colors ${
        highlighted
          ? "bg-primary text-primary-foreground"
          : "bg-card hover:border-primary/60"
      } ${className}`}
    >
      {!highlighted && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, color-mix(in oklab, var(--primary) 20%, transparent), transparent 60%)",
          }}
        />
      )}
      <div className="relative flex flex-col h-full">{children}</div>
    </motion.div>
  )
}

function MiniStats({
  stats,
  highlight,
}: {
  stats: { k: string; v: string }[]
  highlight?: boolean
}) {
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
      className={`mt-6 grid gap-4 border-t pt-4 ${
        highlight ? "border-primary-foreground/20" : "border-border"
      }`}
    >
      {stats.map((s) => (
        <div key={s.k}>
          <p
            className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
              highlight ? "opacity-70" : "text-muted-foreground"
            }`}
          >
            {s.k}
          </p>
          <p className="mt-1 font-display text-xl md:text-2xl font-semibold tracking-tight">
            {s.v}
          </p>
        </div>
      ))}
    </div>
  )
}
