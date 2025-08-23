import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import businessInfo from '@/data/business-info.json'

const services = [
  'Drywall Installation',
  'Drywall Repair', 
  'Drywall Patching',
  'Drywall Taping',
  'Ceiling Services',
  'Water Damage Repair'
]

const locations = [
  { name: 'Frederick, MD', href: '/locations/maryland/frederick' },
  { name: 'Baltimore, MD', href: '/locations/maryland/baltimore' },
  { name: 'Leesburg, VA', href: '/locations/virginia/leesburg' },
  { name: 'Arlington, VA', href: '/locations/virginia/arlington' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-8">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/images/Assets/Logo-WALL-FIX-PRO.webp"
                  alt="Wall Fix Pros - Professional Drywall and Wall Repair Services"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Professional drywall and wall repair services serving Maryland, Virginia, West Virginia, and Pennsylvania.
              </p>
            </div>
            
            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-brand-orange-500" />
                <a 
                  href={`tel:${businessInfo.contact.phone.replace(/\D/g, '')}`}
                  className="ml-3 text-sm text-gray-300 hover:text-white"
                >
                  {businessInfo.contact.phone}
                </a>
              </div>
              
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-brand-orange-500 mt-0.5" />
                <address className="ml-3 text-sm text-gray-300 not-italic">
                  {businessInfo.address.full}
                </address>
              </div>
              
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-brand-orange-500" />
                <span className="ml-3 text-sm text-gray-300">
                  Monday - Friday: 7:00 AM - 7:00 PM
                </span>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p className="text-sm text-gray-300">
                {businessInfo.license} • {businessInfo.insurance}
              </p>
              <p className="text-sm text-gray-300">
                Serving the area since {businessInfo.yearEstablished}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Services */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {services.map((service) => (
                    <li key={service}>
                      <Link 
                        href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Locations */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Service Areas</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {locations.map((location) => (
                    <li key={location.name}>
                      <Link 
                        href={location.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link 
                      href="/locations"
                      className="text-sm leading-6 text-brand-orange-400 hover:text-brand-orange-300"
                    >
                      View All Locations →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company links */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/quote" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Get Free Quote
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Emergency Service</h3>
                <div className="mt-6">
                  <p className="text-sm leading-6 text-gray-300 mb-4">
                    24/7 Emergency Water Damage Repair
                  </p>
                  <a
                    href={`tel:${businessInfo.contact.emergencyPhone.replace(/\D/g, '')}`}
                    className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700"
                  >
                    Emergency: {businessInfo.contact.emergencyPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-xs leading-5 text-gray-500">
                Licensed & Insured • MHIC #123456
              </p>
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} Wall Fix Pros. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}