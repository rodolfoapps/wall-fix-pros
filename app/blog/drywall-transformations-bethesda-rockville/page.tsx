import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Before & After: Amazing Drywall Transformations in Bethesda and Rockville',
  description: 'See incredible before and after drywall transformations from Wall Fix Pros projects in Bethesda and Rockville. Real case studies with photos and detailed results.',
}

export default function BethesdaRockvilleTransformationsPage() {
  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="relative bg-purple-700">
        <div className="absolute inset-0 bg-purple-700 opacity-75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Before & After: Amazing Drywall Transformations in Bethesda and Rockville
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Discover incredible drywall transformations from our recent projects in Bethesda and Rockville. See how professional repair and installation can completely transform your space.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-purple-100">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Wall Fix Pros Team</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>December 8, 2024</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Nothing showcases the power of professional drywall work like dramatic before and after transformations. These real projects from our <Link href="/locations/maryland/bethesda" className="text-blue-600 hover:text-blue-700">Bethesda</Link> and <Link href="/locations/maryland/rockville" className="text-blue-600 hover:text-blue-700">Rockville</Link> service areas demonstrate how expert <Link href="/services/drywall-repair" className="text-blue-600 hover:text-blue-700">drywall repair</Link> and installation can completely transform your living space.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Article Coming Soon</h3>
            <p className="text-yellow-700">
              We're currently compiling detailed case studies from our recent Bethesda and Rockville projects. This comprehensive article will include before/after photos, project timelines, cost breakdowns, and customer testimonials.
            </p>
            <div className="mt-4">
              <Link
                href="/blog"
                className="text-yellow-800 hover:text-yellow-900 font-medium"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>

          <div className="bg-blue-700 text-white rounded-lg p-8 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready for Your Own Transformation?</h2>
              <p className="text-blue-100 mb-6">
                Let Wall Fix Pros transform your space with professional drywall services in Bethesda, Rockville, and throughout Maryland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+13015550199"
                  className="border-2 border-blue-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                  Call (301) 555-0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}