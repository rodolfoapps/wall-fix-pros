import Image from 'next/image'
import type { ReactNode } from 'react'

interface PageHeroProps {
  src: string
  alt: string
  title: ReactNode
  subtitle?: ReactNode
  /** Small label rendered above the title (badge, location line, etc.) */
  eyebrow?: ReactNode
  /** Rendered below the subtitle: CTAs, meta rows */
  children?: ReactNode
  /** Set on the first hero of the page so the browser fetches it early */
  priority?: boolean
  /** 'left' for text-heavy pages, 'center' for landing-style pages */
  align?: 'left' | 'center'
  /** 'tall' adds vertical room for landing-page heroes */
  size?: 'default' | 'tall'
  /** Rendered in a right-hand column on large screens (estimate form, contact card) */
  aside?: ReactNode
  className?: string
}

/**
 * Full-width photographic hero with a dark gradient so white text stays readable
 * over any image. Used by service, location, and company pages.
 */
export default function PageHero({
  src,
  alt,
  title,
  subtitle,
  eyebrow,
  children,
  priority = true,
  align = 'left',
  size = 'default',
  aside,
  className = '',
}: PageHeroProps) {
  const centered = align === 'center'
  const padding = size === 'tall' ? 'py-28 sm:py-40 lg:py-48' : 'py-24 sm:py-32'
  return (
    <section className={`relative isolate overflow-hidden bg-ink-900 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        quality={80}
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-900/75 to-ink-900/40"
        aria-hidden="true"
      />
      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${padding} ${
          centered ? 'text-center' : ''
        } ${aside ? 'grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center' : ''}`}
      >
        <div>
        {eyebrow && (
          <div className={`mb-4 flex items-center gap-3 text-ink-200 ${centered ? 'justify-center' : ''}`}>
            {eyebrow}
          </div>
        )}
        <h1 className={`max-w-4xl text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl ${centered ? 'mx-auto' : ''}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-6 max-w-3xl text-lg leading-8 text-ink-100 sm:text-xl ${centered ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
        </div>
        {aside && <div className="w-full">{aside}</div>}
      </div>
    </section>
  )
}
