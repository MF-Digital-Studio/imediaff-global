import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactFooterInfo from "@/components/contact/contact-footer-info"

export const metadata = {
  title: "İletişim / VOLT",
  description:
    "Brief, ortaklık veya başvuru. Bize yaz — 24 saat içinde dönüyoruz.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactFooterInfo />
    </>
  )
}
