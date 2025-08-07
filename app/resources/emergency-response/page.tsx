import type { Metadata } from 'next'
import Link from 'next/link'
import { ExclamationTriangleIcon, PhoneIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Emergency Drywall Response Guide | Wall Fix Pros 24/7 Service',
  description: 'Emergency drywall repair guide from Wall Fix Pros. Learn how to handle water damage, accidents, and urgent wall repairs. 24/7 emergency service available.',
}

export default function EmergencyResponsePage() {
  const emergencyTypes = [
    {
      type: 'Water Damage',
      urgency: 'Critical',
      timeframe: 'Immediate (0-2 hours)',
      icon: '💧',
      immediateSteps: [
        'Turn off water source if possible',
        'Remove standing water with towels/mops',
        'Move furniture and belongings away from affected area',
        'Document damage with photos for insurance',
        'Call Wall Fix Pros emergency line'
      ],
      professionalRequired: true,
      consequences: 'Mold growth can begin within 24-48 hours'
    },
    {
      type: 'Large Hole/Impact Damage',
      urgency: 'High',
      timeframe: 'Same Day (2-8 hours)',
      icon: '🕳️',
      immediateSteps: [
        'Check for electrical wires or plumbing behind wall',
        'Clear debris and loose material',
        'Cover opening temporarily with plastic/cardboard',
        'Take photos for assessment',
        'Schedule emergency repair'
      ],
      professionalRequired: true,
      consequences: 'Security risk, energy loss, further structural damage'
    },
    {
      type: 'Ceiling Damage/Sagging',
      urgency: 'Critical',
      timeframe: 'Immediate (0-1 hour)',
      icon: '⬇️',
      immediateSteps: [
        'Evacuate area immediately - safety hazard',
        'Turn off electricity to affected room',
        'Do not attempt to support sagging ceiling',
        'Call emergency services if imminent collapse risk',
        'Contact Wall Fix Pros immediately'
      ],
      professionalRequired: true,
      consequences: 'Potential collapse, serious injury risk'
    },
    {
      type: 'Electrical Damage to Walls',
      urgency: 'Critical',
      timeframe: 'Immediate (0-1 hour)',
      icon: '⚡',
      immediateSteps: [
        'Turn off power at circuit breaker',
        'Do not touch damaged electrical components',
        'Call electrician if wires are exposed',
        'Evacuate if burning smell or sparks',
        'Document with photos once safe'
      ],
      professionalRequired: true,
      consequences: 'Fire risk, electrocution hazard'
    },
    {
      type: 'Storm/Wind Damage',
      urgency: 'High',
      timeframe: 'Same Day (4-12 hours)',
      icon: '🌪️',
      immediateSteps: [
        'Ensure structural safety first',
        'Cover exposed areas with tarps',
        'Remove water if present',
        'Document all damage thoroughly',
        'Contact insurance company'
      ],
      professionalRequired: true,
      consequences: 'Weather exposure, further water damage'
    },
    {
      type: 'Fire/Smoke Damage',
      urgency: 'High',
      timeframe: 'Within 24 hours',
      icon: '🔥',
      immediateSteps: [
        'Ensure fire is completely extinguished',
        'Ventilate area to remove smoke',
        'Do not disturb soot-covered surfaces',
        'Document damage extensively',
        'Contact restoration specialists'
      ],
      professionalRequired: true,
      consequences: 'Smoke odor permanence, structural weakness'
    }
  ]

  const whatNotToDo = [
    {
      action: 'Don\'t Delay Water Cleanup',
      reason: 'Mold can start growing within 24-48 hours',
      risk: 'Health hazards and extensive remediation costs'
    },
    {
      action: 'Don\'t DIY Electrical Issues',
      reason: 'Risk of electrocution or fire',
      risk: 'Serious injury or property damage'
    },
    {
      action: 'Don\'t Ignore Structural Damage',
      reason: 'Can worsen rapidly and become dangerous',
      risk: 'Collapse risk and exponentially higher repair costs'
    },
    {
      action: 'Don\'t Use Unsafe Temporary Fixes',
      reason: 'May cause more damage or create hazards',
      risk: 'Additional damage and safety concerns'
    },
    {
      action: 'Don\'t Skip Documentation',
      reason: 'Insurance claims require thorough evidence',
      risk: 'Reduced or denied insurance coverage'
    }
  ]

  const emergencySupplies = [
    'Heavy-duty plastic sheeting and tarps',
    'Duct tape and zip ties',
    'Industrial towels and absorbent materials',
    'Flashlights and battery-powered lights',
    'Utility knife and basic tools',
    'Plastic bags for debris',
    'Camera or phone for documentation',
    'Emergency contact numbers list'
  ]

  const responseTimeline = [
    {
      timeframe: '0-15 minutes',
      actions: [
        'Ensure immediate safety',
        'Stop source of damage if possible',
        'Call 911 if life-threatening',
        'Call Wall Fix Pros emergency line'
      ]
    },
    {
      timeframe: '15-60 minutes',
      actions: [
        'Begin damage mitigation',
        'Document with photos/video',
        'Contact insurance company',
        'Clear area of valuables'
      ]
    },
    {
      timeframe: '1-4 hours',
      actions: [
        'Professional assessment arrives',
        'Develop repair strategy',
        'Begin emergency stabilization',
        'Coordinate with other contractors'
      ]
    },
    {
      timeframe: '4-24 hours',
      actions: [
        'Complete emergency repairs',
        'Set up drying equipment if needed',
        'Schedule permanent repairs',
        'File insurance claims'
      ]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-red-700">
        <div className="absolute inset-0 bg-red-700 opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mr-4 animate-pulse">
              24/7 EMERGENCY SERVICE
            </div>
            <a
              href="tel:+12406701949"
              className="text-red-100 hover:text-white font-medium flex items-center"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              (240) 670-1949
            </a>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Emergency Drywall Response Guide
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-red-100">
            When drywall emergencies strike, quick response is critical. Follow our expert emergency guide and contact Wall Fix Pros for immediate professional assistance.
          </p>
        </div>
      </div>

      {/* Emergency Types */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Types of Drywall Emergencies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Recognize emergency situations and take immediate action
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {emergencyTypes.map((emergency, index) => (
            <div key={index} className="rounded-lg border-2 border-red-200 p-6 bg-red-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{emergency.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-red-900">{emergency.type}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        emergency.urgency === 'Critical' 
                          ? 'bg-red-100 text-red-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {emergency.urgency} Priority
                      </span>
                      <span className="text-red-700 font-medium">
                        Action needed: {emergency.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-bold text-red-900 mb-3">Immediate Steps:</h4>
                  <ol className="space-y-2">
                    {emergency.immediateSteps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        <span className="text-red-800">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-red-900 mb-2">Why This is Urgent:</h4>
                  <p className="text-red-700 text-sm mb-3">{emergency.consequences}</p>
                  {emergency.professionalRequired && (
                    <div className="bg-red-100 p-3 rounded-md">
                      <p className="text-red-800 font-medium text-sm">
                        ⚠️ Professional service required - Do not attempt DIY repair
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Response Timeline */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ClockIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Emergency Response Timeline
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What to do and when during a drywall emergency
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {responseTimeline.map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{phase.timeframe}</h3>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    {phase.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What NOT to Do */}
      <div className="bg-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-orange-900 sm:text-4xl">
              Critical Mistakes to Avoid
            </h2>
            <p className="mt-4 text-lg text-orange-700">
              These common errors can make emergency situations worse
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatNotToDo.map((mistake, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-500">
                <h3 className="text-lg font-bold text-orange-900 mb-2">❌ {mistake.action}</h3>
                <p className="text-orange-800 text-sm mb-3">{mistake.reason}</p>
                <div className="bg-orange-100 p-3 rounded-md">
                  <p className="text-orange-900 font-medium text-xs">Risk: {mistake.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Supplies */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <ShieldCheckIcon className="mx-auto h-12 w-12 text-green-600" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Emergency Response Kit
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Keep these supplies accessible for drywall emergencies
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {emergencySupplies.map((supply, index) => (
            <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">{supply}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Remember: Document Everything</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Photos to Take:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Overall damage from multiple angles</li>
                <li>• Close-up details of affected areas</li>
                <li>• Water source or cause of damage</li>
                <li>• Damaged belongings and furniture</li>
                <li>• Before starting any cleanup</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Information to Record:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Date and time damage occurred</li>
                <li>• Weather conditions if applicable</li>
                <li>• Actions taken immediately</li>
                <li>• Contact information for professionals</li>
                <li>• Insurance claim numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact CTA */}
      <div className="bg-red-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Drywall Emergency? Call Now!
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-red-100">
              Our emergency response team is available 24/7 for urgent drywall repairs. Don't wait - call immediately for professional help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="tel:+12406701949"
                className="rounded-md bg-white px-8 py-4 text-lg font-bold text-red-600 shadow-sm hover:bg-gray-50 flex items-center animate-pulse"
              >
                <PhoneIcon className="h-6 w-6 mr-3" />
                EMERGENCY: (240) 670-1949
              </a>
              <Link
                href="/quote"
                className="text-lg font-semibold leading-6 text-white hover:text-red-100"
              >
                Schedule Assessment →
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-red-100 text-sm">
                Available 24/7 • Average emergency response time: 2-4 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}