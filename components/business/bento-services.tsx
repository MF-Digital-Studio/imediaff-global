"use client"

import { motion } from "motion/react"
import { Flame, Target, Video, LineChart, Users, Zap, Brain, Megaphone } from "lucide-react"

export default function BentoServices() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Capabilities</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.035em] max-w-3xl text-balance">
              One integrated team. <span className="text-primary">Eight</span> specializations.
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-xs">{"// "}Each service performs independently and compounds when orchestrated together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-3 md:gap-4">
          <BentoTile className="md:col-span-4 md:row-span-2 min-h-[360px]" highlighted delay={0}>
            <Flame className="h-6 w-6" />
            <p className="mt-auto font-mono text-xs uppercase tracking-[0.3em] opacity-70">01 - Viral Growth</p>
            <h3 className="mt-3 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-[-0.04em]">A growth engine built for algorithmic scale.</h3>
            <p className="mt-4 max-w-xl text-sm md:text-base opacity-80 leading-relaxed">Cross-platform content systems for TikTok, Reels, and Shorts that deliver compounding organic growth.</p>
            <MiniStats highlight stats={[{ k: "Average Reach", v: "+340%" }, { k: "Viral Ratio", v: "1/18" }, { k: "Typical Cycle", v: "4-6 weeks" }]} />
          </BentoTile>

          <BentoTile className="md:col-span-2 md:row-span-1" delay={0.05}><Brain className="h-5 w-5 text-primary" /><h3 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-[-0.025em]">Content Strategy</h3><p className="mt-2 text-sm text-muted-foreground">Platform-native narratives, cadence, and format architecture.</p></BentoTile>
          <BentoTile className="md:col-span-2 md:row-span-1" delay={0.1}><Video className="h-5 w-5 text-primary" /><h3 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-[-0.025em]">Production</h3><p className="mt-2 text-sm text-muted-foreground">In-house production from concept to final delivery.</p></BentoTile>
          <BentoTile className="md:col-span-3" delay={0.15}><Target className="h-5 w-5 text-primary" /><h3 className="mt-4 font-display text-2xl md:text-4xl font-bold tracking-[-0.025em]">Performance Ads</h3><p className="mt-2 text-sm text-muted-foreground max-w-sm">Live optimization across Meta, TikTok, and Google with measurable media efficiency.</p><MiniStats stats={[{ k: "Average ROAS", v: "14x" }, { k: "CPA Reduction", v: "-38%" }]} /></BentoTile>
          <BentoTile className="md:col-span-3" delay={0.2}><Users className="h-5 w-5 text-primary" /><h3 className="mt-4 font-display text-2xl md:text-4xl font-bold tracking-[-0.025em]">Influencer Partnerships</h3><p className="mt-2 text-sm text-muted-foreground max-w-sm">End-to-end creator matchmaking, campaign execution, and reporting.</p><MiniStats stats={[{ k: "Roster", v: "24+ creators" }, { k: "Reach", v: "48M+" }]} /></BentoTile>
          <BentoTile className="md:col-span-2" delay={0.25}><LineChart className="h-5 w-5 text-primary" /><h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.025em]">Data & Analytics</h3><p className="mt-2 text-sm text-muted-foreground">Live dashboards, weekly insights, and competitive benchmarks.</p></BentoTile>
          <BentoTile className="md:col-span-2" delay={0.3}><Zap className="h-5 w-5 text-primary" /><h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.025em]">Response Operations</h3><p className="mt-2 text-sm text-muted-foreground">Always-on monitoring and rapid-response social intelligence.</p></BentoTile>
          <BentoTile className="md:col-span-2" delay={0.35}><Megaphone className="h-5 w-5 text-primary" /><h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.025em]">PR & Launches</h3><p className="mt-2 text-sm text-muted-foreground">Integrated press, event, and creator launch planning.</p></BentoTile>
        </div>
      </div>
    </section>
  )
}

function BentoTile({ children, className = "", highlighted = false, delay = 0 }: { children: React.ReactNode; className?: string; highlighted?: boolean; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 18 } }} className={`group relative flex flex-col border border-border p-6 md:p-8 overflow-hidden transition-colors ${highlighted ? "bg-primary text-primary-foreground" : "bg-card hover:border-primary/60"} ${className}`}>
      <div className="relative flex flex-col h-full">{children}</div>
    </motion.div>
  )
}

function MiniStats({ stats, highlight }: { stats: { k: string; v: string }[]; highlight?: boolean }) {
  return (
    <div style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }} className={`mt-6 grid gap-4 border-t pt-4 ${highlight ? "border-primary-foreground/20" : "border-border"}`}>
      {stats.map((s) => (
        <div key={s.k}>
          <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${highlight ? "opacity-70" : "text-muted-foreground"}`}>{s.k}</p>
          <p className="mt-1 font-display text-xl md:text-2xl font-bold tracking-tight">{s.v}</p>
        </div>
      ))}
    </div>
  )
}
