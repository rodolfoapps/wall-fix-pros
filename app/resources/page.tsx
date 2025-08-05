import type { Metadata } from 'next'
import { DocumentTextIcon, WrenchScrewdriverIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Drywall Repair Resources & Tips | Wall Fix Pros',
  description: 'Expert drywall repair tips, guides, and resources from Wall Fix Pros. Learn about drywall maintenance, repair techniques, and when to call professionals.',
}

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Drywall Repair Guide',
      description: 'Complete guide to common drywall problems and solutions.',
      icon: DocumentTextIcon,
      items: [
        'Identifying different types of drywall damage',
        'Tools needed for basic repairs',
        'Step-by-step repair instructions',
        'When to call a professional'
      ]
    },
    {
      title: 'Maintenance Tips',
      description: 'Keep your drywall in perfect condition with these tips.',
      icon: WrenchScrewdriverIcon,
      items: [
        'Regular inspection checklist',
        'Preventing water damage',
        'Proper cleaning techniques',
        'Seasonal maintenance tasks'
      ]
    },
    {
      title: 'Emergency Response',
      description: 'What to do when drywall damage occurs unexpectedly.',
      icon: ClockIcon,
      items: [
        'Water damage first aid',
        'Preventing further damage',
        'Documenting damage for insurance',
        'Emergency contact procedures'
      ]
    },
    {
      title: 'Quality Standards',
      description: 'Understanding professional drywall repair standards.',
      icon: ShieldCheckIcon,
      items: [
        'Industry best practices',
        'Material quality standards',
        'Finish level specifications',
        'Code compliance requirements'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How long does a typical drywall repair take?',
      answer: 'Small repairs (nail holes, small cracks) can be completed in 2-4 hours. Larger repairs may take 1-2 days depending on the extent of damage and drying time required.'
    },
    {
      question: 'Do you match existing wall textures?',
      answer: 'Yes, we specialize in matching existing wall textures including orange peel, knockdown, popcorn, and smooth finishes to ensure seamless repairs.'
    },
    {
      question: 'What causes drywall cracks?',
      answer: 'Common causes include house settling, temperature changes, humidity fluctuations, foundation movement, and structural issues. We assess the root cause to prevent future problems.'
    },
    {
      question: 'Can you repair water-damaged drywall?',
      answer: 'Yes, we handle all types of water damage from minor leaks to major flooding. We assess moisture levels, remove damaged sections, and restore walls to original condition.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-brand-blue-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-brand-blue-700 opacity-75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Drywall Resources
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-brand-blue-100">
            Expert tips, guides, and resources to help you understand drywall repair and maintenance.
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Expert Resources & Guides
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about drywall repair and maintenance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {resources.map((resource) => (
            <div key={resource.title} className="rounded-lg border border-gray-200 p-8">
              <div className="flex items-center">
                <resource.icon className="h-8 w-8 text-brand-orange-500" />
                <h3 className="ml-3 text-xl font-bold text-brand-blue-700">
                  {resource.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600">{resource.description}</p>
              <ul className="mt-6 space-y-2">
                {resource.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-brand-orange-500 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-brand-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-blue-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-brand-blue-700">
              Get answers to common drywall repair questions.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6">
                <h3 className="text-lg font-semibold text-brand-blue-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-brand-blue-700 px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-white">
            Still Have Questions?
          </h3>
          <p className="mt-4 text-lg text-brand-blue-100">
            Our experts are here to help with any drywall repair questions or concerns.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13015550199"
              className="inline-flex items-center rounded-md border border-transparent bg-brand-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-orange-600"
            >
              Call (301) 555-0199
            </a>
            <a
              href="/quote"
              className="inline-flex items-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-brand-blue-700"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}