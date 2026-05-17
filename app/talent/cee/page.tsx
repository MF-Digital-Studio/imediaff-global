
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

export default function CeePage() {
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

{/* 2. ABOUT THE PROGRAM */}
          <section className="py-24 border-b border-border relative overflow-hidden">
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
                TrendFam is a performance and commission-based influencer marketing program created exclusively for influencers by Trendyol. Participating influencers promote products available on the Trendyol platform through their social media accounts and earn commission per sale.
              </p>
              <p>
                It is a commission earning model for influencers who create product-focused content on social media platforms like Instagram, TikTok, YouTube, Snapchat, Twitter, and Facebook, by sharing Trendyol products based on the commission rates determined by Trendyol.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/20 blur-3xl rounded-full" />
            <div className="relative border border-white/10 bg-white/5 backdrop-blur-xl p-10 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: TrendingUp, label: "Performance Based" },
                  { icon: Coins, label: "High Commission" },
                  { icon: Smartphone, label: "Multi-Platform" },
                  { icon: Globe, label: "Global Reach" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-6 border border-white/5 bg-black/20 rounded-2xl text-center">
                    <item.icon className="w-10 h-10 text-[#2563EB] mb-4" strokeWidth={1.5} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. ELIGIBILITY */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "10,000+ Followers", desc: "Minimum 10k followers on Instagram" },
              { icon: TrendingUp, title: "High Engagement", desc: "Organic and active audience engagement" },
              { icon: Globe, title: "CEE Region", desc: "Account registered in Romania, Poland, Bulgaria, or Greece" },
              { icon: Building2, title: "Agency Partner", desc: "Must apply through an authorized agency" }
            ].map((req, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <req.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{req.title}</h3>
                <p className="text-muted-foreground text-sm">{req.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-4 p-6 border border-[#2563EB]/30 bg-[#2563EB]/5 rounded-xl">
            <ShieldAlert className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-foreground/80">
              <strong className="text-foreground">Note:</strong> Individual applications are not accepted. You must work with a Trendyol-listed agency to join the program.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 border-b border-border">
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
              { step: "01", title: "Create Account", desc: "Create your Trendyol customer account if you haven't already." },
              { step: "02", title: "Apply", desc: "Fill in the TrendFam application form with the same email." },
              { step: "03", title: "Review", desc: "Your account undergoes eligibility review by the team." },
              { step: "04", title: "Access", desc: "Approved influencers gain access to Influencer Center in the Trendyol app." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border-4 border-background bg-zinc-900 flex items-center justify-center text-2xl font-display font-bold text-white mb-6 shadow-[0_0_30px_rgba(255,45,141,0.1)]">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-[250px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4.5. CREATING & SHARING LINKS */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Creating & Sharing Your Links</h2>
            <p className="text-xl text-muted-foreground">Only links generated through the Influencer Center are eligible for commission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, step: "Step 1", title: "Add to Favourites", desc: "Browse Trendyol and add products you want to promote to your favourites." },
              { icon: Layers, step: "Step 2", title: "Create a Collection", desc: "Organise your favourite products into a themed collection for your audience." },
              { icon: LinkIcon, step: "Step 3", title: "Generate Your Affiliate Link", desc: "Use the Influencer Center inside the Trendyol app to generate your unique affiliate link." },
              { icon: Share2, step: "Step 4", title: "Share on Social Media", desc: "Share your link across your social media accounts — Instagram, TikTok, YouTube, Snapchat, Twitter, or Facebook." }
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

      {/* 5. EARNINGS MODEL */}
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
            <p className="text-xl text-muted-foreground">Understanding the commission models and tracking windows.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* In-link */}
            <div className="border border-[#2563EB]/30 bg-gradient-to-b from-[#2563EB]/5 to-transparent p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 blur-3xl rounded-full" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-sm font-semibold mb-6">
                <LinkIcon className="w-4 h-4" /> 100% Commission Rate
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">In-link</h3>
              <p className="text-lg text-foreground/80 mb-6">
                When your follower purchases a product directly from your curated collection link, this is counted as an in-link transaction.
              </p>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-white">Example:</strong> You share an Adidas sneaker collection. Your follower clicks your link and buys an Adidas sneaker → <span className="text-[#2563EB] font-semibold">In-link</span>.
                </p>
              </div>
            </div>

            {/* Out-link */}
            <div className="border border-[#2563EB]/30 bg-gradient-to-b from-[#2563EB]/5 to-transparent p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 blur-3xl rounded-full" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-sm font-semibold mb-6">
                <ExternalLink className="w-4 h-4" /> 50% Commission Rate
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Out-link</h3>
              <p className="text-lg text-foreground/80 mb-6">
                When your follower clicks your link but purchases a different product on Trendyol, this is counted as an out-link transaction.
              </p>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-white">Example:</strong> You share an Adidas sneaker link. Your follower clicks it but buys a Puma sneaker instead → <span className="text-[#2563EB] font-semibold">Out-link</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 bg-zinc-900/50 border border-border p-5 rounded-2xl">
              <Clock className="w-8 h-8 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">In-link tracking window</p>
                <p className="text-xl font-bold">24 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/50 border border-border p-5 rounded-2xl">
              <Clock className="w-8 h-8 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Out-link tracking window</p>
                <p className="text-xl font-bold">12 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/50 border border-border p-5 rounded-2xl">
              <Euro className="w-8 h-8 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Maximum earning</p>
                <p className="text-xl font-bold">€100 <span className="text-sm font-normal text-muted-foreground">/ transaction</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. BONUS & INCENTIVES */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Bonus Opportunities</h2>
            <p className="text-xl text-muted-foreground">Unlock extra earnings and rewards beyond standard commissions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <Gift className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Welcome Bonus</h3>
              <p className="text-muted-foreground mb-4">Jumpstart your journey with our sign-up incentives.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span><strong>€100</strong> in coins upon joining</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span><strong>€100</strong> voucher after your first post</span>
                </li>
              </ul>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <Users className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Referral Bonus</h3>
              <p className="text-muted-foreground mb-4">Earn for every influencer you refer to the program based on their follower count:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-black/40 text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg">Followers</th>
                      <th className="px-4 py-3 rounded-tr-lg">Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5"><td className="px-4 py-3 font-medium">1,000,000+</td><td className="px-4 py-3 text-[#2563EB] font-bold">€500</td></tr>
                    <tr className="border-b border-white/5"><td className="px-4 py-3 font-medium">500,000+</td><td className="px-4 py-3 text-[#2563EB] font-bold">€300</td></tr>
                    <tr className="border-b border-white/5"><td className="px-4 py-3 font-medium">100,000+</td><td className="px-4 py-3 text-[#2563EB] font-bold">€150</td></tr>
                    <tr className="border-b border-white/5"><td className="px-4 py-3 font-medium">50,000+</td><td className="px-4 py-3 text-[#2563EB] font-bold">€50</td></tr>
                    <tr><td className="px-4 py-3 font-medium rounded-bl-lg">10,000+</td><td className="px-4 py-3 text-[#2563EB] font-bold rounded-br-lg">€25</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <Award className="w-10 h-10 text-[#2563EB] mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance Rewards</h3>
              <p className="text-muted-foreground text-sm">Exclusive incentives unlocked as you grow and hit performance milestones within TrendFam.</p>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <Tags className="w-10 h-10 text-[#2563EB] mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Bonus Campaigns</h3>
              <p className="text-muted-foreground text-sm">Sellers on Trendyol occasionally run extra bonus campaigns to boost product promotion.</p>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl md:col-span-2">
              <div className="flex items-start md:items-center gap-6 flex-col md:flex-row">
                <Coins className="w-12 h-12 text-[#2563EB] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Daily Coin Rewards</h3>
                  <p className="text-muted-foreground text-sm">Earn additional coins by simply logging into the Trendyol app daily. Consistently engage to maximize your passive rewards.</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground/60 text-center">
            * Bonuses are not guaranteed and are subject to campaign-specific terms and Trendyol&apos;s active promotional periods.
          </p>
        </motion.div>
      </section>

      {/* 6.5. DISCOUNT CODES */}
      <section className="py-24 border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Discount Codes</h2>
            <p className="text-xl text-muted-foreground">Exclusive discount codes to boost your conversions and reward your followers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <Calendar className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Monthly Code</h3>
              <p className="text-muted-foreground text-sm">
                Each month, a unique discount code is available for you to share. For example, the code &apos;JANUARY&apos; is active throughout January.
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <User className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Personalised Code</h3>
              <p className="text-muted-foreground text-sm">
                Influencers with a large reach and high monthly click volume may receive an Instagram-exclusive personalised discount code from Trendyol.
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 rounded-3xl">
              <Tag className="w-10 h-10 text-[#2563EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Campaign Codes</h3>
              <p className="text-muted-foreground text-sm">
                During high-traffic shopping periods such as Black Friday or 11.11, extra discount codes are activated to maximise your earning potential.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. CONTENT GUIDELINES */}
      <section className="py-24 bg-white/[0.02] border-b border-border">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Content Standards</h2>
            <p className="text-xl text-muted-foreground">To maintain trust and quality, all partners must adhere to these guidelines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">Brand Integrity</h3>
              <p className="text-muted-foreground text-sm">Must not damage Trendyol&apos;s brand perception in any way.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                <Ban className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">Ethical Conduct</h3>
              <p className="text-muted-foreground text-sm">Must not contain misleading, illegal, or unethical elements.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">Accuracy</h3>
              <p className="text-muted-foreground text-sm">Must not include health claims, incorrect pricing, or undisclosed advertising.</p>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-center">
            <ShieldAlert className="w-6 h-6 text-red-400 shrink-0" />
            <p className="text-red-200 text-sm md:text-base font-medium">
              Warning: Non-compliant content may be removed and the partnership may be terminated.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 7.5. FAIR PLAY POLICY */}
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
            <p className="text-xl text-muted-foreground">TrendFam is designed to reach real consumers. The following behaviours are considered fraudulent and may result in account suspension.</p>
          </div>

          <div className="mb-12 space-y-4 text-lg text-foreground/80 leading-relaxed max-w-4xl">
            <p>
              Sometimes your followers may include family members or close friends. Phrases like &apos;send me your link, I&apos;ll buy through you&apos; are common — however, within the TrendFam framework, this may be considered fraudulent activity.
            </p>
            <p>
              TrendFam&apos;s core purpose is to help you reach genuine consumers in your country. If orders are consistently placed by people you know personally, commission payments will not be processed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col border border-red-500/20 bg-red-500/5 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-6 h-6 text-red-500" />
                <h3 className="font-bold">Same IP Address</h3>
              </div>
              <p className="text-muted-foreground text-sm">Multiple orders placed from the same IP address are automatically flagged.</p>
            </div>
            
            <div className="flex flex-col border border-red-500/20 bg-red-500/5 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-red-500" />
                <h3 className="font-bold">Shared IP with Influencer</h3>
              </div>
              <p className="text-muted-foreground text-sm">If the influencer and the buyer share the same IP address, the transaction is flagged.</p>
            </div>

            <div className="flex flex-col border border-red-500/20 bg-red-500/5 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-red-500" />
                <h3 className="font-bold">Repeated Name on Orders</h3>
              </div>
              <p className="text-muted-foreground text-sm">Orders consistently placed under the same name are detected by the system.</p>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-500/10 p-6 rounded-r-xl">
            <p className="text-red-200 font-medium">
              Violations are considered a breach of TrendFam&apos;s terms. After several warnings, your account may be permanently closed and flagged earnings will not be paid out.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 8. PARTNERSHIP & PAYMENT */}
      <section className="py-24 border-b border-border relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#2563EB]/5 blur-[120px] rounded-full" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[#2563EB]/5 blur-[120px] rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10"
        >
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Working with iMediaff Global</h2>
            <p className="text-xl text-muted-foreground">Transparent, stable, and long-term partnership structure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/40 border border-white/10 p-10 rounded-3xl">
              <FileText className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-bold mb-4">1-Year Contracts</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work with influencers on 1-year contracts as part of the Trendyol Partner Agency Program. This structure is designed to protect both parties and ensure long-term, stable collaboration.
              </p>
            </div>
            
            <div className="bg-zinc-900/40 border border-white/10 p-10 rounded-3xl">
              <CalendarDays className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-bold mb-4">Payment Cycle</h3>
              <p className="text-muted-foreground leading-relaxed">
                Payments are made by Trendyol to the agency on a 30-day cycle. For example, December earnings are transferred in the first week of February — directly to your IBAN account in Euros.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 9. CTA SECTION */}
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
