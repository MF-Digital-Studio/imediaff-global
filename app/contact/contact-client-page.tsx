"use client"

import { useState } from "react"
import { motion } from "motion/react"

// ── Fade-in variant ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

const OFFICES = [
  {
    name: "Headquarters (Istanbul)",
    address: "Fikirtepe Mah. Hizirbey Cad. No:25/C Fortis Sinanli Yeni Kadikoy, G Block, D-Entrance, Floor: 1, D:06, Kadikoy/Istanbul",
  },
  {
    name: "Innovation Hub (Istanbul)",
    address: "Ayazaga, Vadistanbul Park, Bilisim Vadisi, D:7A Block, Floor: 10, No:38, Sariyer/Istanbul",
  },
  {
    name: "Global Operations (USA)",
    address: "30 N Gould St. Sheridan, WY 82801, United States of America",
  },
]

const FAQS = [
  {
    q: "Do you sign NDAs before receiving briefs?",
    a: "Absolutely. We operate under strict confidentiality protocols. Enterprise briefs and intellectual property are secured under legally binding NDAs prior to any strategy disclosure.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Strategy and creator sourcing typically span 2-3 weeks, followed by production and campaign deployment. For fast-tracked regional expansion projects, we can expedite the timeline to 14 days.",
  },
  {
    q: "Do you have a minimum campaign budget?",
    a: "Our engagements are tailored for enterprise-scale growth. We typically partner with brands looking to invest strategically in multi-market campaigns, ensuring significant ROI and algorithmic dominance.",
  },
]

export default function ContactClientPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    region: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integrate with Resend or backend API here
    console.log("Form submitted:", formState)
    alert("Brief submitted successfully.")
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ── SECTION 1: HERO & BRIEF INTAKE (Black) ───────────────────────── */}
      <section className="bg-black text-white pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/10 relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#E515AB]/8 to-transparent blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Info */}
            <motion.div {...fadeUp()} className="flex flex-col xl:sticky xl:top-32">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E515AB] mb-6">/ Start a Conversation</p>
              <h1 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.04em] mb-8">
                Send your <br /> brief.
              </h1>
              <p className="max-w-md text-lg text-white/60 leading-relaxed font-sans mb-16">
                Looking to scale your brand across the MENA region or dominate global platforms? Share your objectives, and our strategic team will construct the blueprint.
              </p>

              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Direct Email</p>
                  <a href="mailto:hello@imediaff.global" className="font-display text-2xl md:text-3xl font-bold tracking-tight hover:text-[#E515AB] transition-colors">
                    hello@imediaff.global
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">TR Operations</p>
                    <p className="font-mono text-lg text-white/80">+90 216 606 53 59</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Global / MENA Desk</p>
                    <p className="font-mono text-lg text-white/80">+971 4 000 0000</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="https://wa.me/902166065359" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    Direct Chat via WhatsApp
                    <span className="block h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div {...fadeUp(0.15)} className="w-full max-w-2xl mx-auto xl:ml-auto">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
                {/* Subtle gradient accent on top edge */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E515AB] to-[#FFBD1E]" />
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-white/60 ml-2">Full Name</label>
                      <input 
                        id="name"
                        type="text" 
                        required
                        className="bg-transparent border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#E515AB] transition-colors"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="font-mono text-xs uppercase tracking-widest text-white/60 ml-2">Phone Number</label>
                      <input 
                        id="phone"
                        type="tel" 
                        required
                        className="bg-transparent border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#E515AB] transition-colors"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-white/60 ml-2">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="bg-transparent border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#E515AB] transition-colors"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-mono text-xs uppercase tracking-widest text-white/60 ml-2">Subject</label>
                    <input 
                      id="subject"
                      type="text" 
                      required
                      className="bg-transparent border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#E515AB] transition-colors"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="region" className="font-mono text-xs uppercase tracking-widest text-white/60 ml-2">Target Region</label>
                      <select 
                        id="region"
                        className="bg-black/50 border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#E515AB] transition-colors appearance-none cursor-pointer"
                        value={formState.region}
                        onChange={(e) => setFormState({ ...formState, region: e.target.value })}
                        required
                      >
                        <option value="" disabled>Select Region</option>
                        <option value="TR">Turkey (TR)</option>
                        <option value="Dubai">Dubai</option>
                        <option value="MENA">MENA / GCC</option>
                        <option value="Global">Global Expansion</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="font-mono text-xs uppercase tracking-widest text-white/60 ml-2">Estimated Budget</label>
                      <select 
                        id="budget"
                        className="bg-black/50 border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#E515AB] transition-colors appearance-none cursor-pointer"
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        required
                      >
                        <option value="" disabled>Select Range</option>
                        <option value="<10k">&lt; $10k</option>
                        <option value="10k-50k">$10k - $50k</option>
                        <option value="50k-100k">$50k - $100k</option>
                        <option value="100k+">$100k+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-white/60 ml-2">Description / Project Details</label>
                    <textarea 
                      id="message"
                      rows={5}
                      required
                      className="bg-transparent border-b border-white/20 px-2 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#E515AB] transition-colors resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-5 font-mono text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#E515AB] via-[#FA1702] to-[#FFBD1E]" />
                    <span className="relative z-10 flex items-center gap-3">
                      Submit Brief
                      <span className="block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: GLOBAL OFFICE NETWORK (White) ───────────────────── */}
      <section className="bg-white text-black py-24 md:py-36 border-b border-gray-200 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Titles & List */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div {...fadeUp()} className="mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-4">/ Infrastructure</p>
                <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-[-0.03em] leading-[1.05] text-black">
                  Global Office <br /> Network.
                </h2>
              </motion.div>

              <div className="flex flex-col gap-10">
                {OFFICES.map((office, i) => (
                  <motion.div key={office.name} {...fadeUp(0.1 * i)} className="group border-l-2 border-gray-200 pl-6 hover:border-[#E515AB] transition-colors">
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-[-0.02em] text-black mb-2 group-hover:text-[#E515AB] transition-colors">
                      {office.name}
                    </h3>
                    <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.1em] leading-relaxed text-gray-500 max-w-[280px]">
                      {office.address}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual / Google Map Iframe */}
            <motion.div {...fadeUp(0.2)} className="lg:col-span-7 relative w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6661339688463!2d29.0494488!3d40.9887019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8715bd88fbb%3A0xc665b161c56b06e8!2sFortis%20Sinanl%C4%B1%20Kad%C4%B1k%C3%B6y!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str" 
                className="w-full h-full"
                style={{ border: 0, filter: 'grayscale(100%) contrast(120%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: PROJECT LOGISTICS (Black) ───────────────────────── */}
      <section className="bg-black text-white py-24 md:py-36 border-t border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div {...fadeUp()} className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFBD1E] font-bold mb-4">/ FAQ</p>
              <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-[-0.03em] leading-[1.05] text-white">
                Project <br /> Logistics.
              </h2>
              <p className="mt-6 text-lg text-white/60 font-sans max-w-sm">
                Clarity and operational excellence from the first point of contact.
              </p>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <motion.div 
                  key={i} 
                  {...fadeUp(0.1 * i)}
                  className="group border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors cursor-default"
                >
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-[-0.01em] text-white mb-4 pr-8">
                    {faq.q}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-sans text-sm md:text-base">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
