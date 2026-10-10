import type { Metadata } from 'next'
import QuoteForm from './QuoteForm'
import PageHero from '@/components/PageHero'
import TrustBar from '@/components/TrustBar'
import ProcessSteps from '@/components/ProcessSteps'
import FAQ from '@/components/FAQ'
import { homeHero } from '@/lib/images'
import { generalFaqs } from '@/lib/faqs'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: { canonical: '/quote/' },
  title: 'Free Quote Request | Professional Drywall Services',
  description: 'Request a free drywall estimate online. Repair, installation, ceilings, water damage and texturing across Maryland, Virginia, West Virginia and Pennsylvania. Written pricing, no obligation.',
  openGraph: {
    images: ['/images/og-image.jpg'],
    title: 'Free Drywall Quote Request | Wall Fix Pros',
    description: 'Written drywall estimates with no obligation. MD, VA, WV and PA.',
    url: '/quote/',
  },
}

export default function QuotePage() {
  return (
    <div className="bg-white">
      <PageHero
        src={homeHero.hero}
        alt={homeHero.alt}
        eyebrow={<span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/20">Free · No obligation · Usually same day</span>}
        title="Get your free drywall estimate"
        subtitle="Tell us what happened and where. We reply within one business hour with next steps, and the price you approve is the price you pay."
      >
        <a href={`tel:${PHONE_TEL}`} className="btn-primary">Prefer to call? {PHONE_DISPLAY}</a>
      </PageHero>
      <TrustBar />
      <QuoteForm />
      <ProcessSteps heading="What happens after you send it" />
      <FAQ items={generalFaqs} />
    </div>
  )
}
