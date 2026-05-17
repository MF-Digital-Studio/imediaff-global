"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, Globe, Users, ShoppingBag, TrendingUp } from "lucide-react"

export default function TalentClientPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden border-b border-border">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="relative mx-auto max-w-[1600px] px-6 md:px-10 z-10"
        >
          <div className="inline-flex items-center rounded-full border border-border/50 bg-white/5 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#2563EB] mr-2"></span>
            Trendyol Partner Agency
          </div>
          <h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] max-w-5xl">
            Join the iMediaff <br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent">Talent Network</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            We are a global agency headquartered in Dubai, connecting brands and influencers through performance-driven partnerships. We manage affiliate and influencer marketing processes professionally from end-to-end.
          </p>
        </motion.div>
      </section>

      {/* 2. SELECT YOUR REGION SECTION */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Select Your Region</h2>
            <p className="text-xl text-muted-foreground">Choose your target market to view specific program details and requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 — CEE Region */}
            <Link href="/talent/cee" className="group flex flex-col border border-white/10 bg-white/5 p-8 rounded-3xl hover:bg-white/10 hover:border-[#2563EB]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <div className="text-3xl mb-4">🇷🇴 🇵🇱 🇧🇬 🇬🇷</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#2563EB] transition-colors">CEE Region</h3>
              <p className="text-sm text-foreground/70 mb-4 font-medium">Romania, Poland, Bulgaria, Greece</p>
              <p className="text-muted-foreground text-sm flex-grow mb-8 leading-relaxed">
                Commission-based influencer program via TrendFam for creators in Central & Eastern Europe.
              </p>
              <div className="flex items-center text-sm font-bold text-white group-hover:text-[#2563EB] transition-colors mt-auto">
                View Program <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 2 — Gulf Region */}
            <Link href="/talent/gulf" className="group flex flex-col border border-white/10 bg-white/5 p-8 rounded-3xl hover:bg-white/10 hover:border-[#2563EB]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <div className="text-3xl mb-4">🇸🇦 🇦🇪 🇰🇼</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#2563EB] transition-colors">Gulf Region</h3>
              <p className="text-sm text-foreground/70 mb-4 font-medium">KSA, UAE, Kuwait</p>
              <p className="text-muted-foreground text-sm flex-grow mb-8 leading-relaxed">
                TrendFam Gulf — earn through link and code commissions across 6 countries in the MENA region.
              </p>
              <div className="flex items-center text-sm font-bold text-white group-hover:text-[#2563EB] transition-colors mt-auto">
                View Program <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 3 — Turkey */}
            <Link href="/talent/turkey" className="group flex flex-col border border-white/10 bg-white/5 p-8 rounded-3xl hover:bg-white/10 hover:border-[#2563EB]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <div className="text-3xl mb-4">🇹🇷</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#2563EB] transition-colors">Turkey</h3>
              <p className="text-sm text-foreground/70 mb-4 font-medium">Turkey</p>
              <p className="text-muted-foreground text-sm flex-grow mb-8 leading-relaxed">
                iMediaff Türkiye — professional affiliate partnership with Trendyol's largest market.
              </p>
              <div className="flex items-center text-sm font-bold text-white group-hover:text-[#2563EB] transition-colors mt-auto">
                View Program <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 4 — Azerbaijan */}
            <Link href="/talent/azerbaijan" className="group flex flex-col border border-white/10 bg-white/5 p-8 rounded-3xl hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 blur-2xl rounded-full group-hover:bg-blue-400/10 transition-colors" />
              <div className="text-3xl mb-4">🇦🇿</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Azerbaijan</h3>
              <p className="text-sm text-foreground/70 mb-4 font-medium">Azerbaijan</p>
              <p className="text-muted-foreground text-sm flex-grow mb-8 leading-relaxed">
                Trendyol Affiliate Program for content creators based in Azerbaijan.
              </p>
              <div className="flex items-center text-sm font-bold text-white group-hover:text-blue-400 transition-colors mt-auto">
                View Program <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2563EB]/10 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-4xl px-6 md:px-10 text-center relative z-10"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">Ready to Start Earning?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Apply through iMediaff Global — an authorized Trendyol partner agency operating across MENA and Central & Eastern Europe.
          </p>
          <Link href="/contact" className="inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] px-10 text-lg font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
