const fs = require('fs')
const path = require('path')

// Load data files
const servicesData = require('../data/services.json')
const locationsData = require('../data/locations.json')

// Create service-location combination pages
async function generateServiceLocationPages() {
  console.log('🚀 Generating service-location combination pages...')
  
  const services = Object.keys(servicesData)
  const allCities = Object.keys(locationsData.cities)
  
  let totalPages = 0
  
  // Structure 1: Service-first URLs (/services/[service]/[city-service]/)
  for (const serviceSlug of services) {
    const serviceDirPath = path.join(__dirname, '../app/services', serviceSlug)
    
    // Ensure service directory exists
    if (!fs.existsSync(serviceDirPath)) {
      fs.mkdirSync(serviceDirPath, { recursive: true })
    }
    
    for (const citySlug of allCities) {
      const city = locationsData.cities[citySlug]
      if (!city) continue
      
      const pageSlug = `${citySlug}-${serviceSlug}`
      const pageDirPath = path.join(serviceDirPath, pageSlug)
      const pageFilePath = path.join(pageDirPath, 'page.tsx')
      
      // Create directory
      if (!fs.existsSync(pageDirPath)) {
        fs.mkdirSync(pageDirPath, { recursive: true })
      }
      
      // Generate page content
      const pageContent = generateServiceLocationPageContent(serviceSlug, citySlug, 'service-first')
      
      // Write page file
      fs.writeFileSync(pageFilePath, pageContent)
      totalPages++
      
      if (totalPages % 50 === 0) {
        console.log(`Generated ${totalPages} pages...`)
      }
    }
  }
  
  // Structure 2: Location-first URLs (/locations/[state]/[city]/[service-city]/)
  const states = Object.keys(locationsData.states)
  
  for (const stateSlug of states) {
    const state = locationsData.states[stateSlug]
    const stateDirPath = path.join(__dirname, '../app/locations', stateSlug)
    
    for (const citySlug of state.cities) {
      const city = locationsData.cities[citySlug]
      if (!city) continue
      
      const cityDirPath = path.join(stateDirPath, citySlug)
      
      // Ensure city directory exists
      if (!fs.existsSync(cityDirPath)) {
        fs.mkdirSync(cityDirPath, { recursive: true })
      }
      
      for (const serviceSlug of services) {
        const pageSlug = `${serviceSlug}-${citySlug}`
        const pageDirPath = path.join(cityDirPath, pageSlug)
        const pageFilePath = path.join(pageDirPath, 'page.tsx')
        
        // Create directory
        if (!fs.existsSync(pageDirPath)) {
          fs.mkdirSync(pageDirPath, { recursive: true })
        }
        
        // Generate page content
        const pageContent = generateServiceLocationPageContent(serviceSlug, citySlug, 'location-first')
        
        // Write page file
        fs.writeFileSync(pageFilePath, pageContent)
        totalPages++
        
        if (totalPages % 50 === 0) {
          console.log(`Generated ${totalPages} pages...`)
        }
      }
    }
  }
  
  console.log(`✅ Generated ${totalPages} service-location combination pages!`)
}

