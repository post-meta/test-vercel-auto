export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://test-vercel-auto.vercel.app/sitemap.xml',
  }
}