import type { FaqItem } from '@/components/FAQ'

export const generalFaqs: FaqItem[] = [
  {
    q: 'How much does drywall repair cost?',
    a: 'Most single-room repairs run $150 to $500 depending on the size of the damage and whether texture matching is needed. Larger water-damage or ceiling jobs are quoted on site. Every estimate is free and in writing.',
  },
  {
    q: 'How fast can you get here?',
    a: 'Frederick, MD is our home base, so we can usually be on site the same day. Elsewhere in Maryland, Northern Virginia, the Eastern Panhandle and south-central Pennsylvania we typically schedule within 24 to 48 hours.',
  },
  {
    q: 'Will the repair be visible?',
    a: 'No. We feather the compound well past the damage, match the existing texture, and prime the patch so paint covers evenly. If you have leftover paint we will blend it in; otherwise we tell you exactly what to buy.',
  },
  {
    q: 'Do you handle water damage?',
    a: 'Yes. We cut out saturated drywall, check the cavity is dry, replace insulation if needed and rebuild the section. If the leak is not fixed yet we will tell you so you do not pay twice.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We carry general liability and workers compensation coverage and can send certificates before the job starts.',
  },
]

/** Service-specific answers built from the service data so each hub page has unique FAQ content. */
export function serviceFaqs(service: { name: string; priceRange: string; timeline: string; warranty: string }, city?: string): FaqItem[] {
  const where = city ? ` in ${city}` : ''
  const lower = service.name.toLowerCase()
  return [
    {
      q: `How much does ${lower} cost${where}?`,
      a: `Typical ${lower} projects${where} run ${service.priceRange}. The exact price depends on the size of the area and the finish required. We confirm it in a free written estimate before starting.`,
    },
    {
      q: `How long does ${lower} take?`,
      a: `Most ${lower} jobs take ${service.timeline.toLowerCase()}, including drying time between coats where needed. We tell you the schedule up front so you can plan around it.`,
    },
    {
      q: `Is your ${lower} work guaranteed?`,
      a: `Yes. ${service.name} comes with a ${service.warranty.toLowerCase()}. If a seam cracks or a patch telegraphs through, we come back and make it right.`,
    },
    {
      q: `Do I need to prepare the room${where}?`,
      a: 'Just clear a path and move small items off the wall. We cover floors and furniture, control dust with sanders that vacuum as they go, and clean up before we leave.',
    },
  ]
}

/** Location FAQs: same questions a homeowner in that city would ask, answered for that city. */
export function locationFaqs(place: string, opts: { headquarters?: boolean; responseTime?: string } = {}): FaqItem[] {
  const arrive = opts.headquarters
    ? `${place} is our home base, so we are usually on site the same day and within the hour for emergencies.`
    : `We typically schedule ${place} within 24 to 48 hours${opts.responseTime ? `, with a usual response time of ${opts.responseTime.toLowerCase()}` : ''}. Active leaks and ceiling sags are treated as same-day.`
  return [
    { q: `How soon can you get to ${place}?`, a: arrive },
    { q: `Do you charge extra to come out to ${place}?`, a: `No. There is no travel fee anywhere in our service area, and the estimate itself is free. The written price covers the whole job.` },
    { q: `What drywall work do you do in ${place}?`, a: `Everything from a single hole to a full basement: repair, patching, taping and finishing, texture matching, ceilings, water damage, insulation and painting. Residential and light commercial.` },
    { q: `Are you licensed and insured to work in ${place}?`, a: `Yes. We carry general liability and workers compensation coverage and provide certificates before work starts.` },
    { q: `Can I get a price without a visit?`, a: `Often, yes. Send a photo of the damage with a rough size and we will give you a range the same day. Larger jobs get a free on-site estimate so the number is firm.` },
  ]
}
