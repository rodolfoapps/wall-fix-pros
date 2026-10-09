import type { Metadata } from 'next'
import QuoteForm from './QuoteForm'

export const metadata: Metadata = {
  alternates: { canonical: '/quote/' },
  title: 'Free Quote Request | Professional Drywall Services',
  description: 'Request your free drywall service quote online. Professional installation, repair, and restoration services across Maryland, Virginia, West Virginia, and Pennsylvania. Fast response guaranteed.',
  keywords: ['free drywall quote', 'drywall estimate', 'drywall repair quote', 'Maryland drywall estimate', 'Virginia drywall quote'],
  openGraph: {
    images: ['/images/og-image.jpg'],
    title: 'Free Drywall Quote Request | Wall Fix Pros',
    description: 'Get your free drywall service estimate. Professional repair and installation across MD, VA, WV, PA. Fast response guaranteed.',
    url: '/quote/',
  },
}

export default function QuotePage() {
  return <QuoteForm />
}