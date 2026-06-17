import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/draft/',
        '/preview/',
        '/case-studies',
      ],
    },
    sitemap: 'https://imediaffglobal.com/sitemap.xml',
  }
}
