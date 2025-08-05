import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckIcon, ClockIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import servicesData from '@/data/services.json'
import locationsData from '@/data/locations.json'

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

  return {
    title: `${service.name} Services | Wall Fix Pros MD, VA, WV, PA`,
    description: `Professional ${service.name.toLowerCase()} services in Maryland, Virginia, West Virginia, and Pennsylvania. ${service.shortDescription}. Licensed, insured, and trusted since 2015.`,
    keywords: [
      service.name.toLowerCase(),
      `${service.name.toLowerCase()} services`,
      `professional ${service.name.toLowerCase()}`,
      'Maryland drywall',
      'Virginia drywall',
      'Frederick MD'
    ],
    openGraph: {
      title: `${service.name} Services | Wall Fix Pros`,
      description: `Professional ${service.name.toLowerCase()} services. ${service.shortDescription}`,
      url: `https://wallfixpros.com/services/${params.service}`,
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData[params.service as keyof typeof servicesData]
  
  if (!service) {
    notFound()
  }

  // Get all cities for service area links
  const allCities = Object.values(locationsData.states).flatMap(state => 
    state.cities.map(citySlug => {
      const city = locationsData.cities[citySlug as keyof typeof locationsData.cities]
      return city ? {
        name: city.name,
        state: city.state,
        slug: citySlug,
        href: `/services/${params.service}/${citySlug}-${params.service}`
      } : null
    }).filter(Boolean)
  ).slice(0, 12) // Show first 12 cities

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

      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Professional {service.name} Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {service.longDescription}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-brand-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-brand-orange-600"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:+13015550199" 
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-brand-blue-600"
              >
                Call: (301) 555-0199
              </a>
            </div>
          </div>
        </div>

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

      {/* Process section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-orange-600">Our Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Handle Your {service.name} Project
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our systematic approach ensures quality results and customer satisfaction on every project.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={step} className="relative flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-600 text-white font-semibold">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Step {index + 1}: {step}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service locations */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {service.name} Services Available In
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Professional {service.name.toLowerCase()} services throughout our service area
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {allCities.map((city) => city && (
              <div key={city.slug} className="text-center p-4 border border-gray-200 rounded-lg hover:border-brand-blue-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900">{city.name}</h3>
                <p className="text-sm text-gray-600 capitalize">{city.state.replace('-', ' ')}</p>
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

      {/* CTA section */}
      <div className="bg-brand-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for Professional {service.name}?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get a free estimate for your {service.name.toLowerCase()} project. Our experienced team is ready to help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-brand-blue-600 shadow-sm hover:bg-gray-50"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+13015550199"
                className="text-lg font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call: (301) 555-0199
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}