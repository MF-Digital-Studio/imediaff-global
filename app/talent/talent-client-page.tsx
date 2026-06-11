"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, Globe, Users, ShoppingBag, TrendingUp } from "lucide-react"

export default function TalentClientPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden border-border bg-[#000000] border-b border-[#1a1a1a]">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="relative mx-auto max-w-[1600px] px-6 md:px-10 z-10"
        >

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
      <section className="py-24 border-border bg-[#ffffff] border-t border-[#e5e7eb] border-b border-[#e5e7eb] relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#0a0a0a]">Select Your Region</h2>
            <p className="text-xl text-[#374151] font-medium">Choose your target market to view specific program details and requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 — Europe Region */}
            <Link href="/talent/europe" className="group flex flex-col bg-[#f9fafb] border border-[#e5e7eb] shadow-[0_1px_4px_rgba(0,0,0,0.06)] p-8 rounded-3xl hover:bg-[#f3f4f6] hover:border-[#2563EB]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <div className="flex flex-wrap gap-1.5 mb-4 z-10">
                <span className="px-2.5 py-0.5 text-xs font-bold bg-[#2563EB]/10 text-[#2563EB] rounded-full">Europe</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">UK</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">DE</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">NL</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">RO</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">PL</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">BG</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">GR</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#111827] group-hover:text-[#2563EB] transition-colors">Europe</h3>
              <p className="text-sm text-[#374151] mb-4 font-semibold">UK, Germany, Netherlands, Romania, Poland, Bulgaria, Greece</p>
              <p className="text-[#4b5563] text-sm flex-grow mb-8 leading-relaxed">
                Commission-based influencer program via TrendFam for creators in Europe.
              </p>
              <div className="flex items-center text-sm font-bold text-[#2563EB] group-hover:text-[#1d4ed8] transition-colors mt-auto">
                View Program <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 2 — Gulf Region */}
            <Link href="/talent/gulf" className="group flex flex-col bg-[#f9fafb] border border-[#e5e7eb] shadow-[0_1px_4px_rgba(0,0,0,0.06)] p-8 rounded-3xl hover:bg-[#f3f4f6] hover:border-[#2563EB]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <div className="flex flex-wrap gap-1.5 mb-4 z-10">
                <span className="px-2.5 py-0.5 text-xs font-bold bg-[#2563EB]/10 text-[#2563EB] rounded-full">MENA</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">SA</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">AE</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">KW</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#111827] group-hover:text-[#2563EB] transition-colors">Gulf Region</h3>
              <p className="text-sm text-[#374151] mb-4 font-semibold">KSA, UAE, Kuwait</p>
              <p className="text-[#4b5563] text-sm flex-grow mb-8 leading-relaxed">
                TrendFam Gulf — earn through link and code commissions across 6 countries in the MENA region.
              </p>
              <div className="flex items-center text-sm font-bold text-[#2563EB] group-hover:text-[#1d4ed8] transition-colors mt-auto">
                View Program <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 3 — Turkey */}
            <Link href="/talent/turkey" className="group flex flex-col bg-[#f9fafb] border border-[#e5e7eb] shadow-[0_1px_4px_rgba(0,0,0,0.06)] p-8 rounded-3xl hover:bg-[#f3f4f6] hover:border-[#2563EB]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <div className="flex flex-wrap gap-1.5 mb-4 z-10">
                <span className="px-2.5 py-0.5 text-xs font-bold bg-[#16A34A]/10 text-[#16A34A] rounded-full">Turkey</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">TR</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#111827] group-hover:text-[#2563EB] transition-colors">Turkey</h3>
              <p className="text-sm text-[#374151] mb-4 font-semibold">Turkey</p>
              <p className="text-[#4b5563] text-sm flex-grow mb-8 leading-relaxed">
                iMediaff Türkiye — professional affiliate partnership with Trendyol's largest market.
              </p>
              <div className="flex items-center text-sm font-bold text-[#2563EB] group-hover:text-[#1d4ed8] transition-colors mt-auto">
                View Program <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 4 — Azerbaijan */}
            <Link href="/talent/azerbaijan" className="group flex flex-col bg-[#f9fafb] border border-[#e5e7eb] shadow-[0_1px_4px_rgba(0,0,0,0.06)] p-8 rounded-3xl hover:bg-[#f3f4f6] hover:border-[#2563EB]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <div className="flex flex-wrap gap-1.5 mb-4 z-10">
                <span className="px-2.5 py-0.5 text-xs font-bold bg-[#2563EB]/10 text-[#2563EB] rounded-full">Azerbaijan</span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">AZ</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#111827] group-hover:text-[#2563EB] transition-colors">Azerbaijan</h3>
              <p className="text-sm text-[#374151] mb-4 font-semibold">Azerbaijan</p>
              <p className="text-[#4b5563] text-sm flex-grow mb-8 leading-relaxed">
                Trendyol Affiliate Program for content creators based in Azerbaijan.
              </p>
              <div className="flex items-center text-sm font-bold text-[#2563EB] group-hover:text-[#1d4ed8] transition-colors mt-auto">
                View Program <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-[#000000] border-b border-[#1a1a1a]">
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
            Apply through iMediaff Global, operating across MENA and Europe.
          </p>
          <Link 
            href="/contact?type=creator"
            className="inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] px-10 text-lg font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
          >
            Apply as a Creator ↗
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
