import Link from 'next/link'
import type { Metadata } from 'next'
import servicesData from '@/data/services.json'
import ServiceIcon from '@/components/ServiceIcon'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  const services = Object.values(servicesData).slice(0, 5)
  return (
    <div className="bg-white">
      <section className="bg-ink-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="eyebrow text-brand-400">404</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">That page has a hole in it.</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-200">
            The page you were looking for moved or never existed. Walls we can fix. Links, we just redirect.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="btn-primary">Back to the homepage</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn-ghost-light">Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="section-title">Looking for one of these?</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <li key={service.slug}>
              <Link href={`/services/${service.slug}/`} className="group flex h-full flex-col rounded-xl bg-white p-5 shadow-card ring-1 ring-ink-200 hover:ring-brand-400">
                <ServiceIcon slug={service.slug} size={48} />
                <span className="mt-3 font-bold text-ink-900 group-hover:text-brand-600">{service.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-ink-600">
          Or browse <Link href="/services/" className="font-semibold text-brand-600">all services</Link>,{' '}
          <Link href="/locations/" className="font-semibold text-brand-600">service areas</Link>, or the{' '}
          <Link href="/blog/" className="font-semibold text-brand-600">blog</Link>.
        </p>
      </section>
    </div>
  )
}
