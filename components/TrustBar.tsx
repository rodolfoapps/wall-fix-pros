import { ShieldCheckIcon, CurrencyDollarIcon, ClockIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const items = [
  { icon: ShieldCheckIcon, title: 'Licensed & insured', text: 'Certificates available on request' },
  { icon: CurrencyDollarIcon, title: 'Free estimates', text: 'Clear pricing before any work starts' },
  { icon: WrenchScrewdriverIcon, title: 'Workmanship warranty', text: 'Repairs that blend in and stay put' },
  { icon: ClockIcon, title: 'Fast response', text: 'Same-day emergency service in Frederick' },
]

export default function TrustBar({ className = '' }: { className?: string }) {
  return (
    <section className={`border-y border-ink-200 bg-ink-50 ${className}`} aria-label="Why homeowners choose us">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-start gap-3">
            <Icon className="mt-0.5 h-6 w-6 flex-none text-brand-500" aria-hidden="true" />
            <div>
              <p className="font-semibold text-ink-900">{title}</p>
              <p className="text-sm text-ink-500">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
