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
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">Virginia</h3>
              <div className="text-green-800 text-sm space-y-2">
                <p><strong>Average Cost:</strong> $3.25-5.25/sq ft</p>
                <p><strong>Labor Rate:</strong> $42-62/hour</p>
                <p><strong>Premium Markets:</strong> McLean, Alexandria, Fairfax</p>
                <p><strong>Value Markets:</strong> Sterling, Chantilly</p>
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-3">Pennsylvania</h3>
              <div className="text-purple-800 text-sm space-y-2">
                <p><strong>Average Cost:</strong> $2.75-4.25/sq ft</p>
                <p><strong>Labor Rate:</strong> $38-55/hour</p>
                <p><strong>Premium Markets:</strong> None in our service area</p>
                <p><strong>Value Markets:</strong> Chambersburg, Gettysburg</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Cost Breakdown by Repair Type</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Understanding specific repair costs helps homeowners budget effectively and make informed decisions about their drywall projects.
          </p>

          <div className="space-y-8 mb-12">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Repairs (Under 50 sq ft)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Repair Type</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Maryland</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Virginia</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Pennsylvania</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Nail Pop Repair</td>
                      <td className="px-4 py-2 text-gray-600">$75-125</td>
                      <td className="px-4 py-2 text-gray-600">$70-120</td>
                      <td className="px-4 py-2 text-gray-600">$60-100</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Small Hole Patch (< 2")</td>
                      <td className="px-4 py-2 text-gray-600">$100-200</td>
                      <td className="px-4 py-2 text-gray-600">$95-185</td>
                      <td className="px-4 py-2 text-gray-600">$80-160</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Medium Hole (2-6")</td>
                      <td className="px-4 py-2 text-gray-600">$150-300</td>
                      <td className="px-4 py-2 text-gray-600">$140-280</td>
                      <td className="px-4 py-2 text-gray-600">$120-240</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Large Hole (6-12")</td>
                      <td className="px-4 py-2 text-gray-600">$200-400</td>
                      <td className="px-4 py-2 text-gray-600">$185-375</td>
                      <td className="px-4 py-2 text-gray-600">$160-320</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Crack Repair (Linear ft)</td>
                      <td className="px-4 py-2 text-gray-600">$8-15/ft</td>
                      <td className="px-4 py-2 text-gray-600">$7-14/ft</td>
                      <td className="px-4 py-2 text-gray-600">$6-12/ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Medium Projects (50-200 sq ft)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Project Type</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Maryland</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Virginia</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Pennsylvania</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Room Repair (100 sq ft)</td>
                      <td className="px-4 py-2 text-gray-600">$650-1,200</td>
                      <td className="px-4 py-2 text-gray-600">$600-1,100</td>
                      <td className="px-4 py-2 text-gray-600">$500-950</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Water Damage Repair</td>
                      <td className="px-4 py-2 text-gray-600">$800-1,800</td>
                      <td className="px-4 py-2 text-gray-600">$750-1,650</td>
                      <td className="px-4 py-2 text-gray-600">$650-1,400</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Ceiling Repair</td>
                      <td className="px-4 py-2 text-gray-600">$900-1,600</td>
                      <td className="px-4 py-2 text-gray-600">$850-1,500</td>
                      <td className="px-4 py-2 text-gray-600">$700-1,300</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Texture Matching</td>
                      <td className="px-4 py-2 text-gray-600">$400-800</td>
                      <td className="px-4 py-2 text-gray-600">$375-750</td>
                      <td className="px-4 py-2 text-gray-600">$325-650</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Projects (200+ sq ft)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Project Type</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Maryland</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Virginia</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Pennsylvania</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Whole Room (300 sq ft)</td>
                      <td className="px-4 py-2 text-gray-600">$1,800-3,200</td>
                      <td className="px-4 py-2 text-gray-600">$1,650-2,900</td>
                      <td className="px-4 py-2 text-gray-600">$1,400-2,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Multiple Rooms</td>
                      <td className="px-4 py-2 text-gray-600">$3,500-8,000</td>
                      <td className="px-4 py-2 text-gray-600">$3,200-7,200</td>
                      <td className="px-4 py-2 text-gray-600">$2,800-6,200</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Basement Finishing</td>
                      <td className="px-4 py-2 text-gray-600">$4,000-12,000</td>
                      <td className="px-4 py-2 text-gray-600">$3,600-10,800</td>
                      <td className="px-4 py-2 text-gray-600">$3,200-9,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-900">Whole House Repair</td>
                      <td className="px-4 py-2 text-gray-600">$8,000-25,000</td>
                      <td className="px-4 py-2 text-gray-600">$7,200-22,500</td>
                      <td className="px-4 py-2 text-gray-600">$6,200-19,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Factors Affecting Cost</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Several factors can significantly impact your drywall repair costs. Understanding these helps you get accurate estimates and avoid surprises.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Increase Factors</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Premium Location Markets</h4>
                  <p className="text-gray-600 text-sm">Areas like Bethesda, McLean, and Potomac command 20-40% higher rates due to higher living costs and property values.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Complex Textures</h4>
                  <p className="text-gray-600 text-sm">Matching popcorn, orange peel, or custom textures can add 30-50% to repair costs.</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Emergency Services</h4>
                  <p className="text-gray-600 text-sm">After-hours, weekend, or holiday service typically adds 25-50% premium.</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Historic Homes</h4>
                  <p className="text-gray-600 text-sm">Plaster walls, period-appropriate materials, and preservation requirements increase costs 40-60%.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Savings Opportunities</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Multiple Room Discounts</h4>
                  <p className="text-gray-600 text-sm">Bundling repairs across multiple rooms can save 10-20% through efficiency gains.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Off-Season Scheduling</h4>
                  <p className="text-gray-600 text-sm">Winter months (January-March) often have lower demand and better pricing.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Standard Finishes</h4>
                  <p className="text-gray-600 text-sm">Choosing smooth finishes or simple textures reduces labor time and costs.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Flexible Timing</h4>
                  <p className="text-gray-600 text-sm">Allowing contractors to schedule around other jobs can reduce costs 5-15%.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">2025 Market Trends</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Several trends are shaping drywall repair costs in 2025 across our service areas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Upward Pressure on Costs</h3>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• Material costs up 8-12% from 2024</li>
                <li>• Skilled labor shortage continues</li>
                <li>• Insurance requirements increasing costs</li>
                <li>• Environmental regulations affecting materials</li>
                <li>• Transportation costs remain elevated</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">Cost Stabilizing Factors</h3>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• New contractors entering market</li>
                <li>• Improved efficiency tools and techniques</li>
                <li>• Better material availability</li>
                <li>• Competitive pricing pressure</li>
                <li>• Technology reducing waste</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Get Accurate Estimates</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Getting accurate repair estimates requires providing complete information to contractors. Here's how to ensure you get reliable pricing.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Information to Provide</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Damage Details:</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Size and location of damage</li>
                  <li>• Cause of damage (water, impact, age)</li>
                  <li>• Timeline of when damage occurred</li>
                  <li>• Photos from multiple angles</li>
                  <li>• Current condition and stability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Project Context:</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Home age and construction type</li>
                  <li>• Existing texture and finish</li>
                  <li>• Access limitations</li>
                  <li>• Timeline requirements</li>
                  <li>• Insurance claim involvement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Questions to Ask Contractors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Cost Breakdown:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Detailed material costs</li>
                  <li>• Labor hours and rates</li>
                  <li>• Permit fees if required</li>
                  <li>• Cleanup and disposal</li>
                  <li>• Payment schedule</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Project Details:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Timeline and scheduling</li>
                  <li>• Warranty coverage</li>
                  <li>• Change order procedures</li>
                  <li>• Quality standards</li>
                  <li>• Insurance and licensing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-700 text-white rounded-lg p-8 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Get Your Accurate 2025 Quote Today</h2>
              <p className="text-blue-100 mb-6">
                Don't rely on general estimates. Get precise pricing for your specific drywall repair project from Wall Fix Pros. Serving Maryland, Virginia, and Pennsylvania with transparent, competitive pricing.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">Free</div>
                  <div className="text-blue-100 text-sm">Estimates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">Fixed</div>
                  <div className="text-blue-100 text-sm">Pricing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">5 Year</div>
                  <div className="text-blue-100 text-sm">Warranty</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+12406701949"
                  className="border-2 border-blue-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                  Call (240) 670-1949
                </a>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                Serving all of Maryland, Virginia, West Virginia, and Pennsylvania
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mb-16 mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/fix-common-drywall-problems-maryland-homes" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Common Drywall Problems Maryland</h3>
                <p className="text-gray-600 text-sm">Learn to identify and fix the most common drywall issues in Maryland homes with professional techniques.</p>
              </Link>
              <Link href="/blog/diy-vs-professional-drywall-installation-virginia" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DIY vs Professional Installation</h3>
                <p className="text-gray-600 text-sm">Cost comparison and quality analysis of DIY versus professional drywall installation in Virginia.</p>
              </Link>
              <Link href="/blog/patch-vs-replace-drywall-budget-decisions" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Patch vs Replace Decisions</h3>
                <p className="text-gray-600 text-sm">Make smart financial decisions about when to patch versus replace damaged drywall.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}