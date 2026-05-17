const fs = require('fs');
const path = require('path');

const turkeyPath = path.join(__dirname, '../app/talent/turkey/page.tsx');
const azerbaijanPath = path.join(__dirname, '../app/talent/azerbaijan/page.tsx');

const imports = `
"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { 
  CheckCircle2, TrendingUp, Users, Globe, Building2, 
  ShieldAlert, AlertTriangle, ShieldCheck, Link as LinkIcon,
  ExternalLink, ArrowRight, Gift, Coins, Award, CalendarDays,
  Smartphone, Euro, Clock, Ban, Tags, FileText, Heart,
  Layers, Share2, Calendar, User, Tag, Network, RefreshCw, ShoppingBag, BarChart, Percent, Scale, Headphones, MessageCircle, FileLock2, AlertCircle, ShoppingCart
} from "lucide-react"
`;

const cta = `
      {/* CTA SECTION */}
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
            Apply through iMediaff Global — an authorized Trendyol partner agency.
          </p>
          <Link href="/contact" className="inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] px-10 text-lg font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </main>
`;

const turkeyHero = `
    <main className="bg-background text-foreground min-h-screen">
      {/* SECTION 1 — Hero */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden border-b border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="relative mx-auto max-w-[1600px] px-6 md:px-10 z-10"
        >
          <div className="mb-6">
             <Link href="/talent" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                ← All Regions
             </Link>
          </div>
          <div className="inline-flex items-center rounded-full border border-border/50 bg-white/5 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#2563EB] mr-2"></span>
            Trendyol Partner Agency
          </div>
          <h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] max-w-5xl">
            Join the iMediaff <br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent">Talent Network</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            iMediaff Turkey — turning affiliate marketing from a hobby into a professional income model.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] px-8 font-semibold text-black transition-transform hover:scale-105 active:scale-95">
              Apply Now
            </Link>
          </div>
        </motion.div>
      </section>
`;

