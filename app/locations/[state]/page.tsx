import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline'
import locationsData from '../../../data/locations.json'

interface Props {
  params: { state: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = locationsData.states[params.state as keyof typeof locationsData.states]
  
  if (!state) {
    return {
      title: 'State Not Found',
      description: 'The requested state page was not found.'
    }
  }

  return {
    title: `Drywall Repair Services in ${state.name}`,
    description: `Professional drywall repair and installation services throughout ${state.name}. Licensed, insured, and serving ${state.cities.length} cities with expert craftsmanship, same-day service, and comprehensive warranties.`,
  }
}

export async function generateStaticParams() {
  return Object.keys(locationsData.states).map((state) => ({
    state: state,
  }))
}

export default function StatePage({ params }: Props) {
  const state = locationsData.states[params.state as keyof typeof locationsData.states]
  
  if (!state) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">State Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">The requested state page was not found.</p>
          <Link href="/locations" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            View All Locations
          </Link>
        </div>
      </div>
    )
  }

  const cities = state.cities.map(citySlug => {
    const cityData = locationsData.cities[citySlug as keyof typeof locationsData.cities]
    return cityData ? { ...cityData, slug: citySlug } : null
  }).filter(Boolean)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0 bg-blue-700 opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Drywall Services in {state.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            {state.description}
          </p>
        </div>
      </div>

      {/* State Information */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Building Codes */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building Code Compliance
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              {state.buildingCodes}
            </p>
          </div>

          {/* Climate Considerations */}
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Climate Considerations
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              {state.climate}
            </p>
          </div>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cities We Serve in {state.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional drywall services in {state.cities.length} cities across {state.name}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <div key={city?.slug} className="rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-center">
                  <MapPinIcon className="h-8 w-8 text-orange-500" />
                  <h3 className="ml-3 text-xl font-bold text-gray-900">
                    {city?.name}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">{city?.description}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  <span>Response time: {city?.responseTime}</span>
                </div>
                <Link
                  href={`/locations/${state.slug}/${city?.slug}`}
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View {city?.name} Services →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for Professional Drywall Service?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact us today for a free estimate on your drywall project in {state.name}.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+12406701949"
                className="flex items-center text-lg font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call: (240) 670-1949
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}