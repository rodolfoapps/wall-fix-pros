import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Water Damage Drywall Repair: Frederick Homeowners Guide',
  description: 'Essential water damage drywall repair guide for Frederick homeowners. Professional tips, emergency response, and expert restoration services.',
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
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Complete Guide Coming Soon</h3>
            <p className="text-yellow-700">
              Comprehensive water damage repair guide with emergency procedures, cost estimates, and prevention tips.
            </p>
          </div>

          <div className="bg-blue-700 text-white rounded-lg p-8 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Emergency Water Damage Service</h2>
              <p className="text-blue-100 mb-6">
                Available 24/7 for Frederick area water damage emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13015550199"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700"
                >
                  Emergency: (301) 555-0199
                </a>
                <Link
                  href="/quote"
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Get Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}