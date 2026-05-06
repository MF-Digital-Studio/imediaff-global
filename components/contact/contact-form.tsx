"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check } from "lucide-react"

const INTERESTS = [
  "Viral Growth",
  "İçerik Stratejisi",
  "Performans Reklam",
  "Influencer Yönetimi",
  "Prodüksiyon",
  "PR & Lansman",
]

const BUDGETS = ["₺100K – ₺250K", "₺250K – ₺500K", "₺500K – ₺1M", "₺1M+"]

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [budget, setBudget] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const toggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10">
        <aside className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            / Cevap bekleme süresi
          </p>
          <p className="mt-3 font-display text-5xl md:text-6xl font-semibold tracking-[-0.03em]">
            {"<"} 24<span className="text-primary">s</span>
          </p>
          <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
            Mesajın doğrudan strateji ekibine düşer. Genel bir form değil —
            asistan yok, filtre yok.
          </p>

          <div className="mt-10 space-y-4 border-t border-border pt-8">
            <InfoRow k="E-posta" v="hello@volt.agency" href="mailto:hello@volt.agency" />
            <InfoRow k="Telefon" v="+90 212 000 00 00" href="tel:+902120000000" />
            <InfoRow k="Stüdyo" v="Maslak, İstanbul" />
            <InfoRow k="Başvurular" v="creators@volt.agency" href="mailto:creators@volt.agency" />
          </div>
        </aside>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
          className="md:col-span-8 relative"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Ad Soyad" name="name" placeholder="Adın" />
                  <Field label="Şirket" name="company" placeholder="Markan" />
                  <Field label="E-posta" name="email" type="email" placeholder="you@brand.com" />
                  <Field label="Web" name="web" placeholder="brand.com" />
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    / İlgilendiğin alan
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map((i) => {
                      const active = selected.includes(i)
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggle(i)}
                          className={`group inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-medium transition-colors ${
                            active
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border hover:border-primary/60"
                          }`}
                        >
                          {active && <Check className="h-3.5 w-3.5" />}
                          {i}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    / Bütçe aralığı
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {BUDGETS.map((b) => {
                      const active = budget === b
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`border px-3 py-3 text-sm font-medium transition-colors ${
                            active
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border hover:border-primary/60"
                          }`}
                        >
                          {b}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    / Projeni anlat
                  </p>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Hangi platformlar, hangi hedefler, hangi takvim?"
                    className="w-full bg-card border border-border px-4 py-4 text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
                  <p className="font-mono text-xs text-muted-foreground">
                    {"//"} Gönder → 24s içinde dönüş
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-semibold hover:-translate-y-0.5 transition-transform"
                  >
                    Gönder
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 220, damping: 18 },
                }}
                className="border border-primary/60 bg-card p-10 md:p-14 text-center"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
                  Aldık<span className="text-primary">.</span>
                </h3>
                <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                  Strateji ekibi briefini inceliyor. 24 saat içinde gerçek bir
                  insan, gerçek bir cevapla dönecek.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string
  name: string
  placeholder: string
  type?: string
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        / {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 text-lg placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
      />
    </label>
  )
}

function InfoRow({ k, v, href }: { k: string; v: string; href?: string }) {
  const content = (
    <>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {k}
      </span>
      <span className="block mt-1 text-base font-medium">{v}</span>
    </>
  )
  return href ? (
    <a
      href={href}
      className="block group hover:text-primary transition-colors border-b border-border pb-4 last:border-b-0 last:pb-0"
    >
      {content}
    </a>
  ) : (
    <div className="border-b border-border pb-4 last:border-b-0 last:pb-0">{content}</div>
  )
}
