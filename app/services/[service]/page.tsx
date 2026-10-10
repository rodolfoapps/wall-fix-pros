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
import { serviceFaqs } from '@/lib/faqs'

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

  // Every city we serve, linking to the canonical service+city page under /locations/.
  const allCities = Object.entries(locationsData.states).flatMap(([stateSlug, state]) =>
    state.cities.map(citySlug => {
      const city = locationsData.cities[citySlug as keyof typeof locationsData.cities]
      return city ? {
        name: city.name,
        stateName: state.name,
        slug: citySlug,
        href: locationServicePath(stateSlug, citySlug, params.service)
      } : null
    }).filter(Boolean)
  )

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
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-orange-600">Quality Service</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our {service.name}?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced team delivers exceptional {service.name.toLowerCase()} services with attention to detail and customer satisfaction.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange-500">
                      <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {benefit}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <ProcessSteps
        heading={`How we handle your ${service.name.toLowerCase()} project`}
        steps={service.process.map((step) => ({ title: step }))}
      />

      {/* Service locations */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {label} Available In
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Professional {service.name.toLowerCase()} services throughout our service area
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {allCities.map((city) => city && (
              <div key={city.slug} className="text-center p-4 border border-gray-200 rounded-lg hover:border-brand-blue-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900">{city.name}</h3>
                <p className="text-sm text-gray-600">{city.stateName}</p>
                <Link
                  href={city.href}
                  className="mt-2 inline-block text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700"
                >
                  {service.name} in {city.name} →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/locations"
              className="rounded-md border border-transparent bg-brand-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-brand-blue-700"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </div>

      <FAQ items={serviceFaqs(service)} heading={`${service.name} questions`} />

      <CTABand heading={`Need ${service.name.toLowerCase()}?`} text={`${service.warranty}. Free written estimate. ${service.timeline} on most jobs.`} />
    </div>
  )
}