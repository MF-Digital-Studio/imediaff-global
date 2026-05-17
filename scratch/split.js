const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../app/talent/talent-client-page.tsx');
const ceePath = path.join(__dirname, '../app/talent/cee/page.tsx');
const gulfPath = path.join(__dirname, '../app/talent/gulf/page.tsx');

let content = fs.readFileSync(srcPath, 'utf8');

// Find the start of CEE content
const ceeStartStr = '{/* 2. ABOUT THE PROGRAM */}';
let ceeStart = content.indexOf(ceeStartStr);
// Find the end of CEE content (before GULF section)
const ceeEndStr = '{/* 8. PARTNERSHIP & PAYMENT */}';
let ceeEndSectionStart = content.indexOf(ceeEndStr);
// Find the end of that section
let ceeEnd = content.indexOf('</section>', ceeEndSectionStart) + '</section>'.length;

const ceeContent = content.substring(ceeStart, ceeEnd);

// Find the start of Gulf content
const gulfStartStr = '{/* GULF SECTION 1 — The TrendFam Program */}';
let gulfStart = content.indexOf(gulfStartStr);
// Find the end of Gulf content
const gulfEndStr = '{/* GULF SECTION 11 — Fair Play Policy */}';
let gulfEndSectionStart = content.indexOf(gulfEndStr);
let gulfEnd = content.indexOf('</section>', gulfEndSectionStart) + '</section>'.length;

const gulfContent = content.substring(gulfStart, gulfEnd);

// Imports
const imports = `
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
`;

// Hero
const hero = (regionName) => `
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
`;

const cta = `
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
`;

fs.writeFileSync(ceePath, imports + '\nexport default function CeePage() {\n  return (' + hero("CEE") + '\n' + ceeContent + '\n' + cta + '\n  );\n}\n');
fs.writeFileSync(gulfPath, imports + '\nexport default function GulfPage() {\n  return (' + hero("Gulf") + '\n' + gulfContent + '\n' + cta + '\n  );\n}\n');
console.log("Created CEE and Gulf pages.");
