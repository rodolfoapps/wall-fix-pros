import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '2025 Drywall Repair Costs: MD, VA, PA Pricing Guide',
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
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8">2025 Regional Pricing Overview</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Drywall repair costs vary significantly across our service areas due to local market conditions, material availability, and labor costs. Here's what homeowners can expect in 2025 across Maryland, Virginia, and Pennsylvania.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Maryland</h3>
              <div className="text-blue-800 text-sm space-y-2">
                <p><strong>Average Cost:</strong> $3.50-5.50/sq ft</p>
                <p><strong>Labor Rate:</strong> $45-65/hour</p>
                <p><strong>Premium Markets:</strong> Bethesda, Potomac, Kensington</p>
                <p><strong>Value Markets:</strong> Hagerstown, Mt Airy</p>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">Virginia</h3>
              <div className="text-red-800 text-sm space-y-2">
                <p><strong>Average Cost:</strong> $4.00-6.00/sq ft</p>
                <p><strong>Labor Rate:</strong> $50-70/hour</p>
                <p><strong>Premium Markets:</strong> McLean, Arlington, Alexandria</p>
                <p><strong>Value Markets:</strong> Sterling, Leesburg</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">Pennsylvania</h3>
              <div className="text-green-800 text-sm space-y-2">
                <p><strong>Average Cost:</strong> $3.00-4.50/sq ft</p>
                <p><strong>Labor Rate:</strong> $40-55/hour</p>
                <p><strong>Coverage Areas:</strong> Gettysburg, Chambersburg</p>
                <p><strong>Rural Rates:</strong> Generally 10-15% lower</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-700 text-white rounded-lg p-8 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Get Your Free 2025 Cost Estimate</h2>
              <p className="text-blue-100 mb-6">
                Ready to get an accurate estimate for your drywall project? Our team provides detailed, transparent pricing with no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+12406701949"
                  className="border-2 border-blue-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                  Call (240) 670-1949
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}