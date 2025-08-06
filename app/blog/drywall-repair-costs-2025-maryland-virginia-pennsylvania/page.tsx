import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '2025 Drywall Repair Costs in Maryland, Virginia, and Pennsylvania',
  description: 'Complete 2025 pricing guide for drywall repairs across MD, VA, and PA. Get accurate cost estimates, budget planning tips, and regional pricing differences.',
}

export default function DrywallCosts2025Page() {
  return (
    <div className="bg-white">
      <div className="relative bg-green-700">
        <div className="absolute inset-0 bg-green-700 opacity-75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
              Pricing Guide
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              2025 Drywall Repair Costs in Maryland, Virginia, and Pennsylvania
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-green-100">
              Comprehensive 2025 pricing guide for drywall repairs across our service areas. Get accurate cost estimates and budget planning information.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Understanding current <Link href="/services/drywall-repair" className="text-blue-600 hover:text-blue-700">drywall repair costs</Link> across <Link href="/locations/maryland" className="text-blue-600 hover:text-blue-700">Maryland</Link>, <Link href="/locations/virginia" className="text-blue-600 hover:text-blue-700">Virginia</Link>, and <Link href="/locations/pennsylvania" className="text-blue-600 hover:text-blue-700">Pennsylvania</Link> helps homeowners budget effectively for their projects.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Comprehensive Pricing Guide Coming Soon</h3>
            <p className="text-yellow-700">
              We're compiling detailed 2025 pricing data across all our service areas, including regional variations, project size impacts, and cost-saving tips.
            </p>
            <div className="mt-4">
              <Link href="/blog" className="text-yellow-800 hover:text-yellow-900 font-medium">← Back to Blog</Link>
            </div>
          </div>

          <div className="bg-blue-700 text-white rounded-lg p-8 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Get Your Accurate Quote Today</h2>
              <p className="text-blue-100 mb-6">
                Don't wait for general pricing guides. Get a precise quote for your specific project from Wall Fix Pros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+13015550199"
                  className="border-2 border-blue-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                  Call (301) 555-0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}