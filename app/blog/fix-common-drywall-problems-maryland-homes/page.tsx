import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Fix Common Drywall Problems: Maryland Homes Guide',
  description: 'Expert guide to fixing common drywall problems in Maryland homes. Learn professional repair techniques for cracks, holes, water damage, and more with step-by-step instructions.',
}

export default function FixDrywallProblemsPage() {
  const commonProblems = [
    {
      problem: 'Nail Pops and Screw Pops',
      difficulty: 'Easy',
      timeRequired: '30 minutes',
      tools: ['Screwdriver', 'Joint compound', 'Putty knife', 'Sandpaper'],
      causes: 'Temperature changes, house settling, improper installation',
      description: 'Fasteners backing out of studs, creating small bumps or cracks in wall surface'
    },
    {
      problem: 'Small Holes (up to 1 inch)',
      difficulty: 'Easy',  
      timeRequired: '1 hour',
      tools: ['Mesh patch or self-adhesive patch', 'Joint compound', 'Putty knife', 'Sandpaper', 'Primer'],
      causes: 'Doorknob impacts, small accidents, picture hanging mistakes',
      description: 'Minor punctures that go through the drywall surface'
    },
    {
      problem: 'Medium Holes (1-3 inches)',
      difficulty: 'Moderate',
      timeRequired: '2-3 hours',
      tools: ['Drywall patch kit', 'Joint compound', 'Mesh tape', '6-inch putty knife', 'Sandpaper', 'Primer'],
      causes: 'Doorknob damage, furniture impacts, accidents',
      description: 'Holes requiring patching material and multiple compound applications'
    },
    {
      problem: 'Large Holes (3+ inches)',
      difficulty: 'Hard',
      timeRequired: '4-6 hours',
      tools: ['Drywall piece', 'Drywall saw', 'Joint compound', 'Mesh tape', 'Screws', 'Drill'],
      causes: 'Major impacts, plumbing access, electrical work',
      description: 'Significant damage requiring drywall replacement piece'
    },
    {
      problem: 'Hairline Cracks',
      difficulty: 'Easy',
      timeRequired: '45 minutes',
      tools: ['Mesh tape', 'Joint compound', 'Putty knife', 'Sandpaper'],
      causes: 'House settling, temperature changes, minor structural movement',
      description: 'Thin cracks along joints or in wall surface'
    },
    {
      problem: 'Corner Cracks',
      difficulty: 'Moderate',
      timeRequired: '2 hours',
      tools: ['Corner bead', 'Joint compound', 'Putty knife', 'Sandpaper', 'Screws'],
      causes: 'Settling, poor initial installation, impact damage',
      description: 'Cracks along inside or outside corners of walls'
    },
    {
      problem: 'Water Damage Stains',
      difficulty: 'Hard',
      timeRequired: '1-2 days',
      tools: ['Stain-blocking primer', 'Joint compound', 'Moisture meter', 'Fan', 'Dehumidifier'],
      causes: 'Roof leaks, plumbing issues, high humidity, flooding',
      description: 'Discoloration and potential softening of drywall from moisture'
    },
    {
      problem: 'Texture Damage',
      difficulty: 'Hard',
      timeRequired: '3-4 hours',
      tools: ['Texture spray', 'Roller', 'Joint compound', 'Primer', 'Paint'],
      causes: 'Repairs, accidents, poor maintenance, age',
      description: 'Damaged or missing texture requiring matching techniques'
    },
    {
      problem: 'Drywall Sagging',
      difficulty: 'Hard',
      timeRequired: '1 day',
      tools: ['Screws', 'Washers', 'Joint compound', 'Mesh tape', 'Drill'],
      causes: 'Water damage, poor fastening, structural issues, age',
      description: 'Sections of drywall pulling away from framing'
    },
    {
      problem: 'Joint Tape Failure',
      difficulty: 'Moderate',
      timeRequired: '3-4 hours',
      tools: ['Joint tape', 'Joint compound', 'Putty knife', 'Sandpaper', 'Primer'],
      causes: 'Poor initial installation, moisture, age, structural movement',
      description: 'Tape peeling or bubbling along seams'
    }
  ]

  const marylandConsiderations = [
    {
      factor: 'Humidity Control',
      description: 'Maryland\'s humid subtropical climate requires special attention to moisture control during repairs',
      impact: 'High humidity can extend drying times and affect joint compound curing'
    },
    {
      factor: 'Seasonal Temperature Changes',
      description: 'Significant temperature variations can cause expansion and contraction',
      impact: 'May lead to recurring cracks if not properly addressed with flexible compounds'
    },
    {
      factor: 'Building Codes',
      description: 'Maryland follows International Building Code with state modifications',
      impact: 'Some repairs may require permits, especially for major structural changes'
    },
    {
      factor: 'Historic Home Considerations',
      description: 'Many Maryland homes are historic, requiring special preservation techniques',
      impact: 'May need period-appropriate materials and methods for authenticity'
    }
  ]

  const toolsAndMaterials = {
    basic: [
      'Putty knives (4-inch, 6-inch, 10-inch)',
      'Joint compound (lightweight spackling)',
      'Sandpaper (120 and 220 grit)',
      'Primer (PVA or stain-blocking)',
      'Drop cloths',
      'Safety glasses',
      'Dust mask'
    ],
    intermediate: [
      'Drywall saw',
      'Mesh patches (various sizes)',
      'Joint tape',
      'Corner bead',
      'Screws and anchors',
      'Electric drill',
      'Utility knife',
      'Measuring tape'
    ],
    advanced: [
      'Moisture meter',
      'Texture spray gun',
      'Drywall lift (for ceiling repairs)',
      'Reciprocating saw',
      'Stud finder',
      'Level',
      'Dehumidifier',
      'Industrial fan'
    ]
  }

  const costBreakdown = [
    {
      repairType: 'Nail Pop Repair',
      diyMaterials: '$5-10',
      diyTime: '30 min',
      professionalCost: '$75-125',
      complexity: 'Very Easy'
    },
    {
      repairType: 'Small Hole Patch',
      diyMaterials: '$10-20',
      diyTime: '2-3 hours',
      professionalCost: '$100-200',
      complexity: 'Easy'
    },
    {
      repairType: 'Medium Hole Repair',
      diyMaterials: '$15-30',
      diyTime: '4-6 hours',
      professionalCost: '$150-300',
      complexity: 'Moderate'
    },
    {
      repairType: 'Large Hole Replacement',
      diyMaterials: '$25-50',
      diyTime: '6-8 hours',
      professionalCost: '$200-400',
      complexity: 'Difficult'
    },
    {
      repairType: 'Water Damage Repair',
      diyMaterials: '$30-75',
      diyTime: '1-2 days',
      professionalCost: '$300-800',
      complexity: 'Very Difficult'
    },
    {
      repairType: 'Texture Matching',
      diyMaterials: '$20-40',
      diyTime: '4-8 hours',
      professionalCost: '$200-500',
      complexity: 'Very Difficult'
    }
  ]

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0 bg-blue-700 opacity-75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              Repair Guide
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              How to Fix Common Drywall Problems in Maryland Homes
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              A complete guide to identifying, diagnosing, and repairing the most common drywall issues facing Maryland homeowners, with professional techniques and local considerations.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Wall Fix Pros Expert Team</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Maryland homeowners face unique drywall challenges due to the state's humid subtropical climate, seasonal temperature variations, and mix of historic and modern construction. Whether you're dealing with a small nail pop in your <Link href="/locations/maryland/frederick" className="text-blue-600 hover:text-blue-700">Frederick home</Link> or significant water damage in <Link href="/locations/maryland/baltimore" className="text-blue-600 hover:text-blue-700">Baltimore</Link>, understanding the proper repair techniques can save you time and money.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            As Maryland's leading <Link href="/services/drywall-repair" className="text-blue-600 hover:text-blue-700">drywall repair specialists</Link>, Wall Fix Pros has encountered virtually every type of drywall problem across our service areas from <Link href="/locations/maryland/bethesda" className="text-blue-600 hover:text-blue-700">Bethesda</Link> to <Link href="/locations/maryland/hagerstown" className="text-blue-600 hover:text-blue-700">Hagerstown</Link>. This comprehensive guide shares our professional expertise to help you identify problems early, understand repair options, and make informed decisions about DIY versus professional repairs.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#common-problems" className="text-blue-600 hover:text-blue-700 py-1">1. 10 Most Common Drywall Problems</a>
            <a href="#maryland-considerations" className="text-blue-600 hover:text-blue-700 py-1">2. Maryland-Specific Considerations</a>
            <a href="#tools-materials" className="text-blue-600 hover:text-blue-700 py-1">3. Essential Tools and Materials</a>
            <a href="#repair-instructions" className="text-blue-600 hover:text-blue-700 py-1">4. Step-by-Step Repair Instructions</a>
            <a href="#diy-vs-professional" className="text-blue-600 hover:text-blue-700 py-1">5. DIY vs Professional Repair</a>
            <a href="#cost-breakdown" className="text-blue-600 hover:text-blue-700 py-1">6. Cost Analysis and Budgeting</a>
            <a href="#prevention-tips" className="text-blue-600 hover:text-blue-700 py-1">7. Prevention and Maintenance</a>
            <a href="#when-to-call-pros" className="text-blue-600 hover:text-blue-700 py-1">8. When to Call Professionals</a>
          </div>
        </div>

        {/* Common Problems Section */}
        <section id="common-problems" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">10 Most Common Drywall Problems in Maryland Homes</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Based on our experience serving Maryland homeowners for over a decade, these are the most frequent drywall issues we encounter. Each problem has specific causes, difficulty levels, and repair approaches that homeowners should understand.
          </p>

          <div className="space-y-8">
            {commonProblems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{index + 1}. {item.problem}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                  <div className="ml-6 text-right">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${ 
                      item.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      item.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.difficulty}
                    </span>
                    <div className="text-sm text-gray-500 mt-2">
                      <ClockIcon className="h-4 w-4 inline mr-1" />
                      {item.timeRequired}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common Causes:</h4>
                    <p className="text-gray-600 text-sm">{item.causes}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools Needed:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {item.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maryland Considerations */}
        <section id="maryland-considerations" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Maryland-Specific Considerations</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Maryland's unique climate and building characteristics require special attention when planning drywall repairs. Understanding these factors helps ensure long-lasting repairs that stand up to local conditions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {marylandConsiderations.map((item, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{item.factor}</h3>
                <p className="text-blue-800 mb-3 text-sm">{item.description}</p>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm font-medium">Impact: {item.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important for Maryland Homeowners</h3>
                <p className="text-yellow-700">
                  Always check local building codes before starting major repairs. Some areas in Maryland, particularly historic districts in <Link href="/locations/maryland/frederick" className="text-yellow-800 underline">Frederick</Link>, <Link href="/locations/maryland/baltimore" className="text-yellow-800 underline">Baltimore</Link>, and <Link href="/locations/maryland/kensington" className="text-yellow-800 underline">Kensington</Link>, may have specific requirements for materials and methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools and Materials */}
        <section id="tools-materials" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Tools and Materials</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Having the right tools makes the difference between a professional-looking repair and an obvious patch job. Here's our recommended toolkit organized by skill level and project complexity.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Basic Tool Kit
              </h3>
              <p className="text-green-800 text-sm mb-4">For simple repairs like nail pops and small holes</p>
              <ul className="space-y-2">
                {toolsAndMaterials.basic.map((tool, index) => (
                  <li key={index} className="flex items-center text-green-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-900 mb-4 flex items-center">
                <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
                Intermediate Kit
              </h3>
              <p className="text-yellow-800 text-sm mb-4">For medium holes, cracks, and corner repairs</p>
              <ul className="space-y-2">
                {toolsAndMaterials.intermediate.map((tool, index) => (
                  <li key={index} className="flex items-center text-yellow-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center">
                <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                Advanced Kit
              </h3>
              <p className="text-red-800 text-sm mb-4">For water damage, large repairs, and texture work</p>
              <ul className="space-y-2">
                {toolsAndMaterials.advanced.map((tool, index) => (
                  <li key={index} className="flex items-center text-red-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section id="cost-breakdown" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cost Analysis: DIY vs Professional Repair</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Understanding the true cost of drywall repairs helps you make informed decisions. This comparison includes material costs, time investment, and quality considerations for Maryland homeowners.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Repair Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DIY Materials</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DIY Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Professional Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costBreakdown.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.repairType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.diyMaterials}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.diyTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.professionalCost}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.complexity === 'Very Easy' ? 'bg-green-100 text-green-800' :
                        item.complexity === 'Easy' ? 'bg-green-100 text-green-800' :
                        item.complexity === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                        item.complexity === 'Difficult' ? 'bg-red-100 text-red-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.complexity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Professional Value Considerations</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <h4 className="font-semibold mb-2">Professional Benefits:</h4>
                <ul className="space-y-1">
                  <li>• Warranty on work performed</li>
                  <li>• Perfect texture matching</li>
                  <li>• Proper moisture assessment</li>
                  <li>• Code compliance assurance</li>
                  <li>• Professional-grade materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">DIY Risks:</h4>
                <ul className="space-y-1">
                  <li>• Texture matching difficulties</li>
                  <li>• Hidden damage missed</li>
                  <li>• Improper drying time</li>
                  <li>• Tool investment costs</li>
                  <li>• Time underestimation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When to Call Professionals */}
        <section id="when-to-call-pros" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">When to Call Wall Fix Pros</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            While many small repairs can be DIY projects, certain situations require professional expertise to ensure safety, quality, and long-term durability. Here's when you should call Maryland's trusted drywall experts.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-900 mb-4">Call Immediately For:</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Water damage or signs of mold</span>
                </li>
                <li className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Ceiling sagging or structural concerns</span>
                </li>
                <li className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Electrical wiring visible in damaged areas</span>
                </li>
                <li className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Recurring cracks in same location</span>
                </li>
                <li className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Multiple rooms affected</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-900 mb-4">Consider Professional Help For:</h3>
              <ul className="space-y-3 text-yellow-800">
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Textured walls requiring matching</span>
                </li>
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Large holes over 6 inches</span>
                </li>
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Historic home preservation requirements</span>
                </li>
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Time constraints for completion</span>
                </li>
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">Insurance claim requirements</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-700 text-white rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Why Maryland Homeowners Choose Wall Fix Pros</h3>
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                With over a decade of experience serving Maryland communities from our <Link href="/locations/maryland/frederick" className="text-blue-200 underline">Frederick headquarters</Link>, we understand local building codes, climate challenges, and architectural styles throughout the state.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">98%</div>
                  <div className="text-blue-100 text-sm">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">24/7</div>
                  <div className="text-blue-100 text-sm">Emergency Service</div>
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
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/water-damage-drywall-repair-frederick-homeowners" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Damage Drywall Repair Guide</h3>
              <p className="text-gray-600 text-sm">Essential information for Frederick homeowners dealing with water damage and moisture issues.</p>
            </Link>
            <Link href="/blog/spring-drywall-inspection-checklist-dmv" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spring Drywall Inspection Checklist</h3>
              <p className="text-gray-600 text-sm">Comprehensive checklist for DMV homeowners to catch problems early and prevent costly repairs.</p>
            </Link>
            <Link href="/blog/drywall-repair-costs-2025-maryland-virginia-pennsylvania" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2025 Drywall Repair Costs</h3>
              <p className="text-gray-600 text-sm">Complete pricing guide for drywall repairs across Maryland, Virginia, and Pennsylvania.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}