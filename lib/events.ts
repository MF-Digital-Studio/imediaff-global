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
    coverImage: "/events/yumos-day/1.jpg",
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
      "/events/yumos-day/1.jpg",
      "/events/yumos-day/2.jpg",
      "/events/yumos-day/3.jpg",
      "/events/yumos-day/4.jpg",
      "/events/yumos-day/5.JPG",
      "/events/yumos-day/6.jpg",
      "/events/yumos-day/7.jpg",
      "/events/yumos-day/8.jpg",
      "/events/yumos-day/9.jpg",
      "/events/yumos-day/10.JPG",
      "/events/yumos-day/11.JPG",
      "/events/yumos-day/12.JPG",
      "/events/yumos-day/13.JPG",
      "/events/yumos-day/14.JPG",
      "/events/yumos-day/15.jpg",
      "/events/yumos-day/16.JPG",
      "/events/yumos-day/17.JPG",
      "/events/yumos-day/18.JPG",
      "/events/yumos-day/19.JPG",
      "/events/yumos-day/20.JPG",
      "/events/yumos-day/21.JPG"
    ]
  }
]
