import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon, ExclamationTriangleIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Complete Drywall Repair Guide | Wall Fix Pros Expert Tips',
  description: 'Comprehensive guide to drywall repair from Wall Fix Pros experts. Learn about damage types, tools needed, repair techniques, and when to call professionals.',
}

export default function DrywallRepairGuidePage() {
  const damageTypes = [
    {
      type: 'Small Nail Holes',
      description: 'Tiny holes from nails or screws',
      difficulty: 'Easy',
      tools: ['Spackling compound', 'Putty knife', 'Sandpaper'],
      diyFriendly: true
    },
    {
      type: 'Medium Holes (1-3 inches)',
      description: 'Doorknob holes, small accidents',
      difficulty: 'Moderate',
      tools: ['Mesh patch', 'Joint compound', 'Putty knife', 'Sandpaper'],
      diyFriendly: true
    },
    {
      type: 'Large Holes (3+ inches)',
      description: 'Major damage, holes larger than 3 inches',
      difficulty: 'Hard',
      tools: ['Drywall patch', 'Joint compound', 'Drywall saw', 'Mesh tape'],
      diyFriendly: false
    },
    {
      type: 'Cracks',
      description: 'Hairline to wide cracks from settling',
      difficulty: 'Moderate to Hard',
      tools: ['Mesh tape', 'Joint compound', 'Putty knife'],
      diyFriendly: false
    },
    {
      type: 'Water Damage',
      description: 'Discoloration, soft spots, mold potential',
      difficulty: 'Hard',
      tools: ['Professional assessment required'],
      diyFriendly: false
    }
  ]

  const basicTools = [
    'Putty knife (4-inch and 6-inch)',
    'Sandpaper (120 and 220 grit)',
    'Joint compound (spackling paste)',
    'Mesh patches or tape',
    'Primer and paint',
    'Drop cloths',
    'Safety glasses',
    'Dust mask'
  ]

  const repairSteps = [
    {
      step: 1,
      title: 'Assess the Damage',
      description: 'Determine the size, cause, and extent of damage. Check for underlying issues like moisture or structural problems.'
    },
    {
      step: 2,
      title: 'Gather Tools and Materials',
      description: 'Collect appropriate tools based on damage type. Ensure you have proper safety equipment.'
    },
    {
      step: 3,
      title: 'Prepare the Area',
      description: 'Clean around the damage, remove loose material, and protect surrounding surfaces with drop cloths.'
    },
    {
      step: 4,
      title: 'Apply the Repair',
      description: 'Use appropriate technique for damage type - spackling for small holes, patches for larger areas.'
    },
    {
      step: 5,
      title: 'Let Dry and Sand',
      description: 'Allow proper drying time (usually 24 hours), then sand smooth with appropriate grit sandpaper.'
    },
    {
      step: 6,
      title: 'Prime and Paint',
      description: 'Apply primer to repaired area, let dry, then paint to match existing wall color.'
    }
  ]

  const whenToCallPros = [
    'Holes larger than 3 inches in diameter',
    'Multiple damage areas requiring repair',
    'Water damage or signs of mold',
    'Cracks that keep reappearing',
    'Damage affecting electrical or plumbing',
    'Textured walls requiring matching',
    'Load-bearing wall concerns',
    'Time constraints or lack of tools'
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0 bg-blue-700 opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Complete Drywall Repair Guide
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Expert guidance on identifying, assessing, and repairing drywall damage. Learn professional techniques and when to call the experts.
          </p>
        </div>
      </div>

      {/* Damage Types */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Types of Drywall Damage
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Understanding different types of damage helps determine the right repair approach
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {damageTypes.map((damage, index) => (
            <div key={index} className="rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{damage.type}</h3>
                  <p className="mt-2 text-gray-600">{damage.description}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      damage.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-800'
                        : damage.difficulty === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {damage.difficulty}
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      damage.diyFriendly 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {damage.diyFriendly ? 'DIY Friendly' : 'Professional Recommended'}
                    </span>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Tools Needed:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {damage.tools.map((tool, toolIndex) => (
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
      </div>

      {/* Basic Tools */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <WrenchScrewdriverIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Essential Tools for Drywall Repair
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Basic tools every homeowner should have for minor drywall repairs
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {basicTools.map((tool, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Repair Process */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Step-by-Step Repair Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Professional approach to drywall repair for best results
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {repairSteps.map((step) => (
            <div key={step.step} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {step.step}
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* When to Call Professionals */}
      <div className="bg-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-orange-600" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-orange-900 sm:text-4xl">
              When to Call Professionals
            </h2>
            <p className="mt-4 text-lg text-orange-700">
              Some repairs require professional expertise for safety and quality results
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whenToCallPros.map((reason, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                <ExclamationTriangleIcon className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
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
              Need Professional Help?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Our expert team is ready to handle any drywall repair, from small patches to major restoration projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+13015550199"
                className="text-lg font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call (301) 555-0199
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}