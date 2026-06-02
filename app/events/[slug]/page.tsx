import { EVENTS } from "@/lib/events"
import { notFound } from "next/navigation"
import EventDetailClient from "./event-detail-client"

export function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const event = EVENTS.find((e) => e.slug === resolvedParams.slug)
  if (!event) return { title: "Event Not Found" }

  return {
    title: `${event.title} | iMediaff Global Events`,
    description: event.excerpt,
  }
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const event = EVENTS.find((e) => e.slug === resolvedParams.slug)

  if (!event) {
    notFound()
  }

  return <EventDetailClient event={event} />
}
