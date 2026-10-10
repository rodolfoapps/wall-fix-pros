export interface FaqItem {
  q: string
  a: string
}

interface Props {
  items: FaqItem[]
  heading?: string
  /** Emit FAQPage structured data (one per page) */
  schema?: boolean
}

/** Native <details> accordion: no client JS, accessible, and the answers are in the HTML for search engines. */
export default function FAQ({ items, heading = 'Questions homeowners ask us', schema = true }: Props) {
  return (
    <section className="bg-ink-50">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-2 section-title">{heading}</h2>
        <div className="mt-10 divide-y divide-ink-200 rounded-xl bg-white ring-1 ring-ink-200">
          {items.map((item) => (
            <details key={item.q} className="group px-5 py-4 open:bg-ink-50/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink-900">
                {item.q}
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ink-100 text-ink-700 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map((i) => ({
                '@type': 'Question',
                name: i.q,
                acceptedAnswer: { '@type': 'Answer', text: i.a },
              })),
            }),
          }}
        />
      )}
    </section>
  )
}
