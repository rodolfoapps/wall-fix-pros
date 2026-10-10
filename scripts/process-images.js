/**
 * Convert generated source images into the WebP variants the site uses and embed
 * copyright + keyword metadata (EXIF and XMP) with exiftool.
 *
 *   node scripts/process-images.js <manifest.json> <source-dir>
 *
 * manifest.json: [{ "file": "drywall-repair.png", "out": "public/images/services/drywall-repair",
 *                   "title": "...", "description": "...", "keywords": ["..."] }]
 * Produces <out>-hero.webp (1920x1080) and <out>-card.webp (900x600).
 */
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')
const { execFileSync } = require('child_process')

const [manifestPath, srcDir] = process.argv.slice(2)
if (!manifestPath || !srcDir) {
  console.error('usage: node scripts/process-images.js <manifest.json> <source-dir>')
  process.exit(1)
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
const YEAR = new Date().getFullYear()
const COPYRIGHT = `© ${YEAR} Wall Fix Pros. All rights reserved.`

function tag(file, item) {
  const args = [
    '-overwrite_original', '-q',
    `-EXIF:Copyright=${COPYRIGHT}`,
    '-EXIF:Artist=Wall Fix Pros',
    `-EXIF:ImageDescription=${item.description}`,
    `-XMP-dc:Title=${item.title}`,
    `-XMP-dc:Description=${item.description}`,
    `-XMP-dc:Rights=${COPYRIGHT}`,
    '-XMP-dc:Creator=Wall Fix Pros',
    '-XMP-dc:Source=https://wallfixpro.com',
    '-XMP-photoshop:Credit=Wall Fix Pros',
    '-XMP-xmpRights:Marked=True',
    '-XMP-xmpRights:WebStatement=https://wallfixpro.com/',
    '-XMP-xmpRights:UsageTerms=Licensed for use on wallfixpro.com. Not for redistribution.',
    '-XMP-iptcCore:CreatorWorkURL=https://wallfixpro.com',
    ...item.keywords.map((k) => `-XMP-dc:Subject=${k}`),
    file,
  ]
  execFileSync('exiftool', args, { stdio: 'inherit' })
}

;(async () => {
  for (const item of manifest) {
    const src = path.join(srcDir, item.file)
    const outDir = path.dirname(item.out)
    fs.mkdirSync(outDir, { recursive: true })
    const hero = `${item.out}-hero.webp`
    const card = `${item.out}-card.webp`
    await sharp(src).resize(1920, 1080, { fit: 'cover', position: 'attention' }).webp({ quality: 78, effort: 6 }).toFile(hero)
    await sharp(src).resize(900, 600, { fit: 'cover', position: 'attention' }).webp({ quality: 80, effort: 6 }).toFile(card)
    tag(hero, item)
    tag(card, item)
    const h = fs.statSync(hero).size, c = fs.statSync(card).size
    console.log(`${path.basename(item.out)}: hero ${(h / 1024).toFixed(0)} KB, card ${(c / 1024).toFixed(0)} KB`)
  }
})().catch((e) => { console.error(e); process.exit(1) })
