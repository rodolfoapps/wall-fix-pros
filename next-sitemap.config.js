/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://wallfixpros.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true, // Enable sitemap index
  sitemapSize: 5000, // Split sitemaps at 5000 URLs each
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  exclude: [
    '/api/*',
    '/404',
    '/_*',
    '/admin/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/404'
        ]
      }
    ],
    additionalSitemaps: [
      'https://wallfixpros.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on page type
    let priority = 0.7 // default
    let changefreq = 'weekly'

    // Homepage - highest priority
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } 
    // Main navigation pages - very high priority
    else if (['/services', '/locations', '/contact', '/quote', '/about', '/thank-you'].includes(path)) {
      priority = 0.95
      changefreq = 'weekly'
    }
    // Resources and blog hub
    else if (path === '/resources' || path === '/blog') {
      priority = 0.9
      changefreq = 'weekly'
    }
    // Individual service pages (hub pages)
    else if (path.match(/^\/services\/[^\/]+$/)) {
      priority = 0.9
      changefreq = 'weekly'
    }
    // State hub pages
    else if (path.match(/^\/locations\/(maryland|virginia|west-virginia|pennsylvania)$/)) {
      priority = 0.85
      changefreq = 'weekly'
    }
    // City hub pages
    else if (path.match(/^\/locations\/[^\/]+\/[^\/]+$/)) {
      priority = 0.8
      changefreq = 'weekly'
      
      // Frederick (headquarters) gets higher priority
      if (path.includes('/frederick')) {
        priority = 0.85
      }
    }
    // Blog posts
    else if (path.startsWith('/blog/') && path !== '/blog') {
      priority = 0.6
      changefreq = 'monthly'
    }
    // Resource pages
    else if (path.startsWith('/resources/') && path !== '/resources') {
      priority = 0.65
      changefreq = 'monthly'
    }
    // Service-location combination pages
    else if (path.includes('/services/') && path.split('/').length > 3) {
      priority = 0.5
      changefreq = 'monthly'
      
      // Frederick service pages get slightly higher priority
      if (path.includes('frederick')) {
        priority = 0.55
      }
    }
    // Location-service combination pages
    else if (path.includes('/locations/') && path.split('/').length > 4) {
      priority = 0.5
      changefreq = 'monthly'
      
      // Frederick service pages get slightly higher priority
      if (path.includes('frederick')) {
        priority = 0.55
      }
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [],
      images: [],
    }
  },
  additionalPaths: async (config) => {
    const result = []
    
    // Add any manual URLs that might not be auto-discovered
    const manualUrls = [
      '/sitemap.xml',
      '/sitemap-0.xml',
    ]
    
    for (const url of manualUrls) {
      result.push({
        loc: url,
        changefreq: 'daily',
        priority: 0.3,
        lastmod: new Date().toISOString(),
      })
    }
    
    return result
  },
}