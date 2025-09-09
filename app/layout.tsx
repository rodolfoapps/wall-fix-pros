import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PerformanceOptimizations from '@/components/PerformanceOptimizations'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wallfixpros.com'),
  title: {
    default: 'Wall Fix Pros - Professional Drywall & Wall Repair Services | MD, VA, WV, PA',
    template: '%s | Wall Fix Pros'
  },
  description: 'Professional drywall installation, repair, and wall services in Maryland, Virginia, West Virginia, and Pennsylvania. Licensed, insured, and trusted since 2015. Get your free quote today.',
  keywords: ['drywall installation', 'drywall repair', 'wall repair', 'Maryland drywall', 'Virginia drywall', 'Frederick MD', 'professional drywall contractors'],
  authors: [{ name: 'Wall Fix Pros' }],
  creator: 'Wall Fix Pros',
  publisher: 'Wall Fix Pros',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.wallfixpros.com',
    siteName: 'Wall Fix Pros',
    title: 'Wall Fix Pros - Professional Drywall & Wall Repair Services',
    description: 'Professional drywall installation, repair, and wall services in Maryland, Virginia, West Virginia, and Pennsylvania.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wall Fix Pros - Professional Drywall Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wall Fix Pros - Professional Drywall & Wall Repair Services',
    description: 'Professional drywall installation, repair, and wall services in Maryland, Virginia, West Virginia, and Pennsylvania.',
    images: ['/images/twitter-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wallfixpros.com" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Wall Fix Pros",
              "image": "https://wallfixpros.com/images/logo.jpg",
              "description": "Professional drywall installation, repair, and wall services",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4580 Mack Ave Suite",
                "addressLocality": "Frederick",
                "addressRegion": "MD",
                "postalCode": "21703",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.4143,
                "longitude": -77.4105
              },
              "telephone": "+1-301-555-0199",
              "url": "https://www.wallfixpros.com",
              "openingHours": [
                "Mo-Fr 07:00-19:00",
                "Sa 08:00-18:00", 
                "Su 09:00-17:00"
              ],
              "priceRange": "$$",
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Maryland"
                },
                {
                  "@type": "State", 
                  "name": "Virginia"
                },
                {
                  "@type": "State",
                  "name": "West Virginia"
                },
                {
                  "@type": "State",
                  "name": "Pennsylvania"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <PerformanceOptimizations />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}