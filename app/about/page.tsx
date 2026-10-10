import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/outline'
import locationsData from '@/data/locations.json'
import { aboutHero, serviceImages, stateImages } from '@/lib/images'
import { generalFaqs } from '@/lib/faqs'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import TrustBar from '@/components/TrustBar'
import ProcessSteps from '@/components/ProcessSteps'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  alternates: { canonical: '/about/' },
  title: 'About Us | Professional Drywall Repair Experts',
  description: 'Wall Fix Pros is a Frederick, MD drywall contractor serving Maryland, Virginia, West Virginia and Pennsylvania since 2015. How we work, what we promise, and where we go.',
}

const promises = [
  { title: 'A written estimate before any work', text: 'Scope, price and schedule on paper. If we open a wall and find more, we stop and show you before the number changes.' },
  { title: 'Repairs that match, not just fill', text: 'Texture, sheen and edge feathering are matched to the existing wall. If you can find the patch afterwards, we come back.' },
  { title: 'Straight advice on patch vs. replace', text: 'We would rather do a $200 patch that holds than sell a wall you do not need. Soft, wet or moldy board, we tell you.' },
  { title: 'Dust control and clean-up', text: 'Floors and furniture covered, sanders with vacuum extraction, scrap hauled out. The room is yours again the same day.' },
  { title: 'Licensed and insured', text: 'General liability and workers compensation coverage, certificates sent before the first visit when you ask.' },
  { title: 'Workmanship warranty on every job', text: 'Three to five years depending on the service. A seam that cracks or a patch that telegraphs through is on us.' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        src={aboutHero.hero}
        alt={aboutHero.alt}
        eyebrow={<span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/20">Frederick, MD · Since 2015</span>}
        title="A drywall crew that treats your house like the job it is"
        subtitle="Wall Fix Pros is a Frederick-based drywall and wall repair contractor. One crew, four states, and the same standard whether it is a nail pop or a whole basement."
      >
        <a href={`tel:${PHONE_TEL}`} className="btn-primary">Call {PHONE_DISPLAY}</a>
      </PageHero>

      <TrustBar />

      {/* Story + photo */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-2 section-title">Started on nail pops. Grew on word of mouth.</h2>
            <div className="mt-6 space-y-5 text-lg text-ink-600">
              <p>
                Wall Fix Pros started in Frederick, Maryland in 2015 doing the jobs bigger contractors did not want: a hole behind a door, a cracked seam above a window, a ceiling stain from a bathroom upstairs. Doing those well, and cleaning up afterwards, is how we got the next call.
              </p>
              <p>
                Today we handle everything from a single patch to full basement build-outs and water-damage rebuilds, across 33 cities in Maryland, Virginia, West Virginia and Pennsylvania. Frederick is still home base, which is why it gets our fastest response.
              </p>
              <p>
                The approach has not changed. Figure out why the wall failed, fix the cause, match the finish, and leave the room cleaner than we found it.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
            <Image src={serviceImages['drywall-taping'].hero} alt={serviceImages['drywall-taping'].alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="eyebrow">What you can hold us to</p>
          <h2 className="mt-2 section-title">Six things every customer gets</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {promises.map((p) => (
              <li key={p.title} className="rounded-xl bg-white p-6 shadow-card ring-1 ring-ink-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
                  <CheckIcon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-ink-600">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps heading="How a job with us goes" intro="The same four steps whether you call about a doorknob hole or a flooded basement." />

      {/* Where we work */}
      <section className="bg-ink-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-brand-400">Where we work</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Based in Frederick, on the road across four states</h2>
            </div>
            <Link href="/locations/" className="text-sm font-semibold text-ink-200 hover:text-white">All 33 cities <span aria-hidden="true">→</span></Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(locationsData.states).map(([slug, state]) => (
              <li key={slug}>
                <Link href={`/locations/${slug}/`} className="group block overflow-hidden rounded-xl bg-ink-800 ring-1 ring-white/10">
                  <div className="relative aspect-[3/2]">
                    <Image src={stateImages[slug].card} alt={stateImages[slug].alt} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{state.name}</h3>
                    <p className="text-sm text-ink-300">{state.cities.length} cities</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ items={generalFaqs} />

      <CTABand heading="Want to see if we are the right fit?" text="Send a photo of the problem. We will tell you what it needs, what it costs, and whether it is worth doing." />
    </div>
  )
}
