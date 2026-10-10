import { StarIcon } from '@heroicons/react/24/solid'
import { reviewSource, reviewsFor, type Review } from '@/lib/reviews'

type Props = {
  heading?: string
  intro?: string
  /** Service slug to prioritise reviews for. */
  service?: string
  limit?: number
  /** Light (default) or dark background. */
  tone?: 'light' | 'dark'
}

function Stars({ count = 5, className = 'h-4 w-4' }: { count?: number; className?: string }) {
  return (
    <span className="flex items-center gap-0.5 text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className={className} aria-hidden="true" />
      ))}
    </span>
  )
}

function GoogleBadge({ dark }: { dark: boolean }) {
  return (
    <a
      href={reviewSource.reviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full px-4 py-2 ring-1 ${dark ? 'bg-white/10 ring-white/20 hover:bg-white/15' : 'bg-white ring-ink-200 shadow-card hover:ring-ink-300'}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-ink-200" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-4 w-4">
          <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4Z" />
          <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
          <path fill="#FBBC05" d="M6.4 14a6 6 0 0 1 0-3.9V7.4H3.1a10 10 0 0 0 0 9.1L6.4 14Z" />
          <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.3 3-4 5.6-4Z" />
        </svg>
      </span>
      <span className="flex items-center gap-2 text-sm">
        <span className={`font-heading text-lg font-bold ${dark ? 'text-white' : 'text-ink-900'}`}>{reviewSource.average.toFixed(1)}</span>
        <Stars />
        <span className={dark ? 'text-ink-200' : 'text-ink-600'}>{reviewSource.total} Google reviews</span>
      </span>
    </a>
  )
}

function ReviewCard({ review, dark }: { review: Review; dark: boolean }) {
  return (
    <li className={`flex flex-col rounded-2xl p-6 ring-1 ${dark ? 'bg-ink-800 ring-white/10' : 'bg-white ring-ink-200 shadow-card'}`}>
      <div className="flex items-center justify-between gap-3">
        <Stars />
        <span className={`text-xs font-semibold uppercase tracking-wide ${dark ? 'text-brand-400' : 'text-brand-600'}`}>{review.work}</span>
      </div>
      <blockquote className={`mt-4 flex-1 text-base leading-relaxed ${dark ? 'text-ink-100' : 'text-ink-700'}`}>
        “{review.text}”
      </blockquote>
      <footer className={`mt-5 flex items-center gap-3 border-t pt-4 text-sm ${dark ? 'border-white/10' : 'border-ink-100'}`}>
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-heading text-base font-bold ${dark ? 'bg-brand-500 text-white' : 'bg-ink-900 text-white'}`} aria-hidden="true">
          {review.name.charAt(0)}
        </span>
        <div>
          <p className={`font-semibold ${dark ? 'text-white' : 'text-ink-900'}`}>{review.name}</p>
          <p className={dark ? 'text-ink-300' : 'text-ink-500'}>Google review{review.city ? ` · ${review.city}` : ''}</p>
        </div>
      </footer>
    </li>
  )
}

export default function Reviews({
  heading = 'What customers say about the crew',
  intro = 'Our drywall, ceiling and water-damage work is performed by the crews of DC Generals, a Frederick contractor with more than two hundred five-star Google reviews. These are theirs.',
  service,
  limit = 3,
  tone = 'light',
}: Props) {
  const dark = tone === 'dark'
  const items = reviewsFor(service, limit)
  return (
    <section className={dark ? 'bg-ink-900 text-white' : 'bg-ink-50'} aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className={`eyebrow ${dark ? 'text-brand-400' : ''}`}>Reviews</p>
            <h2 id="reviews-heading" className={`mt-2 ${dark ? 'text-3xl font-bold sm:text-4xl' : 'section-title'}`}>{heading}</h2>
            <p className={`mt-4 text-lg ${dark ? 'text-ink-200' : 'text-ink-600'}`}>{intro}</p>
          </div>
          <GoogleBadge dark={dark} />
        </div>
        <ul className={`mt-10 grid gap-6 md:grid-cols-2 ${items.length >= 3 ? 'lg:grid-cols-3' : ''}`}>
          {items.map((r) => (
            <ReviewCard key={r.name} review={r} dark={dark} />
          ))}
        </ul>
        <p className={`mt-6 text-sm ${dark ? 'text-ink-400' : 'text-ink-500'}`}>
          Reviews are quoted from the public Google Business Profile of{' '}
          <a href={reviewSource.businessUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-ink-300 underline-offset-2 hover:text-brand-600">
            {reviewSource.business}
          </a>
          , the licensed contractor that performs Wall Fix Pros jobs. Rating and count as of {new Date(reviewSource.exportedOn + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
        </p>
      </div>
    </section>
  )
}