const turkeySections = `
      {/* SECTION 2 — About iMediaff Turkey */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">About iMediaff Turkey</h2>
            <p className="text-xl text-muted-foreground">Who is iMediaff and what do we do?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {[
                { icon: Users, text: "Manages influencer and brand partnerships" },
                { icon: TrendingUp, text: "Provides affiliate marketing solutions" },
                { icon: Scale, text: "Offers legal and financial advisory infrastructure" },
                { icon: Smartphone, text: "Delivers production and advertising content services" },
                { icon: ShieldCheck, text: "Operates on a trust-based business relationship model" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <div className="p-3 bg-[#2563EB]/10 rounded-xl"><item.icon className="w-6 h-6 text-[#2563EB]" /></div>
                  <p className="text-foreground/90 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="relative border border-white/10 bg-white/5 backdrop-blur-xl p-10 rounded-3xl overflow-hidden text-center flex items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/20 blur-3xl rounded-full opacity-50" />
              <p className="relative z-10 text-2xl font-display font-medium leading-relaxed italic text-foreground/90">
                "Trendyol's affiliate system can be joined individually — but iMediaff transforms the process from a hobby into a professional business model."
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 — Application Requirements */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Application Requirements</h2>
            <p className="text-xl text-muted-foreground">Everything you need to qualify.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "30,000+ Followers", desc: "Minimum 30,000 followers on your primary platform" },
              { icon: Heart, title: "Organic Engagement", desc: "Organic and engaged follower base" },
              { icon: FileText, title: "Billing Capability", desc: "Ability to issue an invoice or valid agency/company connection" },
              { icon: Smartphone, title: "Suitable Content", desc: "Account type and content suitability" },
              { icon: User, title: "Age 18+", desc: "Age 18+ with valid legal information" },
              { icon: CheckCircle2, title: "Official Form", desc: "Correctly completed official application form" },
              { icon: ShieldCheck, title: "Contract Approval", desc: "Post-application contract and panel approval process" }
            ].map((req, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-8 rounded-2xl flex flex-col">
                <req.icon className="w-8 h-8 text-[#2563EB] mb-4" />
                <h3 className="text-xl font-bold mb-2">{req.title}</h3>
                <p className="text-muted-foreground text-sm">{req.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 — Why Trendyol? */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Trendyol?</h2>
            <p className="text-xl text-muted-foreground">What Trendyol Offers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <ShoppingBag className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Millions of Products</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Share products across every category — electronics, cosmetics, fashion, groceries and more.
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <TrendingUp className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">High Conversion Rate</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                As Turkey's most trusted and most-downloaded platform, your followers are highly likely to purchase through your links.
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
              <BarChart className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Advanced Tracking Panel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Monitor clicks, sales, and accumulated commissions in real time through a dedicated influencer panel.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 — Your Commission Tier */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Your Commission Tier</h2>
            <p className="text-xl text-muted-foreground">Influencers are categorised into 4 performance segments. Commission rates vary by segment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="border border-white/10 bg-white/5 p-8 rounded-2xl flex flex-col justify-center">
              <div className="text-2xl mb-4 font-bold flex items-center gap-2">🥇 Platinum</div>
              <p className="text-muted-foreground">Highest performance tier. Highest commission rates.</p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 rounded-2xl flex flex-col justify-center">
              <div className="text-2xl mb-4 font-bold flex items-center gap-2">🥈 Gold</div>
              <p className="text-muted-foreground">High sales volume. Strong commission rates.</p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 rounded-2xl flex flex-col justify-center">
              <div className="text-2xl mb-4 font-bold flex items-center gap-2">🥉 Silver</div>
              <p className="text-muted-foreground">Mid-level, consistent sales.</p>
            </div>
            <div className="border border-emerald-500/30 bg-emerald-500/5 p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full" />
              <div className="text-2xl mb-4 font-bold flex items-center gap-2 text-emerald-400">🌱 Starter</div>
              <p className="text-muted-foreground text-sm mb-3">Entry segment for new joiners. Welcome rates apply for the first month:</p>
              <ul className="space-y-1 text-sm text-emerald-200">
                <li>• 10% in-link across all categories</li>
                <li>• 2% for electronics</li>
              </ul>
            </div>
          </div>
          <div className="p-6 border border-blue-500/30 bg-blue-500/5 rounded-xl flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-400 shrink-0" />
            <p className="text-blue-100 text-sm md:text-base">
              After the first month, influencers are placed into Platinum, Gold, or Silver based on revenue and visitor performance. Specific rates for each segment are shared personally via the Influencer Panel.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6 — In-Link vs Out-Link Sales */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">In-Link vs Out-Link Sales</h2>
            <p className="text-xl text-muted-foreground">Understanding the difference in tracking and commissions.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* In-link */}
            <div className="border border-[#2563EB]/30 bg-gradient-to-b from-[#2563EB]/5 to-transparent p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 blur-3xl rounded-full" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-sm font-semibold mb-6">
                <LinkIcon className="w-4 h-4" /> Direct Sales
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">In-Link</h3>
              <p className="text-lg text-foreground/80 mb-6">
                When a follower purchases the exact product from your shared link, you earn the full segment commission rate.
              </p>
            </div>

            {/* Out-link */}
            <div className="border border-[#2563EB]/30 bg-gradient-to-b from-[#2563EB]/5 to-transparent p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 blur-3xl rounded-full" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-sm font-semibold mb-6">
                <ExternalLink className="w-4 h-4" /> Cross Sales
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Out-Link</h3>
              <p className="text-lg text-foreground/80 mb-6">
                When a follower clicks your link but purchases a different product, commission rates may vary depending on your segment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 bg-zinc-900/50 border border-border p-5 rounded-2xl">
              <Clock className="w-8 h-8 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Cookie duration</p>
                <p className="text-xl font-bold">24 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/50 border border-border p-5 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Daily earning limit</p>
                <p className="text-xl font-bold">₺150,000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/50 border border-border p-5 rounded-2xl">
              <Euro className="w-8 h-8 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Min monthly payout</p>
                <p className="text-xl font-bold">₺1,000 <span className="text-sm font-normal text-muted-foreground">rolls over</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 7 — How Your Earnings Are Calculated */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">How Your Earnings Are Calculated</h2>
            <p className="text-xl text-muted-foreground">Transparent breakdown of your net income.</p>
          </div>

          <div className="border border-white/10 bg-white/5 p-10 rounded-3xl max-w-4xl mb-8">
            <h3 className="text-2xl font-bold mb-8">Scenario: ₺10,000 total commission earned in a month</h3>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-foreground/80">Total Earnings:</span>
                <span className="font-bold">₺10,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-muted-foreground">Agency Fee (15%):</span>
                <span className="text-red-400 font-medium">-₺1,500</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-muted-foreground">Legal Withholding Tax (15%):</span>
                <span className="text-red-400 font-medium">-₺1,500</span>
              </div>
              <div className="flex justify-between items-center py-4 mt-2">
                <span className="text-2xl font-bold text-white">Net Payment to You:</span>
                <span className="text-3xl font-display font-bold text-green-400">₺7,000</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-[#2563EB]/30 bg-[#2563EB]/5 rounded-xl flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
            <p className="text-[#2563EB] text-sm md:text-base font-medium">
              No upfront fees. No membership costs. The agency only takes its service fee when you earn. If you make no sales, you owe nothing.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 8 — How to Share Links Effectively */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">How to Share Links Effectively</h2>
            <p className="text-xl text-muted-foreground">Successful affiliate influencers don't just share links — they tell a story around them.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <LinkIcon className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Single Product Link</h3>
              <p className="text-muted-foreground text-sm">
                Ideal for promoting a specific product you personally use and strongly recommend.
              </p>
            </div>
            <div className="border border-[#2563EB]/30 bg-gradient-to-b from-[#2563EB]/10 to-transparent p-8 rounded-3xl relative">
              <div className="absolute top-4 right-4 bg-[#2563EB] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Most Effective</div>
              <Layers className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Collection Link</h3>
              <p className="text-foreground/80 text-sm">
                Create themed lists — 'My Kitchen Favourites', 'Winter Outfits', 'Baby Essentials'. Followers who enter a collection tend to browse and purchase multiple items.
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <Building2 className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Store Link</h3>
              <p className="text-muted-foreground text-sm">
                During brand discount periods, share a direct store link to earn commission across all their products.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 9 — Your Partnership Agreement */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Your Partnership Agreement</h2>
            <p className="text-xl text-muted-foreground">A 1-year contract that protects your rights — not restricts them.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/40 border border-white/10 p-10 rounded-3xl">
              <FileLock2 className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-bold mb-4">Contract Scope</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This contract covers Trendyol Affiliate work only. Your personal brand deals and other projects remain completely outside its scope. 
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm font-semibold">
                Duration: 1 year from signing date.
              </div>
            </div>
            
            <div className="bg-zinc-900/40 border border-white/10 p-10 rounded-3xl">
              <Coins className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-bold mb-4">Financial Terms</h3>
              <ul className="space-y-3 text-muted-foreground leading-relaxed mb-4">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Agency service fee: 15% of total commission earned.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Mandatory withholding tax: 15% (deducted by law).</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Net payment sent to your IBAN after all deductions.</li>
              </ul>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm font-semibold text-[#2563EB]">
                No earnings = no deductions. Ever.
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 10 — The Only Rules That Matter */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">The Only Rules That Matter</h2>
            <p className="text-xl text-muted-foreground">Follow these 3 rules and the contract works entirely in your favour.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col border-l-4 border-red-500 bg-red-500/5 p-8 rounded-r-2xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-bold text-red-100">Rule 1 — Agency Loyalty</h3>
              </div>
              <p className="text-red-200/80 text-sm leading-relaxed">
                Do not switch to another affiliate agency or make system changes without notifying iMediaff while the contract is active.
              </p>
            </div>
            
            <div className="flex flex-col border-l-4 border-red-500 bg-red-500/5 p-8 rounded-r-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-bold text-red-100">Rule 2 — Ethical Content</h3>
              </div>
              <p className="text-red-200/80 text-sm leading-relaxed">
                Do not publish content containing political propaganda, racism, hate speech, or defamatory statements.
              </p>
            </div>
            
            <div className="flex flex-col border-l-4 border-red-500 bg-red-500/5 p-8 rounded-r-2xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-bold text-red-100">Rule 3 — Brand Reputation</h3>
              </div>
              <p className="text-red-200/80 text-sm leading-relaxed">
                Do not publish false or damaging content about Trendyol or iMediaff's commercial reputation.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 11 — Your iMediaff Support System */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Your iMediaff Support System</h2>
            <p className="text-xl text-muted-foreground">What iMediaff Supports You With</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <Headphones className="w-8 h-8 text-[#2563EB] shrink-0" />
              <div>
                <h4 className="font-bold mb-1">One-on-one consultancy</h4>
                <p className="text-sm text-muted-foreground">Analysis of why links aren't being clicked and which products suit your audience.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <MessageCircle className="w-8 h-8 text-[#2563EB] shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Daily WhatsApp channel</h4>
                <p className="text-sm text-muted-foreground">Receive daily campaigns, announcements, and training.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <Building2 className="w-8 h-8 text-[#2563EB] shrink-0" />
              <div>
                <h4 className="font-bold mb-1">PR collaborations</h4>
                <p className="text-sm text-muted-foreground">Partnerships with corporate brands (Cosmetics, Tech, Fashion).</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <Scale className="w-8 h-8 text-blue-400 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Legal and financial advisory</h4>
                <p className="text-sm text-muted-foreground">Full infrastructure for safe and compliant operation.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 12 — Your Data is Safe */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col items-center text-center"
        >
          <ShieldCheck className="w-16 h-16 text-green-400 mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">Your Data is Safe</h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            All personal, contact, and earnings data shared with iMediaff is protected under KVKK (Turkish Personal Data Protection Law). Your information is used solely for legal reporting purposes (tax, Trendyol reporting) and is never shared with third parties.
          </p>
        </motion.div>
      </section>
`;

