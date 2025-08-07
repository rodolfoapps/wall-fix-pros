import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, CurrencyDollarIcon, CheckCircleIcon, XCircleIcon, ScaleIcon, CalculatorIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'When to Patch vs Replace: Smart Drywall Decisions for Budget-Conscious Homeowners',
  description: 'Make smart financial decisions about drywall repairs. Learn when patching makes sense vs when replacement is the better investment from Wall Fix Pros experts.',
}

export default function PatchVsReplacePage() {
  const decisionFactors = [
    {
      factor: 'Damage Size',
      patchGoodFor: 'Holes under 6 inches, surface cracks',
      replaceNeeded: 'Holes larger than 8 inches, extensive areas',
      costImpact: 'High',
      whyItMatters: 'Larger damages require more patching material and often look obvious, making replacement more cost-effective long-term.'
    },
    {
      factor: 'Damage Depth',
      patchGoodFor: 'Surface damage, partial thickness holes',
      replaceNeeded: 'Full-thickness holes, multiple layers damaged',
      costImpact: 'Medium',
      whyItMatters: 'Deep damage compromises structural integrity and often indicates underlying issues requiring full replacement.'
    },
    {
      factor: 'Age of Existing Drywall',
      patchGoodFor: 'Newer drywall (under 15 years)',
      replaceNeeded: 'Older drywall (20+ years), especially in moisture areas',
      costImpact: 'Medium',
      whyItMatters: 'Older drywall may not match new materials in texture, thickness, or moisture resistance, making patches obvious.'
    },
    {
      factor: 'Frequency of Problems',
      patchGoodFor: 'One-time isolated damage',
      replaceNeeded: 'Recurring issues, multiple problem areas',
      costImpact: 'High',
      whyItMatters: 'Repeated patching costs more than replacement and may indicate systemic issues requiring comprehensive solutions.'
    },
    {
      factor: 'Location Visibility',
      patchGoodFor: 'Low-visibility areas, textured walls',
      replaceNeeded: 'High-traffic areas, smooth walls, feature walls',
      costImpact: 'Low to Medium',
      whyItMatters: 'Patches are more noticeable on smooth surfaces and in well-lit areas, affecting home appearance and value.'
    },
    {
      factor: 'Future Plans',
      patchGoodFor: 'No renovation plans, temporary fix needed',
      replaceNeeded: 'Planning renovations, selling home soon',
      costImpact: 'Variable',
      whyItMatters: 'Replacement provides better foundation for future improvements and appeals more to potential buyers.'
    }
  ]

  const costAnalysis = [
    {
      scenario: 'Small Hole (2-4 inches)',
      patchCost: '$50-150',
      patchTime: '2-3 hours',
      replaceCost: '$200-400',
      replaceTime: '4-6 hours',
      recommendation: 'Patch',
      reasoning: 'Cost differential too high to justify replacement for small, isolated damage'
    },
    {
      scenario: 'Medium Hole (4-8 inches)',
      patchCost: '$100-250',
      patchTime: '3-5 hours',
      replaceCost: '$250-500',
      replaceTime: '5-8 hours',
      recommendation: 'Depends',
      reasoning: 'Consider location visibility, existing wall condition, and long-term plans'
    },
    {
      scenario: 'Large Hole (8+ inches)',
      patchCost: '$200-400',
      patchTime: '4-8 hours',
      replaceCost: '$300-600',
      replaceTime: '6-10 hours',
      recommendation: 'Replace',
      reasoning: 'Minimal cost difference, replacement provides superior durability and appearance'
    },
    {
      scenario: 'Water Damage Area',
      patchCost: '$150-400',
      patchTime: '3-6 hours',
      replaceCost: '$300-800',
      replaceTime: '6-12 hours',
      recommendation: 'Replace',
      reasoning: 'Water damage often affects structural integrity and may hide mold or other issues'
    },
    {
      scenario: 'Multiple Small Issues',
      patchCost: '$300-800',
      patchTime: '8-15 hours',
      replaceCost: '$500-1,200',
      replaceTime: '10-20 hours',
      recommendation: 'Replace',
      reasoning: 'Labor efficiency and uniform appearance make replacement more cost-effective'
    },
    {
      scenario: 'Textured Wall Damage',
      patchCost: '$200-600',
      patchTime: '4-10 hours',
      replaceCost: '$400-1,000',
      replaceTime: '8-15 hours',
      recommendation: 'Depends',
      reasoning: 'Texture matching difficulty and cost vary significantly by texture type and contractor skill'
    }
  ]

  const longTermConsiderations = [
    {
      timeframe: '1-2 Years',
      patchOutcome: 'Generally stable if properly done',
      replaceOutcome: 'Excellent durability and appearance',
      considerations: [
        'Patches may show slight color differences',
        'Seasonal movement may cause minor cracking',
        'Quality of initial repair work becomes evident'
      ]
    },
    {
      timeframe: '3-5 Years', 
      patchOutcome: 'May require touch-ups or additional work',
      replaceOutcome: 'Maintains original quality',
      considerations: [
        'Patches more likely to show wear',
        'Texture differences become more apparent',
        'Recurring issues may emerge at patch edges'
      ]
    },
    {
      timeframe: '5-10 Years',
      patchOutcome: 'Likely needs redoing, especially in moisture areas',
      replaceOutcome: 'Still performing like new',
      considerations: [
        'Patch materials age differently than surrounding drywall',
        'Home improvements may expose patch quality issues',
        'Replacement provides consistent aging and appearance'
      ]
    }
  ]

  const budgetStrategies = [
    {
      strategy: 'Immediate Fix, Future Replace',
      scenario: 'Cash flow constraints but planning future renovation',
      approach: 'Quick, temporary patch now; full replacement during planned updates',
      pros: ['Addresses immediate issues', 'Spreads costs over time', 'Allows for better planning'],
      cons: ['Duplicate labor costs', 'Temporary solution may worsen', 'May limit design options'],
      bestFor: 'Homeowners with clear renovation timeline within 2-3 years'
    },
    {
      strategy: 'Selective Replacement',
      scenario: 'Multiple issues but varying priorities',
      approach: 'Replace high-visibility and severely damaged areas; patch minor issues',
      pros: ['Balances cost and quality', 'Addresses worst problems first', 'Flexible implementation'],
      cons: ['Inconsistent wall quality', 'Complex project management', 'May create obvious differences'],
      bestFor: 'Homes with mixed damage levels and budget constraints'
    },
    {
      strategy: 'Room-by-Room Approach',
      scenario: 'Whole house needs attention but budget is limited',
      approach: 'Complete room replacement based on priority and budget availability',
      pros: ['Manageable project size', 'Uniform quality per room', 'Allows quality control'],
      cons: ['Longer overall timeline', 'House inconsistency during transition', 'Potential material matching issues'],
      bestFor: 'Systematic home improvement over several seasons'
    },
    {
      strategy: 'Quality Investment',
      scenario: 'Sufficient budget and long-term home ownership',
      approach: 'Replace all damaged areas at once with premium materials',
      pros: ['Best long-term value', 'Uniform appearance', 'One-time disruption'],
      cons: ['Higher upfront cost', 'Major project scope', 'Temporary displacement'],
      bestFor: 'Homeowners planning to stay 5+ years with adequate budget'
    }
  ]

  const commonMistakes = [
    {
      mistake: 'Patching Without Addressing Root Cause',
      description: 'Fixing visible damage without solving underlying moisture, structural, or maintenance issues',
      consequences: ['Recurring problems', 'Wasted repair costs', 'Escalating damage'],
      solution: 'Always investigate and fix the cause before repairing the symptom'
    },
    {
      mistake: 'Choosing Based Only on Initial Cost',
      description: 'Selecting patches over replacement purely based on upfront expense',
      consequences: ['Higher long-term costs', 'Repeated disruption', 'Diminished home value'],
      solution: 'Calculate total cost of ownership including future repairs and impact on property value'
    },
    {
      mistake: 'DIY Overconfidence',
      description: 'Attempting complex patches or replacements without proper skills or tools',
      consequences: ['Poor quality results', 'Safety risks', 'Costly do-overs'],
      solution: 'Honestly assess skill level and hire professionals for complex or critical repairs'
    },
    {
      mistake: 'Mixing Old and New Materials Poorly',
      description: 'Using different drywall types, thicknesses, or textures without considering compatibility',
      consequences: ['Visible patches', 'Structural inconsistency', 'Professional-looking repairs impossible'],
      solution: 'Match materials exactly or plan for complete area replacement with new materials'
    },
    {
      mistake: 'Ignoring Building Codes',
      description: 'Making repairs without considering local building code requirements',
      consequences: ['Code violations', 'Insurance issues', 'Problems during home sale'],
      solution: 'Check local codes and permits requirements, especially for major replacements'
    }
  ]

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="relative bg-purple-700">
        <div className="absolute inset-0 bg-purple-700 opacity-75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
              Decision Guide
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              When to Patch vs Replace: Smart Drywall Decisions for Budget-Conscious Homeowners
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Make informed financial decisions about drywall repairs. Learn when patching saves money and when replacement is the smarter long-term investment.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-purple-100">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Wall Fix Pros Expert Team</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>November 22, 2024</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>11 min read</span>
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
            Every homeowner faces this critical decision: should I patch this drywall damage or replace the entire section? The choice affects not only your immediate budget but also your home's long-term value, appearance, and maintenance costs. Making the wrong decision can cost thousands in repeated repairs or missed opportunities to solve problems permanently.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            As experts serving homeowners throughout <Link href="/locations/maryland" className="text-blue-600 hover:text-blue-700">Maryland</Link>, <Link href="/locations/virginia" className="text-blue-600 hover:text-blue-700">Virginia</Link>, and <Link href="/locations/pennsylvania" className="text-blue-600 hover:text-blue-700">Pennsylvania</Link>, Wall Fix Pros has guided thousands of families through this decision. Our experience shows that the right choice depends on multiple factors beyond just the initial repair cost – and understanding these factors can save you significant money while ensuring better results.
          </p>
        </div>

        {/* Decision Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Complete Decision Framework</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Smart repair decisions require analyzing multiple factors systematically. This framework helps you evaluate each situation objectively and make financially sound choices.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <ScaleIcon className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">The 5-Factor Analysis</h3>
                <p className="text-blue-700">
                  Professional contractors use this systematic approach to recommend the most cost-effective solution for each unique situation. Consider all factors together rather than making decisions based on any single criterion.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {decisionFactors.map((factor, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{factor.factor}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                      factor.costImpact === 'High' ? 'bg-red-100 text-red-800' :
                      factor.costImpact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {factor.costImpact} Cost Impact
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                      Patch Makes Sense:
                    </h4>
                    <p className="text-green-700 text-sm">{factor.patchGoodFor}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                      <XCircleIcon className="h-4 w-4 text-red-600 mr-2" />
                      Replace Instead:
                    </h4>
                    <p className="text-red-700 text-sm">{factor.replaceNeeded}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Why This Matters:</h4>
                  <p className="text-gray-700 text-sm">{factor.whyItMatters}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Analysis by Scenario */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Real-World Cost Analysis by Scenario</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            These cost comparisons reflect actual project data from our service areas, helping you understand when the price difference justifies replacement over patching.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Damage Scenario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patch Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Replace Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommendation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reasoning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costAnalysis.map((scenario, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{scenario.scenario}</td>
                    <td className="px-6 py-4">
                      <div className="text-gray-600">{scenario.patchCost}</div>
                      <div className="text-sm text-gray-500">{scenario.patchTime}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-600">{scenario.replaceCost}</div>
                      <div className="text-sm text-gray-500">{scenario.replaceTime}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        scenario.recommendation === 'Patch' ? 'bg-green-100 text-green-800' :
                        scenario.recommendation === 'Replace' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {scenario.recommendation}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{scenario.reasoning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <div className="flex items-start">
              <CalculatorIcon className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Cost Calculation Tips</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Include material costs, labor time, and potential future repairs</li>
                  <li>• Factor in the value of your time if doing DIY work</li>
                  <li>• Consider disruption costs (furniture moving, temporary relocation)</li>
                  <li>• Account for warranty differences (patches typically have shorter warranties)</li>
                  <li>• Include potential impacts on home value and marketability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Long-Term Outcome Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long-Term Performance: What to Expect</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Understanding how patches and replacements perform over time helps you make decisions that align with your ownership timeline and budget planning.
          </p>

          <div className="space-y-6">
            {longTermConsiderations.map((period, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{period.timeframe} Performance</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Patch Outcome:</h4>
                    <p className="text-orange-700 text-sm mb-3">{period.patchOutcome}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Replacement Outcome:</h4>
                    <p className="text-green-700 text-sm mb-3">{period.replaceOutcome}</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Key Considerations:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    {period.considerations.map((consideration, cIndex) => (
                      <li key={cIndex} className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0" />
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Budget-Smart Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Budget-Smart Strategies for Different Situations</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Real-world budget constraints require flexible approaches. These proven strategies help you balance quality, cost, and timing based on your specific situation.
          </p>

          <div className="space-y-8">
            {budgetStrategies.map((strategy, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{strategy.strategy}</h3>
                    <p className="text-blue-600 font-medium mt-1">{strategy.scenario}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Approach:</h4>
                  <p className="text-gray-700 text-sm">{strategy.approach}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Advantages:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      {strategy.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-start">
                          <CheckCircleIcon className="h-3 w-3 text-green-600 mt-1 mr-2 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Disadvantages:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      {strategy.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start">
                          <XCircleIcon className="h-3 w-3 text-red-600 mt-1 mr-2 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Best For:</h4>
                  <p className="text-purple-700 text-sm">{strategy.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes to Avoid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Costly Mistakes to Avoid</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Learning from others' mistakes can save you thousands. These are the most expensive errors we see homeowners make when deciding between patching and replacement.
          </p>

          <div className="space-y-8">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="border border-red-200 rounded-lg p-6 bg-red-50">
                <h3 className="text-xl font-bold text-red-900 mb-3">{mistake.mistake}</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">What Happens:</h4>
                    <p className="text-red-700 text-sm mb-3">{mistake.description}</p>
                    <h4 className="font-semibold text-red-800 mb-2">Costly Consequences:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      {mistake.consequences.map((consequence, cIndex) => (
                        <li key={cIndex} className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0" />
                          {consequence}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Smart Solution:</h4>
                    <p className="text-green-700 text-sm">{mistake.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Decision Tool */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Decision Tool: Patch or Replace?</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Use this simplified decision tree for common scenarios. When in doubt, consult with Wall Fix Pros for a professional assessment.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Decision Tree Guide</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <p className="font-semibold text-blue-800">Is the damage larger than 6 inches?</p>
                  <p className="text-blue-700 text-sm">→ <strong>YES:</strong> Lean toward replacement • <strong>NO:</strong> Continue to step 2</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <p className="font-semibold text-blue-800">Is this a recurring problem in the same area?</p>
                  <p className="text-blue-700 text-sm">→ <strong>YES:</strong> Choose replacement • <strong>NO:</strong> Continue to step 3</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <p className="font-semibold text-blue-800">Is the area highly visible or on a smooth wall?</p>
                  <p className="text-blue-700 text-sm">→ <strong>YES:</strong> Consider replacement for best appearance • <strong>NO:</strong> Continue to step 4</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <p className="font-semibold text-blue-800">Are you planning to sell or renovate within 3 years?</p>
                  <p className="text-blue-700 text-sm">→ <strong>YES:</strong> Choose replacement • <strong>NO:</strong> Patching is likely cost-effective</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</div>
                <div>
                  <p className="font-semibold text-green-800">Final Check:</p>
                  <p className="text-green-700 text-sm">Is the cost difference less than 50%? If so, choose replacement for better long-term value.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Services CTA */}
        <div className="bg-purple-700 text-white rounded-lg p-8 mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Get Expert Guidance on Your Repair Decision</h2>
            <p className="text-purple-100 mb-6">
              Not sure whether to patch or replace? Wall Fix Pros provides free assessments to help you make the most cost-effective decision for your specific situation. Our recommendations are based on years of experience and always prioritize your long-term satisfaction.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <ScaleIcon className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <div className="text-purple-200 text-sm font-medium">Expert Assessment</div>
              </div>
              <div className="text-center">
                <CalculatorIcon className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <div className="text-purple-200 text-sm font-medium">Cost Analysis</div>
              </div>
              <div className="text-center">
                <CheckCircleIcon className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <div className="text-purple-200 text-sm font-medium">Quality Guarantee</div>
              </div>
              <div className="text-center">
                <CurrencyDollarIcon className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <div className="text-purple-200 text-sm font-medium">Budget-Friendly Options</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Get Free Assessment
              </Link>
              <a
                href="tel:+12406701949"
                className="border-2 border-purple-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-200"
              >
                Call (240) 670-1949
              </a>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              Serving Maryland, Virginia, Pennsylvania, and West Virginia
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/drywall-repair-costs-2025-maryland-virginia-pennsylvania" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2025 Drywall Repair Costs</h3>
              <p className="text-gray-600 text-sm">Complete pricing guide for drywall repairs across Maryland, Virginia, and Pennsylvania.</p>
            </Link>
            <Link href="/blog/fix-common-drywall-problems-maryland-homes" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Common Drywall Problems</h3>
              <p className="text-gray-600 text-sm">Learn to identify and fix the most common drywall issues in Maryland homes.</p>
            </Link>
            <Link href="/blog/diy-vs-professional-drywall-installation-virginia" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DIY vs Professional Analysis</h3>
              <p className="text-gray-600 text-sm">Cost comparison and quality analysis of DIY versus professional drywall work.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}