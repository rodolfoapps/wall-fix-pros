import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheckIcon, CheckCircleIcon, StarIcon, TrophyIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Quality Standards & Guarantees | Wall Fix Pros Professional Standards',
  description: 'Learn about Wall Fix Pros quality standards, professional certifications, warranty coverage, and our commitment to excellence in drywall services.',
}

export default function QualityStandardsPage() {
  const qualityStandards = [
    {
      category: 'Material Standards',
      icon: '🏗️',
      standards: [
        {
          item: 'Premium Grade Drywall',
          description: 'Only use high-quality, moisture-resistant drywall from trusted manufacturers',
          specification: 'USG, Georgia-Pacific, or equivalent premium brands'
        },
        {
          item: 'Professional Grade Compounds',
          description: 'Superior joint compounds for smooth, durable finishes',
          specification: 'Low-shrink, quick-set compounds for optimal results'
        },
        {
          item: 'Quality Fasteners',
          description: 'Corrosion-resistant screws and hardware',
          specification: 'Bugle head screws, 1-5/8" minimum for standard applications'
        },
        {
          item: 'Primer & Paint Systems',
          description: 'High-quality primer and paint systems for lasting finish',
          specification: 'Branded products with manufacturer warranties'
        }
      ]
    },
    {
      category: 'Installation Standards',
      icon: '🔧',
      standards: [
        {
          item: 'Proper Spacing',
          description: 'Precise stud spacing and panel placement',
          specification: '16" or 24" on center as per building code requirements'
        },
        {
          item: 'Secure Fastening',
          description: 'Proper screw depth and spacing patterns',
          specification: 'Screws 12" on center for walls, 8" for ceilings'
        },
        {
          item: 'Joint Treatment',
          description: 'Three-coat system with proper drying time',
          specification: 'Tape coat, fill coat, finish coat with 24-hour cure between'
        },
        {
          item: 'Corner Protection',
          description: 'Metal corner beads on all outside corners',
          specification: 'Galvanized steel or vinyl corner protection'
        }
      ]
    },
    {
      category: 'Finish Quality',
      icon: '✨',
      standards: [
        {
          item: 'Level 5 Finish Option',
          description: 'Highest quality finish for premium applications',
          specification: 'Skim coat over entire surface for uniform texture'
        },
        {
          item: 'Smooth Joint Transitions',
          description: 'Invisible seams and joints',
          specification: 'Feathered edges extending 6-8 inches from joints'
        },
        {
          item: 'Consistent Texture',
          description: 'Uniform texture matching existing surfaces',
          specification: 'Hand or spray texture to match surrounding areas'
        },
        {
          item: 'Paint-Ready Surface',
          description: 'Properly primed and prepared for finish coating',
          specification: 'PVA or specialty primer appropriate for surface type'
        }
      ]
    }
  ]

  const certifications = [
    {
      name: 'Licensed Contractors',
      description: 'All team members hold proper state licensing',
      details: 'Maryland, Virginia, West Virginia, and Pennsylvania contractor licenses'
    },
    {
      name: 'Insured & Bonded',
      description: 'Comprehensive liability and worker\'s compensation insurance',
      details: '$2M general liability, $1M worker\'s comp coverage'
    },
    {
      name: 'Industry Training',
      description: 'Ongoing education in latest techniques and materials',
      details: 'Annual training updates on products, methods, and safety'
    },
    {
      name: 'Safety Certified',
      description: 'OSHA safety training and compliance',
      details: 'Current safety certifications for all field personnel'
    }
  ]

  const qualityProcess = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Thorough evaluation of project requirements and site conditions',
      standards: [
        'Moisture meter readings',
        'Surface preparation assessment',
        'Material quantity calculations',
        'Timeline and logistics planning'
      ]
    },
    {
      step: 2,
      title: 'Material Procurement',
      description: 'Source only premium materials from approved suppliers',
      standards: [
        'Quality verification upon delivery',
        'Proper storage and handling',
        'Climate-controlled transport when needed',
        'Batch tracking for consistency'
      ]
    },
    {
      step: 3,
      title: 'Installation Execution',
      description: 'Professional installation following industry best practices',
      standards: [
        'Daily quality checkpoints',
        'Supervision by certified professionals',
        'Progress documentation with photos',
        'Client communication at key milestones'
      ]
    },
    {
      step: 4,
      title: 'Quality Inspection',
      description: 'Multi-point inspection before project completion',
      standards: [
        'Joint integrity verification',
        'Surface smoothness testing',
        'Texture consistency check',
        'Client walkthrough and approval'
      ]
    },
    {
      step: 5,
      title: 'Final Delivery',
      description: 'Professional cleanup and warranty documentation',
      standards: [
        'Complete debris removal',
        'Touch-up work as needed',
        'Warranty documentation provided',
        'Maintenance instructions included'
      ]
    }
  ]

  const warranties = [
    {
      service: 'Drywall Installation',
      warranty: '5 Years',
      coverage: 'Complete installation including joints, fasteners, and finish',
      exclusions: 'Normal wear, building settlement, or damage from other trades'
    },
    {
      service: 'Drywall Repair',
      warranty: '3 Years',
      coverage: 'Repair area including matching texture and finish',
      exclusions: 'Damage from same source if not addressed, normal wear'
    },
    {
      service: 'Water Damage Restoration',
      warranty: '2 Years',
      coverage: 'Restored areas against defects in materials and workmanship',
      exclusions: 'Future water damage, humidity-related issues'
    },
    {
      service: 'Painting Services',
      warranty: '2 Years',
      coverage: 'Paint adhesion, coverage, and color consistency',
      exclusions: 'Fading from UV exposure, mechanical damage'
    }
  ]

  const qualityMetrics = [
    { metric: 'Customer Satisfaction', score: '98%', description: 'Based on completed project surveys' },
    { metric: 'On-Time Completion', score: '95%', description: 'Projects completed within promised timeframe' },
    { metric: 'First-Time Quality Pass', score: '92%', description: 'Jobs passing final inspection without rework' },
    { metric: 'Warranty Claims', score: '<2%', description: 'Warranty claims as percentage of completed jobs' }
  ]

  const continuousImprovement = [
    {
      area: 'Customer Feedback',
      process: 'Regular surveys and review analysis',
      implementation: 'Monthly team training based on feedback patterns'
    },
    {
      area: 'Industry Standards',
      process: 'Stay current with evolving building codes and best practices',
      implementation: 'Quarterly standards review and procedure updates'
    },
    {
      area: 'Technology Integration',
      process: 'Evaluate new tools and techniques',
      implementation: 'Annual technology assessment and selective adoption'
    },
    {
      area: 'Team Development',
      process: 'Ongoing training and skill enhancement',
      implementation: 'Individual development plans for all team members'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-700">
        <div className="absolute inset-0 bg-green-700 opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex items-center mb-6">
            <TrophyIcon className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-green-100 font-medium">Award-Winning Quality</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Quality Standards & Guarantees
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-green-100">
            At Wall Fix Pros, quality isn't just a goal—it's our foundation. Learn about our rigorous standards, professional certifications, and comprehensive warranty coverage.
          </p>
        </div>
      </div>

      {/* Quality Standards */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <ShieldCheckIcon className="mx-auto h-12 w-12 text-green-600" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Quality Standards
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every project meets or exceeds industry standards for materials, installation, and finish quality
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {qualityStandards.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {category.standards.map((standard, standardIndex) => (
                  <div key={standardIndex} className="bg-white rounded-lg p-6 border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{standard.item}</h4>
                    <p className="text-gray-600 mb-3">{standard.description}</p>
                    <div className="bg-green-50 p-3 rounded-md">
                      <p className="text-green-800 text-sm font-medium">
                        Specification: {standard.specification}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Credentials */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Certifications
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our team maintains the highest professional standards and credentials
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                <p className="text-blue-600 text-xs font-medium">{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Process */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Quality Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every project follows our proven 5-step quality assurance process
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {qualityProcess.map((phase) => (
            <div key={phase.step} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg">
                  {phase.step}
                </div>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                <p className="mt-2 text-gray-600 mb-4">{phase.description}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  {phase.standards.map((standard, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Warranty Coverage */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Warranty Coverage
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We stand behind our work with industry-leading warranty protection
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {warranties.map((warranty, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{warranty.service}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mt-2">
                      {warranty.warranty} Warranty
                    </span>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Coverage Includes:</h4>
                    <p className="text-gray-600 text-sm">{warranty.coverage}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Exclusions:</h4>
                    <p className="text-gray-600 text-sm">{warranty.exclusions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Quality Performance Metrics
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Measurable results that demonstrate our commitment to excellence
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {qualityMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-green-500">
              <div className="text-3xl font-bold text-green-600 mb-2">{metric.score}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{metric.metric}</h3>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Continuous Improvement */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Continuous Improvement
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We constantly evolve our processes to deliver even better results
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {continuousImprovement.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{item.area}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-900">Process: </span>
                    <span className="text-gray-700">{item.process}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Implementation: </span>
                    <span className="text-gray-700">{item.implementation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience Our Quality Standards
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-100">
              Ready to see the Wall Fix Pros difference? Our quality standards and professional guarantees ensure your complete satisfaction.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-green-600 shadow-sm hover:bg-gray-50"
              >
                Get Quality Quote
              </Link>
              <a
                href="tel:+13015550199"
                className="text-lg font-semibold leading-6 text-white hover:text-green-100"
              >
                Call (301) 555-0199
              </a>
            </div>
            <div className="mt-6">
              <p className="text-green-100 text-sm">
                ⭐ 5-Year warranty on installations • Licensed & insured • 98% satisfaction rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}