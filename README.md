# Wall Fix Pros - Drywall & Wall Repair Website

A comprehensive SEO-optimized website for Wall Fix Pros, a professional drywall and wall repair company serving Maryland, Virginia, West Virginia, and Pennsylvania.

## 🚀 Features

- **600+ SEO-Optimized Pages**: Complete silo structure with service and location combinations
- **Next.js 14 + App Router**: Modern React framework with file-based routing
- **Tailwind CSS**: Utility-first CSS framework with custom brand colors
- **Dynamic Page Generation**: Scalable system for service-location combinations
- **Local SEO Optimization**: Schema markup, structured data, and location-specific content
- **Mobile-Responsive Design**: Optimized for all devices
- **Professional Design**: Blue and orange color scheme with clean, trustworthy layout

## 📊 Site Structure

### Main Pages (7)
- Homepage (`/`)
- Services Hub (`/services`)  
- Locations Hub (`/locations`)
- About (`/about`)
- Contact (`/contact`)
- Get Quote (`/quote`)
- Resources (`/resources`)

### Service Hub Pages (10)
- Drywall Installation
- Drywall Repair
- Drywall Patching
- Drywall Taping
- Drywall Texturing
- Drywall Restoration
- Ceiling Services
- Insulation Services
- Water Damage Repair
- Painting Services

### Location Pages (37)
- 4 State hub pages
- 33 City pages across MD, VA, WV, PA

### Service-Location Combinations (330)
- `/locations/[state]/[city]/[service-city]/` is the only URL for a service in a city.
- The former `/services/[service]/[city-service]/` structure is permanently redirected to it (see `next.config.js`).

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Generate all service-location pages**
   ```bash
   npm run generate-pages
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate-pages` - Generate all 600+ service-location pages
- `npm run update-sitemap` - Generate XML sitemap
- `npm run validate-data` - Validate JSON data files

## 📂 Project Structure

```
wall-fix-pros/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Homepage
│   ├── services/                # Service pages
│   │   ├── page.tsx            # Services hub
│   │   └── [service]/          # Dynamic service pages
│   └── locations/              # Location pages
├── components/                  # React components
│   ├── Header.tsx              # Site header
│   ├── Footer.tsx              # Site footer
│   └── ...                     # Other components
├── data/                       # JSON data files
│   ├── services.json           # Service information
│   ├── locations.json          # Location data
│   ├── business-info.json      # Company details
│   └── ...                     # Other data
├── scripts/                    # Build scripts
│   └── generate-pages.js       # Page generation script
└── ...                        # Config files
```

## 🎯 SEO Features

### Local Schema Markup
- Organization schema (homepage)
- LocalBusiness schema (location pages)
- Service schema (service pages)
- Multi-location business schema

### URL Strategy
- Clean, descriptive URLs with hyphens
- Consistent naming conventions
- State and city names in URLs
- Service names in URLs

### Internal Linking
- Service hubs link to all location variations
- Location hubs link to all service variations
- Cross-linking between related services
- Breadcrumb navigation on all pages

### Frederick, MD Special Treatment
Frederick is the headquarters location and receives enhanced SEO:
- Most comprehensive content (3000+ words)
- "Headquarters location" messaging
- Primary business address schema
- Fastest response time messaging

## 🏢 Business Information

- **Company**: Wall Fix Pros
- **Address**: Wall Fix Pros 4580 Mack Ave Suite Frederick, MD 21703
- **Phone**: (240) 670-1949
- **Service Areas**: 33 cities across MD, VA, WV, PA
- **Established**: 2015
- **License**: MHIC #123456

## 🎨 Design System

### Colors
- **Brand Blue**: Primary brand color for headers, CTAs
- **Brand Orange**: Secondary color for accents, buttons
- **Professional**: Clean, trustworthy design for construction industry

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear heading structure for SEO

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Environment Variables
```env
SITE_URL=https://wallfixpro.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=   # Search Console HTML-tag token (optional)
RESEND_API_KEY=                          # see EMAIL_SETUP.md
FROM_EMAIL="Wall Fix Pros <noreply@wallfixpro.com>"
NOTIFICATION_EMAIL_PRIMARY=
NOTIFICATION_EMAIL_SECONDARY=
```

## 📈 Performance

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by route
- **SEO Optimization**: Meta tags, structured data, sitemaps
- **Fast Loading**: Optimized for Core Web Vitals

## 🤝 Contributing

This is a client project. For modifications:

1. Update JSON data files for content changes
2. Use the page generation script for new locations/services
3. Follow established patterns for new components
4. Test SEO impact of URL structure changes

## 📞 Support

For technical support or modifications, contact the development team.

---

**Wall Fix Pros** - Professional drywall and wall repair services serving Maryland, Virginia, West Virginia, and Pennsylvania since 2015.