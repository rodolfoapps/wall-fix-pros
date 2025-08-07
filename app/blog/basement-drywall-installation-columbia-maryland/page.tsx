import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, CheckCircleIcon, ExclamationTriangleIcon, CurrencyDollarIcon, ClockIcon as TimeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Case Study: Complete Basement Drywall Installation in Columbia, Maryland',
  description: 'Detailed case study of complete basement drywall installation in Columbia, MD. From planning to completion with costs, timeline, and professional insights.',
}

export default function BasementInstallationColumbiaPage() {
  const projectTimeline = [
    {
      day: 'Day 1',
      phase: 'Preparation & Planning',
      duration: '6 hours',
      tasks: [
        'Moisture assessment and testing',
        'Electrical and plumbing coordination',
        'Material delivery and staging',
        'Workspace preparation'
      ],
      completed: true
    },
    {
      day: 'Day 2-3',
      phase: 'Framing & Electrical',
      duration: '16 hours',
      tasks: [
        'Metal stud framing installation',
        'Electrical rough-in coordination',
        'HVAC accommodations',
        'Insulation installation'
      ],
      completed: true
    },
    {
      day: 'Day 4-6',
      phase: 'Drywall Installation',
      duration: '18 hours',
      tasks: [
        'Ceiling drywall hanging',
        'Wall drywall installation',
        'Utility access panels',
        'Initial quality inspection'
      ],
      completed: true
    },
    {
      day: 'Day 7-9',
      phase: 'Taping & Finishing',
      duration: '20 hours',
      tasks: [
        'First coat taping and mudding',
        'Second coat application',
        'Third coat and detail work',
        'Sanding and preparation'
      ],
      completed: true
    },
    {
      day: 'Day 10',
      phase: 'Final Details',
      duration: '6 hours',
      tasks: [
        'Final sanding and cleanup',
        'Prime coat application',
        'Touch-ups and corrections',
        'Customer walkthrough'
      ],
      completed: true
    }
  ]

  const costBreakdown = [
    {
      category: 'Materials',
      items: [
        'Metal studs and track - $680',
        'Drywall sheets (5/8" moisture-resistant) - $920',
        'Joint compound and tape - $180',
        'Fasteners and hardware - $120',
        'Insulation - $340'
      ],
      subtotal: '$2,240'
    },
    {
      category: 'Labor',
      items: [
        'Framing and preparation - $800',
        'Drywall installation - $1,200',
        'Taping and finishing - $1,400',
        'Cleanup and final details - $300'
      ],
      subtotal: '$3,700'
    },
    {
      category: 'Additional Services',
      items: [
        'Moisture testing and assessment - $150',
        'Coordination with other trades - $100',
        'Waste disposal - $80',
        'Project management - $200'
      ],
      subtotal: '$530'
    }
  ]

  const challenges = [
    {
      challenge: 'Moisture Control',
      description: 'Below-grade basement environment requires special attention to moisture prevention',
      solution: 'Installed moisture-resistant drywall, vapor barriers, and proper ventilation coordination',
      impact: 'Prevents future mold issues and ensures long-term durability'
    },
    {
      challenge: 'Utility Integration',
      description: 'Multiple utilities including electrical, plumbing, and HVAC required coordination',
      solution: 'Created detailed access panels and coordinated installation timing with other trades',
      impact: 'Maintains utility access while providing clean finished appearance'
    },
    {
      challenge: 'Ceiling Height Optimization',
      description: 'Low ceiling height required careful planning to maximize headroom',
      solution: 'Used strategic framing techniques and minimal ceiling drops only where necessary',
      impact: 'Achieved comfortable 7\'6" finished ceiling height throughout'
    },
    {
      challenge: 'Sound Isolation',
      description: 'Family requested sound dampening between basement and main floor',
      solution: 'Installed acoustic insulation and resilient channel ceiling system',
      impact: 'Significantly reduced sound transmission for comfortable use'
    }
  ]

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="relative bg-green-700">
        <div className="absolute inset-0 bg-green-700 opacity-75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
              Case Study
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Case Study: Complete Basement Drywall Installation in Columbia, Maryland
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-green-100">
              A comprehensive look at our recent basement finishing project in Columbia, MD. From initial planning through final completion, including challenges, solutions, and results.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-green-100">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Wall Fix Pros Team</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>December 3, 2024</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>13 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Project Details</h3>
              <ul className="text-blue-800 space-y-2">
                <li><strong>Location:</strong> <Link href="/locations/maryland/columbia" className="text-blue-600 hover:text-blue-700">Columbia, MD</Link></li>
                <li><strong>Project Type:</strong> Complete <Link href="/services/drywall-installation" className="text-blue-600 hover:text-blue-700">Basement Drywall Installation</Link></li>
                <li><strong>Timeline:</strong> 10 working days</li>
                <li><strong>Square Footage:</strong> 1,100 sq ft</li>
                <li><strong>Ceiling Height:</strong> 7'6" finished</li>
                <li><strong>Special Features:</strong> Sound dampening, moisture control</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">Client Goals</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Transform unfinished basement into family recreation area</li>
                <li>• Create comfortable, dry environment</li>
                <li>• Minimize sound transmission to upper floors</li>
                <li>• Maintain access to utilities</li>
                <li>• Stay within $7,000 budget</li>
                <li>• Complete before holiday season</li>
              </ul>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This Columbia family contacted Wall Fix Pros in October with a vision: transform their 1,100 square foot unfinished basement into a comfortable family recreation area before the holidays. Like many <Link href="/locations/maryland" className="text-blue-600 hover:text-blue-700">Maryland</Link> basements, this space presented unique challenges including moisture concerns, low ceilings, and complex utility routing that required professional expertise and careful planning.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              What made this project particularly interesting was the combination of technical challenges and family-focused goals. The homeowners needed a space that would be comfortable, durable, and quiet enough for family activities while maintaining easy access for maintenance and future upgrades.
            </p>
          </div>
        </section>

        {/* Before Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Initial Assessment: Before Conditions</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Existing Conditions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Structural Elements:</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Concrete block foundation walls</li>
                  <li>• Exposed floor joists (8' on center)</li>
                  <li>• Steel I-beam support posts</li>
                  <li>• Concrete slab flooring</li>
                  <li>• Multiple utility runs overhead</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Challenges Identified:</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Minor moisture signs near foundation</li>
                  <li>• Complex electrical and plumbing routing</li>
                  <li>• Limited ceiling height (7'10" max)</li>
                  <li>• Sound transmission concerns</li>
                  <li>• Irregular wall angles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Critical Issues Requiring Professional Attention</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-red-700 font-medium">Moisture Management</p>
                  <p className="text-red-600 text-sm">Evidence of minor moisture infiltration required comprehensive waterproofing assessment before proceeding with drywall installation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-red-700 font-medium">Code Compliance</p>
                  <p className="text-red-600 text-sm">Basement finishing required adherence to Maryland building codes for ceiling heights, egress, and electrical safety.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges and Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Challenges and Professional Solutions</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Every basement finishing project presents unique challenges. Our experience with Columbia-area homes helped us anticipate and solve these issues before they became problems.
          </p>

          <div className="space-y-8">
            {challenges.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.challenge}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-orange-700">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-blue-700">Our Solution:</h4>
                    <p className="text-gray-600 text-sm">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-green-700">Impact:</h4>
                    <p className="text-gray-600 text-sm">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Project Timeline</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Proper project management ensures efficient completion and minimal disruption to your daily life. Here's how we managed this 10-day basement transformation.
          </p>

          <div className="space-y-6">
            {projectTimeline.map((phase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{phase.day}: {phase.phase}</h3>
                    <div className="flex items-center mt-2">
                      <TimeIcon className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-medium">{phase.duration}</span>
                      {phase.completed && (
                        <CheckCircleIcon className="h-5 w-5 text-green-600 ml-4" />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tasks Completed:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 mt-2 flex-shrink-0" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Cost Breakdown</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Transparency in pricing helps homeowners make informed decisions. Here's the complete cost analysis for this Columbia basement project.
          </p>

          <div className="space-y-6 mb-8">
            {costBreakdown.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  <span className="text-xl font-bold text-blue-600">{category.subtotal}</span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center">
                      <span className="text-sm">{item.split(' - ')[0]}</span>
                      <span className="text-sm font-medium">{item.split(' - ')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-green-900">Project Total</h3>
              <span className="text-3xl font-bold text-green-700">$6,470</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Included Services:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Complete material supply</li>
                  <li>• Professional installation</li>
                  <li>• Quality assurance inspections</li>
                  <li>• Daily cleanup and waste removal</li>
                  <li>• 5-year warranty on workmanship</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Cost Savings Achieved:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• $530 under original budget</li>
                  <li>• 15% below market average</li>
                  <li>• No change orders or surprises</li>
                  <li>• Completed ahead of schedule</li>
                  <li>• Premium materials at wholesale pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results and Outcomes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Final Results: Transformation Complete</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            The proof of professional workmanship is in the results. This Columbia basement transformation exceeded the family's expectations and created the comfortable recreation space they envisioned.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Quality Achievements</h3>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Perfectly smooth wall and ceiling surfaces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Seamless integration with utilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Professional-grade moisture resistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Optimal ceiling height preservation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Effective sound dampening system</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4">Client Benefits Delivered</h3>
              <ul className="text-green-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Comfortable 1,100 sq ft recreation area</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Significantly reduced sound transmission</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Easy utility access maintained</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Project completed before holidays</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Under budget with premium results</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Customer Testimonial</h3>
            <p className="text-purple-700 italic mb-3">
              "Wall Fix Pros transformed our basement beyond our expectations. The project management was exceptional – they finished ahead of schedule and under budget. The space is now our family's favorite room. The sound dampening works perfectly, and we love that we can still access all utilities easily. Their attention to detail and professionalism made all the difference."
            </p>
            <p className="text-purple-600 font-medium">– The Johnson Family, Columbia, MD</p>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Takeaways for Columbia Homeowners</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            This successful project reinforces important lessons for homeowners considering basement finishing in the Columbia area.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Critical Success Factors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Professional Moisture Assessment</p>
                    <p className="text-gray-600 text-sm">Below-grade spaces require expert evaluation before any finishing work begins.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Proper Material Selection</p>
                    <p className="text-gray-600 text-sm">Moisture-resistant drywall and appropriate insulation prevent future problems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Utility Coordination</p>
                    <p className="text-gray-600 text-sm">Planning access panels and utility routing prevents costly future modifications.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Value</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Home Value Increase</p>
                    <p className="text-gray-600 text-sm">Professional basement finishing typically returns 60-70% of investment in Columbia market.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Long-term Durability</p>
                    <p className="text-gray-600 text-sm">Quality materials and installation prevent costly repairs and maintenance issues.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Family Benefits</p>
                    <p className="text-gray-600 text-sm">Additional living space provides immediate quality of life improvements for growing families.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-green-700 text-white rounded-lg p-8 mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Columbia Basement?</h2>
            <p className="text-green-100 mb-6">
              Let Wall Fix Pros bring the same expertise and attention to detail to your basement finishing project. We understand Columbia-area homes and deliver results that exceed expectations.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-200">10+ Years</div>
                <div className="text-green-100 text-sm">Local Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-200">Licensed</div>
                <div className="text-green-100 text-sm">& Insured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-200">5 Year</div>
                <div className="text-green-100 text-sm">Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-200">Free</div>
                <div className="text-green-100 text-sm">Estimates</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12406701949"
                className="border-2 border-green-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Call (240) 670-1949
              </a>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Serving Columbia, Ellicot City, and all of Howard County
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/drywall-transformations-bethesda-rockville" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bethesda & Rockville Transformations</h3>
              <p className="text-gray-600 text-sm">See incredible before and after drywall transformations from our Maryland projects.</p>
            </Link>
            <Link href="/blog/fix-common-drywall-problems-maryland-homes" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Common Maryland Drywall Problems</h3>
              <p className="text-gray-600 text-sm">Learn to identify and fix common drywall issues in Maryland homes.</p>
            </Link>
            <Link href="/blog/drywall-repair-costs-2025-maryland-virginia-pennsylvania" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2025 Pricing Guide</h3>
              <p className="text-gray-600 text-sm">Complete cost breakdown for drywall projects across our service areas.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}