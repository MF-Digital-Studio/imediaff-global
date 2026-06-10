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
    slug: "yumos-uzbekistan-tashkent-city-park-event",
    title: "Yumos Uzbekistan Tashkent City Park Event",
    date: "Recently Completed",
    location: "Tashkent City Park, Uzbekistan",
    region: "Uzbekistan",
    category: "Experiential Marketing / Influencer Event",
    excerpt: "The Yumos Uzbekistan Tashkent City Park Event successfully combined influencer marketing, consumer engagement and on-ground brand interaction to create a high-impact activation.",
    description: "Yumos organized a large-scale experiential marketing event at Tashkent City Park, bringing together influencers, consumers and brand enthusiasts in an immersive activation. The event generated significant online engagement, extensive content creation and strong brand visibility through influencer participation and product distribution activities.\n\nCreating Massive Brand Visibility Through Influencer-Powered Experiences.\n\nThe Yumos Uzbekistan Tashkent City Park Event successfully combined influencer marketing, consumer engagement and on-ground brand interaction to create a high-impact activation. With more than 7.3 million video views, over 650,000 visitors and hundreds of influencer-generated contents, the campaign achieved exceptional reach and awareness both online and offline.",
    coverImage: "/events/yumos-day/IMG_0151.JPG",
    featured: true,
    stats: [
      { value: 246828, label: "Engagement" },
      { value: 7350934, label: "Video Views" },
      { value: 57, label: "Influencers Attended on Day One" },
      { value: 77, label: "Contents Shared on Day One" },
      { value: 500, suffix: "+", label: "Total Contents Shared During the Activity" },
      { value: 650000, label: "Total Footfall" },
      { value: 306000, prefix: "€", label: "Earned PR Value" },
      { value: 400, suffix: "+", label: "Products Distributed" },
    ],
    gallery: [
      "/events/yumos-day/IMG_0151.JPG",
      "/events/yumos-day/IMG_0213.JPG",
      "/events/yumos-day/IMG_0359.JPG",
      "/events/yumos-day/IMG_0360.JPG",
      "/events/yumos-day/IMG_0655.JPG",
      "/events/yumos-day/IMG_0670.JPG",
      "/events/yumos-day/IMG_0696.JPG",
      "/events/yumos-day/IMG_0898.jpg",
      "/events/yumos-day/IMG_1087.jpg",
      "/events/yumos-day/IMG_1382.jpg",
      "/events/yumos-day/IMG_1482.jpg",
      "/events/yumos-day/IMG_1582-восстановлено.jpg",
      "/events/yumos-day/IMG_2249.jpg",
      "/events/yumos-day/IMG_2269.jpg",
      "/events/yumos-day/IMG_5274.jpg",
      "/events/yumos-day/IMG_9036.JPG",
      "/events/yumos-day/IMG_9037.JPG",
      "/events/yumos-day/IMG_9038.JPG",
      "/events/yumos-day/IMG_9040.JPG",
      "/events/yumos-day/IMG_9098.JPG",
      "/events/yumos-day/IMG_9663.JPG",
      "/events/yumos-day/IMG_9894.jpg"
    ]
  },
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
