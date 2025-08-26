import Link from 'next/link'
import Image from 'next/image'
import { CheckIcon, MapPinIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Drywall & Wall Repair Services | MD, VA, WV, PA',
  description: 'Wall Fix Pros provides expert drywall installation, repair, patching, and wall services in Maryland, Virginia, West Virginia, and Pennsylvania. Licensed, insured, and serving 30+ cities since 2015. Get your free quote today!',
  keywords: ['drywall contractors', 'wall repair services', 'drywall installation', 'Frederick MD drywall', 'Maryland drywall repair', 'Virginia drywall contractors', 'professional drywall services'],
  openGraph: {
    title: 'Professional Drywall & Wall Repair Services',
    description: 'Expert drywall installation, repair, and wall services serving MD, VA, WV, PA. Licensed & insured since 2015.',
    url: 'https://wallfixpros.com',
  },
}

const services = [
  {
    name: 'Drywall Installation',
    description: 'Professional installation for new construction and renovations',
    href: '/services/drywall-installation',
    image: '/images/services/Drywall-Installation-300x210.webp'
  },
  {
    name: 'Drywall Repair', 
    description: 'Expert repair services for holes, cracks, and damage',
    href: '/services/drywall-repair',
    image: '/images/services/Drywall-Repair-300x210.webp'
  },
  {
    name: 'Water Damage Repair',
    description: '24/7 emergency water damage restoration services',
    href: '/services/water-damage-repair', 
    image: '/images/services/Water-Damage-300x210.webp'
  },
  {
    name: 'Ceiling Services',
    description: 'Complete ceiling installation, repair, and finishing',
    href: '/services/ceiling-services',
    image: '/images/services/Drywall-Celling-300x210.webp'
  },
  {
    name: 'Drywall Texturing',
    description: 'Custom texturing to match any wall finish',
    href: '/services/drywall-texturing',
    image: '/images/services/Drywall-Texturing-300x210.webp'
  },
  {
    name: 'Painting Services',
    description: 'Professional interior and exterior painting',
    href: '/services/painting-services',
    image: '/images/services/Draywall-Painting-300x210.webp'
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
      <div className="relative isolate">
        {/* Hero Image */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
          <Image
            src="/images/hero/hero-desktop.webp"
            alt="Professional drywall and wall repair services by Wall Fix Pros"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-start justify-center px-6 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Professional Drywall & Wall Repair Services
            </h1>
            <p className="mt-3 text-lg leading-8 text-white/90 drop-shadow-md">
              Expert drywall installation, repair, and wall services serving <strong>Maryland</strong>, <strong>Virginia</strong>, <strong>West Virginia</strong>, and <strong>Pennsylvania</strong>. Licensed, insured, and trusted since 2015.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:+12406701949" 
                className="text-lg font-semibold leading-6 text-white hover:text-orange-300 drop-shadow-md"
              >
                Call Now: (240) 670-1949 <span aria-hidden="true">→</span>
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
                <div key={service.name} className="flex flex-col group">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 relative h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={service.image}
                        alt={`${service.name} services by Wall Fix Pros`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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

      {/* Our Process section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Professional Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              From initial consultation to final cleanup, we follow a proven process that ensures quality results every time.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange-500 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Free Assessment
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  We evaluate your project, assess damage or requirements, and provide detailed recommendations. Our experienced team identifies potential issues and explains all repair options clearly.
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange-500 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Detailed Quote
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Receive a comprehensive written estimate with material costs, labor details, and project timeline. No hidden fees or surprise charges - transparent pricing you can trust.
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange-500 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Professional Work
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Our licensed craftsmen complete your project using premium materials and industry-best practices. We protect your property and maintain clean work areas throughout the process.
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange-500 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Quality Inspection
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Final walkthrough ensures every detail meets our high standards and your complete satisfaction. We provide warranty documentation and maintenance recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Get answers to common questions about our drywall and wall repair services across Maryland, Virginia, West Virginia, and Pennsylvania.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  How quickly can you start my drywall project?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  We typically schedule new projects within 2-3 business days of approval. Emergency repairs are available same-day or next-day in most service areas. Our Frederick headquarters allows us to respond quickly throughout Maryland, Virginia, West Virginia, and Pennsylvania.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  What's included in your warranty coverage?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  All drywall installations include a 5-year warranty on workmanship and materials. Repairs are covered for 3 years. Our warranty covers defects in installation, joint integrity, and finish quality. We stand behind our work with comprehensive protection and responsive service.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  Do you handle water damage restoration?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  Yes, we specialize in water damage drywall restoration with 24/7 emergency response. Our team assesses moisture levels, removes damaged materials, and restores affected areas. We work directly with insurance companies and provide detailed documentation for claims.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  Can you match existing wall textures?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  Absolutely. Our experienced craftsmen are skilled at matching various texture patterns including orange peel, knockdown, skip trowel, and custom finishes. We test texture samples to ensure perfect matches before proceeding with repairs or installations.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  What areas do you serve in Maryland, Virginia, West Virginia, and Pennsylvania?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  We serve 33 cities across four states from our Frederick, Maryland headquarters. This includes major areas like Baltimore, Rockville, Arlington, Leesburg, Harpers Ferry, and Gettysburg. Our service area covers residential and commercial properties within a 75-mile radius of Frederick.
                </p>
              </div>
              
              <div className="pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  Are your technicians licensed and insured?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  All our technicians are fully licensed contractors in Maryland, Virginia, West Virginia, and Pennsylvania. We carry comprehensive general liability insurance and worker's compensation coverage. Our MHIC license and insurance certificates are available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local expertise section */}
      <div className="bg-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Local DMV Area Expertise
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Understanding local building codes, climate considerations, and architectural styles across our service region.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-4">
                  Regional Climate Considerations
                </h3>
                <p className="text-base leading-7 text-gray-600 mb-4">
                  The DMV area's humid subtropical climate presents unique challenges for drywall installation and repair. High humidity levels, temperature fluctuations, and seasonal weather patterns require specialized techniques and materials. Our team understands how to select appropriate moisture-resistant products and installation methods.
                </p>
                <p className="text-base leading-7 text-gray-600">
                  We account for building expansion and contraction cycles, proper ventilation requirements, and humidity control measures to ensure long-lasting results in Maryland's variable climate conditions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-4">
                  Building Code Compliance
                </h3>
                <p className="text-base leading-7 text-gray-600 mb-4">
                  Each state and locality in our service area has specific building codes and requirements. Our licensed contractors stay current with Maryland, Virginia, West Virginia, and Pennsylvania building codes, ensuring all work meets or exceeds regulatory standards.
                </p>
                <p className="text-base leading-7 text-gray-600">
                  From fire ratings to accessibility requirements, we handle permit applications, inspections, and code compliance documentation. Historic districts receive special attention to preserve architectural authenticity while meeting modern safety standards.
                </p>
              </div>
            </div>
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
              Get a free estimate today! Our team is ready to help with all your drywall and wall repair needs across Maryland, Virginia, West Virginia, and Pennsylvania.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-brand-blue-600 shadow-sm hover:bg-gray-50"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+12406701949"
                className="text-lg font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call: (240) 670-1949 <span aria-hidden="true">→</span>
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