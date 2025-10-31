import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Vercel Auto Deploy - Premier Cleaning Services in Seattle, WA',
  description: 'Professional cleaning services in Seattle, Washington. Residential and commercial cleaning with reliable, eco-friendly solutions. Book your cleaning service today.',
  keywords: 'cleaning services Seattle, house cleaning Seattle WA, commercial cleaning, residential cleaning, eco-friendly cleaning',
  authors: [{ name: 'Test Vercel Auto Deploy' }],
  creator: 'Test Vercel Auto Deploy',
  publisher: 'Test Vercel Auto Deploy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://test-vercel-auto-deploy.vercel.app'),
  openGraph: {
    title: 'Test Vercel Auto Deploy - Premier Cleaning Services in Seattle, WA',
    description: 'Professional cleaning services in Seattle, Washington. Residential and commercial cleaning with reliable, eco-friendly solutions.',
    url: 'https://test-vercel-auto-deploy.vercel.app',
    siteName: 'Test Vercel Auto Deploy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Vercel Auto Deploy - Premier Cleaning Services in Seattle, WA',
    description: 'Professional cleaning services in Seattle, Washington. Residential and commercial cleaning with reliable, eco-friendly solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <link rel="canonical" href="https://test-vercel-auto-deploy.vercel.app" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}