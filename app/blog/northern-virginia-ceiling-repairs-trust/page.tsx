import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Why Northern Virginia Homeowners Trust Wall Fix Pros for Ceiling Repairs',
  description: 'Discover why Northern Virginia homeowners choose Wall Fix Pros for ceiling repairs. Customer testimonials, expert solutions, and comprehensive ceiling services.',
}

export default function NorthernVirginiaCeilingRepairsPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-indigo-700">
        <div className="absolute inset-0 bg-indigo-700 opacity-75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
              Ceiling Repair
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Why Northern Virginia Homeowners Trust Wall Fix Pros for Ceiling Repairs
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-indigo-100">
              Learn why homeowners throughout Northern Virginia choose Wall Fix Pros for professional ceiling repair services. Customer testimonials and expert solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Northern Virginia homeowners trust Wall Fix Pros for <Link href="/services/ceiling-services" className="text-blue-600 hover:text-blue-700">professional ceiling repairs</Link> throughout <Link href="/locations/virginia/fairfax" className="text-blue-600 hover:text-blue-700">Fairfax</Link>, <Link href="/locations/virginia/alexandria" className="text-blue-600 hover:text-blue-700">Alexandria</Link>, <Link href="/locations/virginia/arlington" className="text-blue-600 hover:text-blue-700">Arlington</Link>, and surrounding communities.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Article Coming Soon</h3>
            <p className="text-yellow-700">
              This comprehensive article will feature customer testimonials, ceiling repair case studies, and expert insights from our Northern Virginia projects.
            </p>
            <div className="mt-4">
              <Link href="/blog" className="text-yellow-800 hover:text-yellow-900 font-medium">← Back to Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}