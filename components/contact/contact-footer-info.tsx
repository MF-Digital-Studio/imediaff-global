export default function ContactFooterInfo() {
  return (
    <section className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Block
          k="Brief ile ne gönder?"
          items={[
            "Markanın kısa tanımı",
            "Önceki sosyal medya işleri (varsa)",
            "Hedefler ve KPI'lar",
            "Takvim ve bütçe aralığı",
          ]}
        />
        <Block
          k="Ne kadar sürer?"
          items={[
            "24s — ilk dönüş",
            "3 gün — diagnoz sunumu",
            "1 hafta — strateji workshop",
            "2 hafta — ilk yayın",
          ]}
        />
        <Block
          k="NDA?"
          items={[
            "Gönderdiğin her brief gizlidir",
            "Talep üzerine NDA imzalıyoruz",
            "Veri altyapımız EU-GDPR uyumlu",
            "Hassas veriler şifreli saklanır",
          ]}
        />
      </div>
    </section>
  )
}

function Block({ k, items }: { k: string; items: string[] }) {
  return (
    <div className="border-t border-border pt-8">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
        / {k}
      </p>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span aria-hidden className="text-primary mt-1">
              ·
            </span>
            <span className="text-foreground/80">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
