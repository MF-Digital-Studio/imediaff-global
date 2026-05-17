
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

export default function AzerbaijanPage() {
  return (
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
            <div className="border border-white/10 bg-[#16A34A]/10 p-6 rounded-2xl flex flex-col items-center text-center">
              <span className="text-2xl mb-2">🌱</span>
              <h4 className="font-bold mb-2 text-[#16A34A]">Starter</h4>
              <div className="text-2xl font-bold text-[#16A34A]">30%</div>
              <p className="text-xs text-[#16A34A]/70 mt-1">In-Link</p>
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
              { title: "Hidden Advertising", desc: "Do not promote products you haven't tried. Do not present gifted products as personal purchases. Disclose filters/effects used. Do not make unverifiable health claims." },
              { title: "Reselling Promoted Products", desc: "Influencers who list products featured in their content on secondhand platforms within 2 months of posting are in violation. This damages content authenticity, negatively impacts follower trust, and reduces link performance. Content must be removed within the same day of receiving a warning, or the influencer will be considered in breach of the rules." }
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

  );
}
