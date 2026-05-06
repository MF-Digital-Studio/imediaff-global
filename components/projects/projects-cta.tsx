import Link from "next/link"

export default function ProjectsCta() {
  return (
    <section className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">/ You are next</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-balance">
            Your project can become the next <span className="text-primary">case study</span>.
          </h2>
        </div>
        <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
          <Link href="/contact" className="group inline-flex items-center gap-2 bg-sunset-gradient px-6 py-4 font-semibold text-black">
            Share Brief
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

