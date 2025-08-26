/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['wallfixpros.com', 'www.wallfixpros.com'],
  },
  async redirects() {
    return [
      {
        source: '/drywall-repair',
        destination: '/services/drywall-repair',
        permanent: true
      },
      {
        source: '/drywall-installation', 
        destination: '/services/drywall-installation',
        permanent: true
      }
    ]
  },
}

module.exports = nextConfig