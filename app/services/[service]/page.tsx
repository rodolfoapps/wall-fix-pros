import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckIcon, ClockIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import servicesData from '@/data/services.json'
import locationsData from '@/data/locations.json'
import { clampDescription, serviceLabel, locationServicePath } from '@/lib/seo'
import { serviceImages } from '@/lib/images'
import PageHero from '@/components/PageHero'
import QuoteMiniForm from '@/components/QuoteMiniForm'
import TrustBar from '@/components/TrustBar'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import ProcessSteps from '@/components/ProcessSteps'
import Reviews from '@/components/Reviews'
import { serviceFaqs } from '@/lib/faqs'
import { processSteps } from '@/lib/processSteps'

type ServicePageProps = {
  params: { service: string }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service: service,
  }))
}

export async function generateMetadata(
  { params }: ServicePageProps
): Promise<Metadata> {
  const service = servicesData[params.service as keyof typeof servicesData]
  
  if (!service) {
    return {
      title: 'Service Not Found | Wall Fix Pros',
    }
  }

  const label = serviceLabel(service.name)

  return {
    title: `${label} in MD, VA, WV & PA`,
    description: clampDescription(`Professional ${service.name.toLowerCase()} in Maryland, Virginia, West Virginia and Pennsylvania. ${service.shortDescription} Licensed, insured, free estimates.`),
    alternates: { canonical: `/services/${params.service}/` },
    keywords: [
      service.name.toLowerCase(),
      `${service.name.toLowerCase()} services`,
      `professional ${service.name.toLowerCase()}`,
      'Maryland drywall',
      'Virginia drywall',
      'Frederick MD'
    ],
    openGraph: {
      images: ['/images/og-image.jpg'],
      title: `${label} | Wall Fix Pros`,
      description: `Professional ${service.name.toLowerCase()}. ${service.shortDescription}`,
      url: `/services/${params.service}/`,
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData[params.service as keyof typeof servicesData]
  
  if (!service) {
    notFound()
  }

  const label = serviceLabel(service.name)
  const image = serviceImages[params.service] ?? serviceImages['drywall-repair']

  // Every city we serve, grouped by state, linking to the canonical service+city page under /locations/.
  const citiesByState = Object.entries(locationsData.states).map(([stateSlug, state]) => ({
    slug: stateSlug,
    name: state.name,
    cities: state.cities
      .map((citySlug) => {
        const city = locationsData.cities[citySlug as keyof typeof locationsData.cities]
        return city ? { name: city.name, slug: citySlug, isHeadquarters: city.isHeadquarters, href: locationServicePath(stateSlug, citySlug, params.service) } : null
      })
      .filter((c): c is NonNullable<typeof c> => Boolean(c)),
  }))

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <nav className="flex px-6 py-4 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-400">/</span>
          </li>
          <li>
            <Link href="/services" className="text-gray-500 hover:text-gray-700">
              Services
            </Link>
          </li>
          <li>
            <span className="text-gray-400">/</span>
          </li>
          <li>
            <span className="text-gray-900">{service.name}</span>
          </li>
        </ol>
      </nav>

      <PageHero
        src={image.hero}
        alt={image.alt}
        eyebrow={<span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/20">{service.priceRange} · {service.timeline}</span>}
        title={<>Professional {label}</>}
        subtitle={service.longDescription}
        aside={<QuoteMiniForm defaultService={params.service} context={`${service.name} hub page`} title={`Free ${service.name.toLowerCase()} estimate`} />}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href="tel:+12406701949" className="btn-primary">Call (240) 670-1949</a>
          <span className="text-sm text-ink-200">{service.warranty} · Licensed &amp; insured</span>
        </div>
      </PageHero>

      <TrustBar />

      <div className="relative px-6 lg:px-8">
        {/* Key details */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-brand-blue-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  <CurrencyDollarIcon className="h-6 w-6 mx-auto mb-2 text-brand-blue-600" />
                  Price Range
                </dt>
                <dd className="order-first text-2xl font-bold tracking-tight text-brand-blue-700">
                  {service.priceRange}
                </dd>
              </div>
              <div className="flex flex-col bg-brand-blue-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  <ClockIcon className="h-6 w-6 mx-auto mb-2 text-brand-blue-600" />
                  Timeline
                </dt>
                <dd className="order-first text-2xl font-bold tracking-tight text-brand-blue-700">
                  {service.timeline}
                </dd>
              </div>
              <div className="flex flex-col bg-brand-blue-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  <ShieldCheckIcon className="h-6 w-6 mx-auto mb-2 text-brand-blue-600" />
                  Warranty
                </dt>
                <dd className="order-first text-2xl font-bold tracking-tight text-brand-blue-700">
                  {service.warranty}
                </dd>
              </div>
              <div className="flex flex-col bg-brand-blue-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Service Area</dt>
                <dd className="order-first text-2xl font-bold tracking-tight text-brand-blue-700">
                  30+ Cities
                </dd>
                <dd className="text-sm text-gray-500">4 States</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start">
          <div>
            <p className="eyebrow">Why us</p>
            <h2 className="mt-2 section-title">Why choose our {label.toLowerCase()}</h2>
            <p className="mt-4 text-lg text-ink-600">
              {service.shortDescription}. Every job comes with a written estimate, a {service.warranty.toLowerCase()}, and a crew that cleans up.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 rounded-xl bg-ink-50 p-4 ring-1 ring-ink-200">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500 text-white">
                  <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="font-medium text-ink-900">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps
        heading={`How we handle your ${service.name.toLowerCase()} project`}
        intro={`Five steps, the same every time. The estimate you approve covers all of them.`}
        steps={processSteps[params.service] ?? service.process.map((step) => ({ title: step }))}
      />

      <Reviews
        tone="dark"
        service={params.service}
        heading={`${service.name} customers, in their own words`}
      />

      {/* Service locations, grouped by state */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="eyebrow">Where we do it</p>
          <h2 className="mt-2 section-title">{label} across four states</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-600">
            Pick your city for local response times, pricing and a page you can send to a neighbor.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {citiesByState.map((state) => (
              <div key={state.slug} className="rounded-xl bg-white p-6 shadow-card ring-1 ring-ink-200">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-ink-900">{state.name}</h3>
                  <Link href={`/locations/${state.slug}/`} className="text-sm font-semibold text-brand-600 hover:underline">
                    {state.cities.length} cities →
                  </Link>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {state.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={city.href}
                        className={`inline-block rounded-full border px-3.5 py-1.5 text-sm transition ${
                          city.isHeadquarters
                            ? 'border-brand-500 bg-brand-500 text-white hover:bg-brand-600'
                            : 'border-ink-200 text-ink-700 hover:border-brand-400 hover:text-brand-600'
                        }`}
                      >
                        {city.name}{city.isHeadquarters ? ' · HQ' : ''}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={serviceFaqs(service)} heading={`${service.name} questions`} />

      <CTABand heading={`Need ${service.name.toLowerCase()}?`} text={`${service.warranty}. Free written estimate. ${service.timeline} on most jobs.`} />
    </div>
  )
}