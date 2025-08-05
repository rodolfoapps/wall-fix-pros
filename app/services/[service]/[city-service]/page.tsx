import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPinIcon, ClockIcon, PhoneIcon, CheckIcon } from '@heroicons/react/24/outline'
import locationsData from '../../../../data/locations.json'
import servicesData from '../../../../data/services.json'

interface Props {
  params: { service: string; 'city-service': string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData[params.service as keyof typeof servicesData]
  
  // Extract city from city-service parameter (e.g., "frederick-drywall-repair" -> "frederick")
  const citySlug = params['city-service'].replace(`-${params.service}`, '')
  const city = locationsData.cities[citySlug as keyof typeof locationsData.cities]
  
  if (!service || !city) {
    return {
      title: 'Service Not Found - Wall Fix Pros',
      description: 'The requested service page was not found.'
    }
  }

  return {
    title: `${service.name} ${city.name}, ${city.stateAbbrev} | Wall Fix Pros ${city.isHeadquarters ? '- Headquarters' : ''}`,
    description: `Professional ${service.name.toLowerCase()} services in ${city.name}, ${city.stateAbbrev}. ${service.shortDescription} ${city.isHeadquarters ? 'Headquarters location with fastest response times.' : 'Expert local service.'}`,
  }
}

export async function generateStaticParams() {
  const params: { service: string; 'city-service': string }[] = []
  
  Object.keys(servicesData).forEach((serviceSlug) => {
    Object.entries(locationsData.cities).forEach(([citySlug, city]) => {
      params.push({
        service: serviceSlug,
        'city-service': `${citySlug}-${serviceSlug}`,
      })
    })
  })
  
  return params
}

export default function ServiceCityPage({ params }: Props) {
  const service = servicesData[params.service as keyof typeof servicesData]
  
  // Extract city from city-service parameter
  const citySlug = params['city-service'].replace(`-${params.service}`, '')
  const city = locationsData.cities[citySlug as keyof typeof locationsData.cities]
  const state = city ? locationsData.states[city.state as keyof typeof locationsData.states] : null
  
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
            {service.longDescription} 
            {city.isHeadquarters 
              ? ' As our headquarters location, we provide the fastest response times and most competitive pricing.'
              : ' Professional service with the same quality standards we maintain throughout our service area.'
            }
          </p>
          <div className="mt-8 flex items-center space-x-6 text-blue-100">
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              <span>Response time: {city.responseTime}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">{service.priceRange}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expert {service.name} in {city.name}
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              {city.isHeadquarters 
                ? `Our headquarters team in ${city.name} specializes in ${service.name.toLowerCase()} with unmatched expertise and the fastest response times in our service area. We maintain our highest service standards at competitive pricing.`
                : `Our experienced team provides professional ${service.name.toLowerCase()} services throughout ${city.name} and surrounding areas. We bring the same quality craftsmanship and expertise that has made us the region's trusted drywall professionals.`
              }
            </p>

            {/* Service Benefits */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Why Choose Our {service.name} in {city.name}
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

            {/* Process */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Our {service.name} Process
              </h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Information */}
            {city.neighborhoods && (
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.name} Areas in {city.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide {service.name.toLowerCase()} services throughout all neighborhoods in {city.name}:
                </p>
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
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Service Details
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Price Range:</span>
                  <span className="ml-2 text-gray-600">{service.priceRange}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Timeline:</span>
                  <span className="ml-2 text-gray-600">{service.timeline}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Warranty:</span>
                  <span className="ml-2 text-gray-600">{service.warranty}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Response Time:</span>
                  <span className="ml-2 text-gray-600">{city.responseTime}</span>
                </div>
                {city.emergencyService && (
                  <div>
                    <span className="font-medium text-gray-900">Emergency Service:</span>
                    <span className="ml-2 text-green-600 font-medium">Available 24/7</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">
                Get Your Free Quote
              </h3>
              <p className="text-blue-700 mb-4">
                Ready for {service.name.toLowerCase()} in {city.name}?
              </p>
              <div className="space-y-3">
                <Link
                  href="/quote"
                  className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 inline-block text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+13015550199"
                  className="w-full bg-white text-blue-600 border border-blue-300 px-4 py-2 rounded-md hover:bg-blue-50 inline-block text-center"
                >
                  Call (301) 555-0199
                </a>
              </div>
            </div>

            {/* Service Area Info */}
            {city.zipCodes && (
              <div className="mt-6 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Service Area
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  We serve these zip codes in {city.name}:
                </p>
                <div className="flex flex-wrap gap-2">
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

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for Professional {service.name}?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact us today for a free estimate on your {service.name.toLowerCase()} project in {city.name}, {state.abbreviation}.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+13015550199"
                className="flex items-center text-lg font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call: (301) 555-0199
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}