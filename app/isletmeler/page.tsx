import BusinessHeader from "@/components/business/business-header"
import BentoServices from "@/components/business/bento-services"
import ProcessTimeline from "@/components/business/process-timeline"
import BusinessCta from "@/components/business/business-cta"

export const metadata = {
  title: "Services | imediaff Global",
  description:
    "End-to-end social and digital execution for ambitious brands across Dubai and MENA.",
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
