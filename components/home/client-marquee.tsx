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
    <section className="relative border-y border-black/10 py-10 overflow-hidden bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 mb-6 flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/40">
          / Trusted by leading brands
        </p>
        <p className="font-mono text-[10px] text-black/40 tracking-[0.2em]">{"// "}2019 - present</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max marquee-track gap-16 whitespace-nowrap">
          {doubled.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="font-sans text-4xl md:text-6xl font-bold tracking-[-0.03em] text-black/20 hover:text-black transition-colors duration-500 cursor-default"
            >
              {c}
              <span className="text-[#E515AB]">.</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

