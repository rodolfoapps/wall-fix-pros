import Link from 'next/link'
import Image from 'next/image'
import servicesData from '@/data/services.json'
import { postBySlug, posts } from '@/lib/posts'
import { serviceImages } from '@/lib/images'
import CTABand from '@/components/CTABand'

/** Related services, two more articles, and the closing CTA. Shared by every post. */
export default function ArticleFooter({ slug }: { slug: string }) {
  const post = postBySlug(slug)
  if (!post) return null
  const related = post.services.map((s) => servicesData[s as keyof typeof servicesData]).filter(Boolean)
  const more = posts.filter((p) => p.slug !== slug).slice(0, 3)
  return (
    <>
      <section className="bg-ink-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Need a hand with this?</p>
          <h2 className="mt-2 section-title">Services related to this article</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}/`} className="group flex gap-5 rounded-xl bg-white p-4 shadow-card ring-1 ring-ink-200 hover:ring-brand-400">
                  <div className="relative h-24 w-32 flex-none overflow-hidden rounded-lg">
                    <Image src={serviceImages[service.slug].card} alt={serviceImages[service.slug].alt} fill sizes="128px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-600">{service.name}</h3>
                    <p className="mt-1 text-sm text-ink-500">{service.shortDescription}</p>
                    <p className="mt-2 text-sm font-semibold text-brand-600">{service.priceRange}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-2xl font-bold text-ink-900">Keep reading</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}/`} className="group block overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-ink-200">
                  <div className="relative aspect-[3/2]">
                    <Image src={p.card} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{p.category}</p>
                    <h3 className="mt-1 font-bold text-ink-900 group-hover:text-brand-600">{p.title}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTABand heading="Describe the damage, get a price" text="Send a photo or a few words. Free written estimate, usually the same day." />
    </>
  )
}
