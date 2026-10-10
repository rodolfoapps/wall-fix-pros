/**
 * Customer reviews shown on the site.
 *
 * Source: the public Google Business Profile of DC Generals (Frederick, MD),
 * the licensed contractor whose crews perform Wall Fix Pros' drywall, ceiling,
 * water-damage and interior repair work. Only five-star reviews that describe
 * interior, drywall, ceiling, water-damage or general service experience are
 * included. Text is quoted from the reviews; trims are marked with an ellipsis.
 *
 * Exported 2026-10-10: 238 reviews, 220 five-star, 4.77 average.
 */

export const reviewSource = {
  business: 'DC Generals',
  businessUrl: 'https://dcgenerals.com',
  platform: 'Google',
  reviewsUrl: 'https://www.google.com/search?q=DC+Generals+Frederick+MD+reviews',
  total: 238,
  fiveStar: 220,
  average: 4.8,
  exportedOn: '2026-10-10',
}

export type Review = {
  name: string
  stars: 5
  text: string
  /** Short label for the kind of work, shown on the card. */
  work: string
  /** Service slugs this review speaks to. Empty means general. */
  services: string[]
  /** City mentioned in the review, when it is one we serve. */
  city?: string
}

export const reviews: Review[] = [
  {
    name: 'Konnie T.',
    stars: 5,
    work: 'Water damage, drywall and paint',
    services: ['drywall-repair', 'water-damage-repair', 'drywall-restoration', 'painting-services', 'drywall-patching'],
    text: 'We also had severe water and mold damage on the inside of our home. The inside crew did a great job fixing the drywall and were even able to match my wall paint perfectly! … I would highly recommend this company for any roofing/home repair needs.',
  },
  {
    name: 'Charly Brandt',
    stars: 5,
    work: 'Ceiling repair and drywall finishing',
    services: ['ceiling-services', 'drywall-taping', 'drywall-repair', 'drywall-texturing'],
    text: 'They also made some repairs to my ceiling. When I had an issue with the drywall finishing they sent another guy out who fixed it perfectly. No fuss. They were friendly and cooperative throughout. Good experience and good quality work.',
  },
  {
    name: 'Dianne Dain',
    stars: 5,
    work: 'Water damage restoration, downtown Frederick',
    services: ['water-damage-repair', 'drywall-restoration', 'drywall-installation'],
    city: 'Frederick',
    text: 'I live in NYC and own a property in downtown Frederick. We had water damage that needed to be repaired and we hired DC Generals Restoration to dry it out and reconstruct it back to normal. Now it looks like nothing happened! They worked with my insurance to make sure both parties were happy and helped to explain and walk me through the process.',
  },
  {
    name: 'Karen Hoover',
    stars: 5,
    work: 'Ceilings repaired after water damage',
    services: ['ceiling-services', 'water-damage-repair', 'drywall-repair'],
    text: 'Very professional, very thorough, very polite! I had my roof redone and several ceilings done to fix water damage. They were on time and did an amazing job with all the damage that had to be fixed. I will definitely be calling them for any other jobs that I have.',
  },
  {
    name: 'Marc M',
    stars: 5,
    work: 'Interior ceiling damage',
    services: ['ceiling-services', 'water-damage-repair'],
    text: 'They made the process so seamless. … The roof looks great and they even took care of the damage to the ceiling inside the home. I highly recommend DC Generals!',
  },
  {
    name: 'Shaowei Li',
    stars: 5,
    work: 'Interior paint after water damage',
    services: ['painting-services', 'water-damage-repair'],
    text: 'Nick provided great help for coordinating the inspection, quotation, shingle selection and installation as well as the interior paint for the water damage. All works completed by the company were excellent. … He always provides different options and strives for the greatest benefit for his customer.',
  },
  {
    name: 'Elizabeth Blandon',
    stars: 5,
    work: 'Interior repair and painting after leaks',
    services: ['water-damage-repair', 'painting-services', 'drywall-repair'],
    text: 'Due to severe storms that hit our area we had roof and siding damage that caused water leaks into our home. DC Generals took care of the entire project including … repair and painting of interior. … We are very happy with our new roof, siding and repairs.',
  },
  {
    name: 'Mary Gray',
    stars: 5,
    work: 'Interior wall repair',
    services: ['drywall-repair', 'drywall-patching'],
    text: 'Awesome service by this company who did all that it took in working with my insurance company for the proper assessment of roof and property damage which resulted in a new roof, interior wall repair, window screen replacements and more. I highly recommend this company!',
  },
  {
    name: 'Harold Lejeune',
    stars: 5,
    work: 'Interior ceiling repair for a rental',
    services: ['ceiling-services'],
    text: 'Great customer service! I own 2 homes in MD but live in Charlotte. Had roofs replaced at both homes without a hitch. They even went the extra mile and are also making a separate trip to one of them to repair interior ceiling in order to accommodate my tenant.',
  },
  {
    name: 'Jasmine Duvall',
    stars: 5,
    work: 'Emergency leak, damage inside',
    services: ['water-damage-repair'],
    text: 'When I first contacted them I was desperate because my roof was leaking and causing damage inside! They immediately came and covered the area so there wasn’t anymore damage until they were able to get to it. … I highly recommend this company.',
  },
  {
    name: 'Nicolas Magud',
    stars: 5,
    work: 'Estimate and general house work',
    services: ['drywall-installation', 'insulation-services', 'drywall-texturing'],
    text: 'The crew is excellent. They work with you on the estimate, and they are never pushy. They are very responsive to questions and to accommodate all your needs. The work is excellent. … I look forward to continue working with them in the future for house work. 100% recommended.',
  },
  {
    name: 'Lynda Pejic',
    stars: 5,
    work: 'Estimate held, punch list done on time',
    services: ['drywall-installation', 'insulation-services', 'drywall-taping'],
    text: 'The team kept to the schedule and actually completed early. The estimate was VERY close to the final invoice amount … something like 1% greater than projected. To me that is GREAT! … We had a long “honey do” list for them and it was kicked out in good time.',
  },
  {
    name: 'Melissa Southward',
    stars: 5,
    work: 'Same-day leak response',
    services: ['water-damage-repair', 'drywall-patching'],
    text: 'Called for a roof leak. They picked up right away and sent someone immediately. He was extremely professional and down to earth. … Fixed the problem right away. Was in and out in no time. Will definitely use them again.',
  },
  {
    name: 'The Sanyal Family',
    stars: 5,
    work: 'Home improvement contractor',
    services: [],
    text: 'The best experience we have had with a home improvement contractor ever. High quality work, great professionalism, no stupid marketing gimmicks. A pleasure to deal with.',
  },
  {
    name: 'David Bozak',
    stars: 5,
    work: 'Clean, careful crew',
    services: ['drywall-installation', 'drywall-texturing', 'insulation-services'],
    text: 'DCG team started early; covered existing landscaping; brought in dumpster, person dedicated to constant clean-up; friendly, watched for us entering or leaving house; multiple workers, each used own tools for their work specialties; professional team, quality work.',
  },
]

/**
 * Pick reviews for a page. Reviews tagged with the service come first, then
 * general ones, so every service page gets a full set without repeats.
 */
export function reviewsFor(service?: string, limit = 3): Review[] {
  if (!service) return reviews.slice(0, limit)
  const tagged = reviews.filter((r) => r.services.includes(service))
  const rest = reviews.filter((r) => !r.services.includes(service))
  return [...tagged, ...rest].slice(0, limit)
}
