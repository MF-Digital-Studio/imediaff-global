const CLIENTS = [
  "MERCEDES",
  "EMAAR",
  "L'OREAL",
  "NIKE",
  "QATAR AIRWAYS",
  "NOON",
  "SEPHORA",
  "ADIDAS",
  "HILTON",
  "NETFLIX",
  "AMAZON",
  "SAMSUNG",
]

export default function ClientMarquee() {
  const doubled = [...CLIENTS, ...CLIENTS]
  return (
    <section className="relative border-y border-border py-10 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 mb-6 flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          / Trusted by leading brands
        </p>
        <p className="font-mono text-xs text-muted-foreground">{"// "}2019 - present</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max marquee-track gap-16 whitespace-nowrap">
          {doubled.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-foreground/40 hover:text-foreground transition-colors"
            >
              {c}
              <span className="text-primary">.</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

