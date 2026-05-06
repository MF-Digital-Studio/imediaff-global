"use client"

import Image from "next/image"
import { motion } from "motion/react"

type Influencer = {
  id: string
  name: string
  handle: string
  niche: string
  image: string
  stats: { reach: string; engagement: string; platform: string }
  bio: string
}

const INFLUENCERS: Influencer[] = [
  {
    id: "1",
    name: "Defne Kara",
    handle: "@defnekara",
    niche: "Moda & Lifestyle",
    image: "/influencers/influencer-1.jpg",
    stats: { reach: "2.4M+", engagement: "%9.1", platform: "Instagram" },
    bio: "Editörsel moda dili, günlük kullanıma indirgeyen Istanbul'lu stil ikonu.",
  },
  {
    id: "2",
    name: "Kerem Aksoy",
    handle: "@keremaksoy",
    niche: "Streetwear & Kültür",
    image: "/influencers/influencer-2.jpg",
    stats: { reach: "1.8M+", engagement: "%7.8", platform: "TikTok" },
    bio: "Sokağın sesi, global hype'ın yerel tercümanı.",
  },
  {
    id: "3",
    name: "Melis Yıldız",
    handle: "@melisyildiz",
    niche: "Avant-Garde",
    image: "/influencers/influencer-3.jpg",
    stats: { reach: "960K+", engagement: "%11.3", platform: "Instagram" },
    bio: "Deneysel görsel dille lüks markaların favorisi.",
  },
  {
    id: "4",
    name: "Berk Demir",
    handle: "@berkdemir",
    niche: "Lifestyle & Teknoloji",
    image: "/influencers/influencer-4.jpg",
    stats: { reach: "3.1M+", engagement: "%6.4", platform: "YouTube" },
    bio: "Ürünü hikâyeye çeviren, konvertör gücü yüksek yaratıcı.",
  },
  {
    id: "5",
    name: "Ayça Öz",
    handle: "@aycaoz",
    niche: "Güzellik & Cilt",
    image: "/influencers/influencer-5.jpg",
    stats: { reach: "1.2M+", engagement: "%10.6", platform: "Instagram" },
    bio: "Güzellik sektörünün veri odaklı içerik yaratıcısı.",
  },
  {
    id: "6",
    name: "Emir Uslu",
    handle: "@emiruslu",
    niche: "Fitness & Performans",
    image: "/influencers/influencer-6.jpg",
    stats: { reach: "2.7M+", engagement: "%8.9", platform: "TikTok" },
    bio: "Disiplin ve estetiği birleştiren performans ikonu.",
  },
]

export default function InfluencerGrid() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {INFLUENCERS.map((inf, i) => (
            <InfluencerCard key={inf.id} inf={inf} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function InfluencerCard({ inf, index }: { inf: Influencer; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden border border-border bg-card">
        <Image
          src={inf.image || "/placeholder.svg"}
          alt={inf.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover grayscale-[0.2] transition-all duration-[1200ms] group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        {/* Top tag */}
        <div className="absolute top-4 left-4 bg-background/70 backdrop-blur px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
          {inf.niche}
        </div>

        {/* Hover stats reveal */}
        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="grid grid-cols-3 gap-2 bg-background/80 backdrop-blur-md border border-border p-3">
            <StatBlock k="Erişim" v={inf.stats.reach} highlight />
            <StatBlock k="Etkileşim" v={inf.stats.engagement} />
            <StatBlock k="Platform" v={inf.stats.platform} />
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.025em]">
            {inf.name}
          </h3>
          <p className="mt-1 font-mono text-xs text-primary">{inf.handle}</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs text-pretty">
            {inf.bio}
          </p>
        </div>
        <span
          aria-hidden
          className="shrink-0 inline-flex h-10 w-10 items-center justify-center border border-border group-hover:border-primary group-hover:text-primary transition-colors"
        >
          →
        </span>
      </div>
    </motion.article>
  )
}

function StatBlock({
  k,
  v,
  highlight,
}: {
  k: string
  v: string
  highlight?: boolean
}) {
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
        {k}
      </p>
      <p
        className={`mt-1 font-display text-lg md:text-xl font-semibold tracking-tight ${highlight ? "text-primary" : ""}`}
      >
        {v}
      </p>
    </div>
  )
}
