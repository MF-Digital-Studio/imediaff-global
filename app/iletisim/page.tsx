import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactFooterInfo from "@/components/contact/contact-footer-info"

export const metadata = {
  title: "Contact | imediaff Global",
  description:
    "Request a proposal, share your brief, or discuss a partnership with our global team.",
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
