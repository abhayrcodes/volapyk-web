import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/images/', '/docs/', '/fonts/'],
    },
    sitemap: 'https://volapyk.dev/sitemap.xml',
  }
}
