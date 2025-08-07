import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, CheckCircleIcon, ExclamationTriangleIcon, MagnifyingGlassIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Spring Home Maintenance: Drywall Inspection Checklist for DMV Homeowners',
  description: 'Comprehensive spring drywall inspection checklist for DC Metro area homeowners. Catch problems early and save on repairs with professional guidance from Wall Fix Pros.',
}

export default function SpringDrywallInspectionPage() {
  const inspectionAreas = [
    {
      area: 'Interior Walls',
      priority: 'High',
      timeRequired: '45-60 minutes',
      tools: ['Flashlight', 'Measuring tape', 'Camera', 'Moisture meter (optional)'],
      checkpoints: [
        'Cracks along joints and corners',
        'Water stains or discoloration', 
        'Nail or screw pops',
        'Texture damage or wear',
        'Paint peeling or bubbling',
        'Soft spots or sagging areas'
      ],
      commonIssues: [
        'Settlement cracks from winter freeze-thaw',
        'Humidity damage from winter heating',
        'Hidden water damage from ice dams',
        'Nail pops from temperature changes'
      ]
    },
    {
      area: 'Ceilings',
      priority: 'Critical', 
      timeRequired: '30-45 minutes',
      tools: ['Ladder', 'Flashlight', 'Camera', 'Binoculars (for high ceilings)'],
      checkpoints: [
        'Water stains (especially around fixtures)',
        'Sagging or bowing sections',
        'Cracks radiating from corners',
        'Popcorn texture damage',
        'Light fixture moisture signs',
        'HVAC vent area condition'
      ],
      commonIssues: [
        'Ice dam water infiltration',
        'Roof leak aftermath',
        'HVAC condensation problems',
        'Structural settling effects'
      ]
    },
    {
      area: 'Basements',
      priority: 'High',
      timeRequired: '30-40 minutes', 
      tools: ['Flashlight', 'Humidity meter', 'Camera', 'Gloves'],
      checkpoints: [
        'Efflorescence on walls',
        'Musty odors indicating mold',
        'Moisture along foundation walls',
        'Ceiling tile condition',
        'Finished wall integrity',
        'Insulation moisture damage'
      ],
      commonIssues: [
        'Spring groundwater infiltration',
        'Winter humidity accumulation',
        'Poor ventilation consequences',
        'Foundation settling impacts'
      ]
    },
    {
      area: 'Bathrooms & Kitchens',
      priority: 'Critical',
      timeRequired: '20-30 minutes',
      tools: ['Flashlight', 'Mirror', 'Camera', 'Moisture meter'],
      checkpoints: [
        'Grout and caulk condition',
        'Wall areas behind fixtures',
        'Ceiling near exhaust fans',
        'Under-sink wall conditions',
        'Shower/tub surround integrity',
        'Ventilation effectiveness'
      ],
      commonIssues: [
        'Winter condensation damage',
        'Inadequate ventilation effects',
        'Plumbing leak signs',
        'Tile/drywall interface problems'
      ]
    },
    {
      area: 'Attics & Crawl Spaces',
      priority: 'Moderate',
      timeRequired: '20-30 minutes',
      tools: ['Headlamp', 'Knee pads', 'Camera', 'Measuring tape'],
      checkpoints: [
        'Insulation condition and coverage',
        'Air sealing effectiveness',
        'Moisture signs on framing',
        'Ventilation adequacy',
        'Electrical penetration sealing',
        'Pest damage signs'
      ],
      commonIssues: [
        'Ice dam related moisture',
        'Inadequate vapor barriers',
        'Air leakage problems',
        'Insulation compression/damage'
      ]
    }
  ]

  const severityLevels = [
    {
      level: 'Minor Issues',
      description: 'Small problems that can wait but should be monitored',
      examples: [
        'Small nail pops (under 1/4 inch)',
        'Minor hairline cracks',
        'Light surface scratches',
        'Small texture irregularities'
      ],
      timeline: 'Address within 3-6 months',
      cost: '$100-500',
      diyFriendly: true
    },
    {
      level: 'Moderate Concerns',
      description: 'Issues requiring attention within a few months',
      examples: [
        'Cracks longer than 6 inches',
        'Multiple nail pops in same area',
        'Minor water stains (no active leak)',
        'Peeling paint in high-moisture areas'
      ],
      timeline: 'Address within 1-3 months',
      cost: '$300-1,500',
      diyFriendly: false
    },
    {
      level: 'Urgent Repairs',
      description: 'Problems requiring immediate professional attention',
      examples: [
        'Active water leaks or stains',
        'Sagging ceiling sections',
        'Large cracks with separation',
        'Mold growth or strong musty odors',
        'Soft or spongy wall areas'
      ],
      timeline: 'Address immediately',
      cost: '$500-5,000+',
      diyFriendly: false
    }
  ]

  const seasonalConsiderations = [
    {
      month: 'March',
      focus: 'Post-Winter Assessment',
      weatherFactors: ['Ice dam aftermath', 'Freeze-thaw cycle damage', 'Winter humidity effects'],
      keyAreas: ['Ceilings for water damage', 'Exterior wall moisture', 'Basement humidity levels'],
      actionItems: [
        'Document winter damage for insurance',
        'Plan repair timeline before spring rains',
        'Address urgent issues immediately'
      ]
    },
    {
      month: 'April', 
      focus: 'Spring Rain Preparation',
      weatherFactors: ['Increased rainfall', 'Humidity fluctuations', 'Temperature variations'],
      keyAreas: ['Roof leak potential areas', 'Basement moisture entry points', 'Window/door sealing'],
      actionItems: [
        'Complete urgent repairs before rain season',
        'Improve ventilation in problem areas', 
        'Monitor humidity levels closely'
      ]
    },
    {
      month: 'May',
      focus: 'Summer Preparation',
      weatherFactors: ['Rising temperatures', 'Humidity increases', 'Storm season approach'],
      keyAreas: ['HVAC transition impacts', 'Basement dehumidification', 'Attic ventilation'],
      actionItems: [
        'Finalize spring repair projects',
        'Optimize climate control systems',
        'Prepare for summer humidity challenges'
      ]
    }
  ]

  const professionalSignsChecklist = [
    {
      category: 'Water Damage Indicators',
      urgency: 'Immediate',
      signs: [
        'Brown or yellow stains on ceilings or walls',
        'Peeling or bubbling paint in bathroom areas', 
        'Soft spots when pressing on drywall',
        'Musty odors, especially in basements',
        'White, chalky deposits (efflorescence) on walls'
      ],
      whyProfessional: 'Water damage often indicates larger structural issues requiring expert assessment and specialized equipment for proper remediation.'
    },
    {
      category: 'Structural Concerns',
      urgency: 'High',
      signs: [
        'Cracks wider than 1/4 inch',
        'Cracks that have grown since last inspection',
        'Sagging ceiling areas',
        'Doors or windows that stick or won\'t close properly',
        'Multiple cracks forming patterns'
      ],
      whyProfessional: 'Structural issues can indicate foundation problems, settling, or load-bearing concerns that require engineering assessment.'
    },
    {
      category: 'Mold and Air Quality',
      urgency: 'High',
      signs: [
        'Visible black, green, or brown spots on surfaces',
        'Strong musty or earthy odors',
        'Family members experiencing respiratory issues',
        'Increased allergy symptoms indoors',
        'Condensation patterns on walls or windows'
      ],
      whyProfessional: 'Mold remediation requires specialized equipment, safety protocols, and techniques to prevent spread and ensure complete removal.'
    },
    {
      category: 'Extensive Damage',
      urgency: 'Moderate to High',
      signs: [
        'Multiple rooms showing similar problems',
        'Recurring issues in the same locations',
        'Large areas of texture damage',
        'Electrical fixtures affected by moisture',
        'HVAC ducts showing moisture infiltration'
      ],
      whyProfessional: 'Widespread issues often indicate systemic problems requiring comprehensive solutions and coordinated repairs.'
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
              Maintenance Guide
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Spring Home Maintenance: Drywall Inspection Checklist for DMV Homeowners
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-green-100">
              Comprehensive spring inspection guide for DC Metro area homeowners. Catch drywall problems early, save on repairs, and maintain your home's value with professional insights.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-green-100">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Wall Fix Pros Expert Team</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>November 28, 2024</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>12 min read</span>
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
            Spring is the perfect time for DMV area homeowners to assess winter's impact on their drywall and interior surfaces. After months of heating, humidity fluctuations, and potential ice dam damage, a thorough spring inspection can catch problems early – before they become expensive repairs. From <Link href="/locations/maryland/bethesda" className="text-blue-600 hover:text-blue-700">Bethesda</Link> to <Link href="/locations/virginia/alexandria" className="text-blue-600 hover:text-blue-700">Alexandria</Link>, homes throughout the region face similar post-winter challenges.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            As the DMV's trusted <Link href="/services/drywall-repair" className="text-blue-600 hover:text-blue-700">drywall repair specialists</Link>, Wall Fix Pros has conducted thousands of spring assessments throughout <Link href="/locations/maryland" className="text-blue-600 hover:text-blue-700">Maryland</Link>, <Link href="/locations/virginia" className="text-blue-600 hover:text-blue-700">Virginia</Link>, and the District. This comprehensive checklist reflects our experience with regional climate impacts and the most effective strategies for early problem detection.
          </p>
        </div>

        {/* Why Spring Inspections Matter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Spring Drywall Inspections Are Critical in the DMV</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">DMV Climate Impact on Drywall</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Winter Stresses:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Freeze-thaw cycles causing expansion/contraction</li>
                  <li>• Ice dam formation leading to water infiltration</li>
                  <li>• Heating system humidity fluctuations</li>
                  <li>• Condensation from temperature differentials</li>
                  <li>• Reduced ventilation during sealed heating season</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Spring Opportunities:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Ideal weather conditions for repairs</li>
                  <li>• Lower contractor demand = better pricing</li>
                  <li>• Time to complete work before summer humidity</li>
                  <li>• Prevents minor issues from becoming major problems</li>
                  <li>• Maintains home value and appearance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <MagnifyingGlassIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-green-900 mb-2">Early Detection</h3>
              <p className="text-green-800 text-sm">Catch problems before they worsen, saving 60-80% on repair costs</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <DocumentCheckIcon className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-yellow-900 mb-2">Maintenance Planning</h3>
              <p className="text-yellow-800 text-sm">Plan repairs during optimal weather and contractor availability</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <CheckCircleIcon className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-purple-900 mb-2">Home Value</h3>
              <p className="text-purple-800 text-sm">Maintain interior condition and prevent expensive emergency repairs</p>
            </div>
          </div>
        </section>

        {/* Comprehensive Inspection Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Room-by-Room Inspection Guide</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            This systematic approach ensures you don't miss critical areas while making efficient use of your inspection time. Allow 2-3 hours for a thorough whole-house assessment.
          </p>

          <div className="space-y-8">
            {inspectionAreas.map((area, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{area.area}</h3>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        area.priority === 'Critical' ? 'bg-red-100 text-red-800' : 
                        area.priority === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {area.priority} Priority
                      </span>
                      <span className="text-sm text-gray-600">Time: {area.timeRequired}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools Needed:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {area.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What to Look For:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {area.checkpoints.map((checkpoint, cpIndex) => (
                        <li key={cpIndex} className="flex items-center">
                          <CheckCircleIcon className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {checkpoint}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Common DMV Spring Issues:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {area.commonIssues.map((issue, issueIndex) => (
                      <li key={issueIndex} className="flex items-start">
                        <ExclamationTriangleIcon className="h-4 w-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem Severity Assessment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Assess Problem Severity</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Not all drywall issues require immediate attention. Understanding severity levels helps you prioritize repairs and budget effectively.
          </p>

          <div className="space-y-6">
            {severityLevels.map((level, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{level.level}</h3>
                    <p className="text-gray-600 mt-1">{level.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Timeline:</div>
                    <div className="text-sm font-semibold text-blue-600">{level.timeline}</div>
                    <div className="text-sm text-gray-600 mt-1">Cost:</div>
                    <div className="text-sm font-semibold text-green-600">{level.cost}</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {level.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-400 mt-1.5 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-900">DIY Friendly:</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                        level.diyFriendly ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {level.diyFriendly ? 'Yes' : 'Professional Required'}
                      </span>
                    </div>
                    {!level.diyFriendly && (
                      <p className="text-gray-600 text-sm">
                        These issues typically require professional assessment and specialized repair techniques for optimal results.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Timing Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Optimal Timing: March Through May Strategy</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            The DMV's spring weather patterns create specific windows of opportunity for assessment and repairs. Time your inspection and repairs strategically for best results.
          </p>

          <div className="space-y-6">
            {seasonalConsiderations.map((season, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{season.month}</h3>
                    <p className="text-blue-600 font-medium">{season.focus}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Weather Factors:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {season.weatherFactors.map((factor, factorIndex) => (
                        <li key={factorIndex} className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 mr-2 flex-shrink-0" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus Areas:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {season.keyAreas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-start">
                          <MagnifyingGlassIcon className="h-3 w-3 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Action Items:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {season.actionItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircleIcon className="h-3 w-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When to Call Professionals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">When to Call Wall Fix Pros: Professional Assessment Signs</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            While many homeowners can conduct basic inspections, certain findings require immediate professional attention. Don't risk safety or additional damage – call the experts when you see these signs.
          </p>

          <div className="space-y-8">
            {professionalSignsChecklist.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                      category.urgency === 'Immediate' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {category.urgency} Attention Required
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">Warning Signs:</h4>
                    <ul className="text-gray-600 space-y-2">
                      {category.signs.map((sign, signIndex) => (
                        <li key={signIndex} className="flex items-start">
                          <ExclamationTriangleIcon className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-3">Why Professional Help is Essential:</h4>
                    <p className="text-gray-600 text-sm">{category.whyProfessional}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-700 mr-2" />
              Emergency Situations - Call Immediately
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Active water leaks or dripping</li>
                <li>• Ceiling sagging more than 1/4 inch</li>
                <li>• Electrical fixtures affected by moisture</li>
                <li>• Strong chemical or gas odors</li>
              </ul>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Large sections of loose drywall</li>
                <li>• Visible structural damage</li>
                <li>• Suspected asbestos or lead exposure</li>
                <li>• Family members experiencing health issues</li>
              </ul>
            </div>
            <div className="mt-4 text-center">
              <a
                href="tel:+12406701949"
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Emergency Line: (301) 555-0199
              </a>
            </div>
          </div>
        </section>

        {/* Documentation and Record Keeping */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Documentation Best Practices</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Proper documentation of your spring inspection helps track changes over time, supports insurance claims, and provides valuable information for repair professionals.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">What to Document</h3>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Photos of all problem areas (with date stamps)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Measurements of cracks and damaged areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Room locations and specific wall/ceiling areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Weather conditions during inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Humidity readings if available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Notes on changes from previous inspections</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4">Documentation Benefits</h3>
              <ul className="text-green-800 space-y-2">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0" />
                  <span className="text-sm">Track problem progression over time</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0" />
                  <span className="text-sm">Support insurance claims if needed</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0" />
                  <span className="text-sm">Help contractors provide accurate estimates</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0" />
                  <span className="text-sm">Maintain home maintenance records</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0" />
                  <span className="text-sm">Demonstrate proactive home care to buyers</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 mr-2 flex-shrink-0" />
                  <span className="text-sm">Identify patterns and recurring issues</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Services CTA */}
        <div className="bg-green-700 text-white rounded-lg p-8 mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Professional Spring Inspection Services</h2>
            <p className="text-green-100 mb-6">
              Let Wall Fix Pros conduct a comprehensive professional inspection of your DMV area home. Our experts catch problems you might miss and provide detailed repair recommendations with transparent pricing.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <MagnifyingGlassIcon className="h-8 w-8 text-green-200 mx-auto mb-2" />
                <div className="text-green-200 text-sm font-medium">Professional Assessment</div>
              </div>
              <div className="text-center">
                <DocumentCheckIcon className="h-8 w-8 text-green-200 mx-auto mb-2" />
                <div className="text-green-200 text-sm font-medium">Detailed Report</div>
              </div>
              <div className="text-center">
                <CheckCircleIcon className="h-8 w-8 text-green-200 mx-auto mb-2" />
                <div className="text-green-200 text-sm font-medium">Repair Prioritization</div>
              </div>
              <div className="text-center">
                <ExclamationTriangleIcon className="h-8 w-8 text-green-200 mx-auto mb-2" />
                <div className="text-green-200 text-sm font-medium">Early Problem Detection</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Schedule Inspection
              </Link>
              <a
                href="tel:+12406701949"
                className="border-2 border-green-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Call (240) 670-1949
              </a>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Serving the entire DMV: Maryland, Virginia, West Virginia, and Washington DC area
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/winter-humidity-drywall-protection-maryland" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Winter Humidity Protection</h3>
              <p className="text-gray-600 text-sm">Learn how Maryland winter humidity affects drywall and proven protection strategies.</p>
            </Link>
            <Link href="/blog/fix-common-drywall-problems-maryland-homes" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Common Maryland Drywall Problems</h3>
              <p className="text-gray-600 text-sm">Complete guide to identifying and fixing the most common drywall issues in Maryland homes.</p>
            </Link>
            <Link href="/blog/water-damage-repair-frederick" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Damage Emergency Guide</h3>
              <p className="text-gray-600 text-sm">Essential information for homeowners dealing with water damage and emergency repairs.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}