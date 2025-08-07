import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Professional Drywall Services | Wall Fix Pros MD, VA, WV, PA',
  description: 'Complete drywall and wall repair services including installation, repair, patching, taping, texturing, ceiling work, water damage restoration, and painting. Serving Maryland, Virginia, West Virginia, and Pennsylvania.',
  keywords: ['drywall services', 'wall repair services', 'drywall installation', 'drywall repair', 'ceiling services', 'water damage repair', 'professional contractors'],
  openGraph: {
    title: 'Professional Drywall Services | Wall Fix Pros',
    description: 'Complete drywall and wall repair services serving MD, VA, WV, PA. Expert installation, repair, and restoration.',
    url: 'https://wallfixpros.com/services',
  },
}

const serviceIcons: { [key: string]: string } = {
  'drywall-installation': '🔨',
  'drywall-repair': '🔧',
  'drywall-patching': '🩹',
  'drywall-taping': '📏',
  'drywall-texturing': '🎨',
  'drywall-restoration': '🏗️',
  'ceiling-services': '🏠',
  'insulation-services': '🧱',
  'water-damage-repair': '💧',
  'painting-services': '🖌️'
}

export default function ServicesPage() {
  const services = Object.entries(servicesData)

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Professional Drywall & Wall Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive drywall installation, repair, and wall services for residential and commercial properties throughout Maryland, Virginia, West Virginia, and Pennsylvania.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-brand-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-brand-orange-600"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:+12406701949" 
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-brand-blue-600"
              >
                Call: (240) 670-1949
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Complete Service Offerings
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Expert craftsmanship and professional service for all your drywall and wall needs
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map(([slug, service]) => (
              <div key={slug} className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brand-orange-500 text-2xl">
                    {serviceIcons[slug]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold leading-8 text-gray-900">
                      <Link href={`/services/${slug}`} className="hover:text-brand-blue-600">
                        {service.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.shortDescription}
                    </p>
                    
                    {/* Price range */}
                    <div className="mt-4 flex items-center gap-4 text-sm">
                      <span className="font-medium text-brand-orange-600">
                        {service.priceRange}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600">
                        {service.timeline}
                      </span>
                    </div>

                    {/* Benefits preview */}
                    <div className="mt-4">
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckIcon className="h-4 w-4 text-brand-orange-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                        {service.benefits.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{service.benefits.length - 3} more benefits
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/services/${slug}`}
                        className="inline-flex items-center text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700"
                      >
                        Learn more about {service.name}
                        <span aria-hidden="true" className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why choose our services */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-orange-600">Quality Guaranteed</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Drywall Services?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With over 9 years of experience and 25+ certified professionals, we deliver exceptional results on every project.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange-500">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Licensed & Insured (MHIC #123456)
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Fully licensed and insured for your peace of mind on every project.
                </dd>
              </div>
              
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange-500">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  5-Year Workmanship Warranty
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We stand behind our work with comprehensive warranties on all services.
                </dd>
              </div>
              
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange-500">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Same-Day Emergency Service
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Emergency water damage and urgent repair services available 24/7.
                </dd>
              </div>
              
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange-500">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Free Estimates & Consultations
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  No-obligation estimates and expert consultations for all projects.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Service areas */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Service Areas
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Professional drywall services available throughout the Mid-Atlantic region
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Maryland</h3>
              <p className="mt-2 text-gray-600">17 cities including Frederick (HQ), Baltimore, Rockville</p>
              <Link href="/locations/maryland" className="mt-2 text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700">
                View Maryland locations →
              </Link>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Virginia</h3>
              <p className="mt-2 text-gray-600">11 cities including Leesburg, Arlington, Alexandria</p>
              <Link href="/locations/virginia" className="mt-2 text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700">
                View Virginia locations →
              </Link>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">West Virginia</h3>
              <p className="mt-2 text-gray-600">2 cities including Harpers Ferry, Charles Town</p>
              <Link href="/locations/west-virginia" className="mt-2 text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700">
                View West Virginia locations →
              </Link>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Pennsylvania</h3>
              <p className="mt-2 text-gray-600">3 cities including Gettysburg, Chambersburg</p>
              <Link href="/locations/pennsylvania" className="mt-2 text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700">
                View Pennsylvania locations →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-brand-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact us today for a free estimate on any of our professional drywall and wall services.
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
                Call: (240) 670-1949
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}