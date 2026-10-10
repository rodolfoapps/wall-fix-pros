/**
 * Central registry of site imagery. Every image is a WebP generated for Wall Fix Pros,
 * with copyright and keyword metadata embedded in the file (see scripts/process-images.js).
 *
 * Alt text is written for the search terms each page targets ("drywall repair", "ceiling repair",
 * "drywall contractors"), and the location-specific helper appends the city so the 330
 * service+city pages each get a unique, relevant alt attribute.
 */

export interface SiteImage {
  /** Full-width hero, 1920x1080 */
  hero: string
  /** Card / thumbnail crop, 900x600 */
  card: string
  /** Keyword-targeted alt text */
  alt: string
}

export const serviceImages: Record<string, SiteImage> = {
  'drywall-installation': {
    hero: '/images/services/drywall-installation-hero.webp',
    card: '/images/services/drywall-installation-card.webp',
    alt: 'Drywall installation contractors hanging new gypsum board on wood framing in a new-construction room',
  },
  'drywall-repair': {
    hero: '/images/services/drywall-repair-hero.webp',
    card: '/images/services/drywall-repair-card.webp',
    alt: 'Drywall repair contractor smoothing joint compound over a patched hole in a living room wall',
  },
  'drywall-patching': {
    hero: '/images/services/drywall-patching-hero.webp',
    card: '/images/services/drywall-patching-card.webp',
    alt: 'Drywall patching: fitting a new drywall patch into a cut-out hole in a hallway wall',
  },
  'drywall-taping': {
    hero: '/images/services/drywall-taping-hero.webp',
    card: '/images/services/drywall-taping-card.webp',
    alt: 'Drywall taping and finishing: embedding joint tape along a seam with a 12-inch finishing knife',
  },
  'drywall-texturing': {
    hero: '/images/services/drywall-texturing-hero.webp',
    card: '/images/services/drywall-texturing-card.webp',
    alt: 'Drywall texturing: applying a knockdown wall texture with a knockdown knife',
  },
  'drywall-restoration': {
    hero: '/images/services/drywall-restoration-hero.webp',
    card: '/images/services/drywall-restoration-card.webp',
    alt: 'Drywall and plaster restoration in a historic home, skim-coating old cracked walls smooth',
  },
  'ceiling-services': {
    hero: '/images/services/ceiling-services-hero.webp',
    card: '/images/services/ceiling-services-card.webp',
    alt: 'Ceiling repair contractor on drywall stilts finishing a ceiling seam',
  },
  'insulation-services': {
    hero: '/images/services/insulation-services-hero.webp',
    card: '/images/services/insulation-services-card.webp',
    alt: 'Wall insulation installation: fiberglass batts fitted between studs before drywall is hung',
  },
  'water-damage-repair': {
    hero: '/images/services/water-damage-repair-hero.webp',
    card: '/images/services/water-damage-repair-card.webp',
    alt: 'Water damage drywall repair: replacing a water-stained ceiling section in a finished basement',
  },
  'painting-services': {
    hero: '/images/services/painting-services-hero.webp',
    card: '/images/services/painting-services-card.webp',
    alt: 'Interior painting after drywall finishing, rolling fresh paint onto a smooth new wall',
  },
}

export const stateImages: Record<string, SiteImage> = {
  maryland: {
    hero: '/images/locations/maryland-hero.webp',
    card: '/images/locations/maryland-card.webp',
    alt: 'Historic brick townhouses in downtown Frederick, Maryland, home of Wall Fix Pros drywall contractors',
  },
  virginia: {
    hero: '/images/locations/virginia-hero.webp',
    card: '/images/locations/virginia-card.webp',
    alt: 'Brick colonial homes on a Northern Virginia suburban street served by Wall Fix Pros drywall repair',
  },
  'west-virginia': {
    hero: '/images/locations/west-virginia-hero.webp',
    card: '/images/locations/west-virginia-card.webp',
    alt: 'Historic hillside homes in Harpers Ferry, West Virginia, served by Wall Fix Pros drywall services',
  },
  pennsylvania: {
    hero: '/images/locations/pennsylvania-hero.webp',
    card: '/images/locations/pennsylvania-card.webp',
    alt: 'Farmhouse and stone homes near Gettysburg, Pennsylvania, served by Wall Fix Pros drywall contractors',
  },
}

export const homeHero: SiteImage = {
  hero: '/images/hero/home-hero-hero.webp',
  card: '/images/hero/home-hero-card.webp',
  alt: 'Wall Fix Pros drywall contractor finishing smooth walls in a bright Maryland living room',
}

export const aboutHero: SiteImage = {
  hero: '/images/about/crew-hero-hero.webp',
  card: '/images/about/crew-hero-card.webp',
  alt: 'Wall Fix Pros drywall crew unloading materials at a brick colonial home in Frederick, Maryland',
}

/** Flat icon per service, 256x256 WebP with the same copyright metadata as the photos. */
export const serviceIcons: Record<string, { src: string; alt: string }> = Object.fromEntries(
  Object.entries({
    'drywall-installation': 'Drywall installation icon',
    'drywall-repair': 'Drywall repair icon',
    'drywall-patching': 'Drywall patching icon',
    'drywall-taping': 'Drywall taping icon',
    'drywall-texturing': 'Drywall texturing icon',
    'drywall-restoration': 'Drywall restoration icon',
    'ceiling-services': 'Ceiling services icon',
    'insulation-services': 'Insulation services icon',
    'water-damage-repair': 'Water damage repair icon',
    'painting-services': 'Painting services icon',
  }).map(([slug, alt]) => [slug, { src: `/images/icons/${slug}.webp`, alt }])
)

/** Alt text for a service image on a specific city page. */
export function localizedServiceAlt(serviceSlug: string, cityName: string, stateAbbrev: string): string {
  const base = serviceImages[serviceSlug]?.alt ?? 'Professional drywall services'
  return `${base} – ${cityName}, ${stateAbbrev}`
}
