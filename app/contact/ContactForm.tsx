'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    serviceType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        // Redirect to thank you page on success
        router.push('/thank-you')
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Ready to start your drywall project? Contact us for a free estimate or consultation.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            {/* Contact information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get in touch with our team for professional drywall services across the DMV area.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <MapPinIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    4580 Mack Ave Suite<br />
                    Frederick, MD 21703
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="tel:+12406701949">
                      (240) 670-1949
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="mailto:info@wallfixpros.com">
                      info@wallfixpros.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Hours</span>
                    <ClockIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    Mon-Fri: 7:00 AM - 7:00 PM<br />
                    Sat: 8:00 AM - 6:00 PM<br />
                    Sun: 9:00 AM - 5:00 PM<br />
                    <span className="font-semibold text-orange-600">24/7 Emergency Service</span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="location" className="block text-sm font-semibold leading-6 text-gray-900">
                      Location
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="City, State"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="serviceType" className="block text-sm font-semibold leading-6 text-gray-900">
                      Service Type
                    </label>
                    <div className="mt-2.5">
                      <select
                        name="serviceType"
                        id="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option value="">Select a service</option>
                        <option value="drywall-installation">Drywall Installation</option>
                        <option value="drywall-repair">Drywall Repair</option>
                        <option value="drywall-patching">Drywall Patching</option>
                        <option value="drywall-taping">Drywall Taping</option>
                        <option value="drywall-texturing">Drywall Texturing</option>
                        <option value="water-damage-repair">Water Damage Repair</option>
                        <option value="ceiling-services">Ceiling Services</option>
                        <option value="painting-services">Painting Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                
                {submitStatus.type && (
                  <div className={`mt-4 p-4 rounded-md ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}