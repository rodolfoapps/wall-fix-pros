import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Water Damage Drywall Repair: Frederick Guide',
  description: 'Comprehensive water damage drywall repair guide for Frederick homeowners. Emergency response, repair vs replace decisions, costs, and prevention tips from local experts.',
}

export default function WaterDamageFrederickPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-red-700">
        <div className="absolute inset-0 bg-red-700 opacity-75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
              Water Damage
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Water Damage Drywall Repair: Frederick Homeowners Guide
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-red-100">
              Essential information for Frederick homeowners dealing with water damage to drywall.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-red-100">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Wall Fix Pros</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>December 12, 2024</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Water damage to drywall requires immediate professional attention. Our <Link href="/locations/maryland/frederick" className="text-blue-600 hover:text-blue-700">Frederick team</Link> provides emergency <Link href="/services/water-damage-repair" className="text-blue-600 hover:text-blue-700">water damage repair</Link> services 24/7.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Emergency Response: The First 24 Hours Are Critical</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            When water damage strikes your Frederick home, quick action is essential. Within 24-48 hours, moisture can lead to mold growth, structural damage, and significantly higher repair costs.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Immediate Action Steps</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">First Hour:</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Stop the water source if possible</li>
                  <li>• Turn off electricity to affected areas</li>
                  <li>• Document damage with photos</li>
                  <li>• Call your insurance company</li>
                  <li>• Contact Wall Fix Pros: (240) 670-1949</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Within 24 Hours:</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Begin water extraction</li>
                  <li>• Start dehumidification process</li>
                  <li>• Remove wet materials</li>
                  <li>• Set up air circulation</li>
                  <li>• Monitor moisture levels</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Water Damage Scenarios in Frederick</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Frederick's climate and housing characteristics create specific water damage risks. Understanding these helps homeowners prepare and respond appropriately.
          </p>

          <div className="space-y-6 mb-12">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Roof Leaks from Severe Weather</h3>
              <p className="text-gray-600 mb-3">Frederick experiences significant storms, especially during spring and summer months. Roof damage can allow water to penetrate attics and upper floors.</p>
              <div className="bg-blue-50 p-4 rounded">
                <p className="text-blue-800 text-sm"><strong>Repair Approach:</strong> Address roof repair first, then assess drywall damage. May require partial or complete drywall replacement depending on saturation level.</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Burst Pipes in Winter</h3>
              <p className="text-gray-600 mb-3">Frederick's winter temperatures can cause pipes to freeze and burst, especially in older homes or areas with poor insulation.</p>
              <div className="bg-blue-50 p-4 rounded">
                <p className="text-blue-800 text-sm"><strong>Repair Approach:</strong> Immediate water extraction crucial. Drywall behind pipes often requires replacement. Check for mold within 48 hours.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-700 text-white rounded-lg p-8 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">24/7 Emergency Water Damage Service in Frederick</h2>
              <p className="text-blue-100 mb-6">
                When water damage strikes your Frederick home, every minute counts. Our emergency response team is available 24/7 with rapid response throughout Frederick County and surrounding areas.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">60 Min</div>
                  <div className="text-blue-100 text-sm">Emergency Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">Licensed</div>
                  <div className="text-blue-100 text-sm">& Insured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">Direct</div>
                  <div className="text-blue-100 text-sm">Insurance Billing</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+12406701949"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  Emergency: (240) 670-1949
                </a>
                <Link
                  href="/quote"
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Get Free Assessment
                </Link>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                Serving Frederick, Middletown, Mt Airy, and all of Frederick County
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}