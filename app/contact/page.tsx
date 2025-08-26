import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Get Your Free Drywall Estimate',
  description: 'Contact Wall Fix Pros for your drywall project. Get a free estimate, schedule service, or ask questions. Serving Maryland, Virginia, West Virginia, and Pennsylvania with 24/7 emergency service.',
  keywords: ['contact drywall contractor', 'free drywall estimate', 'drywall consultation', 'Maryland drywall contact', 'Virginia drywall quote'],
  openGraph: {
    title: 'Contact Wall Fix Pros | Free Drywall Estimates',
    description: 'Contact us for professional drywall services. Free estimates, 24/7 emergency service across MD, VA, WV, PA.',
    url: 'https://wallfixpros.com/contact',
  },
}

export default function ContactPage() {
  return <ContactForm />
}