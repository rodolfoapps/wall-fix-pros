import { StarIcon } from '@heroicons/react/24/solid'
import { reviewSource, reviewsFor, type Review } from '@/lib/reviews'

type Props = {
  heading?: string
  intro?: string
  /** Service slug to prioritise reviews for. */
  service?: string
  /** Total reviews shown: one featured plus the rest in a grid. */
  limit?: number
  tone?: 'light' | 'dark'
}

function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={className} aria-hidden="true" />
      ))}
    </span>
  )
}

function GoogleG({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4Z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.4 14a6 6 0 0 1 0-3.9V7.4H3.1a10 10 0 0 0 0 9.1L6.4 14Z" />
      <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.3 3-4 5.6-4Z" />
    </svg>
  )
}

function Attribution({ review, dark }: { review: Review; dark: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
      <span className={`font-semibold ${dark ? 'text-white' : 'text-ink-900'}`}>{review.name}</span>
      <span className={dark ? 'text-ink-400' : 'text-ink-400'} aria-hidden="true">·</span>
      <span className={`inline-flex items-center gap-1.5 ${dark ? 'text-ink-300' : 'text-ink-500'}`}>
        <GoogleG className="h-3.5 w-3.5" />
        Google review{review.city ? `, ${review.city}` : ''}
      </span>
    </div>
  )
}

function Featured({ review, dark }: { review: Review; dark: boolean }) {
  return (
    <figure className={`relative border-l-4 pl-6 sm:pl-8 ${dark ? 'border-brand-500' : 'border-brand-500'}`}>
      <Stars className="h-5 w-5" />
      <blockquote className={`mt-4 font-heading text-2xl font-semibold leading-snug sm:text-3xl ${dark ? 'text-white' : 'text-ink-900'}`}>
        {review.text}
      </blockquote>
      <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <Attribution review={review} dark={dark} />
        <span className={`text-sm ${dark ? 'text-ink-400' : 'text-ink-500'}`}>{review.work}</span>
      </figcaption>
    </figure>
  )
}

function Card({ review, dark }: { review: Review; dark: boolean }) {
  return (
    <figure className={`rounded-xl p-5 ring-1 ${dark ? 'bg-ink-800/60 ring-white/10' : 'bg-white ring-ink-200'}`}>
      <div className="flex items-center justify-between gap-3">
        <Stars />
        <span className={`truncate text-xs ${dark ? 'text-ink-400' : 'text-ink-500'}`}>{review.work}</span>
      </div>
      <blockquote className={`mt-3 text-[15px] leading-relaxed ${dark ? 'text-ink-100' : 'text-ink-700'}`}>{review.text}</blockquote>
      <figcaption className="mt-4">
        <Attribution review={review} dark={dark} />
      </figcaption>
    </figure>
  )
}

export default function Reviews({
  heading = 'What customers say',
  intro = `The crews on Wall Fix Pros jobs work under DC Generals, a Frederick contractor with ${reviewSource.total} Google reviews and a ${reviewSource.average.toFixed(1)} rating. These are the ones about drywall, ceilings and water damage.`,
  service,
  limit = 3,
  tone = 'light',
}: Props) {
  const dark = tone === 'dark'
  const [featured, ...rest] = reviewsFor(service, limit)
  if (!featured) return null
  return (
    <section className={dark ? 'bg-ink-900 text-white' : 'bg-ink-50'} aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading, rating, link */}
          <div className="lg:col-span-4">
            <p className={`eyebrow ${dark ? 'text-brand-400' : ''}`}>Reviews</p>
            <h2 id="reviews-heading" className={`mt-2 ${dark ? 'text-3xl font-bold sm:text-4xl' : 'section-title'}`}>{heading}</h2>
            <p className={`mt-4 text-lg ${dark ? 'text-ink-200' : 'text-ink-600'}`}>{intro}</p>

            <div className={`mt-8 flex items-center gap-4 border-t pt-6 ${dark ? 'border-white/10' : 'border-ink-200'}`}>
              <span className={`font-heading text-5xl font-bold leading-none ${dark ? 'text-white' : 'text-ink-900'}`}>{reviewSource.average.toFixed(1)}</span>
              <div>
                <Stars className="h-5 w-5" />
                <p className={`mt-1 text-sm ${dark ? 'text-ink-300' : 'text-ink-600'}`}>
                  {reviewSource.fiveStar} five-star of {reviewSource.total} reviews
                </p>
              </div>
            </div>
            <a
              href={reviewSource.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${dark ? 'text-white hover:text-brand-400' : 'text-ink-900 hover:text-brand-600'}`}
            >
              <GoogleG />
              Read all {reviewSource.total} on Google
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right: featured quote plus the rest */}
          <div className="lg:col-span-8">
            <Featured review={featured} dark={dark} />
            {rest.length > 0 && (
              <div className={`mt-10 grid gap-4 ${rest.length > 1 ? 'md:grid-cols-2' : ''}`}>
                {rest.map((r) => (
                  <Card key={r.name} review={r} dark={dark} />
                ))}
              </div>
            )}
          </div>
        </div>

        <p className={`mt-12 text-xs ${dark ? 'text-ink-500' : 'text-ink-400'}`}>
          Quoted from the public Google Business Profile of{' '}
          <a href={reviewSource.businessUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            {reviewSource.business}
          </a>
          , the licensed contractor that performs Wall Fix Pros work. Rating and count as of{' '}
          {new Date(reviewSource.exportedOn + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
        </p>
      </div>
    </section>
  )
}