function generateServiceLocationPageContent(serviceSlug, citySlug, urlStructure) {
  const service = servicesData[serviceSlug]
  const city = locationsData.cities[citySlug]
  const state = locationsData.states[city.state]
  
  const serviceName = service.name
  const cityName = city.name
  const stateName = state.name
  const stateAbbrev = city.stateAbbrev
  
  // Different content based on URL structure
  const isServiceFirst = urlStructure === 'service-first'
  const baseUrl = isServiceFirst 
    ? `/services/${serviceSlug}/${citySlug}-${serviceSlug}`
    : `/locations/${city.state}/${citySlug}/${serviceSlug}-${citySlug}`
  
  const breadcrumbStructure = isServiceFirst
    ? `[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: '${serviceName}', href: '/services/${serviceSlug}' },
        { name: '${cityName}, ${stateAbbrev}', href: '${baseUrl}' }
      ]`
    : `[
        { name: 'Home', href: '/' },
        { name: 'Locations', href: '/locations' },
        { name: '${stateName}', href: '/locations/${city.state}' },
        { name: '${cityName}', href: '/locations/${city.state}/${citySlug}' },
        { name: '${serviceName}', href: '${baseUrl}' }
      ]`

  return `import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckIcon, ClockIcon, CurrencyDollarIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${serviceName} in ${cityName}, ${stateAbbrev} | Wall Fix Pros',
  description: 'Professional ${serviceName.toLowerCase()} services in ${cityName}, ${stateName}. Expert ${serviceName.toLowerCase()} contractors serving ${cityName} and surrounding areas. Licensed, insured, and trusted since 2015.',
  keywords: [
    '${serviceName.toLowerCase()} ${cityName}',
    '${cityName} ${serviceName.toLowerCase()}',
    '${serviceName.toLowerCase()} contractors ${cityName}',
    '${cityName} ${stateAbbrev} ${serviceName.toLowerCase()}',
    'professional ${serviceName.toLowerCase()} ${cityName}'
  ],
  openGraph: {
    title: '${serviceName} in ${cityName}, ${stateAbbrev} | Wall Fix Pros',
    description: 'Professional ${serviceName.toLowerCase()} services in ${cityName}, ${stateName}.',
    url: 'https://wallfixpros.com${baseUrl}',
  },
}

const breadcrumbs = ${breadcrumbStructure}

export default function ${serviceName.replace(/\s+/g, '')}${cityName.replace(/\s+/g, '')}Page() {
  const isHeadquarters = ${city.isHeadquarters || false}
  
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <nav className="flex px-6 py-4 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
          {breadcrumbs.map((item, index) => (
            <li key={item.name} className="flex items-center">
              {index > 0 && <span className="text-gray-400 mr-4">/</span>}
              {index < breadcrumbs.length - 1 ? (
                <Link href={item.href} className="text-gray-500 hover:text-gray-700">
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-900">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-24 sm:py-32">
          <div className="text-center">
            {isHeadquarters && (
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-brand-orange-100 px-3 py-1 text-sm font-medium text-brand-orange-800">
                  🏢 Headquarters Location - Fastest Response Times
                </span>
              </div>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              ${serviceName} in ${cityName}, ${stateAbbrev}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional ${serviceName.toLowerCase()} services in ${cityName}, ${stateName}. ${service.shortDescription} 
              ${isHeadquarters ? 'Our headquarters location ensures the fastest response times and most comprehensive services.' : ''}
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

        {/* Local details */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-brand-blue-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  <MapPinIcon className="h-6 w-6 mx-auto mb-2 text-brand-blue-600" />
                  Service Area
                </dt>
                <dd className="order-first text-2xl font-bold tracking-tight text-brand-blue-700">
                  ${cityName}
                </dd>
                <dd className="text-sm text-gray-500">${stateName}</dd>
              </div>
              <div className="flex flex-col bg-brand-blue-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  <ClockIcon className="h-6 w-6 mx-auto mb-2 text-brand-blue-600" />
                  Response Time
                </dt>
                <dd className="order-first text-2xl font-bold tracking-tight text-brand-blue-700">
                  ${city.responseTime || 'Within 2 hours'}
                </dd>
              </div>
              <div className="flex flex-col bg-brand-blue-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  <CurrencyDollarIcon className="h-6 w-6 mx-auto mb-2 text-brand-blue-600" />
                  Local Price Range
                </dt>
                <dd className="order-first text-2xl font-bold tracking-tight text-brand-blue-700">
                  ${service.priceRange}
                </dd>
              </div>
              <div className="flex flex-col bg-brand-blue-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  <PhoneIcon className="h-6 w-6 mx-auto mb-2 text-brand-blue-600" />
                  Emergency Service
                </dt>
                <dd className="order-first text-2xl font-bold tracking-tight text-brand-blue-700">
                  ${city.emergencyService ? 'Available' : 'Contact Us'}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Local service benefits */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-orange-600">Local Expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ${serviceName} Services in ${cityName}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced team provides professional ${serviceName.toLowerCase()} services throughout ${cityName} and surrounding areas in ${stateName}.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              ${service.benefits.slice(0, 6).map(benefit => `
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange-500">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  ${benefit}
                </dt>
              </div>`).join('')}
            </dl>
          </div>
        </div>
      </div>

      {/* Neighborhoods served */}
      ${city.neighborhoods ? `
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ${cityName} Neighborhoods We Serve
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Professional ${serviceName.toLowerCase()} services throughout ${cityName}
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            ${city.neighborhoods.map(neighborhood => `
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900">${neighborhood}</h3>
              <p className="text-sm text-gray-600">${cityName}, ${stateAbbrev}</p>
            </div>`).join('')}
          </div>
        </div>
      </div>` : ''}

      {/* CTA section */}
      <div className="bg-brand-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need ${serviceName} in ${cityName}?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact us today for professional ${serviceName.toLowerCase()} services in ${cityName}, ${stateName}. 
              ${isHeadquarters ? 'As our headquarters location, we offer the fastest response times.' : ''}
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
            
            ${isHeadquarters ? `
            <div className="mt-8 text-center">
              <p className="text-sm text-blue-100">
                📍 Headquarters: Wall Fix Pros 4580 Mack Ave Suite Frederick, MD 21703
              </p>
            </div>` : ''}
          </div>
        </div>
      </div>
    </div>
  )
}`
}

// Main execution
if (require.main === module) {
  generateServiceLocationPages()
    .then(() => {
      console.log('✅ All pages generated successfully!')
    })
    .catch((error) => {
      console.error('❌ Error generating pages:', error)
      process.exit(1)
    })
}

module.exports = { generateServiceLocationPages }`