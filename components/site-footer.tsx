import Link from "next/link"

const FOOTER_LINKS = {
  Keşfet: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Influencerlar", href: "/influencerlar" },
    { label: "İşletmeler", href: "/isletmeler" },
    { label: "Projeler", href: "/projeler" },
  ],
  Hizmetler: [
    { label: "Viral Growth", href: "/isletmeler" },
    { label: "İçerik Stratejisi", href: "/isletmeler" },
    { label: "Reklam Yönetimi", href: "/isletmeler" },
    { label: "Influencer Pazarlama", href: "/isletmeler" },
  ],
  İletişim: [
    { label: "hello@volt.agency", href: "mailto:hello@volt.agency" },
    { label: "+90 212 000 00 00", href: "tel:+902120000000" },
    { label: "Maslak, İstanbul", href: "/iletisim" },
    { label: "Teklif İste", href: "/iletisim" },
  ],
}

const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
]

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      {/* Oversized wordmark */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            / Bir sonraki viral senin
          </p>
          <h2 className="mt-6 font-display text-[clamp(3.5rem,14vw,14rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-balance">
            Sınırları
            <br />
            <span className="text-primary">Zorla.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/iletisim"
              className="group inline-flex items-center gap-2 bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Projeni Konuşalım
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-4 text-base font-semibold hover:border-primary hover:text-primary"
            >
              Projeleri Gör
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_20px_var(--primary)]"
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              VOLT<span className="text-primary">.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Yeni nesil sosyal medya ajansı. Algoritmayı anlıyoruz, dikkatin yeni adresini tasarlıyoruz.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-medium hover:border-primary hover:text-primary"
              >
                {s.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
          <div key={heading}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              / {heading}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/90 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} VOLT Agency — Tüm hakları saklıdır.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            İstanbul / Berlin / New York
          </p>
        </div>
      </div>
    </footer>
  )
}
