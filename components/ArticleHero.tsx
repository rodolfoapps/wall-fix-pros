import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'
import { postBySlug } from '@/lib/posts'
import { SITE_URL } from '@/lib/seo'

/** Photographic article header with BlogPosting structured data. */
export default function ArticleHero({ slug }: { slug: string }) {
  const post = postBySlug(slug)
  if (!post) return null
  return (
    <>
      <header className="relative isolate overflow-hidden bg-ink-900">
        <Image src={post.image} alt={post.alt} fill priority sizes="100vw" quality={80} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-900/70 to-ink-900/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-40 sm:px-6 sm:pt-56 lg:px-8">
          <nav className="mb-4 text-sm text-ink-300" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden="true">/</span>{' '}
            <Link href="/blog/" className="hover:text-white">Blog</Link>
          </nav>
          <span className="inline-block rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">{post.category}</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{post.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-ink-100">{post.intro}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-200">
            <span className="flex items-center"><UserIcon className="mr-2 h-4 w-4" />Wall Fix Pros</span>
            <span className="flex items-center"><CalendarIcon className="mr-2 h-4 w-4" /><time dateTime={post.date}>{post.dateDisplay}</time></span>
            <span className="flex items-center"><ClockIcon className="mr-2 h-4 w-4" />{post.readTime}</span>
          </div>
        </div>
      </header>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.h1,
            description: post.excerpt,
            image: `${SITE_URL}${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: { '@type': 'Organization', name: 'Wall Fix Pros', url: SITE_URL },
            publisher: { '@type': 'Organization', name: 'Wall Fix Pros', logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/Assets/Logo-WALL-FIX-PRO.webp` } },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
          }),
        }}
      />
    </>
  )
}
