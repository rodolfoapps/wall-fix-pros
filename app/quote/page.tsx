import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Free Quote | Wall Fix Pros Drywall Repair',
  description: 'Get a free, no-obligation quote for your drywall repair project. Fast response times and competitive pricing across Maryland, Virginia, West Virginia, and Pennsylvania.',
}

export default function QuotePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-brand-blue-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-brand-blue-700 opacity-75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get Your Free Quote
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-brand-blue-100">
            Professional drywall repair estimates with no obligation. Fast response times and competitive pricing.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Request Your Free Estimate
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and we'll contact you within 24 hours with your free quote.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-500 focus:ring-brand-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-500 focus:ring-brand-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-500 focus:ring-brand-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-500 focus:ring-brand-blue-500"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Property address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-500 focus:ring-brand-blue-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service needed
                </label>
                <select
                  name="service"
                  id="service"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-500 focus:ring-brand-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="drywall-installation">Drywall Installation</option>
                  <option value="drywall-repair">Drywall Repair</option>
                  <option value="drywall-patching">Drywall Patching</option>
                  <option value="drywall-taping">Drywall Taping</option>
                  <option value="drywall-texturing">Drywall Texturing</option>
                  <option value="drywall-restoration">Drywall Restoration</option>
                  <option value="ceiling-services">Ceiling Services</option>
                  <option value="insulation-services">Insulation Services</option>
                  <option value="water-damage-repair">Water Damage Repair</option>
                  <option value="painting-services">Painting Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Project description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  required
                  placeholder="Please describe the work needed, size of area, timeline, etc."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-500 focus:ring-brand-blue-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center rounded-md border border-transparent bg-brand-orange-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-brand-orange-600 focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:ring-offset-2"
                >
                  Request Free Quote
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Benefits */}
          <div className="mt-12 lg:mt-0">
            <div className="rounded-lg bg-brand-blue-50 p-8">
              <h3 className="text-2xl font-bold text-brand-blue-900">
                Why Choose Wall Fix Pros?
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-brand-orange-500 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-brand-blue-700">Free, no-obligation estimates</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-brand-orange-500 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-brand-blue-700">Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-brand-orange-500 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-brand-blue-700">Same-day service available</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-brand-orange-500 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-brand-blue-700">100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-brand-orange-500 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-brand-blue-700">Competitive pricing</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-lg bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900">
                Need Immediate Help?
              </h3>
              <p className="mt-4 text-gray-600">
                For emergency repairs or urgent quotes, call us directly.
              </p>
              <div className="mt-6">
                <a
                  href="tel:+12406701949"
                  className="inline-flex items-center rounded-md border border-transparent bg-brand-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-orange-600"
                >
                  Call (240) 670-1949
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-900">
                Service Areas
              </h3>
              <p className="mt-4 text-gray-600">
                We proudly serve 33 cities across Maryland, Virginia, West Virginia, and Pennsylvania.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>Maryland</div>
                <div>Virginia</div>
                <div>West Virginia</div>
                <div>Pennsylvania</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}