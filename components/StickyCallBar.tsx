import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/seo'

/** Fixed bottom bar on phones: the two actions that turn a visit into a lead. */
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink-200 bg-white/95 p-2 backdrop-blur md:hidden">
      <a href={`tel:${PHONE_TEL}`} className="btn-outline whitespace-nowrap py-3 text-sm">
        <PhoneIcon className="h-4 w-4 text-brand-500" aria-hidden="true" />
        {PHONE_DISPLAY}
      </a>
      <Link href="/quote/" className="btn-primary py-3 text-sm">
        Free Estimate
      </Link>
    </div>
  )
}
