import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Vercel Auto Deploy - Professional Cleaning Services in Seattle, WA',
  description: 'Premier cleaning services in Seattle, Washington. Residential and commercial cleaning solutions with reliable, professional staff. Book your cleaning service today.',
  keywords: 'cleaning services Seattle, house cleaning, commercial cleaning, residential cleaning, maid service, office cleaning, Washington',
  authors: [{ name: 'Test Vercel Auto Deploy' }],
  creator: 'Test Vercel Auto Deploy',
  publisher: 'Test Vercel Auto Deploy',
  metadataBase: new URL('https://test-vercel-auto-deploy.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Test Vercel Auto Deploy - Professional Cleaning Services in Seattle, WA',
    description: 'Premier cleaning services in Seattle, Washington. Residential and commercial cleaning solutions with reliable, professional staff.',
    siteName: 'Test Vercel Auto Deploy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Test Vercel Auto Deploy - Cleaning Services Seattle'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Vercel Auto Deploy - Professional Cleaning Services in Seattle, WA',
    description: 'Premier cleaning services in Seattle, Washington. Residential and commercial cleaning solutions with reliable, professional staff.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body>
        <div id="root">
          <header role="banner">
            <nav role="navigation" aria-label="Main navigation">
            </nav>
          </header>
          <main role="main">
            {children}
          </main>
          <footer role="contentinfo">
          </footer>
        </div>
      </body>
    </html>
  )
}