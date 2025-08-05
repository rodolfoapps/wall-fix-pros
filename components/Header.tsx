'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg relative z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-blue-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl font-bold text-blue-700 select-none">
                Wall Fix Pros
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer transition-colors duration-200 select-none"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact info and CTA */}
          <div className="ml-10 hidden items-center space-x-4 lg:flex">
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-orange-500" />
              <a 
                href="tel:+13015550199" 
                className="ml-2 text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer transition-colors duration-200"
              >
                (301) 555-0199
              </a>
            </div>
            <Link
              href="/quote"
              className="inline-flex items-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-600 cursor-pointer transition-colors duration-200 select-none"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="py-4 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-orange-500" />
              <a 
                href="tel:+13015550199" 
                className="ml-2 text-sm font-medium text-gray-900 cursor-pointer hover:text-blue-600 transition-colors duration-200"
              >
                (301) 555-0199
              </a>
            </div>
            <Link
              href="/quote"
              className="inline-flex items-center rounded-md border border-transparent bg-orange-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 cursor-pointer transition-colors duration-200 select-none"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link 
                href="/" 
                className="-m-1.5 p-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl font-bold text-blue-700 select-none">
                  Wall Fix Pros
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer transition-colors duration-200 select-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}