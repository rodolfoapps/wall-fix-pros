import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import TrustBar from '@/components/TrustBar'
import CTABand from '@/components/CTABand'
import QuoteMiniForm from '@/components/QuoteMiniForm'
import { stateImages } from '@/lib/images'
import Link from 'next/link'
import { MapPinIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline'
import locationsData from '../../data/locations.json'

export const metadata: Metadata = {
  alternates: { canonical: '/locations/' },
  title: 'Service Areas | MD, VA, WV, PA Drywall Services',
  description: 'Wall Fix Pros serves 33 cities across Maryland, Virginia, West Virginia, and Pennsylvania. Find drywall repair services in your area.',
}

export default function LocationsPage() {
  const states = Object.entries(locationsData.states).map(([slug, state]) => {
    const cities = state.cities.map(citySlug => {
      const cityData = locationsData.cities[citySlug as keyof typeof locationsData.cities]
      return cityData ? { 
        ...cityData, 
        slug: citySlug,
        stateSlug: slug
      } : null
    }).filter(Boolean)

    return {
      ...state,
      slug,
      cities
    }
  })

  return (
    <div className="bg-white">
      <PageHero
        src={stateImages.maryland.hero}
        alt={stateImages.maryland.alt}
        title="Drywall contractors in 33 cities across four states"
        subtitle="Headquartered in Frederick, MD. Same-day service around Frederick, 24 to 48 hours across Maryland, Northern Virginia, the Eastern Panhandle and south-central Pennsylvania."
        aside={<QuoteMiniForm context="Locations index" />}
      />

      <TrustBar />

      {/* States Overview */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            4 States, 33 Cities, One Trusted Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Headquartered in Frederick, MD, we provide fast, reliable drywall repair services throughout the region.
          </p>
        </div>

        {/* States Grid with Links */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {states.map((state) => (
            <div key={state.slug} className="overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-ink-200">
              <Link href={`/locations/${state.slug}`} className="relative block aspect-[3/1]">
                <Image src={stateImages[state.slug].hero} alt={stateImages[state.slug].alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </Link>
              <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-blue-700">
                  <Link 
                    href={`/locations/${state.slug}`}
                    className="hover:text-blue-800 transition-colors duration-200"
                  >
                    {state.name}
                  </Link>
                </h3>
                <Link 
                  href={`/locations/${state.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                >
                  View State Page
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm">
                {state.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {state.cities.map((city) => (
                  <Link
                    key={city?.slug}
                    href={`/locations/${state.slug}/${city?.slug}`}
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center flex-1">
                      {city?.isHeadquarters ? (
                        <StarIcon className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                      ) : (
                        <MapPinIcon className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <span className="text-gray-900 font-medium group-hover:text-blue-700 transition-colors duration-200">
                          {city?.name}
                        </span>
                        {city?.isHeadquarters && (
                          <span className="ml-2 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                            HQ
                          </span>
                        )}
                        <div className="text-xs text-gray-500 mt-1">
                          Response: {city?.responseTime}
                        </div>
                      </div>
                    </div>
                    <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  href={`/locations/${state.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View all {state.name} services
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find Your Local Service
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick access to all our service locations
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {states.map((state) => (
              <div key={state.slug} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <MapPinIcon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">{state.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {state.cities.length} cities served
                </p>
                <Link
                  href={`/locations/${state.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View {state.abbreviation} Locations
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
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
              Don't See Your City Listed?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              We may still serve your area. Contact us to check availability and get a free estimate.
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
                className="text-lg font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call (240) 670-1949
              </a>
            </div>
          </div>
        </div>
      </div>
      <CTABand heading="Not sure if we cover your area?" text="If you are within about 50 miles of Frederick, MD, we almost certainly do. Call and ask." />
    </div>
  )
}
