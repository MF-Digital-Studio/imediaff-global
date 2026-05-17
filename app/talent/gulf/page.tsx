
"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { 
  CheckCircle2, TrendingUp, Users, Globe, Building2, 
  ShieldAlert, AlertTriangle, ShieldCheck, Link as LinkIcon,
  ExternalLink, ArrowRight, Gift, Coins, Award, CalendarDays,
  Smartphone, Euro, Clock, Ban, Tags, FileText, Heart,
  Layers, Share2, Calendar, User, Tag, Network, RefreshCw
} from "lucide-react"

export default function GulfPage() {
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
            We are a global agency headquartered in Dubai, connecting brands and influencers through performance-driven partnerships. We manage affiliate and influencer marketing processes professionally from end-to-end.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] px-8 font-semibold text-black transition-transform hover:scale-105 active:scale-95">
              Apply Now
            </Link>
          </div>
        </motion.div>
      </section>

{/* GULF SECTION 1 — The TrendFam Program */}
          <section className="py-24 relative overflow-hidden bg-[#111111] border-y border-[#1f1f1f]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">The TrendFam Program</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    TrendFam is a commission-based influencer program designed to encourage the creation of product-related content on any social media platform — including Snapchat, Instagram, TikTok, Twitter, and Facebook Groups.
                  </p>
                  <p>
                    We enable influencers to share content 24/7 that organically fits their lifestyle and follower demand. Trendyol Gulf currently operates across 6 countries in the region.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/20 blur-3xl rounded-full" />
                <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl p-10 rounded-3xl overflow-hidden text-center">
                  <h3 className="text-xl font-bold mb-6 text-foreground/80 uppercase tracking-widest text-sm">Operating Regions</h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div className="flex flex-col items-center p-4 bg-black/20 rounded-2xl min-w-[120px]">
                      <span className="text-4xl mb-2">🇸🇦</span>
                      <span className="font-bold">KSA</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/20 rounded-2xl min-w-[120px]">
                      <span className="text-4xl mb-2">🇦🇪</span>
                      <span className="font-bold">UAE</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/20 rounded-2xl min-w-[120px]">
                      <span className="text-4xl mb-2">🇰🇼</span>
                      <span className="font-bold">Kuwait</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 2 — Eligibility Requirements */}
          <section className="py-24 border-border bg-[#111111] border-y border-[#1f1f1f]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Eligibility Requirements</h2>
                <p className="text-xl text-muted-foreground">Everything you need to qualify for the TrendFam program.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Users, title: "10,000+ Followers", desc: "Minimum 10k followers on Instagram, Snapchat, TikTok, Twitter, or Facebook Page" },
                  { icon: Globe, title: "Gulf Region", desc: "Residency in UAE, KSA, or Kuwait" },
                  { icon: Building2, title: "Agency Partner", desc: "Must apply through an authorized agency partner" }
                ].map((req, i) => (
                  <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)] p-8 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                      <req.icon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{req.title}</h3>
                    <p className="text-muted-foreground text-sm">{req.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 border border-[#2563EB]/30 bg-[#2563EB]/5 rounded-xl">
                <div className="flex items-start gap-4">
                  <ShieldAlert className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-2xl">
                    <strong className="text-foreground">Note:</strong> Influencers must apply with the same email used to register on Trendyol. Download the Trendyol app first, create a customer account, then apply to TrendFam 1 day later. Same-day applications are not verified.
                  </p>
                </div>
                <Link href="https://influencer.trendyol.com/" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] px-6 py-3 font-semibold text-black hover:scale-105 transition-transform text-sm">
                  Apply at influencer.trendyol.com
                </Link>
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 3 — How to Get Started */}
          <section className="py-24 border-border bg-gradient-to-b from-[#0a0f1e] to-[#0d0d0d] border-b border-[#1a1a1a]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">How to Get Started</h2>
                <p className="text-xl text-muted-foreground">Your journey to becoming a TrendFam partner in four simple steps.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {[
                  { step: "01", title: "Download App", desc: "Download the Trendyol app and create a customer account." },
                  { step: "02", title: "Apply", desc: "Apply at influencer.trendyol.com using the same email — apply 1 day after account creation." },
                  { step: "03", title: "Review", desc: "Application reviewed daily on weekdays — track status via your Agency Application List." },
                  { step: "04", title: "Access", desc: "Approved influencers gain access to the Influencer Center in the Trendyol app." }
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-4 border-background bg-[#0d1526] border border-[#1e2d4a] shadow-[0_4px_24px_rgba(37,99,235,0.08)] flex items-center justify-center text-2xl font-display font-bold text-[#2563EB] mb-6 shadow-[0_0_30px_rgba(255,45,141,0.1)]">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-[250px]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 4 — How You Earn */}
          <section className="py-24 border-border bg-gradient-to-b from-[#0a0f1e] to-[#0d0d0d] border-b border-[#1a1a1a]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6"><span className="text-transparent bg-[linear-gradient(135deg,#2563EB,#16A34A)] bg-clip-text">How You</span> Earn</h2>
                <p className="text-xl text-muted-foreground">Understanding the commission models and tracking windows.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {/* Model 1 — Link Commission */}
                <div className="border border-[#2563EB]/30 bg-gradient-to-b from-[#2563EB]/5 to-transparent p-8 md:p-10 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 blur-3xl rounded-full" />
                  <h3 className="text-3xl font-display font-bold mb-6">Model 1 — Link Commission</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-sm font-semibold mb-3">
                        <LinkIcon className="w-4 h-4" /> New Buyer: 150% Commission
                      </div>
                      <p className="text-foreground/80">Earn 150% link commission for each new buyer who shops from Trendyol through your link.</p>
                    </div>
                    
                    <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-sm font-semibold mb-3">
                        <RefreshCw className="w-4 h-4" /> Returning Buyer: 50% Commission
                      </div>
                      <p className="text-foreground/80">Earn 50% commission for each returning buyer.</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" /> Links are tracked for a 2-day cookie duration.
                  </div>
                </div>

                {/* Model 2 — Code Commission */}
                <div className="border border-[#2563EB]/30 bg-gradient-to-b from-[#2563EB]/5 to-transparent p-8 md:p-10 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 blur-3xl rounded-full" />
                  <h3 className="text-3xl font-display font-bold mb-6">Model 2 — Code Commission</h3>
                  
                  <div className="bg-black/40 border border-white/5 p-5 rounded-xl mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-sm font-semibold mb-3">
                      <Tag className="w-4 h-4" /> 5% Code Commission
                    </div>
                    <p className="text-foreground/80">Each influencer receives a unique personal code name. Earn 5% commission on any net sales made using your promo code when a link was not used for the purchase.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-3">Restrictions:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><Ban className="w-4 h-4 text-red-400" /> Codes cannot be used for electronics products</li>
                      <li className="flex items-center gap-2"><Ban className="w-4 h-4 text-red-400" /> Codes cannot be used on global brands</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#0d1526] border border-[#1e2d4a] shadow-[0_4px_24px_rgba(37,99,235,0.08)] rounded-xl">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-white">Important:</strong> Commissions are calculated from net revenue after product discounts. A 12% tax is automatically deducted on all orders. For credit card returns, 18% is deducted; for cash-on-delivery returns, 50% is deducted. If an influencer has more than 50% cash-on-delivery return rate, Trendyol reserves the right to deduct additional earnings.
                </p>
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 5 — Personal Influencer Codes */}
          <section className="py-24 border-border bg-[#000000] border-b border-[#1a1a1a]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Personal Influencer Codes</h2>
                <p className="text-xl text-muted-foreground">Once approved, you receive a unique personal code to share with your audience.</p>
              </div>

              <div className="overflow-x-auto mb-8 border border-white/10 rounded-2xl">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#2563EB] text-white">
                    <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]">
                      <th className="px-6 py-4">Shopper Type</th>
                      <th className="px-6 py-4">Discount</th>
                      <th className="px-6 py-4">Max Discount</th>
                      <th className="px-6 py-4">Min Basket</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-medium text-white">First-time shopper</td><td className="px-6 py-4 text-[#2563EB] font-bold">20% (one-time)</td><td className="px-6 py-4">$20</td><td className="px-6 py-4">$20</td></tr>
                    <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-medium text-white">Second purchase</td><td className="px-6 py-4 text-[#2563EB] font-bold">10%</td><td className="px-6 py-4">$1</td><td className="px-6 py-4">$40</td></tr>
                    <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-medium text-white">Returning buyers</td><td className="px-6 py-4 text-[#2563EB] font-bold">5%</td><td className="px-6 py-4">1 SAR</td><td className="px-6 py-4">$40</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-[#2563EB] shrink-0" />
                  <p>Codes are only valid on the Trendyol app and cannot be combined with other promo codes. Codes do not apply to electronics or global brand products.</p>
                </div>
                <div className="flex items-start gap-3 text-xs text-muted-foreground/60">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <p>Trendyol reserves the right to modify or remove the Personal Influencer Codes model at any time without prior notice.</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 6 — Creating & Sharing Your Links */}
          <section className="py-24 border-border bg-[#000000] border-b border-[#1a1a1a]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Creating & Sharing Your Links</h2>
                <p className="text-xl text-muted-foreground">Generate distinct links depending on what you want to promote.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Smartphone, step: "Step 1", title: "Product Links", desc: "Share a single item from Trendyol" },
                  { icon: Layers, step: "Step 2", title: "Category Links", desc: "Share an entire category (e.g. Dresses)" },
                  { icon: Tag, step: "Step 3", title: "Search Links", desc: "Share results for a specific keyword search" },
                  { icon: Share2, step: "Step 4", title: "Copy & Share", desc: "Share your generated link across your social platforms" }
                ].map((step, i) => (
                  <div key={i} className="border border-white/10 bg-white/5 p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-2xl rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold mb-6">
                      {step.step}
                    </div>
                    <step.icon className="w-10 h-10 text-[#2563EB] mb-4" />
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-start gap-4 p-6 border border-[#2563EB]/30 bg-[#2563EB]/5 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground/80">
                  <strong className="text-[#2563EB]">⚠️ Important:</strong> Only links generated through the Influencer Center are tracked and eligible for commission payouts.
                </p>
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 7 — Your Influencer Center */}
          <section className="py-24 border-border bg-gradient-to-b from-[#0a0f1e] to-[#0d0d0d] border-b border-[#1a1a1a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none" />
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Your Influencer Center</h2>
                <p className="text-xl text-muted-foreground">A dedicated hub to track performance, discover top products, and manage your earnings.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "🏷️", text: "View your unique code name and active bonus offers" },
                  { icon: "🔗", text: "Access a pre-built bestseller trackable link — ready to copy and share" },
                  { icon: "📊", text: "Track your total earnings and current revenue in real time" },
                  { icon: "🎯", text: "Browse Today's Suggested Links — algorithm-curated top-selling products, updated daily" },
                  { icon: "📈", text: "Access detailed Reports — revenue by category, items purchased from your link, and link-level performance" },
                  { icon: "🛍️", text: "Use the Bestsellers feature to discover the most sold, favourited, and rated items on Trendyol" },
                  { icon: "🎯", text: "View active Bonus Missions under \"Reward Missions\" — see daily targets, cash/coin rewards, and progress" },
                  { icon: "📋", text: "Track your overall ranking and segment performance" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                    <span className="text-2xl leading-none">{item.icon}</span>
                    <p className="text-sm md:text-base text-foreground/90">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 8 — Your Rank & Segment */}
          <section className="py-24 border-border bg-gradient-to-b from-[#0a0f1e] to-[#0d0d0d] border-b border-[#1a1a1a]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6"><span className="text-transparent bg-[linear-gradient(135deg,#2563EB,#16A34A)] bg-clip-text">Your Rank</span> & Segment</h2>
                <p className="text-xl text-muted-foreground">Top performers earn monthly coin bonuses. Track your ranking and level up.</p>
              </div>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="px-6 py-3 rounded-xl border border-slate-300/30 bg-gradient-to-br from-slate-200/20 via-slate-300/10 to-transparent text-slate-100 font-bold text-lg flex items-center gap-2">🥇 Platinum</div>
                <div className="px-6 py-3 rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 via-yellow-500/10 to-transparent text-amber-400 font-bold text-lg flex items-center gap-2">🥈 Gold</div>
                <div className="px-6 py-3 rounded-xl border border-slate-400/30 bg-gradient-to-br from-slate-400/15 via-slate-500/5 to-transparent text-slate-300 font-bold text-lg flex items-center gap-2">🥉 Silver</div>
                <div className="px-6 py-3 rounded-xl border border-[#16A34A]/30 bg-gradient-to-br from-[#16A34A]/15 via-[#16A34A]/5 to-transparent text-[#16A34A] font-bold text-lg flex items-center gap-2">🌱 Starter</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Segment Requirements</h3>
                  <div className="overflow-hidden border border-white/10 rounded-2xl">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#2563EB] text-white">
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]">
                          <th className="px-6 py-4">Segment</th>
                          <th className="px-6 py-4">Requirement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-bold text-white">Platinum</td><td className="px-6 py-4">Net revenue &gt; $15K and Visitors &gt; 15K last month</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-bold text-[#FFD700]">Gold</td><td className="px-6 py-4">Net revenue &gt; $2K and Visitors &gt; 2K last month</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-bold text-zinc-300">Silver</td><td className="px-6 py-4">Did not reach Platinum or Gold thresholds</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-bold text-[#16A34A]">Starter</td><td className="px-6 py-4">Less than 30 days in TrendFam</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Monthly Ranking Coin Bonuses</h3>
                  <div className="overflow-hidden border border-white/10 rounded-2xl mb-4">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#2563EB] text-white">
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]">
                          <th className="px-4 py-4">Ranking among all influencers</th>
                          <th className="px-4 py-4">Coin Bonus (USD)</th>
                          <th className="px-4 py-4">Week that coin will be applied</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-4 py-3 font-medium">1–10</td><td className="px-4 py-3 text-[#2563EB] font-bold">$1,500</td><td className="px-4 py-3 text-muted-foreground">First week of month</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-4 py-3 font-medium">11–20</td><td className="px-4 py-3 text-[#2563EB] font-bold">$1,000</td><td className="px-4 py-3 text-muted-foreground">First week of month</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-4 py-3 font-medium">21–50</td><td className="px-4 py-3 text-[#2563EB] font-bold">$500</td><td className="px-4 py-3 text-muted-foreground">First week of month</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-4 py-3 font-medium">51–125</td><td className="px-4 py-3 text-[#2563EB] font-bold">$250</td><td className="px-4 py-3 text-muted-foreground">Second week of month</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-4 py-3 font-medium">126–250</td><td className="px-4 py-3 text-[#2563EB] font-bold">$100</td><td className="px-4 py-3 text-muted-foreground">Second week of month</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-4 py-3 font-medium">251–500</td><td className="px-4 py-3 text-[#2563EB] font-bold">$75</td><td className="px-4 py-3 text-muted-foreground">Third week of month</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-4 py-3 font-medium">501–1000</td><td className="px-4 py-3 text-[#2563EB] font-bold">$50</td><td className="px-4 py-3 text-muted-foreground">Third week of month</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    Note: Rankings update daily. Only influencers in the top 1,000 on the last day of each month qualify for coin bonuses.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 9 — How Coins Work */}
          <section className="py-24 border-border bg-gradient-to-b from-[#0a0f1e] to-[#0d0d0d] border-b border-[#1a1a1a]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">How Coins Work</h2>
                <p className="text-xl text-muted-foreground">Coins are your non-cash loyalty rewards — use them to shop on Trendyol.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#0d1526] border border-[#1e2d4a] shadow-[0_4px_24px_rgba(37,99,235,0.08)] p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/10 blur-2xl rounded-full" />
                  <Coins className="w-10 h-10 text-[#2563EB] mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Reward Coins</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      <span>Earned from in-app engagement tools, spin wheels, and similar activities.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      <span>Can cover up to <strong>15–20%</strong> of your order value.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0d1526] border border-[#1e2d4a] shadow-[0_4px_24px_rgba(37,99,235,0.08)] p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/10 blur-2xl rounded-full" />
                  <RefreshCw className="w-10 h-10 text-[#2563EB] mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Refund Coins</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      <span>Earned from bonuses, monthly rewards, referrals, first-time shares, and order refunds.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      <span>Can cover <strong>100%</strong> of your order value.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">First Time Share Coins</h3>
                  <div className="overflow-hidden border border-white/10 rounded-2xl mb-4">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#2563EB] text-white">
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]">
                          <th className="px-6 py-4">Followers</th>
                          <th className="px-6 py-4">Coin Reward</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-medium">Hidden Follower</td><td className="px-6 py-4 text-[#2563EB] font-bold">$50</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-medium">10K–49K</td><td className="px-6 py-4 text-[#2563EB] font-bold">$50</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-medium">50K–99K</td><td className="px-6 py-4 text-[#2563EB] font-bold">$100</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-medium">100K+</td><td className="px-6 py-4 text-[#2563EB] font-bold">$150</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-medium">500K+</td><td className="px-6 py-4 text-[#2563EB] font-bold">$200</td></tr>
                        <tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]"><td className="px-6 py-4 font-medium">1M+</td><td className="px-6 py-4 text-[#2563EB] font-bold">$300</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Note:</strong> Share a story within 7 days of joining and get a minimum of 50 sessions on your link in a single day.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Important Restrictions</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><Ban className="w-5 h-5 text-red-400 shrink-0" /> Coins cannot be used on electronics purchases</li>
                    <li className="flex items-start gap-3"><Clock className="w-5 h-5 text-[#2563EB] shrink-0" /> Coins expire 30 days after being awarded</li>
                    <li className="flex items-start gap-3"><Ban className="w-5 h-5 text-red-400 shrink-0" /> Coins are not redeemable for cash</li>
                    <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-[#2563EB] shrink-0" /> Shopping from another influencer&apos;s link using coins will not generate commission for that influencer</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#16A34A]" /> Coin earnings are separate from commission payments</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 10 — Brand Offers */}
          <section className="py-24 border-border bg-[#000000] border-b border-[#1a1a1a]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Brand Offers</h2>
                <p className="text-xl text-muted-foreground">Exclusive brand partnerships with higher commission rates and extended tracking windows.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="border border-white/10 bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
                  <span className="text-4xl mb-4">💰</span>
                  <p className="font-medium">Higher commission rates set directly by sellers</p>
                </div>
                <div className="border border-white/10 bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
                  <span className="text-4xl mb-4">⏱️</span>
                  <p className="font-medium">7-day attribution window (vs. standard 2 days)</p>
                </div>
                <div className="border border-white/10 bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
                  <span className="text-4xl mb-4">🤝</span>
                  <p className="font-medium">Direct exposure to brands and product variety</p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8">How it Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                  <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-white/10" />
                  
                  {[
                    { step: "1", title: "Browse Offers", desc: "Browse available offers in the \"Brand Offers\" section of your Influencer Panel" },
                    { step: "2", title: "Review Details", desc: "Review the offer details — commission rate, sharing date, seller info, and product highlights" },
                    { step: "3", title: "Share Link", desc: "Click \"Share Link\" to generate your unique Commission-Based Brand Partnership link and start sharing" }
                  ].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-white/20 flex items-center justify-center text-xl font-bold mb-6 shadow-xl">
                        {step.step}
                      </div>
                      <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-muted-foreground text-sm max-w-xs">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldAlert className="w-5 h-5 text-[#2563EB]" />
                    <h4 className="font-bold text-[#2563EB]">Important Note</h4>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Always generate links from the Influencer Panel — not from within the seller&apos;s store. Links acquired inside the store will only yield standard affiliate earnings, not the higher brand partnership commission rate.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-[#2563EB]" />
                    <h4 className="font-bold text-[#2563EB]">Reporting Note</h4>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Track brand offer performance in the Reports section under the &apos;Brand Collaborations&apos; tab. Filter up to 7 days after the sharing date to see total offer performance.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* GULF SECTION 11 — Fair Play Policy */}
          <section className="py-24 border-border bg-[#000000] border-b border-[#1a1a1a]">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.7 }} 
              className="mx-auto max-w-[1600px] px-6 md:px-10"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Fair Play Policy</h2>
                <p className="text-xl text-muted-foreground">Maintaining a healthy and transparent partnership network.</p>
              </div>

              <div className="mb-12 space-y-4 text-lg text-foreground/80 leading-relaxed max-w-4xl">
                <p>
                  TrendFam is a revenue-sharing program. We expect influencers to share links with their genuine social media audiences. While occasional sharing with relatives or close friends is understood, sales generated mostly through personal networks are considered an abuse of our commission model.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col border border-red-500/20 bg-red-500/5 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-red-500" />
                    <h3 className="font-bold">Multiple Accounts</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Creating multiple accounts with different emails or fake social handles, or using the same device/GSM number across multiple influencer accounts, is strictly prohibited.</p>
                </div>
                
                <div className="flex flex-col border border-red-500/20 bg-red-500/5 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Network className="w-6 h-6 text-red-500" />
                    <h3 className="font-bold">Abusive Sales Patterns</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Making sales predominantly to relatives or close friends — rather than your social media audience — is flagged as abuse. Trendyol uses an internal risk score system to detect this automatically.</p>
                </div>

                <div className="flex flex-col border border-red-500/20 bg-red-500/5 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Ban className="w-6 h-6 text-red-500" />
                    <h3 className="font-bold">Prohibited Promotion</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Promoting your influencer code on discount websites, or bidding on &apos;Trendyol&apos; brand keywords to gain visibility, is not allowed.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Note on WhatsApp/Telegram:</strong> Sharing links in WhatsApp, Telegram, or Facebook Groups is permitted, as these are considered social media. However, collusive transactions within closed groups are still flagged by our risk scoring system.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-500/10 p-6 rounded-r-xl">
                  <p className="text-red-200 font-medium">
                    Trendyol reserves the right to terminate partnerships and withhold earnings generated through abusive activity. High-risk influencers are flagged to agencies before any action is taken.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

      {/* 9. CTA SECTION */}
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
            Apply through iMediaff Global — an authorized Trendyol partner agency.
          </p>
          <Link href="/contact" className="inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] px-10 text-lg font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </main>

  );
}
