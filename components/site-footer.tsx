import Link from "next/link"

const FOOTER_LINKS = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Brands", href: "/brands" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
  ],
  Capabilities: [
    { label: "Creator Strategy", href: "/services" },
    { label: "Campaign Management", href: "/services" },
    { label: "Paid Media", href: "/services" },
    { label: "Influencer Partnerships", href: "/services" },
  ],
  Contact: [
    { label: "hello@imediaff.global", href: "mailto:hello@imediaff.global" },
    { label: "+971 4 000 0000", href: "tel:+97140000000" },
    { label: "Dubai, UAE", href: "/contact" },
    { label: "Request Proposal", href: "/contact" },
  ],
  Headquarters: [
    { 
      label: "Fikirtepe Mah. Hizirbey Cad. No:25/C Fortis Sinanli Yeni Kadikoy, G Block, D-Entrance, Floor: 1, D:06, 34720 Kadikoy/Istanbul", 
      href: "/contact",
      isAddress: true 
    }
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
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight text-white">imediaff<span className="text-[#E515AB]">.</span></Link>
          <p className="mt-4 max-w-sm text-sm text-white/60 leading-relaxed font-sans">A 360° digital agency connecting ambitious brands and world-class creators across Dubai and the MENA region.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} className="inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 text-xs font-mono tracking-widest text-white/60 hover:border-white hover:text-white transition-colors">{s.label}<span aria-hidden>↗</span></a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
          <div key={heading} className={heading === "Headquarters" ? "md:col-span-3" : "md:col-span-2"}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white font-bold">/ {heading}</p>
            <ul className="mt-6 flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className={`text-sm text-white/60 hover:text-white transition-colors ${item.isAddress ? "font-mono text-xs leading-loose" : "font-sans"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">© {new Date().getFullYear()} imediaff Global. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">KVKK / Privacy Policy</Link>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Powered by MF Digital Studio</p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Dubai / Riyadh / London / Istanbul</p>
        </div>
      </div>
    </footer>
  )
}
