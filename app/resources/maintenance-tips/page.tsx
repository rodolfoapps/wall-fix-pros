import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, EyeIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Drywall Maintenance Tips | Keep Your Walls in Perfect Condition',
  description: 'Expert drywall maintenance tips from Wall Fix Pros. Learn how to prevent damage, maintain your walls, and extend their lifespan with proper care.',
}

export default function MaintenanceTipsPage() {
  const inspectionChecklist = [
    {
      item: 'Check for Cracks',
      frequency: 'Every 3 months',
      description: 'Look for hairline cracks around doors, windows, and corners',
      severity: 'Medium'
    },
    {
      item: 'Inspect for Water Stains',
      frequency: 'Monthly',
      description: 'Check ceilings and walls near plumbing for discoloration',
      severity: 'High'
    },
    {
      item: 'Look for Nail Pops',
      frequency: 'Every 6 months',
      description: 'Check for protruding nails or screws in drywall',
      severity: 'Low'
    },
    {
      item: 'Examine Paint Condition',
      frequency: 'Annually',
      description: 'Look for peeling, bubbling, or fading paint',
      severity: 'Low'
    },
    {
      item: 'Check Corners and Joints',
      frequency: 'Every 6 months',
      description: 'Inspect seams where walls meet for separation',
      severity: 'Medium'
    },
    {
      item: 'Assess Texture Consistency',
      frequency: 'Annually',
      description: 'Look for areas where texture is damaged or inconsistent',
      severity: 'Medium'
    }
  ]

  const preventionTips = [
    {
      category: 'Moisture Control',
      icon: '💧',
      tips: [
        'Use exhaust fans in bathrooms and kitchens',
        'Fix leaks immediately to prevent water damage',
        'Maintain proper humidity levels (30-50%)',
        'Ensure proper ventilation in all rooms',
        'Install vapor barriers in high-humidity areas'
      ]
    },
    {
      category: 'Physical Protection',
      icon: '🛡️',
      tips: [
        'Install door stops to prevent doorknob damage',
        'Use furniture pads to protect walls',
        'Be careful when moving large items',
        'Install chair rails in high-traffic areas',
        'Use corner guards in busy hallways'
      ]
    },
    {
      category: 'Climate Control',
      icon: '🌡️',
      tips: [
        'Maintain consistent temperature and humidity',
        'Avoid extreme temperature fluctuations',
        'Use gradual heating/cooling changes',
        'Ensure proper insulation behind walls',
        'Address drafts that cause temperature variations'
      ]
    },
    {
      category: 'Cleaning & Care',
      icon: '🧽',
      tips: [
        'Dust walls regularly with microfiber cloth',
        'Clean with mild soap and water when needed',
        'Avoid harsh chemicals or abrasive cleaners',
        'Touch up paint as needed to prevent deterioration',
        'Keep walls dry and well-ventilated'
      ]
    }
  ]

  const seasonalTasks = [
    {
      season: 'Spring',
      color: 'green',
      tasks: [
        'Comprehensive wall and ceiling inspection',
        'Check for winter damage from heating/cooling cycles',
        'Touch up paint if needed',
        'Clean walls thoroughly',
        'Check and clean exhaust fans'
      ]
    },
    {
      season: 'Summer',
      color: 'yellow',
      tasks: [
        'Monitor humidity levels closely',
        'Check for condensation issues',
        'Inspect air conditioning impact on walls',
        'Address any moisture-related problems',
        'Maintain consistent temperature'
      ]
    },
    {
      season: 'Fall',
      color: 'orange',
      tasks: [
        'Prepare for heating season',
        'Check for summer damage',
        'Seal any cracks before winter',
        'Test exhaust fans and ventilation',
        'Schedule professional inspection if needed'
      ]
    },
    {
      season: 'Winter',
      color: 'blue',
      tasks: [
        'Monitor for condensation from temperature differences',
        'Watch for cracks from thermal expansion/contraction',
        'Maintain proper humidity with heating systems',
        'Check for ice dam damage on ceilings',
        'Address any heating-related wall issues'
      ]
    }
  ]

  const commonMistakes = [
    {
      mistake: 'Ignoring Small Problems',
      consequence: 'Small cracks can become major structural issues',
      solution: 'Address minor damage immediately before it worsens'
    },
    {
      mistake: 'Using Wrong Cleaning Products',
      consequence: 'Harsh chemicals can damage paint and drywall',
      solution: 'Use mild soap and water, test in inconspicuous area first'
    },
    {
      mistake: 'Painting Over Problems',
      consequence: 'Underlying issues continue to worsen',
      solution: 'Fix the root cause before applying new paint'
    },
    {
      mistake: 'Neglecting Moisture Control',
      consequence: 'Leads to mold, mildew, and structural damage',
      solution: 'Maintain proper ventilation and fix leaks promptly'
    },
    {
      mistake: 'DIY Complex Repairs',
      consequence: 'Poor repairs can cause bigger problems',
      solution: 'Call professionals for anything beyond simple patches'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-700">
        <div className="absolute inset-0 bg-green-700 opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Drywall Maintenance Tips
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-green-100">
            Keep your drywall in perfect condition with expert maintenance tips. Prevent damage and extend the life of your walls with proper care.
          </p>
        </div>
      </div>

      {/* Inspection Checklist */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <EyeIcon className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Regular Inspection Checklist
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Catch problems early with regular wall inspections
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {inspectionChecklist.map((check, index) => (
            <div key={index} className="rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{check.item}</h3>
                  <p className="mt-2 text-gray-600">{check.description}</p>
                </div>
                <div className="ml-6 text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {check.frequency}
                  </span>
                  <div className="mt-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      check.severity === 'High' 
                        ? 'bg-red-100 text-red-800'
                        : check.severity === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {check.severity} Priority
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prevention Tips */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShieldCheckIcon className="mx-auto h-12 w-12 text-green-600" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Prevention Strategies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Protect your drywall from common damage causes
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {preventionTips.map((category, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seasonal Maintenance */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <CalendarIcon className="mx-auto h-12 w-12 text-orange-600" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Seasonal Maintenance Tasks
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Year-round care keeps your drywall in optimal condition
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {seasonalTasks.map((season, index) => (
            <div key={index} className="rounded-lg border-2 border-gray-200 p-6">
              <h3 className={`text-xl font-bold mb-4 ${
                season.color === 'green' ? 'text-green-700' :
                season.color === 'yellow' ? 'text-yellow-700' :
                season.color === 'orange' ? 'text-orange-700' :
                'text-blue-700'
              }`}>
                {season.season}
              </h3>
              <ul className="space-y-3">
                {season.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start">
                    <div className={`h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                      season.color === 'green' ? 'bg-green-500' :
                      season.color === 'yellow' ? 'bg-yellow-500' :
                      season.color === 'orange' ? 'bg-orange-500' :
                      'bg-blue-500'
                    }`} />
                    <span className="text-gray-700 text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="bg-red-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
              Common Maintenance Mistakes
            </h2>
            <p className="mt-4 text-lg text-red-700">
              Avoid these common errors that can damage your drywall
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">❌ Mistake</h3>
                    <p className="text-gray-700">{mistake.mistake}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-orange-900 mb-2">⚠️ Consequence</h3>
                    <p className="text-gray-700">{mistake.consequence}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-900 mb-2">✅ Solution</h3>
                    <p className="text-gray-700">{mistake.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Maintenance & Repair
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let our experts handle your drywall maintenance and repairs. We'll keep your walls in perfect condition year-round.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50"
              >
                Schedule Inspection
              </Link>
              <a
                href="tel:+12406701949"
                className="text-lg font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call (240) 670-1949
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}