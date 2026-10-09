/** @type {import('next').NextConfig} */
const locationsData = require('./data/locations.json')
const servicesData = require('./data/services.json')

// The site used to publish every service+city page under two URL structures:
//   /services/<service>/<city>-<service>/            (removed)
//   /locations/<state>/<city>/<service>-<city>/      (canonical)
// Permanently redirect the removed structure onto the canonical one.
function legacyServiceCityRedirects() {
  const redirects = []
  for (const serviceSlug of Object.keys(servicesData)) {
    for (const [citySlug, city] of Object.entries(locationsData.cities)) {
      redirects.push({
        source: `/services/${serviceSlug}/${citySlug}-${serviceSlug}`,
        destination: `/locations/${city.state}/${citySlug}/${serviceSlug}-${citySlug}/`,
        permanent: true,
      })
    }
  }
  return redirects
}

const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['wallfixpro.com', 'www.wallfixpro.com'],
  },
  async redirects() {
    return [
      {
        source: '/drywall-repair',
        destination: '/services/drywall-repair/',
        permanent: true,
      },
      {
        source: '/drywall-installation',
        destination: '/services/drywall-installation/',
        permanent: true,
      },
      ...legacyServiceCityRedirects(),
    ]
  },
}

module.exports = nextConfig
