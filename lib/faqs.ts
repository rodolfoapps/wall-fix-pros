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
