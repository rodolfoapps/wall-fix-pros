import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon, PhoneIcon, ClockIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Thank You | Wall Fix Pros',
  description: 'Thank you for contacting Wall Fix Pros. We have received your message and will respond within 24 hours.',
}

export default function ThankYouPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-700 opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        </div>
        
        {/* Success Icon Animation */}
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="rounded-full bg-white/10 p-3">
                <CheckCircleIcon className="h-20 w-20 text-white animate-bounce" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in">
              Thank You for Contacting Us!
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              We've Successfully Received Your Message
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* What Happens Next Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <ClockIcon className="h-7 w-7 mr-3 text-blue-600" />
              What Happens Next?
            </h2>
          </div>
          
          <div className="p-8 space-y-6">
            {/* Confirmation Message */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="text-lg font-medium text-green-900">
                    Email Confirmation Sent
                  </p>
                  <p className="mt-1 text-green-700">
                    You should receive an email confirmation shortly at the email address you provided.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Your Request Timeline:</h3>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200"></div>
                
                <div className="relative -ml-1">
                  <div className="absolute top-2 left-0 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white"></div>
                  <div className="ml-6 pb-8">
                    <p className="text-sm text-gray-500">Within 5 minutes</p>
                    <p className="font-medium text-gray-900">Confirmation email arrives in your inbox</p>
                  </div>
                </div>
                
                <div className="relative -ml-1">
                  <div className="absolute top-2 left-0 w-3 h-3 bg-blue-400 rounded-full ring-4 ring-white"></div>
                  <div className="ml-6 pb-8">
                    <p className="text-sm text-gray-500">Within 1 hour</p>
                    <p className="font-medium text-gray-900">Our team reviews your request</p>
                  </div>
                </div>
                
                <div className="relative -ml-1">
                  <div className="absolute top-2 left-0 w-3 h-3 bg-orange-500 rounded-full ring-4 ring-white"></div>
                  <div className="ml-6">
                    <p className="text-sm text-gray-500">Within 24 hours</p>
                    <p className="font-medium text-gray-900">A Wall Fix Pros specialist contacts you directly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Notice */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Our Response Commitment
              </h3>
              <p className="text-gray-700">
                Our team will reach out to you within <span className="font-bold text-blue-700">24 business hours</span> to discuss your project details and provide a comprehensive quote.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact Card */}
        <div className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="rounded-full bg-white/20 p-3">
                <PhoneIcon className="h-8 w-8" />
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="text-orange-100 mb-4">
                For emergency drywall repairs or urgent requests, don't wait – call us directly now!
              </p>
              <a
                href="tel:2406701949"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-lg font-semibold text-orange-600 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call (240) 670-1949
              </a>
              <p className="mt-4 text-sm text-orange-100">
                Available 24/7 for emergency services
              </p>
            </div>
          </div>
        </div>

        {/* Additional Actions */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/"
            className="flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-6 py-4 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:border-blue-500 transition-all duration-200"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Return to Homepage
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors duration-200"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Have additional questions? Feel free to email us at{' '}
            <a href="mailto:info@wallfixpros.com" className="text-blue-600 hover:text-blue-700 font-medium">
              info@wallfixpros.com
            </a>
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <p className="mt-1 text-sm text-gray-600">Emergency Service</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <p className="mt-1 text-sm text-gray-600">Satisfaction Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">33+</div>
              <p className="mt-1 text-sm text-gray-600">Cities Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">Licensed</div>
              <p className="mt-1 text-sm text-gray-600">& Insured Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}