"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { EventItem } from "@/lib/events"

export default function EventDetailClient({ event }: { event: EventItem }) {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ── Header / Hero ── */}
      <section className="relative overflow-hidden bg-black text-white pt-32 pb-16 md:pt-40 md:pb-20 border-b border-white/10">
        <div className="absolute inset-0 hero-grid-overlay opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#2563EB]/10 to-transparent blur-[120px] rounded-full opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors mb-10"
            >
              <span>←</span> Back to Events
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                {event.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2563EB]">
                / {event.region}
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tight text-balance leading-[1.05] text-white mb-8">
              {event.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 font-sans text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-xl">📅</span>
                <span className="font-medium">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                <span className="font-medium">{event.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Cover Image ── */}
      <section className="bg-black py-10 md:py-16 relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-white/10"
          >
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* ── Content & Stats ── */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-8 prose prose-invert max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Parse the description and add paragraphs. Simple split by \n\n */}
                {event.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 font-sans">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Stats Sidebar */}
            {event.stats && event.stats.length > 0 && (
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-8 sticky top-32 p-8 rounded-2xl bg-white/[0.03] border border-white/10"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563EB] border-b border-white/10 pb-4">
                    Key Metrics
                  </p>
                  {event.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <p className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent mb-2">
                        {stat.prefix}{stat.value}{stat.suffix}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Gallery Section (Optional) ── */}
      {event.gallery && event.gallery.length > 0 && (
        <section className="bg-black py-16 md:py-24 border-t border-white/10">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7 }}
              className="mb-12 md:mb-16"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB] font-bold mb-4">
                / Gallery
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Event Gallery
              </h2>
              <p className="text-lg text-white/60 font-sans max-w-2xl">
                A visual archive of selected moments from this event. Replace these placeholders with final event images.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6 md:gap-8">
              {/* First Image Large */}
              {event.gallery[0] && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10 group"
                >
                  <Image
                    src={event.gallery[0]}
                    alt={`${event.title} gallery feature`}
                    fill
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              )}
              
              {/* Remaining Images Grid */}
              {event.gallery.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {event.gallery.slice(1).map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:rounded-2xl border border-white/10 group bg-white/5"
                    >
                      <Image
                        src={image}
                        alt={`${event.title} gallery image ${idx + 2}`}
                        fill
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#16A34A] text-white py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1200px] px-6 md:px-10 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold mb-6">
            / Partnership
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-[-0.03em] text-white mb-10 text-balance">
            Interested in future collaborations?
          </h2>
          <Link
            href="/contact?type=brand"
            className="inline-flex items-center justify-center rounded-full bg-black px-12 py-6 text-lg font-bold text-white transition-transform hover:scale-105 shadow-xl"
          >
            Request Proposal ↗
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
