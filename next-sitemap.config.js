/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://wallfixpros.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
  transform: async (config, path) => {
    // Custom priority based on page type
    let priority = 0.7 // default
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.startsWith('/services') && !path.includes('/')) {
      priority = 0.9 // Service hub pages
      changefreq = 'weekly'
    } else if (path.startsWith('/locations') && !path.includes('/')) {
      priority = 0.9 // Location hub pages  
      changefreq = 'weekly'
    } else if (path.includes('/maryland/frederick')) {
      priority = 0.8 // Frederick pages (headquarters)
      changefreq = 'weekly'
    } else if (path.includes('-')) {
      priority = 0.6 // Service-location combination pages
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}