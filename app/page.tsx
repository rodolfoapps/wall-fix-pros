import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckIcon, PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import servicesData from '@/data/services.json'
import locationsData from '@/data/locations.json'
import { serviceImages, stateImages, homeHero } from '@/lib/images'
import { PHONE_DISPLAY, PHONE_TEL, locationServicePath } from '@/lib/seo'
import { generalFaqs } from '@/lib/faqs'
import PageHero from '@/components/PageHero'
import QuoteMiniForm from '@/components/QuoteMiniForm'
import TrustBar from '@/components/TrustBar'
import ServiceIcon from '@/components/ServiceIcon'
import ProcessSteps from '@/components/ProcessSteps'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: 'Professional Drywall & Wall Repair Services | MD, VA, WV, PA',
  description: 'Wall Fix Pros provides expert drywall installation, repair, patching, and wall services in Maryland, Virginia, West Virginia, and Pennsylvania. Licensed, insured, and serving 30+ cities since 2015. Get your free quote today!',
  keywords: ['drywall contractors', 'wall repair services', 'drywall installation', 'Frederick MD drywall', 'Maryland drywall repair', 'Virginia drywall contractors', 'professional drywall services'],
  openGraph: {
    images: ['/images/og-image.jpg'],
    title: 'Professional Drywall & Wall Repair Services',
    description: 'Expert drywall installation, repair, and wall services serving MD, VA, WV, PA. Licensed & insured since 2015.',
    url: '/',
  },
}

const services = Object.values(servicesData)

const reasons = [
  { title: 'We match the texture, not just fill the hole', text: 'Orange peel, knockdown, smooth, skip trowel. A repair you can find afterwards is not finished.' },
  { title: 'Honest call on patch vs. replace', text: 'If a $200 patch will hold, we say so. If the board is soft from water, we say that too.' },
  { title: 'Based in Frederick, on site fast', text: 'Same-day emergency response around Frederick, 24 to 48 hours across the rest of our area.' },
  { title: 'Written estimate before any work', text: 'Price, scope and schedule on paper. The number you approve is the number you pay.' },
]

const featuredCities = ['frederick', 'baltimore', 'rockville', 'bethesda', 'alexandria', 'arlington', 'leesburg', 'hagerstown']

export default function HomePage() {
  return (
    <div className="bg-white">
      <PageHero
        src={homeHero.hero}
        alt={homeHero.alt}
        eyebrow={<span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/20">Headquartered in Frederick, MD · Serving MD, VA, WV & PA</span>}
        title={<>Drywall repair &amp; installation done right the first time</>}
        subtitle="Holes, cracks, water damage, new walls and ceilings. Licensed and insured drywall contractors with free written estimates and a workmanship warranty."
        size="tall"
        aside={<QuoteMiniForm context="Homepage" />}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={`tel:${PHONE_TEL}`} className="btn-primary">
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
          <Link href="/services/" className="btn-ghost-light">
            See all services <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </PageHero>

      <TrustBar />

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-2 section-title">Every kind of wall and ceiling work, one crew</h2>
          <p className="mt-4 text-lg text-ink-600">
            From a doorknob hole to a full basement build-out. Pick the job and we will tell you what it takes.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}/`}
                className="group flex h-full flex-col rounded-xl bg-white p-5 shadow-card ring-1 ring-ink-200 transition hover:-translate-y-0.5 hover:ring-brand-400"
              >
                <ServiceIcon slug={service.slug} size={56} />
                <h3 className="mt-4 text-lg font-bold text-ink-900 group-hover:text-brand-600">{service.name}</h3>
                <p className="mt-1 flex-1 text-sm text-ink-500">{service.shortDescription}</p>
                <p className="mt-4 text-sm font-semibold text-brand-600">{service.priceRange}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Why us: photo + points */}
      <section className="bg-ink-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
            <Image
              src={serviceImages['drywall-repair'].hero}
              alt={serviceImages['drywall-repair'].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Why Wall Fix Pros</p>
            <h2 className="mt-2 section-title">Repairs you cannot find afterwards</h2>
            <ul className="mt-8 space-y-6">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-500 text-white">
                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink-900">{r.title}</h3>
                    <p className="mt-1 text-ink-600">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/quote/" className="btn-primary">Get a free estimate</Link>
              <Link href="/about/" className="btn-outline">About the company</Link>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Service areas */}
      <section className="bg-ink-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-brand-400">Where we work</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">33 cities across four states</h2>
            </div>
            <Link href="/locations/" className="text-sm font-semibold text-ink-200 hover:text-white">
              All service areas <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(locationsData.states).map(([slug, state]) => (
              <li key={slug}>
                <Link href={`/locations/${slug}/`} className="group block overflow-hidden rounded-xl bg-ink-800 ring-1 ring-white/10">
                  <div className="relative aspect-[3/2]">
                    <Image src={stateImages[slug].card} alt={stateImages[slug].alt} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{state.name}</h3>
                    <p className="text-sm text-ink-300">{state.cities.length} cities</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2">
            {featuredCities.map((slug) => {
              const city = locationsData.cities[slug as keyof typeof locationsData.cities]
              return city ? (
                <li key={slug}>
                  <Link href={locationServicePath(city.state, slug, 'drywall-repair')} className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-sm text-ink-200 hover:border-brand-400 hover:text-white">
                    Drywall repair in {city.name}
                  </Link>
                </li>
              ) : null
            })}
          </ul>
        </div>
      </section>

      <FAQ items={generalFaqs} />

      <CTABand />
    </div>
  )
}
