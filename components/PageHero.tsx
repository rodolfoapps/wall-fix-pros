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
  className = '',
}: PageHeroProps) {
  const centered = align === 'center'
  const padding = size === 'tall' ? 'py-28 sm:py-40 lg:py-48' : 'py-24 sm:py-32'
  return (
    <section className={`relative isolate overflow-hidden bg-brand-blue-900 ${className}`}>
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
        className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/90 via-brand-blue-900/70 to-brand-blue-900/30"
        aria-hidden="true"
      />
      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${padding} ${
          centered ? 'text-center' : ''
        }`}
      >
        {eyebrow && (
          <div className={`mb-4 flex items-center gap-3 text-blue-100 ${centered ? 'justify-center' : ''}`}>
            {eyebrow}
          </div>
        )}
        <h1 className={`max-w-4xl text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl ${centered ? 'mx-auto' : ''}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-6 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl ${centered ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
