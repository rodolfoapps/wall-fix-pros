const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function optimizeHeroImage() {
  const inputPath = path.join(__dirname, '../public/images/hero/Hero - Fix Wall Pro.png')
  const outputWebpPath = path.join(__dirname, '../public/images/hero/hero-optimized.webp')
  
  if (!fs.existsSync(inputPath)) {
    console.log('Hero image not found:', inputPath)
    return
  }

  try {
    // Create optimized WebP versions for different screen sizes
    
    // Desktop version (1200px wide, high quality)
    await sharp(inputPath)
      .resize(1200, 600, { fit: 'cover', position: 'center' })
      .webp({ quality: 85, effort: 6 })
      .toFile(path.join(__dirname, '../public/images/hero/hero-desktop.webp'))
    
    // Tablet version (800px wide)
    await sharp(inputPath)
      .resize(800, 400, { fit: 'cover', position: 'center' })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(__dirname, '../public/images/hero/hero-tablet.webp'))
    
    // Mobile version (400px wide)
    await sharp(inputPath)
      .resize(400, 300, { fit: 'cover', position: 'center' })
      .webp({ quality: 75, effort: 6 })
      .toFile(path.join(__dirname, '../public/images/hero/hero-mobile.webp'))
    
    console.log('✅ Hero images optimized successfully!')
    console.log('Created: hero-desktop.webp, hero-tablet.webp, hero-mobile.webp')
    
  } catch (error) {
    console.error('Error optimizing hero image:', error)
  }
}

async function optimizeLogo() {
  const logoPath = path.join(__dirname, '../public/images/Assets/Logo-WALL-FIX-PRO.webp')
  
  if (!fs.existsSync(logoPath)) {
    console.log('Logo not found:', logoPath)
    return
  }

  try {
    // Create optimized logo for header (96x48 exact size)
    await sharp(logoPath)
      .resize(96, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(__dirname, '../public/images/Assets/logo-header-optimized.webp'))
    
    console.log('✅ Logo optimized successfully!')
    console.log('Created: logo-header-optimized.webp (96x48)')
    
  } catch (error) {
    console.error('Error optimizing logo:', error)
  }
}

// Run optimizations
async function main() {
  console.log('🚀 Starting image optimization...')
  await optimizeHeroImage()
  await optimizeLogo()
  console.log('✨ Image optimization complete!')
}

main()