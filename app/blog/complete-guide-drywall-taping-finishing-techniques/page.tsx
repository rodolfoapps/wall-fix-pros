import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, WrenchScrewdriverIcon, CheckCircleIcon, ExclamationTriangleIcon, AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'The Complete Guide to Drywall Taping and Finishing: Professional Tips and Techniques',
  description: 'Master professional drywall taping and finishing techniques. Comprehensive guide with expert tips, quality standards, and step-by-step instructions from Wall Fix Pros.',
}

export default function DrywallTapingFinishingGuidePage() {
  const finishLevels = [
    {
      level: 'Level 1',
      description: 'Basic taping with no finishing work',
      application: 'Temporary construction, fire-rated assemblies',
      requirements: [
        'Tape embedded in joint compound',
        'No tool marks or ridges',
        'Minimal compound coverage'
      ],
      whenUsed: 'Rarely used in residential work, mainly commercial temporary installations',
      quality: 'Utility level - not suitable for paint or wallpaper'
    },
    {
      level: 'Level 2',
      description: 'Tape embedded with one coat of compound',
      application: 'Areas to receive heavy texture, acoustical texture, or tile',
      requirements: [
        'Joint tape embedded and covered',
        'One coat over fasteners',
        'Wiped free of tool marks and ridges'
      ],
      whenUsed: 'Behind tile, in utility areas, garage ceilings',
      quality: 'Functional finish - texture or tile will hide imperfections'
    },
    {
      level: 'Level 3',
      description: 'Two coats of compound over tape and fasteners',
      application: 'Areas receiving heavy texture before paint',
      requirements: [
        'Two coats over joints and fasteners',
        'Smooth, tool mark free surface',
        'Ready for heavy texture application'
      ],
      whenUsed: 'Walls receiving knockdown, skip trowel, or heavy spray texture',
      quality: 'Good quality - suitable for textured finishes'
    },
    {
      level: 'Level 4',
      description: 'Three coats with smooth finish',
      application: 'Standard residential finish for paint',
      requirements: [
        'Three coats over joints and fasteners',
        'Smooth surface free of tool marks',
        'Ready for primer and paint'
      ],
      whenUsed: 'Most residential applications, standard finish quality',
      quality: 'High quality - suitable for flat paint and light textures'
    },
    {
      level: 'Level 5',
      description: 'Skim coat over entire surface',
      application: 'Premium finish for critical lighting or gloss paints',
      requirements: [
        'Level 4 finish plus thin skim coat',
        'Uniform surface texture',
        'No variations in surface quality'
      ],
      whenUsed: 'Smooth walls, critical lighting, semi-gloss or gloss paints',
      quality: 'Premium quality - highest standard finish'
    }
  ]

  const toolsAndMaterials = [
    {
      category: 'Essential Hand Tools',
      priority: 'Critical',
      items: [
        'Joint knives: 4", 6", 8", 10", 12" widths',
        'Corner trowel for inside corners',
        'Hawks for holding compound',
        'Utility knife for cutting tape',
        'Sanding blocks and screens',
        'Drop cloths for protection'
      ],
      qualityTips: 'Invest in stainless steel knives with comfortable handles. Cheap tools create more work.',
      budgetRange: '$150-400 for complete hand tool set'
    },
    {
      category: 'Power Tools',
      priority: 'High',
      items: [
        'Automatic taper for long runs',
        'Corner bead crimper',
        'Drywall sander with vacuum',
        'Mixing paddle for compound',
        'Work lights for inspection'
      ],
      qualityTips: 'Power tools speed up large jobs but require skill to use effectively.',
      budgetRange: '$300-1,500 depending on automation level'
    },
    {
      category: 'Materials',
      priority: 'Critical',
      items: [
        'Paper tape for joints',
        'Mesh tape for repairs',
        'All-purpose joint compound',
        'Lightweight setting compound',
        'Primer suitable for drywall',
        'Corner bead (metal or plastic)'
      ],
      qualityTips: 'Use quality materials - cheap compound causes more problems than it saves.',
      budgetRange: '$100-300 for average room depending on compound type'
    },
    {
      category: 'Specialty Items',
      priority: 'Medium',
      items: [
        'Texture spray equipment',
        'Banjo taper for paper tape',
        'Compound pumps for large jobs',
        'Specialized sanding equipment',
        'Dust collection systems'
      ],
      qualityTips: 'Professional specialty tools justify cost on larger projects.',
      budgetRange: '$500-3,000 for professional-grade equipment'
    }
  ]

  const stepByStepProcess = [
    {
      step: 1,
      phase: 'Surface Preparation',
      timeRequired: '1-2 hours per room',
      description: 'Proper preparation is critical for professional results',
      detailedSteps: [
        'Inspect drywall for loose screws, protruding fasteners',
        'Drive in any proud screws, add screws where needed',
        'Cut away any loose or damaged drywall paper',
        'Vacuum all dust and debris from surfaces',
        'Check joints for proper fitting and support',
        'Apply primer to any exposed paper or raw drywall'
      ],
      commonMistakes: [
        'Skipping dust removal causes poor compound adhesion',
        'Not addressing loose screws creates future problems',
        'Failing to prime exposed paper leads to bubbling'
      ],
      proTips: [
        'Use raking light to identify surface irregularities',
        'Pre-fill large gaps with setting compound',
        'Mark problem areas with pencil for attention'
      ]
    },
    {
      step: 2,
      phase: 'First Coat - Embedding Tape',
      timeRequired: '3-4 hours per room',
      description: 'Embed tape in compound to create reinforced joints',
      detailedSteps: [
        'Apply 6" wide strip of compound along joint',
        'Press tape firmly into compound using joint knife',
        'Cover tape with thin layer of compound',
        'Remove excess compound, leaving tape embedded',
        'Apply compound to all fastener heads',
        'Install corner bead with compound or screws'
      ],
      commonMistakes: [
        'Too much compound creates buildup and ridges',
        'Insufficient compound causes tape to lift',
        'Air bubbles under tape create future problems'
      ],
      proTips: [
        'Keep knives clean to avoid dragging dried compound',
        'Work systematically to maintain wet edges',
        'Check for uniform compound coverage over tape'
      ]
    },
    {
      step: 3,
      phase: 'Second Coat - Building Thickness',
      timeRequired: '2-3 hours per room',
      description: 'Build up compound thickness while maintaining smooth surface',
      detailedSteps: [
        'Lightly sand any ridges from first coat',
        'Apply compound 8-10" wide over joints',
        'Feather edges to blend with surrounding surface',
        'Apply second coat to fastener heads',
        'Check for uniform thickness and smoothness',
        'Remove all tool marks and ridges'
      ],
      commonMistakes: [
        'Making joints too narrow creates visible ridges',
        'Heavy sanding removes too much compound',
        'Inconsistent feathering creates visible lines'
      ],
      proTips: [
        'Use wider knife for better feathering',
        'Apply light pressure to avoid gouging',
        'Work in good lighting to see imperfections'
      ]
    },
    {
      step: 4,
      phase: 'Third Coat - Final Smoothing',
      timeRequired: '2-3 hours per room',
      description: 'Create final smooth surface ready for primer',
      detailedSteps: [
        'Sand lightly to remove minor imperfections',
        'Apply final coat 10-12" wide',
        'Feather edges to invisible transition',
        'Final coat on fastener heads if needed',
        'Inspect under raking light for imperfections',
        'Touch up any problem areas'
      ],
      commonMistakes: [
        'Over-sanding creates depressions',
        'Rushing final coat shows in finished result',
        'Poor lighting inspection misses problems'
      ],
      proTips: [
        'Take time for thorough inspection',
        'Use quality compound for best results',
        'Plan final coat for optimal working conditions'
      ]
    },
    {
      step: 5,
      phase: 'Final Sanding and Cleanup',
      timeRequired: '2-4 hours per room',
      description: 'Prepare surface for primer and paint application',
      detailedSteps: [
        'Sand entire surface with fine grit (120-150)',
        'Use sanding screens for smooth finish',
        'Vacuum all dust between sanding passes',
        'Inspect surface under strong light',
        'Touch up any remaining imperfections',
        'Clean all surfaces thoroughly before primer'
      ],
      commonMistakes: [
        'Coarse sandpaper creates scratches',
        'Inadequate dust removal affects paint adhesion',
        'Missing imperfections requires repainting'
      ],
      proTips: [
        'Use dust collection systems when possible',
        'Sand in multiple directions for uniform finish',
        'Prime within 24 hours of final sanding'
      ]
    }
  ]

  const troubleshooting = [
    {
      problem: 'Tape Showing Through Paint',
      causes: [
        'Insufficient compound coverage over tape',
        'Improper feathering of edges',
        'Wrong tape type for application'
      ],
      prevention: [
        'Apply adequate compound thickness over tape',
        'Feather edges 8-12 inches wide',
        'Use paper tape for most applications'
      ],
      repair: [
        'Sand smooth, apply additional compound',
        'Feather edges properly',
        'Prime before repainting'
      ]
    },
    {
      problem: 'Ridges and Tool Marks',
      causes: [
        'Too much pressure when applying compound',
        'Dirty or damaged tools',
        'Compound too thick or dried out'
      ],
      prevention: [
        'Use light, consistent pressure',
        'Keep tools clean and in good condition',
        'Mix compound to proper consistency'
      ],
      repair: [
        'Sand ridges smooth',
        'Apply thin coat with proper technique',
        'Use wider knife for better results'
      ]
    },
    {
      problem: 'Cracking Along Joints',
      causes: [
        'House settling or movement',
        'Inadequate compound thickness',
        'Poor joint preparation'
      ],
      prevention: [
        'Address structural issues first',
        'Apply adequate compound thickness',
        'Ensure proper joint support'
      ],
      repair: [
        'Cut out cracked compound',
        'Re-tape with mesh tape if necessary',
        'Apply flexible compound for movement'
      ]
    },
    {
      problem: 'Bubbles in Compound',
      causes: [
        'Air trapped during application',
        'Compound applied over dust or contaminants',
        'Moisture in substrate'
      ],
      prevention: [
        'Apply compound in thin, even coats',
        'Clean surfaces thoroughly before application',
        'Address moisture sources'
      ],
      repair: [
        'Sand out bubbled areas',
        'Clean and re-prime if necessary',
        'Re-apply compound with proper technique'
      ]
    }
  ]

  const qualityStandards = [
    {
      standard: 'Joint Visibility',
      level4: 'Joints should be invisible under normal lighting',
      level5: 'No joint visibility under any lighting conditions',
      testMethod: 'Inspect under raking light at oblique angle',
      acceptanceCriteria: 'No visible ridges, depressions, or tape lines'
    },
    {
      standard: 'Surface Smoothness',
      level4: 'Smooth to touch, no tool marks or ridges',
      level5: 'Uniform texture across entire surface',
      testMethod: 'Run hand across surface, visual inspection',
      acceptanceCriteria: 'No tactile or visual irregularities'
    },
    {
      standard: 'Fastener Coverage',
      level4: 'All fastener heads covered and smooth',
      level5: 'Fasteners invisible under any lighting',
      testMethod: 'Visual inspection under strong light',
      acceptanceCriteria: 'No visible fastener impressions'
    },
    {
      standard: 'Corner Quality',
      level4: 'Straight, smooth corners with no visible bead',
      level5: 'Perfect corner lines with invisible transitions',
      testMethod: 'Sight down corner length, check for straightness',
      acceptanceCriteria: 'No waviness, gaps, or visible corner bead'
    }
  ]

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="relative bg-teal-700">
        <div className="absolute inset-0 bg-teal-700 opacity-75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 mb-4">
              Professional Techniques
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The Complete Guide to Drywall Taping and Finishing: Professional Tips and Techniques
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-teal-100">
              Master the art of professional drywall finishing. Comprehensive guide covering techniques, quality standards, and expert tips used by Wall Fix Pros in thousands of successful projects.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-teal-100">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Wall Fix Pros Master Craftsmen</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>November 18, 2024</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>18 min read</span>
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
            Professional drywall taping and finishing is both an art and a science, requiring precise technique, quality materials, and years of experience to master. The difference between amateur and professional results often lies not in the basic steps, but in understanding the subtle details that create seamless, long-lasting finishes.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            As master craftsmen serving <Link href="/locations/maryland" className="text-blue-600 hover:text-blue-700">Maryland</Link>, <Link href="/locations/virginia" className="text-blue-600 hover:text-blue-700">Virginia</Link>, and <Link href="/locations/pennsylvania" className="text-blue-600 hover:text-blue-700">Pennsylvania</Link>, Wall Fix Pros has refined these techniques through thousands of successful projects. This comprehensive guide shares our professional methods, from basic tape embedding to achieving the Level 5 smooth finishes demanded in today's luxury homes.
          </p>
        </div>

        {/* Understanding Finish Levels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Industry Finish Levels</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            The drywall industry defines five finish levels, each with specific applications and quality standards. Understanding these levels helps you choose the right approach for your project and set appropriate expectations.
          </p>

          <div className="space-y-8">
            {finishLevels.map((level, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{level.level}</h3>
                    <p className="text-gray-600 mt-2">{level.description}</p>
                  </div>
                  <div className="ml-6 text-right">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      level.level === 'Level 5' ? 'bg-purple-100 text-purple-800' :
                      level.level === 'Level 4' ? 'bg-green-100 text-green-800' :
                      level.level === 'Level 3' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {level.quality}
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Requirements:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {level.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircleIcon className="h-3 w-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common Applications:</h4>
                    <p className="text-gray-600 text-sm mb-3">{level.application}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">When Used:</h4>
                    <p className="text-gray-600 text-sm">{level.whenUsed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
            <div className="flex items-start">
              <AcademicCapIcon className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-2">Professional Insight</h3>
                <p className="text-teal-700 mb-3">
                  Most residential work requires Level 4 finish, while Level 5 is increasingly requested for smooth walls in luxury homes and areas with critical lighting. Level 5 adds 30-50% to finishing costs but creates a premium appearance that justifies the investment in high-end applications.
                </p>
                <p className="text-teal-700">
                  Wall Fix Pros specializes in Level 5 finishes for discerning homeowners throughout the DMV area who demand the highest quality results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools and Materials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Tools and Materials</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Quality tools and materials are essential for professional results. Investing in the right equipment pays dividends in efficiency, quality, and long-term durability of the finish.
          </p>

          <div className="space-y-8">
            {toolsAndMaterials.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                      category.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                      category.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {category.priority} Priority
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Investment:</div>
                    <div className="text-sm font-medium text-green-600">{category.budgetRange}</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Essential Items:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <WrenchScrewdriverIcon className="h-3 w-3 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Pro Quality Tips:</h4>
                    <p className="text-blue-700 text-sm">{category.qualityTips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Step-by-Step Process</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Mastering drywall finishing requires understanding each step's purpose and execution. This detailed process reflects the methods used by Wall Fix Pros master craftsmen on every project.
          </p>

          <div className="space-y-8">
            {stepByStepProcess.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Time Required:</div>
                    <div className="text-sm font-medium text-blue-600">{step.timeRequired}</div>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Detailed Steps:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {step.detailedSteps.map((detailStep, dsIndex) => (
                        <li key={dsIndex} className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 mr-2 flex-shrink-0" />
                          {detailStep}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Common Mistakes:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      {step.commonMistakes.map((mistake, mIndex) => (
                        <li key={mIndex} className="flex items-start">
                          <ExclamationTriangleIcon className="h-3 w-3 text-red-500 mt-1 mr-2 flex-shrink-0" />
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Pro Tips:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      {step.proTips.map((tip, tIndex) => (
                        <li key={tIndex} className="flex items-start">
                          <CheckCircleIcon className="h-3 w-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Quality Standards</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Professional contractors use specific standards to evaluate finish quality. Understanding these standards helps you assess work quality and communicate expectations clearly.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality Standard</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level 4 Requirement</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level 5 Requirement</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Testing Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acceptance Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {qualityStandards.map((standard, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{standard.standard}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{standard.level4}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{standard.level5}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{standard.testMethod}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{standard.acceptanceCriteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Wall Fix Pros Quality Promise</h3>
            <p className="text-green-700 mb-3">
              Every Wall Fix Pros project undergoes rigorous quality inspection using these professional standards. Our master craftsmen don't consider a job complete until it meets or exceeds Level 4 requirements, with Level 5 finishes available for premium applications.
            </p>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Multi-point quality inspection at each phase</li>
              <li>• Raking light inspection under various angles</li>
              <li>• Touch testing for smoothness verification</li>
              <li>• Final approval before primer application</li>
              <li>• 5-year warranty on workmanship quality</li>
            </ul>
          </div>
        </section>

        {/* Troubleshooting Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Troubleshooting Guide</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Even experienced professionals encounter challenges. Understanding common problems and their solutions helps prevent issues and fix them when they occur.
          </p>

          <div className="space-y-8">
            {troubleshooting.map((issue, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{issue.problem}</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Root Causes:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      {issue.causes.map((cause, cIndex) => (
                        <li key={cIndex} className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0" />
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Prevention:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      {issue.prevention.map((prevent, pIndex) => (
                        <li key={pIndex} className="flex items-start">
                          <CheckCircleIcon className="h-3 w-3 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                          {prevent}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Professional Repair:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      {issue.repair.map((fix, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <BeakerIcon className="h-3 w-3 text-green-600 mt-1 mr-2 flex-shrink-0" />
                          {fix}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Professional Techniques</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Master-level finishing requires advanced techniques that separate professional work from amateur attempts. These methods are used by Wall Fix Pros craftsmen on premium projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Level 5 Skim Coating</h3>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Apply thin, uniform coat over entire surface</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Use lightweight compound for easier sanding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Work in manageable sections to maintain wet edge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Sand with fine grit for smooth finish</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Inspect under multiple lighting angles</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">Spray Application Techniques</h3>
              <ul className="text-purple-800 space-y-2">
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-4 w-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Use professional spray equipment for large areas</span>
                </li>
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-4 w-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Maintain consistent spray patterns and pressure</span>
                </li>
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-4 w-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Control overspray with proper masking</span>
                </li>
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-4 w-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Blend spray edges with hand tools</span>
                </li>
                <li className="flex items-start">
                  <WrenchScrewdriverIcon className="h-4 w-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Allow proper curing time between coats</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-teal-800 mb-3">Master Craftsman Secrets</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="text-teal-700 text-sm space-y-2">
                <li>• Work in optimal temperature and humidity conditions</li>
                <li>• Use proper lighting throughout all phases</li>
                <li>• Maintain consistent compound mixing ratios</li>
                <li>• Plan work sequence for best results</li>
              </ul>
              <ul className="text-teal-700 text-sm space-y-2">
                <li>• Allow adequate drying time between coats</li>
                <li>• Use quality primers designed for drywall</li>
                <li>• Document techniques for consistent results</li>
                <li>• Continuously inspect work under various lighting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Services CTA */}
        <div className="bg-teal-700 text-white rounded-lg p-8 mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Experience Master-Level Craftsmanship</h2>
            <p className="text-teal-100 mb-6">
              While this guide provides comprehensive information, achieving consistent professional results requires years of experience and specialized expertise. Wall Fix Pros master craftsmen bring decades of knowledge to every project, ensuring superior results that stand the test of time.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <AcademicCapIcon className="h-8 w-8 text-teal-200 mx-auto mb-2" />
                <div className="text-teal-200 text-sm font-medium">Master Craftsmen</div>
              </div>
              <div className="text-center">
                <WrenchScrewdriverIcon className="h-8 w-8 text-teal-200 mx-auto mb-2" />
                <div className="text-teal-200 text-sm font-medium">Professional Tools</div>
              </div>
              <div className="text-center">
                <BeakerIcon className="h-8 w-8 text-teal-200 mx-auto mb-2" />
                <div className="text-teal-200 text-sm font-medium">Quality Materials</div>
              </div>
              <div className="text-center">
                <CheckCircleIcon className="h-8 w-8 text-teal-200 mx-auto mb-2" />
                <div className="text-teal-200 text-sm font-medium">Guaranteed Results</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Get Professional Quote
              </Link>
              <a
                href="tel:+12406701949"
                className="border-2 border-teal-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200"
              >
                Call (240) 670-1949
              </a>
            </div>
            <p className="text-teal-200 text-sm mt-4">
              Serving Maryland, Virginia, Pennsylvania, and West Virginia with master-level craftsmanship
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/drywall-texturing-options-dmv-modern-homes" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DMV Texturing Options</h3>
              <p className="text-gray-600 text-sm">Explore popular drywall texturing options for DMV area homes with costs and techniques.</p>
            </Link>
            <Link href="/blog/fix-common-drywall-problems-maryland-homes" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Common Drywall Problems</h3>
              <p className="text-gray-600 text-sm">Learn to identify and fix the most common drywall issues in Maryland homes.</p>
            </Link>
            <Link href="/blog/diy-vs-professional-drywall-installation-virginia" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DIY vs Professional Quality</h3>
              <p className="text-gray-600 text-sm">Compare DIY and professional drywall installation quality and cost considerations.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}