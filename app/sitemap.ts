import type { MetadataRoute } from 'next'
import { EVENTS } from '@/lib/events'
import { BLOG_POSTS } from '@/lib/blog-data'

const baseUrl = 'https://imediaffglobal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Priority 1.0 (Home page)
  sitemapEntries.push({
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  })

  // Priority 0.8 (Main marketing pages)
  const mainPages = [
    '/about',
    '/services',
    '/brands',
    '/affiliate-programs',
    '/talent',
    '/talent/azerbaijan',
    '/talent/europe',
    '/talent/gulf',
    '/talent/turkey',
    '/events',
    '/blog',
    '/contact',
    '/iletisim',
    '/influencerlar',
    '/isletmeler',
    '/projeler'
  ]

  mainPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  // Priority 0.3 (Legal pages)
  const legalPages = [
    '/kvkk'
  ]

  legalPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    })
  })

  // Priority 0.6 (Dynamic Event pages)
  if (EVENTS && EVENTS.length > 0) {
    EVENTS.forEach((event) => {
      sitemapEntries.push({
        url: `${baseUrl}/events/${event.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  }

  // Priority 0.6 (Dynamic Blog pages)
  if (BLOG_POSTS && BLOG_POSTS.length > 0) {
    BLOG_POSTS.forEach((post) => {
      sitemapEntries.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  }

  return sitemapEntries
}
