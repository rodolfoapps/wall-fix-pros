import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { posts } from '@/lib/posts'
import PageHero from '@/components/PageHero'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/' },
  title: 'Drywall Expert Blog: Tips & Guides',
  description: 'Practical drywall advice from Wall Fix Pros: repair costs, water damage, texture matching, seasonal maintenance and when to patch versus replace. Written for Maryland, Virginia and Pennsylvania homeowners.',
}

export default function BlogPage() {
  const [lead, ...rest] = posts
  return (
    <div className="bg-white">
      <PageHero
        src={lead.image}
        alt={lead.alt}
        eyebrow={<span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Latest</span>}
        title={<Link href={`/blog/${lead.slug}/`} className="hover:underline">{lead.title}</Link>}
        subtitle={lead.excerpt}
      >
        <Link href={`/blog/${lead.slug}/`} className="btn-primary">Read the article</Link>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="eyebrow">Guides</p>
        <h1 className="mt-2 section-title">Drywall advice from the people who fix it</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-600">
          What things cost, what can wait, what cannot, and how to tell the difference. No fluff.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-ink-200 hover:ring-brand-400">
                <div className="relative aspect-[3/2]">
                  <Image src={post.card} alt={post.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{post.category}</p>
                  <h2 className="mt-2 text-xl font-bold text-ink-900 group-hover:text-brand-600">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-ink-500">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-ink-400">
                    <time dateTime={post.date}>{post.dateDisplay}</time> · {post.readTime}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTABand heading="Reading about it is free. So is the estimate." />
    </div>
  )
}
