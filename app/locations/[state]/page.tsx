import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { stateImages } from '@/lib/images'
import PageHero from '@/components/PageHero'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import QuoteMiniForm from '@/components/QuoteMiniForm'
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
    description: `Professional drywall repair and installation across ${state.name}. Licensed, insured and serving ${state.cities.length} cities with expert craftsmanship and warranties.`,
    alternates: { canonical: `/locations/${params.state}/` },
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

  const image = stateImages[params.state] ?? stateImages.maryland

  return (
    <div className="bg-white">
      <PageHero
        src={image.hero}
        alt={`Drywall contractors serving ${state.name} – ${image.alt}`}
        title={<>Drywall Services in {state.name}</>}
        subtitle={state.description}
        aside={<QuoteMiniForm context={`State page: ${state.name}`} title={`Free estimate in ${state.name}`} />}
      />

      <TrustBar />

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

      <CTABand heading={`Drywall contractors across ${state.name}`} />
    </div>
  )
}