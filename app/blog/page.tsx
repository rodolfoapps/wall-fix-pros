import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Drywall Expert Blog | Wall Fix Pros Tips & Guides',
  description: 'Expert drywall tips, guides, and advice from Wall Fix Pros. Learn about drywall repair, installation, maintenance, and more from our experienced professionals.',
}

export default function BlogPage() {
  const featuredArticles = [
    {
      title: 'How to Fix Common Drywall Problems in Maryland Homes: A Complete Guide',
      slug: 'fix-common-drywall-problems-maryland-homes',
      excerpt: 'Discover the most common drywall issues Maryland homeowners face and learn professional repair techniques. Complete guide with step-by-step instructions.',
      category: 'Repair Guide',
      readTime: '15 min read',
      publishDate: 'December 15, 2024',
      featured: true
    },
    {
      title: 'Water Damage Drywall Repair: What Frederick Homeowners Need to Know',
      slug: 'water-damage-repair-frederick',
      excerpt: 'Essential information for Frederick homeowners dealing with water damage. Learn when to repair vs replace and how to prevent future issues.',
      category: 'Water Damage',
      readTime: '12 min read',
      publishDate: 'December 12, 2024',
      featured: true
    },
    {
      title: 'DIY vs Professional Drywall Installation: Why Virginia Homeowners Choose Pros',
      slug: 'diy-vs-professional-drywall-installation-virginia',
      excerpt: 'Complete cost and quality comparison between DIY and professional drywall installation. See why Virginia homeowners choose professional contractors.',
      category: 'Installation',
      readTime: '14 min read',
      publishDate: 'December 10, 2024',
      featured: true
    }
  ]

  const recentArticles = [
    {
      title: 'Before & After: Amazing Drywall Transformations in Bethesda and Rockville',
      slug: 'drywall-transformations-bethesda-rockville',
      excerpt: 'See incredible before and after drywall transformations from our Bethesda and Rockville projects. Real case studies with photos and results.',
      category: 'Case Studies',
      readTime: '10 min read',
      publishDate: 'December 8, 2024'
    },
    {
      title: 'Why Northern Virginia Homeowners Trust Wall Fix Pros for Ceiling Repairs',
      slug: 'northern-virginia-ceiling-repairs-trust',
      excerpt: 'Discover why Northern Virginia homeowners choose Wall Fix Pros for ceiling repairs. Customer testimonials and expert ceiling solutions.',
      category: 'Ceiling Repair',
      readTime: '11 min read',
      publishDate: 'December 5, 2024'
    },
    {
      title: 'Case Study: Complete Basement Drywall Installation in Columbia, Maryland',
      slug: 'basement-drywall-installation-columbia-maryland',
      excerpt: 'Detailed case study of a complete basement drywall installation in Columbia, MD. From planning to completion with costs and timeline.',
      category: 'Case Studies',
      readTime: '13 min read',
      publishDate: 'December 3, 2024'
    },
    {
      title: 'Winter Humidity and Your Drywall: Protecting Your Maryland Home',
      slug: 'winter-humidity-drywall-protection-maryland',
      excerpt: 'Learn how Maryland winter humidity affects your drywall and proven strategies to protect your home during cold months.',
      category: 'Maintenance',
      readTime: '9 min read',
      publishDate: 'November 30, 2024'
    },
    {
      title: 'Spring Home Maintenance: Drywall Inspection Checklist for DMV Homeowners',
      slug: 'spring-drywall-inspection-checklist-dmv',
      excerpt: 'Comprehensive spring drywall inspection checklist for DC Metro area homeowners. Catch problems early and save on repairs.',
      category: 'Maintenance',
      readTime: '12 min read',
      publishDate: 'November 28, 2024'
    },
    {
      title: '2025 Drywall Repair Costs in Maryland, Virginia, and Pennsylvania',
      slug: 'drywall-repair-costs-2025-maryland-virginia-pennsylvania',
      excerpt: 'Complete 2025 pricing guide for drywall repairs across MD, VA, and PA. Get accurate cost estimates and budget planning tips.',
      category: 'Pricing',
      readTime: '16 min read',
      publishDate: 'November 25, 2024'
    },
    {
      title: 'When to Patch vs Replace: Smart Drywall Decisions for Budget-Conscious Homeowners',
      slug: 'patch-vs-replace-drywall-budget-decisions',
      excerpt: 'Make smart financial decisions about drywall repairs. Learn when patching makes sense vs when replacement is the better investment.',
      category: 'Decision Guide',
      readTime: '11 min read',
      publishDate: 'November 22, 2024'
    },
    {
      title: 'Drywall Texturing Options: Popular Choices for Modern Homes in the DMV Area',
      slug: 'drywall-texturing-options-dmv-modern-homes',
      excerpt: 'Explore popular drywall texturing options for DMV area homes. Latest trends, costs, and professional application techniques.',
      category: 'Texturing',
      readTime: '13 min read',
      publishDate: 'November 20, 2024'
    },
    {
      title: 'The Complete Guide to Drywall Taping and Finishing: Professional Tips and Techniques',
      slug: 'complete-guide-drywall-taping-finishing-techniques',
      excerpt: 'Master professional drywall taping and finishing techniques. Comprehensive guide with expert tips and quality standards.',
      category: 'Techniques',
      readTime: '18 min read',
      publishDate: 'November 18, 2024'
    }
  ]

  const categories = [
    { name: 'Repair Guide', count: 3 },
    { name: 'Case Studies', count: 2 },
    { name: 'Maintenance', count: 2 },
    { name: 'Installation', count: 1 },
    { name: 'Water Damage', count: 1 },
    { name: 'Ceiling Repair', count: 1 },
    { name: 'Pricing', count: 1 },
    { name: 'Texturing', count: 1 }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0 bg-blue-700 opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Expert Drywall Blog
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Professional tips, guides, and insights from Wall Fix Pros. Learn from our experts serving Maryland, Virginia, West Virginia, and Pennsylvania.
          </p>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Articles
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our most popular and comprehensive drywall guides
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{article.category}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>{article.publishDate}</span>
                    <ClockIcon className="h-4 w-4 ml-4 mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                  Read Full Article
                  <ChevronRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Articles & Sidebar */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Recent Articles
              </h2>
              
              <div className="space-y-8">
                {recentArticles.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group block"
                  >
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-3">
                              {article.category}
                            </span>
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span className="mr-4">{article.publishDate}</span>
                            <ClockIcon className="h-4 w-4 mr-1" />
                            <span>{article.readTime}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-3">
                            {article.title}
                          </h3>
                          <p className="text-gray-600">
                            {article.excerpt}
                          </p>
                        </div>
                        <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200 ml-4 flex-shrink-0" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="mt-12 lg:mt-0">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                        {category.name}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-blue-700 text-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Need Professional Help?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Get expert drywall services from Wall Fix Pros. Serving Maryland, Virginia, West Virginia, and Pennsylvania.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/quote"
                    className="block w-full bg-white text-blue-700 text-center py-2 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href="tel:+13015550199"
                    className="block w-full border border-blue-300 text-center py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition-colors duration-200"
                  >
                    Call (301) 555-0199
                  </a>
                </div>
              </div>

              {/* Popular Services */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Services</h3>
                <div className="space-y-3">
                  <Link href="/services/drywall-repair" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    → Drywall Repair
                  </Link>
                  <Link href="/services/drywall-installation" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    → Drywall Installation
                  </Link>
                  <Link href="/services/water-damage-repair" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    → Water Damage Repair
                  </Link>
                  <Link href="/services/drywall-texturing" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    → Drywall Texturing
                  </Link>
                  <Link href="/services/ceiling-services" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    → Ceiling Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated with Expert Tips
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get the latest drywall tips, maintenance guides, and industry insights delivered to your inbox.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/resources"
                className="text-lg font-semibold leading-6 text-white hover:text-blue-100"
              >
                Browse Resources →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}