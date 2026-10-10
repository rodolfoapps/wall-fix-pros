import Image from 'next/image'

const items = [
  { icon: '/images/icons/trust-licensed-insured.webp', alt: 'Licensed and insured icon', title: 'Licensed & insured', text: 'Certificates available on request' },
  { icon: '/images/icons/trust-free-estimates.webp', alt: 'Free written estimate icon', title: 'Free estimates', text: 'Clear pricing before any work starts' },
  { icon: '/images/icons/trust-warranty.webp', alt: 'Workmanship warranty icon', title: 'Workmanship warranty', text: 'Repairs that blend in and stay put' },
  { icon: '/images/icons/trust-fast-response.webp', alt: 'Fast response icon', title: 'Fast response', text: 'Same-day emergency service in Frederick' },
]

export default function TrustBar({ className = '' }: { className?: string }) {
  return (
    <section className={`border-y border-ink-200 bg-ink-50 ${className}`} aria-label="Why homeowners choose us">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon, alt, title, text }) => (
          <li key={title} className="flex items-start gap-3">
            <Image src={icon} alt={alt} width={44} height={44} className="h-11 w-11 flex-none rounded-lg" />
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
