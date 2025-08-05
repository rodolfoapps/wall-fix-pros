import Link from 'next/link'
import { CheckIcon, MapPinIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Drywall & Wall Repair Services | Wall Fix Pros MD, VA, WV, PA',
  description: 'Wall Fix Pros provides expert drywall installation, repair, patching, and wall services in Maryland, Virginia, West Virginia, and Pennsylvania. Licensed, insured, and serving 30+ cities since 2015. Get your free quote today!',
  keywords: ['drywall contractors', 'wall repair services', 'drywall installation', 'Frederick MD drywall', 'Maryland drywall repair', 'Virginia drywall contractors', 'professional drywall services'],
  openGraph: {
    title: 'Professional Drywall & Wall Repair Services | Wall Fix Pros',
    description: 'Expert drywall installation, repair, and wall services serving MD, VA, WV, PA. Licensed & insured since 2015.',
    url: 'https://wallfixpros.com',
  },
}

const services = [
  {
    name: 'Drywall Installation',
    description: 'Professional installation for new construction and renovations',
    href: '/services/drywall-installation',
    icon: '🔨'
  },
  {
    name: 'Drywall Repair', 
    description: 'Expert repair services for holes, cracks, and damage',
    href: '/services/drywall-repair',
    icon: '🔧'
  },
  {
    name: 'Water Damage Repair',
    description: '24/7 emergency water damage restoration services',
    href: '/services/water-damage-repair', 
    icon: '💧'
  },
  {
    name: 'Ceiling Services',
    description: 'Complete ceiling installation, repair, and finishing',
    href: '/services/ceiling-services',
    icon: '🏠'
  },
  {
    name: 'Drywall Texturing',
    description: 'Custom texturing to match any wall finish',
    href: '/services/drywall-texturing',
    icon: '🎨'
  },
  {
    name: 'Painting Services',
    description: 'Professional interior and exterior painting',
    href: '/services/painting-services',
    icon: '🖌️'
  }
]

const stats = [
  { name: 'Years of Experience', value: '9+', description: 'Serving the region since 2015' },
  { name: 'Cities Served', value: '30+', description: 'Across 4 states' },
  { name: 'Certified Professionals', value: '25+', description: 'Licensed and insured team' },
  { name: 'Customer Satisfaction', value: '99%', description: 'Highly rated service' },
]

const benefits = [
  'Licensed & Insured (MHIC #123456)',
  'Same-day emergency service available',
  'Free estimates and consultations',
  '5-year warranty on workmanship',
  'Clean, professional work process',
  'Competitive pricing with no hidden fees'
]

const serviceAreas = [
  { state: 'Maryland', cities: '17 cities', href: '/locations/maryland' },
  { state: 'Virginia', cities: '11 cities', href: '/locations/virginia' },
  { state: 'West Virginia', cities: '2 cities', href: '/locations/west-virginia' },
  { state: 'Pennsylvania', cities: '3 cities', href: '/locations/pennsylvania' },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-400 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Professional Drywall & Wall Repair Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert drywall installation, repair, and wall services serving <strong>Maryland</strong>, <strong>Virginia</strong>, <strong>West Virginia</strong>, and <strong>Pennsylvania</strong>. Licensed, insured, and trusted since 2015.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:+13015550199" 
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                Call Now: (301) 555-0199 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-blue-50 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-blue-700">
                    {stat.value}
                  </dd>
                  <dd className="text-sm text-gray-500">{stat.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Drywall & Wall Repair Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive drywall and wall services for residential and commercial properties
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500 text-2xl">
                      {service.icon}
                    </div>
                    <Link href={service.href} className="hover:text-blue-600">
                      {service.name}
                    </Link>
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link
                        href={service.href}
                        className="text-sm font-semibold leading-6 text-brand-blue-600 hover:text-brand-blue-700"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="rounded-md border border-transparent bg-brand-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-brand-blue-700"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Service Areas section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Service Areas
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Professional drywall services across 4 states and 30+ cities
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {serviceAreas.map((area) => (
              <div key={area.state} className="flex flex-col items-start">
                <div className="rounded-md bg-brand-orange-50 p-2 ring-1 ring-brand-orange-200">
                  <MapPinIcon className="h-6 w-6 text-brand-orange-600" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {area.state}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Serving {area.cities}
                </p>
                <Link
                  href={area.href}
                  className="mt-4 text-sm font-semibold leading-6 text-brand-blue-600 hover:text-brand-blue-700"
                >
                  View cities <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/locations"
              className="rounded-md border border-transparent bg-brand-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-brand-blue-700"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-orange-600">Trusted Professionals</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Wall Fix Pros?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're Maryland's trusted drywall professionals with headquarters in Frederick, MD. Our experienced team delivers quality workmanship with a focus on customer satisfaction.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {benefits.map((benefit) => (
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

      {/* CTA section */}
      <div className="bg-brand-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to fix your walls?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get a free estimate today! Our team is ready to help with all your drywall and wall repair needs.
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
                Call: (301) 555-0199 <span aria-hidden="true">→</span>
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-blue-100">
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Same-day service available</span>
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="h-5 w-5 mr-2" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}