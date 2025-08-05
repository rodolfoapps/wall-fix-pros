import type { Metadata } from 'next'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contact Wall Fix Pros | Drywall Repair Experts Maryland, Virginia, WV, PA',
  description: 'Contact Wall Fix Pros for professional drywall repair services. Call (301) 555-0199 or send us a message. Headquarters in Frederick, MD serving 33+ cities.',
}

export default function ContactPage() {
  const contactInfo = {
    phone: '(301) 555-0199',
    email: 'info@wallfixpros.com',
    address: {
      line1: 'DC Generals Roofing',
      line2: '4580 Mack Ave Suite',
      city: 'Frederick',
      state: 'MD',
      zip: '21703'
    },
    hours: {
      weekdays: 'Monday - Friday: 7:00 AM - 7:00 PM',
      saturday: 'Saturday: 8:00 AM - 5:00 PM',
      sunday: 'Sunday: Emergency Service Only',
      emergency: '24/7 Emergency Service Available'
    }
  }

  const serviceAreas = [
    { state: 'Maryland', cities: 17 },
    { state: 'Virginia', cities: 11 },
    { state: 'West Virginia', cities: 2 },
    { state: 'Pennsylvania', cities: 3 }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0 bg-blue-700 opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Wall Fix Pros
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Ready to start your drywall project? Get in touch with our expert team for a free estimate and professional service across Maryland, Virginia, West Virginia, and Pennsylvania.
          </p>
        </div>
      </div>

      {/* Contact Information & Form */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our team is ready to help with all your drywall repair needs. Contact us today for fast, professional service.
            </p>

            {/* Contact Details */}
            <div className="mt-12 space-y-8">
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/[^\d]/g, '')}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Call for immediate assistance and free estimates
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Send us your project details and questions
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Headquarters</h3>
                  <div className="text-gray-600">
                    <p>{contactInfo.address.line1}</p>
                    <p>{contactInfo.address.line2}</p>
                    <p>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Frederick, MD - Our main office with fastest response times
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>{contactInfo.hours.weekdays}</p>
                    <p>{contactInfo.hours.saturday}</p>
                    <p>{contactInfo.hours.sunday}</p>
                    <p className="text-orange-600 font-medium">{contactInfo.hours.emergency}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name *
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name *
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Property location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    required
                    placeholder="City, State"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="service-type" className="block text-sm font-medium text-gray-700">
                    Type of service needed
                  </label>
                  <select
                    name="service-type"
                    id="service-type"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="drywall-repair">Drywall Repair</option>
                    <option value="drywall-installation">Drywall Installation</option>
                    <option value="drywall-patching">Drywall Patching</option>
                    <option value="water-damage-repair">Water Damage Repair</option>
                    <option value="ceiling-services">Ceiling Services</option>
                    <option value="drywall-texturing">Drywall Texturing</option>
                    <option value="painting-services">Painting Services</option>
                    <option value="other">Other/Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    placeholder="Please describe your project, timeline, and any specific requirements..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Need immediate assistance? 
                  <a 
                    href={`tel:${contactInfo.phone.replace(/[^\d]/g, '')}`}
                    className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                  >
                    Call {contactInfo.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Service Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional drywall services across the Mid-Atlantic region
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <h3 className="text-lg font-bold text-gray-900">{area.state}</h3>
                <p className="text-gray-600 mt-2">{area.cities} cities served</p>
                <Link
                  href={`/locations/${area.state.toLowerCase().replace(' ', '-')}`}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Locations →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Service CTA */}
      <div className="bg-orange-600">
        <div className="px-6 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Emergency Drywall Service
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
              Water damage, accidents, or urgent repairs? We provide 24/7 emergency drywall services throughout our service area.
            </p>
            <div className="mt-10">
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d]/g, '')}`}
                className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-sm hover:bg-gray-50"
              >
                Call Emergency Line: {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}