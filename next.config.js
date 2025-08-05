/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
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