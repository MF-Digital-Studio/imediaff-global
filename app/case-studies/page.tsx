import { redirect } from "next/navigation"
import CaseStudiesClientPage from "./case-studies-client-page"

export const metadata = {
  title: "Case Studies | imediaff Global",
  description: "Market success stories across growth, creators, and performance media.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function CaseStudiesPage() {
  redirect("/events")
  return null
}
