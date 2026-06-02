/*
  CLIENT/DEVELOPER WORKFLOW: How to add a new event
  1. Add a new object to the EVENTS array below.
  2. Set a unique `slug` (this becomes the URL, e.g., "my-new-event").
  3. Add a `coverImage` path (e.g., "/events/my-new-event/cover.jpg").
  4. (Optional) Add a `gallery` array with image paths (e.g., ["/events/my-new-event/1.jpg", "/events/my-new-event/2.jpg"]).
  5. Create/upload those images inside the `public/events/...` folder in your project.
*/

export interface EventItem {
  slug: string
  title: string
  date: string
  location: string
  region: string
  category: string
  excerpt: string
  description: string
  coverImage: string
  featured?: boolean
  stats?: {
    value: number | string
    label: string
    prefix?: string
    suffix?: string
    decimals?: number
  }[]
  gallery?: string[]
  externalUrl?: string
}

export const EVENTS: EventItem[] = [
  {
    slug: "featured-event-placeholder",
    title: "Featured Event Placeholder",
    date: "To be announced",
    location: "Location Placeholder",
    region: "Global",
    category: "Featured Event",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this placeholder with the client’s featured event details.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lorem vitae justo gravida facilisis. This placeholder content is intended to be replaced with the final event description, visuals, and event details.",
    coverImage: "/placeholder.svg",
    featured: true,
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "event-title-placeholder-01",
    title: "Event Title Placeholder 01",
    date: "To be announced",
    location: "City / Region",
    region: "MENA",
    category: "Brand Event",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This event description can be replaced by the client.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lorem vitae justo gravida facilisis. This placeholder content is intended to be replaced with the final event description, visuals, and event details.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "event-title-placeholder-02",
    title: "Event Title Placeholder 02",
    date: "Coming soon",
    location: "Global",
    region: "Global",
    category: "Creator Event",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This event description can be replaced by the client.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lorem vitae justo gravida facilisis. This placeholder content is intended to be replaced with the final event description, visuals, and event details.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "event-title-placeholder-03",
    title: "Event Title Placeholder 03",
    date: "2026",
    location: "To be announced",
    region: "TR",
    category: "Regional Event",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This event description can be replaced by the client.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lorem vitae justo gravida facilisis. This placeholder content is intended to be replaced with the final event description, visuals, and event details.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "event-title-placeholder-04",
    title: "Event Title Placeholder 04",
    date: "To be announced",
    location: "Location Placeholder",
    region: "CEE",
    category: "Workshop",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This event description can be replaced by the client.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lorem vitae justo gravida facilisis. This placeholder content is intended to be replaced with the final event description, visuals, and event details.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    slug: "event-title-placeholder-05",
    title: "Event Title Placeholder 05",
    date: "Coming soon",
    location: "City / Region",
    region: "Gulf",
    category: "Activation",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This event description can be replaced by the client.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lorem vitae justo gravida facilisis. This placeholder content is intended to be replaced with the final event description, visuals, and event details.",
    coverImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  }
]
