import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Vercel Auto Deploy - Professional Cleaning Services in Seattle, WA',
  description: 'Premier cleaning services in Seattle, Washington. Residential and commercial cleaning with reliable, professional, and eco-friendly solutions. Book your cleaning service today.',
  keywords: 'cleaning services, Seattle cleaning, residential cleaning, commercial cleaning, house cleaning, office cleaning, Washington',
  authors: [{ name: 'Test Vercel Auto Deploy' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Test Vercel Auto Deploy - Professional Cleaning Services in Seattle',
    description: 'Premier cleaning services in Seattle, Washington. Residential and commercial cleaning with reliable, professional, and eco-friendly solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Test Vercel Auto Deploy'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Vercel Auto Deploy - Professional Cleaning Services in Seattle',
    description: 'Premier cleaning services in Seattle, Washington. Residential and commercial cleaning with reliable, professional, and eco-friendly solutions.'
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
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://testvercelautodeploy.com" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}