export const SITE_URL = 'https://wallfixpro.com'
export const SITE_NAME = 'Wall Fix Pros'
export const PHONE_DISPLAY = '(240) 670-1949'
export const PHONE_E164 = '+1-240-670-1949'
export const PHONE_TEL = '+12406701949'
export const OG_IMAGE = '/images/og-image.jpg'
export const LOGO_URL = `${SITE_URL}/images/Assets/Logo-WALL-FIX-PRO.webp`

/** Normalise a route to the canonical form used across the site: leading and trailing slash, no host. */
export function canonicalPath(path: string): string {
  let p = path.trim()
  if (!p.startsWith('/')) p = `/${p}`
  if (!p.endsWith('/')) p = `${p}/`
  return p
}

/** Clamp a meta description to Google's visible length, cutting at a word boundary. */
export function clampDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : max - 1).replace(/[,;:\-–]$/, '')}…`
}

/** Some service names already end in "Services"; avoid "Ceiling Services Services". */
export function serviceLabel(name: string): string {
  return /services$/i.test(name) ? name : `${name} Services`
}

/** Location-structure URL for a service in a city. The only canonical place a service+city page lives. */
export function locationServicePath(stateSlug: string, citySlug: string, serviceSlug: string): string {
  return `/locations/${stateSlug}/${citySlug}/${serviceSlug}-${citySlug}/`
}
