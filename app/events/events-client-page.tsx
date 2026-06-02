"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { EVENTS } from "@/lib/events"

export default function EventsClientPage() {
  const featuredEvent = EVENTS.find((e) => e.featured) || EVENTS[0]
  const otherEvents = EVENTS.filter((e) => e.slug !== featuredEvent.slug)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-black text-white pt-32 pb-16 md:pt-48 md:pb-24 border-b border-white/10">
        {/* Subtle grid & gradient atmosphere */}
        <div className="absolute inset-0 hero-grid-overlay opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#2563EB]/10 to-transparent blur-[120px] rounded-full opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB] font-bold">
              / Events
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
              Moments that <br /> move markets.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed font-sans">
              Explore iMediaff Global events, creator gatherings, brand activations, and regional campaign moments across our operating markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Event ── */}
      <section className="bg-black text-white py-20 md:py-32 border-b border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto h-full w-full overflow-hidden">
                <Image
                  src={featuredEvent.coverImage}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent lg:hidden" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 relative z-10 lg:bg-black/40 lg:backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-flex items-center rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#2563EB]">
                    Featured
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                    {featuredEvent.category}
                  </span>
                  {featuredEvent.gallery && featuredEvent.gallery.length > 0 && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span> Gallery
                    </span>
                  )}
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
                  {featuredEvent.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
                  <div className="flex items-center gap-2 text-white/70">
                    <span className="text-xl">📅</span>
                    <span className="font-sans text-sm md:text-base font-medium">{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <span className="text-xl">📍</span>
                    <span className="font-sans text-sm md:text-base font-medium">{featuredEvent.location}</span>
                  </div>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-white/70 mb-10 font-sans max-w-xl">
                  {featuredEvent.excerpt}
                </p>
                <Link
                  href={`/events/${featuredEvent.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] px-10 py-5 text-base font-bold text-white transition-transform hover:scale-105 shadow-xl w-fit"
                >
                  View Event ↗
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Events Grid ── */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB] mb-5">
              / Event Archive
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white">
              Discover Recent Events.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherEvents.map((event, i) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.1em] text-white">
                    {event.category}
                  </div>
                  {event.gallery && event.gallery.length > 0 && (
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.1em] text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span> Gallery Available
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-grow p-6 md:p-8">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-4 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 font-sans text-sm text-white/50">
                    <span>{event.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{event.region}</span>
                  </div>
                  <p className="text-white/60 leading-relaxed font-sans text-sm mb-8 line-clamp-3">
                    {event.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white transition-colors group-hover:text-[#2563EB]"
                    >
                      View Details
                      <span aria-hidden className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
