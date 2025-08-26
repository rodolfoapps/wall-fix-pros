import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap | Wall Fix Pros - All Pages',
  description: 'Complete sitemap of Wall Fix Pros website. Find all our drywall services, locations across Maryland, Virginia, West Virginia, and Pennsylvania.',
}

export default function SitemapPage() {
  // Services data
  const services = [
    'drywall-installation',
    'drywall-repair',
    'drywall-patching',
    'drywall-taping',
    'drywall-texturing',
    'drywall-restoration',
    'ceiling-services',
    'insulation-services',
    'water-damage-repair',
    'painting-services'
  ]

  // Locations data organized by state
  const locations = {
    'Maryland': {
      slug: 'maryland',
      cities: [
        { name: 'Frederick (HQ)', slug: 'frederick', isHQ: true },
        { name: 'Baltimore', slug: 'baltimore' },
        { name: 'Bethesda', slug: 'bethesda' },
        { name: 'Columbia', slug: 'columbia' },
        { name: 'Darnestown', slug: 'darnestown' },
        { name: 'Ellicot City', slug: 'ellicot-city' },
        { name: 'Gaithersburg', slug: 'gaithersburg' },
        { name: 'Germantown', slug: 'germantown' },
        { name: 'Hagerstown', slug: 'hagerstown' },
        { name: 'Kensington', slug: 'kensington' },
        { name: 'Laytonsville', slug: 'laytonsville' },
        { name: 'Middletown', slug: 'middletown' },
        { name: 'Mt Airy', slug: 'mt-airy' },
        { name: 'North Potomac', slug: 'north-potomac' },
        { name: 'Olney', slug: 'olney' },
        { name: 'Potomac', slug: 'potomac' },
        { name: 'Rockville', slug: 'rockville' }
      ]
    },
    'Virginia': {
      slug: 'virginia',
      cities: [
        { name: 'Alexandria', slug: 'alexandria' },
        { name: 'Arlington', slug: 'arlington' },
        { name: 'Ashburn', slug: 'ashburn' },
        { name: 'Chantilly', slug: 'chantilly' },
        { name: 'Fairfax', slug: 'fairfax' },
        { name: 'Falls Church', slug: 'falls-church' },
        { name: 'Herndon', slug: 'herndon' },
        { name: 'Leesburg', slug: 'leesburg' },
        { name: 'McLean', slug: 'mclean' },
        { name: 'Reston', slug: 'reston' },
        { name: 'Sterling', slug: 'sterling' }
      ]
    },
    'West Virginia': {
      slug: 'west-virginia',
      cities: [
        { name: 'Charles Town', slug: 'charles-town' },
        { name: 'Harpers Ferry', slug: 'harpers-ferry' }
      ]
    },
    'Pennsylvania': {
      slug: 'pennsylvania',
      cities: [
        { name: 'Chambersburg', slug: 'chambersburg' },
        { name: 'Gettysburg', slug: 'gettysburg' },
        { name: 'Green Castle', slug: 'green-castle' }
      ]
    }
  }

  // Blog posts
  const blogPosts = [
    { title: 'Basement Drywall Installation in Columbia Maryland', slug: 'basement-drywall-installation-columbia-maryland' },
    { title: 'Complete Guide to Drywall Taping & Finishing', slug: 'complete-guide-drywall-taping-finishing-techniques' },
    { title: 'DIY vs Professional Drywall Installation', slug: 'diy-vs-professional-drywall-installation-virginia' },
    { title: 'Drywall Repair Costs 2025', slug: 'drywall-repair-costs-2025-maryland-virginia-pennsylvania' },
    { title: 'Drywall Texturing Options for DMV Homes', slug: 'drywall-texturing-options-dmv-modern-homes' },
    { title: 'Drywall Transformations in Bethesda & Rockville', slug: 'drywall-transformations-bethesda-rockville' },
    { title: 'Fix Common Drywall Problems', slug: 'fix-common-drywall-problems-maryland-homes' },
    { title: 'Northern Virginia Ceiling Repairs', slug: 'northern-virginia-ceiling-repairs-trust' },
    { title: 'Patch vs Replace Drywall Decisions', slug: 'patch-vs-replace-drywall-budget-decisions' },
    { title: 'Spring Drywall Inspection Checklist', slug: 'spring-drywall-inspection-checklist-dmv' },
    { title: 'Water Damage Repair in Frederick', slug: 'water-damage-repair-frederick' },
    { title: 'Winter Humidity & Drywall Protection', slug: 'winter-humidity-drywall-protection-maryland' }
  ]

  // Resources
  const resources = [
    { title: 'Drywall Repair Guide', slug: 'drywall-repair-guide' },
    { title: 'Emergency Response', slug: 'emergency-response' },
    { title: 'Maintenance Tips', slug: 'maintenance-tips' },
    { title: 'Quality Standards', slug: 'quality-standards' }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Site Map
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            Explore all pages and services available on Wall Fix Pros
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Main Pages Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Main Pages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
              About Us
            </Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-800 hover:underline">
              Services
            </Link>
            <Link href="/locations" className="text-blue-600 hover:text-blue-800 hover:underline">
              Locations
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
              Contact
            </Link>
            <Link href="/quote" className="text-blue-600 hover:text-blue-800 hover:underline">
              Get Quote
            </Link>
            <Link href="/resources" className="text-blue-600 hover:text-blue-800 hover:underline">
              Resources
            </Link>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 hover:underline">
              Blog
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => {
              const serviceName = service.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')
              return (
                <div key={service} className="border-l-4 border-orange-500 pl-4">
                  <Link 
                    href={`/services/${service}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  >
                    {serviceName}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Professional {serviceName.toLowerCase()} services
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Locations Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(locations).map(([state, data]) => (
              <div key={state}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  <Link 
                    href={`/locations/${data.slug}`}
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {state}
                  </Link>
                </h3>
                <ul className="space-y-2">
                  {data.cities.map(city => (
                    <li key={city.slug}>
                      <Link 
                        href={`/locations/${data.slug}/${city.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        {city.name}
                        {city.isHQ && (
                          <span className="ml-1 text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                            Headquarters
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Service by Location Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Services by Location
          </h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              We offer all 10 services in each of our 33 service cities. Each location page includes:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>330 Service-Location combination pages</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Location-specific pricing and information</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Local testimonials and projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Emergency service availability</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Example: 
              <Link href="/services/drywall-repair/frederick-drywall-repair" className="text-blue-600 hover:underline ml-1">
                Frederick Drywall Repair
              </Link>
              {' or '}
              <Link href="/locations/maryland/baltimore/drywall-installation-baltimore" className="text-blue-600 hover:underline">
                Baltimore Drywall Installation
              </Link>
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Blog Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts.map(post => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Resources & Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map(resource => (
              <Link 
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-500 transition-colors"
              >
                <span className="text-blue-600 hover:text-blue-800 font-medium">
                  {resource.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Contact Form
                  </Link>
                </li>
                <li>
                  <Link href="/quote" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Request Free Quote
                  </Link>
                </li>
                <li>
                  <Link href="/thank-you" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Thank You Page
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Emergency Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/emergency-response" className="text-blue-600 hover:text-blue-800 hover:underline">
                    24/7 Emergency Response
                  </Link>
                </li>
                <li>
                  <Link href="/services/water-damage-repair" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Water Damage Repair
                  </Link>
                </li>
                <li>
                  <a href="tel:2406701949" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Call: (240) 670-1949
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Popular Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/drywall-repair" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Drywall Repair
                  </Link>
                </li>
                <li>
                  <Link href="/services/drywall-installation" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Drywall Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/water-damage-repair" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Water Damage Restoration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Total Pages:</strong> 737+ pages including all service-location combinations
          </p>
          <p className="text-sm text-gray-600 mt-2">
            This HTML sitemap helps visitors navigate our website and improves SEO by creating internal links to all our pages.
            For search engines, we also maintain an <a href="/sitemap.xml" className="text-blue-600 hover:underline">XML sitemap</a>.
          </p>
        </div>
      </div>
    </div>
  )
}