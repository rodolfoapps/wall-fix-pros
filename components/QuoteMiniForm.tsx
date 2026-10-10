'use client'

import { useState, type FormEvent } from 'react'
import servicesData from '@/data/services.json'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/seo'

interface Props {
  /** Pre-select a service (slug) */
  defaultService?: string
  /** Where the form lives, sent along with the lead ("Drywall Repair in Frederick, MD") */
  context?: string
  title?: string
  className?: string
}

const services = Object.values(servicesData).map((s) => ({ slug: s.slug, name: s.name }))

/**
 * Four-field estimate request that posts to the existing /api/quote route.
 * Short on purpose: name, phone, email, service. Everything else is optional.
 */
export default function QuoteMiniForm({ defaultService, context, title = 'Get a free estimate', className = '' }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const [firstName, ...rest] = name.split(/\s+/)
    setStatus('sending')
    try {
      const res = await fetch('/api/quote/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName || name,
          lastName: rest.join(' ') || '-',
          email: data.get('email'),
          phone: data.get('phone'),
          address: data.get('zip') ? `ZIP ${data.get('zip')}` : 'Not provided',
          service: services.find((s) => s.slug === data.get('service'))?.name || data.get('service'),
          description: `Quick estimate request${context ? ` from: ${context}` : ''}. ${data.get('notes') || ''}`.trim(),
          company: data.get('company'), // honeypot
        }),
      })
      const json = await res.json()
      setStatus(res.ok && json.success ? 'done' : 'error')
      if (res.ok && json.success) form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className={`rounded-xl bg-white p-6 shadow-card ring-1 ring-ink-200 ${className}`}>
        <p className="font-heading text-2xl font-bold text-ink-900">Thanks, we got it.</p>
        <p className="mt-2 text-ink-600">
          We will call you within one business hour to schedule your free estimate. Need it faster?{' '}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-brand-600">
            Call {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-xl bg-white p-5 shadow-card ring-1 ring-ink-200 sm:p-6 ${className}`}>
      <p className="font-heading text-2xl font-bold text-ink-900">{title}</p>
      <p className="mt-1 text-sm text-ink-500">Takes 30 seconds. We reply within one business hour.</p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="sr-only">Your name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className="w-full rounded-md border-ink-300 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-brand-500" />
        </label>
        <label className="block">
          <span className="sr-only">Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="Phone" className="w-full rounded-md border-ink-300 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-brand-500" />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email" className="w-full rounded-md border-ink-300 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-brand-500" />
        </label>
        <label className="block">
          <span className="sr-only">Service needed</span>
          <select name="service" defaultValue={defaultService || ''} required className="w-full rounded-md border-ink-300 text-ink-900 focus:border-brand-500 focus:ring-brand-500">
            <option value="" disabled>
              Service needed
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="sr-only">ZIP code</span>
          <input name="zip" inputMode="numeric" autoComplete="postal-code" placeholder="ZIP code" className="w-full rounded-md border-ink-300 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-brand-500" />
        </label>
        {/* Honeypot: real users never see or fill this */}
        <div className="hidden" aria-hidden="true">
          <label>
            Company <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-primary mt-4 w-full disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Request my free estimate'}
      </button>
      {status === 'error' && (
        <p className="mt-3 text-sm text-brand-600">
          Something went wrong. Please call{' '}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      )}
      <p className="mt-3 text-xs text-ink-400">No obligation. We never share your information.</p>
    </form>
  )
}
