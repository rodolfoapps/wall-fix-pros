import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/seo'

interface Props {
  heading?: string
  text?: string
}

export default function CTABand({ heading = 'Ready to fix that wall?', text = 'Free estimate, clear pricing, and a repair you will not be able to find afterwards.' }: Props) {
  return (
    <section className="bg-brand-600">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-2xl text-lg text-red-100">{text}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/quote/" className="btn-light">
            Get a free estimate
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn-ghost-light">
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