// Azerbaijan Page Sections

const azHero = `
    <main className="bg-background text-foreground min-h-screen">
      {/* SECTION 1 — Hero */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden border-b border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="relative mx-auto max-w-[1600px] px-6 md:px-10 z-10"
        >
          <div className="mb-6">
             <Link href="/talent" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                ← All Regions
             </Link>
          </div>
          <div className="inline-flex items-center rounded-full border border-border/50 bg-white/5 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#2563EB] mr-2"></span>
            Trendyol Partner Agency
          </div>
          <h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] max-w-5xl">
            Join the iMediaff <br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent">Talent Network</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Trendyol Affiliate Program — Azerbaijan Operations
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] px-8 font-semibold text-black transition-transform hover:scale-105 active:scale-95">
              Apply Now
            </Link>
          </div>
        </motion.div>
      </section>
`;

const azSections = `
      {/* SECTION 2 — Who Can Apply? */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Who Can Apply?</h2>
            <p className="text-xl text-muted-foreground">Application Requirements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Users, text: "Minimum 10,000 followers" },
              { icon: Heart, text: "High likes and engagement rate" },
              { icon: Smartphone, text: "Active and consistent posting profile" },
              { icon: FileText, text: "Must have a signed agency contract" },
              { icon: ShieldCheck, text: "Must comply with all Trendyol Partnership Program rules" }
            ].map((req, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
                <req.icon className="w-8 h-8 text-[#2563EB] shrink-0" />
                <span className="font-medium">{req.text}</span>
              </div>
            ))}
          </div>

          <div className="p-6 border border-[#2563EB]/30 bg-[#2563EB]/5 rounded-xl flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
            <p className="text-[#2563EB] text-sm md:text-base">
              Apply via the link on our Instagram page. If approved within 1–5 business days, the TrendFam program application link will be sent to your Instagram account. Note: the agency form and TrendFam form are different — both must be completed.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 — How You Earn */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">How You Earn</h2>
            <p className="text-xl text-muted-foreground">Commission Rates per Segment.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="border border-white/10 bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
              <span className="text-2xl mb-2">🥇</span>
              <h4 className="font-bold mb-2">Platinum</h4>
              <div className="text-2xl font-bold text-[#2563EB]">40%</div>
              <p className="text-xs text-muted-foreground mt-1">In-Link</p>
            </div>
            <div className="border border-white/10 bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
              <span className="text-2xl mb-2">🥈</span>
              <h4 className="font-bold mb-2">Gold</h4>
              <div className="text-2xl font-bold text-[#2563EB]">30%</div>
              <p className="text-xs text-muted-foreground mt-1">In-Link</p>
            </div>
            <div className="border border-white/10 bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
              <span className="text-2xl mb-2">🥉</span>
              <h4 className="font-bold mb-2">Silver</h4>
              <div className="text-2xl font-bold text-zinc-300">20%</div>
              <p className="text-xs text-muted-foreground mt-1">In-Link</p>
            </div>
            <div className="border border-white/10 bg-emerald-500/10 p-6 rounded-2xl flex flex-col items-center text-center">
              <span className="text-2xl mb-2">🌱</span>
              <h4 className="font-bold mb-2 text-emerald-400">Starter</h4>
              <div className="text-2xl font-bold text-emerald-400">30%</div>
              <p className="text-xs text-emerald-200/70 mt-1">In-Link</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Special Rate Rules</h3>
          <div className="bg-zinc-900/40 border border-white/10 p-8 rounded-3xl">
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#2563EB] w-5 h-5" /> Out-of-collection products: 15% commission</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#2563EB] w-5 h-5" /> Electronics: 5% commission (same for in-link and out-link)</li>
              <li className="flex items-center gap-3"><Ban className="text-red-400 w-5 h-5" /> Mobile phones and gold products: 0% commission</li>
              <li className="flex items-center gap-3"><AlertTriangle className="text-blue-400 w-5 h-5" /> Maximum earning per order: $30 (excess is deducted from order)</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 — Payments & Fees */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Payments & Fees</h2>
            <p className="text-xl text-muted-foreground">Agency Commission & Payment Schedule.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <Percent className="w-10 h-10 text-[#2563EB] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Agency Split</h3>
              <p className="text-muted-foreground leading-relaxed">
                60% of total earnings go to you. The remaining 40% covers all government taxes and agency commission — no additional fees.
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <CalendarDays className="w-10 h-10 text-[#2563EB] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Payment Timeline</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trendyol transfers payment to the agency 30 days after invoicing. The agency then forwards your payment within 15 days.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-2xl mb-8 max-w-3xl">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-black/40 text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Month Earned</th>
                  <th className="px-6 py-4">Payment Received</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-6 py-4 font-medium text-white">March</td><td className="px-6 py-4 text-muted-foreground">Second week of May</td></tr>
                <tr className="border-b border-white/5"><td className="px-6 py-4 font-medium text-white">April</td><td className="px-6 py-4 text-muted-foreground">Second week of June</td></tr>
                <tr><td className="px-6 py-4 font-medium text-white">May</td><td className="px-6 py-4 text-muted-foreground">Second week of July</td></tr>
              </tbody>
            </table>
          </div>

          <div className="border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-6 rounded-r-xl max-w-3xl">
            <p className="text-[#2563EB] text-sm md:text-base font-medium">
              Important: Payments are calculated based on the TL exchange rate of the invoicing month, then converted to Manat. Do not calculate earnings by converting USD directly to Manat. A 1.5% bank processing fee is also deducted.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 — How to Track Your Performance */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">How to Track Your Performance</h2>
            <p className="text-xl text-muted-foreground">Tracking Your Earnings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative mb-12">
            <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {[
              { step: "01", text: "Log in to your Trendyol account" },
              { step: "02", text: "Go to Influencer Center → Reports → Overall Results" },
              { step: "03", text: "View total earnings, link performance, and purchased items" },
              { step: "04", text: "Check 'Link Revenue' to see which collections perform best" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border-4 border-background bg-zinc-900 flex items-center justify-center text-2xl font-display font-bold text-white mb-6 shadow-[0_0_30px_rgba(255,45,141,0.1)]">
                  {step.step}
                </div>
                <p className="text-foreground/90 font-medium max-w-[200px]">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="p-6 border border-blue-500/30 bg-blue-500/5 rounded-xl flex items-start gap-4">
            <RefreshCw className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-blue-100 text-sm md:text-base">
              Troubleshooting note: If Influencer Center is not visible: update the app, log out and back in. If the issue persists, delete and reinstall the app.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6 — Monthly Coupon Rewards */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Monthly Coupon Rewards</h2>
            <p className="text-xl text-muted-foreground">Coupons are distributed based on your revenue ranking among all influencers each month.</p>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-2xl mb-6 max-w-3xl">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-black/40 text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Ranking</th>
                  <th className="px-6 py-4">Coupon (AZN)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-6 py-4 font-medium text-white">1–50</td><td className="px-6 py-4 font-bold text-[#2563EB]">125 AZN</td></tr>
                <tr className="border-b border-white/5"><td className="px-6 py-4 font-medium text-white">51–150</td><td className="px-6 py-4 font-bold text-[#2563EB]">100 AZN</td></tr>
                <tr className="border-b border-white/5"><td className="px-6 py-4 font-medium text-white">151–250</td><td className="px-6 py-4 font-bold text-[#2563EB]">75 AZN</td></tr>
                <tr className="border-b border-white/5"><td className="px-6 py-4 font-medium text-white">251–500</td><td className="px-6 py-4 font-bold text-[#2563EB]">50 AZN</td></tr>
                <tr><td className="px-6 py-4 font-medium text-white">501–750</td><td className="px-6 py-4 font-bold text-[#2563EB]">35 AZN</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Note: Track your ranking throughout the month and increase your shares to climb higher and earn more.
          </p>
        </motion.div>
      </section>

      {/* SECTION 7 — Types of Links You Can Create */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Types of Links You Can Create</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <LinkIcon className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Single Product Link</h3>
              <p className="text-muted-foreground text-sm">Share one specific item</p>
            </div>
            <div className="border border-[#2563EB]/30 bg-gradient-to-b from-[#2563EB]/10 to-transparent p-8 rounded-3xl relative">
              <div className="absolute top-4 right-4 bg-[#2563EB] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Most Effective</div>
              <Layers className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Collection Link</h3>
              <p className="text-foreground/80 text-sm">Group products into a themed collection</p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <ShoppingCart className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Brand Commission Model</h3>
              <p className="text-muted-foreground text-sm">Pre-built brand collections — just copy and share the link</p>
            </div>
          </div>

          <div className="p-6 border border-red-500/30 bg-red-500/5 rounded-xl flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
            <p className="text-red-200 text-sm md:text-base font-medium">
              Warning: Always enable 'mobile redirect' when creating links.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 8 — Where to Share Your Links */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-12">Where to Share Your Links</h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {['Facebook', 'Instagram', 'TikTok', 'Twitter (X)'].map((platform, i) => (
              <div key={i} className="px-8 py-4 bg-white/10 border border-white/20 rounded-full text-xl font-bold tracking-wide">
                {platform}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Note: Telegram and WhatsApp are recognised as social media platforms but may cause link breakage. Use with caution.
          </p>
        </motion.div>
      </section>

      {/* SECTION 9 — What is Link Breakage? */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">What is Link Breakage?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Link breakage occurs when purchases made through your link do not generate commission. This can happen when:
            </p>
          </div>
          
          <ul className="space-y-4 max-w-4xl mb-10 text-lg">
            <li className="flex items-start gap-4"><Ban className="text-red-400 w-6 h-6 shrink-0 mt-1" /><span>The follower did not complete purchase within 24 hours of clicking</span></li>
            <li className="flex items-start gap-4"><Ban className="text-red-400 w-6 h-6 shrink-0 mt-1" /><span>The follower exited the app and returned via a notification</span></li>
            <li className="flex items-start gap-4"><Ban className="text-red-400 w-6 h-6 shrink-0 mt-1" /><span>The follower added the item to their cart, closed the app, and purchased later</span></li>
          </ul>

          <div className="p-6 border border-white/10 bg-white/5 rounded-xl max-w-4xl">
            <p className="text-foreground/90 text-sm md:text-base">
              Note: If you believe a valid order was missed, contact Trendyol via email to request a detailed review.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 10 — Fair Play Policy */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Fair Play Policy</h2>
            <p className="text-xl text-muted-foreground">Fraud & Compliance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Brand-Damaging Content", desc: "Content that harms Trendyol's brand image — including negative commentary, illegal product promotion, hate speech, violence, nudity, or intellectual property violations — is strictly prohibited." },
              { title: "Suspicious Activity", desc: "The following are considered rule violations: fake traffic, purchase-and-return abuse, fake user accounts, paying followers to click links, misleading link sharing, or bulk buying schemes." },
              { title: "Wrong-Price Products", desc: "If a product appears at 70%+ below market price due to a system error, do not share it. Consult the Influencer Marketing team via Trendyol Assistant first." },
              { title: "Self-Purchase via Own Link", desc: "Purchases made through your own affiliate link do not count toward commission and are removed from daily performance reports." },
              { title: "Hidden Advertising", desc: "Do not promote products you haven't tried. Do not present gifted products as personal purchases. Disclose filters/effects used. Do not make unverifiable health claims." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col border border-red-500/20 bg-red-500/5 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                  <h3 className="font-bold text-red-100">{item.title}</h3>
                </div>
                <p className="text-red-200/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-red-500 bg-red-500/10 p-6 rounded-r-xl">
            <p className="text-red-200 font-medium">
              Influencers found to be in violation will receive no payment. Trendyol may terminate the partnership immediately and unilaterally.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 11 — Bonus Opportunities */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Bonus Opportunities</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trendyol offers extra earning opportunities for high-performing influencers. Gold and Platinum segment influencers are prioritised for bonus targeting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: ShoppingBag, text: "Reach a specific number of sales" },
              { icon: Users, text: "Generate a specific volume of visitor traffic" },
              { icon: FileText, text: "Complete a specific number of posts" },
              { icon: TrendingUp, text: "Achieve a specific sales volume from posts" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center">
                <item.icon className="w-8 h-8 text-[#2563EB] mb-4" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="p-6 border border-[#2563EB]/30 bg-[#2563EB]/5 rounded-xl">
            <p className="text-[#2563EB] text-sm md:text-base font-medium text-center">
              Note: Successfully completing all assigned missions earns you an additional bonus on top of your regular commission.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 12 — Things to Keep Your Agency Informed About */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Things to Keep Your Agency Informed About</h2>
            <p className="text-xl text-muted-foreground">Important Reminders</p>
          </div>

          <div className="bg-zinc-900/40 border border-white/10 p-10 rounded-3xl max-w-4xl">
            <ul className="space-y-6 text-lg text-foreground/90">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                <span>Always notify the agency if you change your Instagram username — this affects Trendyol tracking</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                <span>Keep your payment card active between the 1st–15th of each month</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                <span>Request a card update form between the 15th–30th if you need to change payment details</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                <span>Check spam/promotions folders regularly — Trendyol responses may take up to 30 business days</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
`;

fs.writeFileSync(turkeyPath, imports + '\nexport default function TurkeyPage() {\n  return (' + turkeyHero + '\n' + turkeySections + '\n' + cta + '\n  );\n}\n');
fs.writeFileSync(azerbaijanPath, imports + '\nexport default function AzerbaijanPage() {\n  return (' + azHero + '\n' + azSections + '\n' + cta + '\n  );\n}\n');
console.log("Created Turkey and Azerbaijan pages.");
