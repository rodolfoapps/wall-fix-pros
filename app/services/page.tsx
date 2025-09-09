import Link from 'next/link'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Professional Drywall Services | MD, VA, WV, PA',
  description: 'Complete drywall and wall repair services including installation, repair, patching, taping, texturing, ceiling work, water damage restoration, and painting. Serving Maryland, Virginia, West Virginia, and Pennsylvania.',
  keywords: ['drywall services', 'wall repair services', 'drywall installation', 'drywall repair', 'ceiling services', 'water damage repair', 'professional contractors'],
  alternates: {
    canonical: 'https://www.wallfixpros.com/services/',
  },
  openGraph: {
    title: 'Professional Drywall Services | Wall Fix Pros',
    description: 'Complete drywall and wall repair services serving MD, VA, WV, PA. Expert installation, repair, and restoration.',
    url: 'https://www.wallfixpros.com/services/',
  },
}

const serviceImages: { [key: string]: string } = {
  'drywall-installation': '/images/services/Drywall-Installation-300x210.webp',
  'drywall-repair': '/images/services/Drywall-Repair-300x210.webp',
  'drywall-patching': '/images/services/Drywall-Patching-300x210.webp',
  'drywall-taping': '/images/services/Drywall-Taping-300x210.webp',
  'drywall-texturing': '/images/services/Drywall-Texturing-300x210.webp',
  'drywall-restoration': '/images/services/Drywall-Restoration-300x210.webp',
  'ceiling-services': '/images/services/Drywall-Celling-300x210.webp',
  'insulation-services': '/images/services/Drywall-Insullation-300x210.webp',
  'water-damage-repair': '/images/services/Water-Damage-300x210.webp',
  'painting-services': '/images/services/Draywall-Painting-300x210.webp'
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
              <div key={slug} className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={serviceImages[slug]}
                    alt={`${service.name} services by Wall Fix Pros`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
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

      {/* Professional approach section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Professional Approach
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Every drywall project follows our proven methodology for consistent, high-quality results that last.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-6">
                  Quality Materials & Techniques
                </h3>
                <p className="text-base leading-7 text-gray-600 mb-4">
                  We exclusively use premium-grade drywall materials from trusted manufacturers like USG and Georgia-Pacific. Our team stays current with the latest installation techniques and finishing methods to ensure superior results on every project.
                </p>
                <p className="text-base leading-7 text-gray-600 mb-4">
                  From moisture-resistant drywall in bathrooms to fire-rated assemblies in commercial buildings, we select the right materials for each specific application. Our attention to detail in material selection ensures long-term durability and performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-brand-orange-500 mr-2 flex-shrink-0" />
                    Premium USG and Georgia-Pacific drywall products
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-brand-orange-500 mr-2 flex-shrink-0" />
                    Moisture-resistant and fire-rated options available
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-brand-orange-500 mr-2 flex-shrink-0" />
                    Professional-grade joint compounds and primers
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-brand-orange-500 mr-2 flex-shrink-0" />
                    Latest tools and equipment for precision work
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-6">
                  Licensed Professionals & Safety Standards
                </h3>
                <p className="text-base leading-7 text-gray-600 mb-4">
                  Our team consists of fully licensed contractors who maintain current certifications in Maryland (MHIC), Virginia, West Virginia, and Pennsylvania. Every technician undergoes continuous training in safety protocols, new techniques, and building code requirements.
                </p>
                <p className="text-base leading-7 text-gray-600 mb-4">
                  We prioritize safety on every job site, following OSHA guidelines and maintaining comprehensive insurance coverage. Our commitment to professional development ensures our team delivers work that meets or exceeds industry standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-brand-orange-500 mr-2 flex-shrink-0" />
                    Licensed contractors in all four service states
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-brand-orange-500 mr-2 flex-shrink-0" />
                    Comprehensive liability and workers' comp insurance
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-brand-orange-500 mr-2 flex-shrink-0" />
                    OSHA-compliant safety practices on all job sites
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-brand-orange-500 mr-2 flex-shrink-0" />
                    Ongoing professional development and training
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Residential vs Commercial section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Residential & Commercial Expertise
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Tailored drywall solutions for homes, offices, retail spaces, and industrial facilities throughout the Mid-Atlantic region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Residential Services</h3>
              <p className="text-base leading-7 text-blue-800 mb-6">
                From single-room repairs to whole-house renovations, we understand the unique needs of homeowners. Our residential services focus on quality craftsmanship, minimal disruption to daily life, and attention to aesthetic details that make your house a home.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Common Projects:</h4>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Basement finishing</li>
                    <li>• Room additions</li>
                    <li>• Kitchen renovations</li>
                    <li>• Bathroom updates</li>
                    <li>• Home office creation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Special Considerations:</h4>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Texture matching</li>
                    <li>• Furniture protection</li>
                    <li>• Dust control measures</li>
                    <li>• Flexible scheduling</li>
                    <li>• Family-friendly approach</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Commercial Services</h3>
              <p className="text-base leading-7 text-gray-600 mb-6">
                Commercial projects require precision, efficiency, and adherence to strict timelines and building codes. We specialize in office buildings, retail spaces, restaurants, medical facilities, and educational institutions throughout our service area.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Project Types:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Office build-outs</li>
                    <li>• Retail renovations</li>
                    <li>• Restaurant construction</li>
                    <li>• Medical facilities</li>
                    <li>• Educational buildings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Fire-rated assemblies</li>
                    <li>• ADA compliance</li>
                    <li>• After-hours scheduling</li>
                    <li>• Large-scale projects</li>
                    <li>• Commercial warranties</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Service Questions & Answers
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Common questions about our drywall and wall repair services across Maryland, Virginia, West Virginia, and Pennsylvania.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  What's the difference between drywall installation and drywall repair?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  Drywall installation involves hanging new drywall sheets, typically in new construction or major renovations. Drywall repair addresses existing damage like holes, cracks, or water damage. Our team handles both services with equal expertise, ensuring seamless integration between new and existing surfaces.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  How long do typical drywall projects take to complete?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  Project timelines vary based on scope and complexity. Simple repairs can be completed in a few hours, while room installations typically take 2-5 days including drying time. Large commercial projects may take several weeks. We provide detailed timelines with every estimate and keep you informed throughout the process.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  Do you handle emergency drywall repairs?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  Yes, we offer 24/7 emergency services for water damage, structural issues, and urgent repairs that affect safety or security. Emergency services are available same-day or next-day throughout our Maryland, Virginia, West Virginia, and Pennsylvania service areas with priority scheduling for critical situations.
                </p>
              </div>
              
              <div className="pb-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  What should I expect during the drywall installation process?
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  Our process begins with surface preparation and protection of your belongings. We hang drywall sheets, apply joint compound in multiple coats with proper drying time between applications, sand smooth, and prepare surfaces for painting. We maintain clean work areas and communicate progress throughout the project.
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
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact us today for a free estimate on any of our professional drywall and wall services across Maryland, Virginia, West Virginia, and Pennsylvania.
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