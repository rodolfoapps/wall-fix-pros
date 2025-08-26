import type { Metadata } from 'next'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'About Us | Professional Drywall Repair Experts',
  description: 'Learn about Wall Fix Pros, your trusted drywall repair experts serving Maryland, Virginia, West Virginia, and Pennsylvania since 2015.',
}

export default function AboutPage() {
  const features = [
    'Licensed and insured professionals',
    'Same-day service available',
    'Free estimates on all projects',
    '100% satisfaction guarantee',
    'Clean, professional workmanship',
    'Competitive pricing',
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
            About Wall Fix Pros
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-brand-blue-100">
            Your trusted drywall repair experts serving the Mid-Atlantic region with professional, reliable service since 2015.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Story */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <p>
                Founded in 2015, Wall Fix Pros has grown from a small local business to the premier drywall repair company serving Maryland, Virginia, West Virginia, and Pennsylvania. Our headquarters in Frederick, MD serves as the central hub for our operations across 33 cities.
              </p>
              <p>
                What started as a passion for helping homeowners fix their walls has evolved into a comprehensive drywall repair service that handles everything from small nail holes to major water damage restoration.
              </p>
              <p>
                We take pride in our craftsmanship, attention to detail, and commitment to customer satisfaction. Every project, no matter how big or small, receives the same level of professional care and expertise.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <div className="mt-6 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex">
                  <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-brand-orange-500" />
                  <span className="ml-3 text-lg text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16">
          <div className="rounded-lg bg-brand-blue-50 px-6 py-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-blue-900">
                Our Mission
              </h3>
              <p className="mt-4 text-lg text-brand-blue-700 max-w-3xl mx-auto">
                To provide exceptional drywall repair services that exceed our customers' expectations while maintaining the highest standards of professionalism, craftsmanship, and customer service.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Ready to Fix Your Walls?
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Contact us today for a free estimate on your drywall repair project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12406701949"
              className="inline-flex items-center rounded-md border border-transparent bg-brand-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-orange-600"
            >
              Call (240) 670-1949
            </a>
            <a
              href="/quote"
              className="inline-flex items-center rounded-md border border-brand-blue-300 bg-white px-6 py-3 text-base font-medium text-brand-blue-700 shadow-sm hover:bg-brand-blue-50"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}