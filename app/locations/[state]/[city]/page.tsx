import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPinIcon, ClockIcon, PhoneIcon, StarIcon } from '@heroicons/react/24/outline'
import locationsData from '../../../../data/locations.json'
import servicesData from '../../../../data/services.json'

interface Props {
  params: { state: string; city: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = locationsData.cities[params.city as keyof typeof locationsData.cities]
  const state = locationsData.states[params.state as keyof typeof locationsData.states]
  
  if (!city || !state) {
    return {
      title: 'City Not Found - Wall Fix Pros',
      description: 'The requested city page was not found.'
    }
  }

  return {
    title: `Drywall Services ${city.name}, ${state.abbreviation}${city.isHeadquarters ? ' - Headquarters' : ''}`,
    description: `Professional drywall repair and installation services in ${city.name}, ${state.abbreviation}. ${city.isHeadquarters ? 'Our headquarters location with' : 'Offering'} fast response times, expert craftsmanship, and comprehensive drywall solutions for residential and commercial projects.`,
  }
}

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = []
  
  Object.entries(locationsData.states).forEach(([stateSlug, state]) => {
    state.cities.forEach((citySlug) => {
      params.push({
        state: stateSlug,
        city: citySlug,
      })
    })
  })
  
  return params
}

export default function CityPage({ params }: Props) {
  const city = locationsData.cities[params.city as keyof typeof locationsData.cities]
  const state = locationsData.states[params.state as keyof typeof locationsData.states]
  
  if (!city || !state) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">City Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">The requested city page was not found.</p>
          <Link href="/locations" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            View All Locations
          </Link>
        </div>
      </div>
    )
  }

  const services = Object.values(servicesData)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0 bg-blue-700 opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex items-center mb-4">
            {city.isHeadquarters && (
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                Headquarters
              </div>
            )}
            <div className="flex items-center text-blue-100">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>{city.name}, {state.abbreviation}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Drywall Services in {city.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            {city.description}
          </p>
          <div className="mt-8 flex items-center space-x-6 text-blue-100">
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              <span>Response time: {city.responseTime}</span>
            </div>
            {city.emergencyService && (
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 mr-2" />
                <span>24/7 Emergency Service</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* City Info */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Drywall Services in {city.name}
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              {city.isHeadquarters 
                ? `As our headquarters location, ${city.name} receives our fastest response times and most comprehensive services. Our main office provides same-day emergency services and competitive pricing for all drywall projects.`
                : `We proudly serve ${city.name} with the same level of professional drywall services that have made us the region's trusted experts. Our experienced team brings quality craftsmanship to every project.`
              }
            </p>

            {/* Neighborhoods */}
            {city.neighborhoods && (
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Neighborhoods We Serve
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {city.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-orange-500 mr-3" />
                      <span className="text-gray-700">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specialties */}
            {city.specialties && (
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Specialties in {city.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {city.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-3" />
                      <span className="text-gray-700 font-medium">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Service Information
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Population:</span>
                  <span className="ml-2 text-gray-600">{city.population}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Response Time:</span>
                  <span className="ml-2 text-gray-600">{city.responseTime}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Emergency Service:</span>
                  <span className="ml-2 text-gray-600">
                    {city.emergencyService ? 'Available 24/7' : 'Standard hours'}
                  </span>
                </div>
                {city.zipCodes && (
                  <div>
                    <span className="font-medium text-gray-900">Zip Codes:</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {city.zipCodes.map((zip, index) => (
                        <span key={index} className="bg-white px-2 py-1 rounded text-xs">
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">
                Get Your Free Quote
              </h3>
              <p className="text-blue-700 mb-4">
                Ready to start your drywall project in {city.name}?
              </p>
              <div className="space-y-3">
                <Link
                  href="/quote"
                  className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 inline-block text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+12406701949"
                  className="w-full bg-white text-blue-600 border border-blue-300 px-4 py-2 rounded-md hover:bg-blue-50 inline-block text-center"
                >
                  Call (240) 670-1949
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services in {city.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete drywall and wall repair services for {city.name} residents and businesses
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <div key={service.slug} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-4 text-gray-600">{service.shortDescription}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <span className="font-medium">{service.priceRange}</span> • {service.timeline}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  {service.name} Services →
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
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact us today for a free estimate on your drywall project in {city.name}, {state.abbreviation}.
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