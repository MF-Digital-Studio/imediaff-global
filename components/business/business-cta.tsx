import Link from "next/link"

export default function BusinessCta() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="border border-primary/60 bg-gradient-to-br from-background via-background to-background relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at 20% 10%, color-mix(in oklab, var(--primary) 20%, transparent), transparent 55%)",
            }}
          />
          <div className="relative p-10 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                / 30 günlük pilot
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-balance">
                Markana <span className="text-primary">ivme</span> kazandıralım.
              </h2>
              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                30 gün, 3 kampanya, 1 ölçülebilir sonuç. Memnun değilsen,
                ücret yok. Gerçekten.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/iletisim"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-semibold"
              >
                Pilot Başlat
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
