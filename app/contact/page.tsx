import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import PageHero from '@/components/PageHero'
import TrustBar from '@/components/TrustBar'
import FAQ from '@/components/FAQ'
import { aboutHero } from '@/lib/images'
import { generalFaqs } from '@/lib/faqs'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: { canonical: '/contact/' },
  title: 'Contact Us | Get Your Free Drywall Estimate',
  description: 'Contact Wall Fix Pros for drywall repair, installation and ceiling work. Free estimates, same-day emergency service, headquartered in Frederick, MD and serving MD, VA, WV and PA.',
  openGraph: {
    images: ['/images/og-image.jpg'],
    title: 'Contact Wall Fix Pros | Free Drywall Estimates',
    description: 'Free estimates and 24/7 emergency drywall service across MD, VA, WV and PA.',
    url: '/contact/',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageHero
        src={aboutHero.hero}
        alt={aboutHero.alt}
        title="Talk to a drywall pro today"
        subtitle="Call, text a photo, or send the form. We answer during business hours and respond to emergencies around the clock."
      >
        <a href={`tel:${PHONE_TEL}`} className="btn-primary">Call {PHONE_DISPLAY}</a>
      </PageHero>
      <TrustBar />
      <ContactForm />
      <FAQ items={generalFaqs} />
    </div>
  )
}
