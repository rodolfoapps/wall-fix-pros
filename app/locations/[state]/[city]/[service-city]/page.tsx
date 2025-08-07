import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPinIcon, ClockIcon, PhoneIcon, CheckIcon } from '@heroicons/react/24/outline'
import locationsData from '../../../../../data/locations.json'
import servicesData from '../../../../../data/services.json'

interface Props {
  params: { state: string; city: string; 'service-city': string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = locationsData.cities[params.city as keyof typeof locationsData.cities]
  const state = locationsData.states[params.state as keyof typeof locationsData.states]
  
  // Extract service from service-city parameter (e.g., "drywall-repair-frederick" -> "drywall-repair")
  const serviceSlug = params['service-city'].replace(`-${params.city}`, '')
  const service = servicesData[serviceSlug as keyof typeof servicesData]
  
  if (!service || !city || !state) {
    return {
      title: 'Service Not Found - Wall Fix Pros',
      description: 'The requested service page was not found.'
    }
  }

  return {
    title: `${service.name} ${city.name}, ${state.abbreviation} | Wall Fix Pros ${city.isHeadquarters ? '- Headquarters' : ''}`,
    description: `Professional ${service.name.toLowerCase()} services in ${city.name}, ${state.abbreviation}. ${service.shortDescription} ${city.isHeadquarters ? 'Headquarters location with fastest response times.' : 'Expert local service.'}`,
  }
}

export async function generateStaticParams() {
  const params: { state: string; city: string; 'service-city': string }[] = []
  
  Object.entries(locationsData.states).forEach(([stateSlug, state]) => {
    state.cities.forEach((citySlug) => {
      Object.keys(servicesData).forEach((serviceSlug) => {
        params.push({
          state: stateSlug,
          city: citySlug,
          'service-city': `${serviceSlug}-${citySlug}`,
        })
      })
    })
  })
  
  return params
}

export default function LocationServicePage({ params }: Props) {
  const city = locationsData.cities[params.city as keyof typeof locationsData.cities]
  const state = locationsData.states[params.state as keyof typeof locationsData.states]
  
  // Extract service from service-city parameter
  const serviceSlug = params['service-city'].replace(`-${params.city}`, '')
  const service = servicesData[serviceSlug as keyof typeof servicesData]
  
  if (!service || !city || !state) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Service Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">The requested service page was not found.</p>
          <Link href="/services" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            View All Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0 bg-blue-700 opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex items-center mb-4">
            {city.isHeadquarters && (
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                Headquarters Location
              </div>
            )}
            <div className="flex items-center text-blue-100">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>{city.name}, {state.abbreviation}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.name} in {city.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Professional {service.name.toLowerCase()} services in {city.name}, {state.name}. 
            {city.isHeadquarters 
              ? ' Our headquarters location provides the fastest response times and most comprehensive service options.'
              : ' Quality craftsmanship with the same professional standards we maintain throughout our service area.'
            }
          </p>
          <div className="mt-8 flex items-center space-x-6 text-blue-100">
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              <span>Response: {city.responseTime}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">{service.priceRange}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service & Location Details */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Local {service.name} Experts in {city.name}
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our {city.name} team understands the unique needs of {state.name} properties. 
              {city.isHeadquarters 
                ? ` As our headquarters location, ${city.name} receives priority scheduling, emergency response capabilities, and our most competitive pricing for all ${service.name.toLowerCase()} projects.`
                : ` We bring years of experience serving ${city.name} residents and businesses with reliable ${service.name.toLowerCase()} solutions.`
              }
            </p>

            {/* Local Expertise */}
            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Why {city.name} Chooses Us for {service.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-blue-900">Local Expertise</span>
                    <p className="text-blue-700 text-sm mt-1">Deep understanding of {city.name} building requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-blue-900">Fast Response</span>
                    <p className="text-blue-700 text-sm mt-1">{city.responseTime} typical response in {city.name}</p>
                  </div>
                </div>
                {city.isHeadquarters && (
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-blue-900">Headquarters Priority</span>
                      <p className="text-blue-700 text-sm mt-1">Priority scheduling and emergency service</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-blue-900">Quality Guarantee</span>
                    <p className="text-blue-700 text-sm mt-1">{service.warranty} on all work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Benefits */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Complete {service.name} Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas in City */}
            {city.neighborhoods && (
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.name} Service Areas in {city.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide {service.name.toLowerCase()} throughout all areas of {city.name}, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {city.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="h-2 w-2 rounded-full bg-orange-500 mr-3" />
                      <span className="text-gray-700 font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-900 mb-4">
                Get Your Free {service.name} Quote
              </h3>
              <p className="text-orange-800 mb-4 text-sm">
                Ready to start your {service.name.toLowerCase()} project in {city.name}?
              </p>
              <div className="space-y-3">
                <Link
                  href="/quote"
                  className="w-full bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-600 inline-block text-center font-medium"
                >
                  Get Free Quote Today
                </Link>
                <a
                  href="tel:+12406701949"
                  className="w-full bg-white text-orange-600 border-2 border-orange-300 px-4 py-3 rounded-md hover:bg-orange-50 inline-block text-center font-medium"
                >
                  Call (240) 670-1949
                </a>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Service Information
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Price Range:</span>
                  <span className="text-gray-600">{service.priceRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Timeline:</span>
                  <span className="text-gray-600">{service.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Warranty:</span>
                  <span className="text-gray-600">{service.warranty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Response:</span>
                  <span className="text-gray-600">{city.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Local Info */}
            <div className="mt-6 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">
                {city.name} Service Details
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-blue-900">Population:</span>
                  <span className="ml-2 text-blue-700">{city.population}</span>
                </div>
                {city.emergencyService && (
                  <div>
                    <span className="font-medium text-blue-900">Emergency Service:</span>
                    <span className="ml-2 text-green-600 font-medium">Available 24/7</span>
                  </div>
                )}
                {city.zipCodes && (
                  <div>
                    <span className="font-medium text-blue-900 block mb-2">Service Zip Codes:</span>
                    <div className="flex flex-wrap gap-1">
                      {city.zipCodes.map((zip, index) => (
                        <span key={index} className="bg-white px-2 py-1 rounded text-xs border">
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional {service.name} in {city.name}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact Wall Fix Pros today for expert {service.name.toLowerCase()} services in {city.name}, {state.abbreviation}. 
              {city.isHeadquarters ? ' Headquarters location with priority scheduling available.' : ''}
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