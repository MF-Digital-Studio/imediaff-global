"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { BLOG_POSTS } from "@/lib/blog-data"

// ── Fade-in variant ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function BlogClientPage() {
  const featurePost = BLOG_POSTS[0]
  const row1Posts = BLOG_POSTS.slice(1, 4)
  const row2Posts = BLOG_POSTS.slice(4, 7)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ── HERO — Black ───────────────────────────────────────────── */}
      <section className="bg-black text-white pt-32 pb-16 md:pt-48 md:pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#2563EB]/8 to-transparent blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
          <motion.div {...fadeUp()}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB]">/ Blog</p>
            <h1 className="mt-6 font-display text-[clamp(3.5rem,9vw,9.5rem)] font-bold leading-[0.88] tracking-[-0.04em]">
              Global <br /> Insights.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed font-sans">
              Editorial intelligence for brands, creators, and operators building influence at international scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ROW 1: 3-Column Grid (White) ─────────────────────────────────────── */}
      <section className="bg-white text-black py-20 md:py-32 border-b border-gray-200">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div {...fadeUp()} className="mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">/ Industry Alpha</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {row1Posts.map((post, i) => (
              <motion.article
                key={post.slug}
                {...fadeUp(i * 0.1)}
                className="group flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-6 border border-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </Link>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2563EB] font-bold">{post.category}</span>
                    <span className="h-px w-4 bg-gray-300" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-display text-2xl md:text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-black mb-4 group-hover:text-[#2563EB] transition-colors line-clamp-3">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 font-sans mb-8 line-clamp-2 mt-auto">
                    {post.summary}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] font-bold text-black group-hover:text-[#2563EB] transition-colors mt-auto w-fit"
                  >
                    Read Article
                    <span className="block h-px w-6 bg-gradient-to-br from-[#2563EB] to-[#16A34A] transition-all duration-300 group-hover:w-10" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROW 2: 3-Column Grid (Black) ─────────────────────────────────────── */}
      {row2Posts.length > 0 && (
        <section className="bg-black text-white py-20 md:py-32 border-b border-white/10">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <motion.div {...fadeUp()} className="mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 font-bold">/ The Strategic Edge</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {row2Posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  {...fadeUp(i * 0.1)}
                  className="group flex flex-col"
                >
                  <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-6 border border-white/10">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    {/* Subtle overlay to fit the black theme */}
                    <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                  </Link>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2563EB] font-bold">{post.category}</span>
                      <span className="h-px w-4 bg-white/20" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-display text-2xl md:text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-4 group-hover:text-[#2563EB] transition-colors line-clamp-3">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-white/60 font-sans mb-8 line-clamp-2 mt-auto">
                      {post.summary}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] font-bold text-white group-hover:text-[#2563EB] transition-colors mt-auto w-fit"
                    >
                      Read Article
                      <span className="block h-px w-6 bg-gradient-to-br from-[#2563EB] to-[#16A34A] transition-all duration-300 group-hover:w-10" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ROW 3: Featured Post (Sunset Gradient) ────────────────────────────── */}
      {featurePost && (
        <section className="bg-gradient-to-br from-[#2563EB] to-[#16A34A] text-white py-24 md:py-36 relative overflow-hidden">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <motion.div {...fadeUp()} className="mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 font-bold">/ Featured Read</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-black cursor-pointer"
            >
              <Link href={`/blog/${featurePost.slug}`} className="absolute inset-0 z-20" aria-label={featurePost.title} />
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
                  <Image
                    src={featurePost.image}
                    alt={featurePost.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Gradient mask to blend with black */}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/50 to-transparent" />
                </div>

                <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 relative z-10 lg:-ml-24">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-flex rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#2563EB] font-bold border border-white/20">
                      {featurePost.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{featurePost.readTime}</span>
                  </div>

                  <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#2563EB] transition-all duration-300">
                    {featurePost.title}
                  </h2>

                  <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
                    {featurePost.summary}
                  </p>

                  <div className="inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.15em] font-bold text-white w-fit">
                    Read Full Article
                    <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

    </main>
  )
}
