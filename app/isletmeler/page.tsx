import BusinessHeader from "@/components/business/business-header"
import BentoServices from "@/components/business/bento-services"
import ProcessTimeline from "@/components/business/process-timeline"
import BusinessCta from "@/components/business/business-cta"

export const metadata = {
  title: "İşletmeler / VOLT",
  description:
    "Markalar için uçtan uca sosyal medya yönetimi. Strateji, kreatif, reklam ve veri aynı çatı altında.",
}

export default function BusinessPage() {
  return (
    <>
      <BusinessHeader />
      <BentoServices />
      <ProcessTimeline />
      <BusinessCta />
    </>
  )
}
