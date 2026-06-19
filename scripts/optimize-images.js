/**
 * iMediaff Global — Image Optimization Script
 * Uses sharp to optimize images in-place, preserving file names and paths.
 * Skips Yumoş raw files (they are not used by the site - opt/ WebPs are used).
 * Skips logo/brand critical assets that need lossless compression.
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const PUBLIC_DIR = path.join(__dirname, '..', 'public')

// Results tracking
const results = []
let totalSaved = 0

async function getFileSize(filePath) {
  const stat = fs.statSync(filePath)
  return stat.size
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

/**
 * Optimize a JPEG file in-place.
 * quality: 80-85 is visually excellent, significant size reduction.
 */
async function optimizeJPEG(filePath, quality = 82) {
  const originalSize = await getFileSize(filePath)
  const tmpPath = filePath + '.tmp'

  try {
    await sharp(filePath)
      .jpeg({ quality, mozjpeg: true, progressive: true })
      .toFile(tmpPath)

    const newSize = await getFileSize(tmpPath)

    // Only replace if we actually saved space (at least 5%)
    if (newSize < originalSize * 0.95) {
      fs.renameSync(tmpPath, filePath)
      const saved = originalSize - newSize
      totalSaved += saved
      results.push({
        file: path.relative(PUBLIC_DIR, filePath),
        before: formatBytes(originalSize),
        after: formatBytes(newSize),
        saved: formatBytes(saved),
        pct: ((saved / originalSize) * 100).toFixed(1) + '%',
        status: 'OPTIMIZED'
      })
      console.log(`  ✅ ${path.basename(filePath)}: ${formatBytes(originalSize)} → ${formatBytes(newSize)} (saved ${formatBytes(saved)})`)
    } else {
      // File is already well-optimized
      fs.unlinkSync(tmpPath)
      results.push({
        file: path.relative(PUBLIC_DIR, filePath),
        before: formatBytes(originalSize),
        after: formatBytes(originalSize),
        saved: '0',
        pct: '0%',
        status: 'ALREADY_OPTIMIZED'
      })
      console.log(`  ⏭️  ${path.basename(filePath)}: Already optimized (${formatBytes(originalSize)})`)
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath)
    console.error(`  ❌ ERROR on ${filePath}: ${err.message}`)
    results.push({
      file: path.relative(PUBLIC_DIR, filePath),
      before: formatBytes(originalSize),
      after: '?',
      saved: '0',
      pct: '0%',
      status: 'ERROR: ' + err.message
    })
  }
}

/**
 * Optimize a PNG file in-place.
 * For photos (non-transparent): convert to high-quality JPEG for massive savings.
 * For logos/icons with transparency: use lossless PNG optimization.
 */
async function optimizePNG(filePath, { isPhoto = false, quality = 85 } = {}) {
  const originalSize = await getFileSize(filePath)
  const tmpPath = filePath + '.tmp'

  try {
    // Check if image has alpha channel (transparency)
    const metadata = await sharp(filePath).metadata()
    const hasAlpha = metadata.channels === 4 || metadata.hasAlpha

    if (isPhoto && !hasAlpha) {
      // Convert photo PNG to JPEG for massive savings
      const jpegPath = filePath.replace(/\.png$/i, '.jpg')
      if (!fs.existsSync(jpegPath)) {
        // Only convert if there's no existing JPG version
        await sharp(filePath)
          .jpeg({ quality, mozjpeg: true, progressive: true })
          .toFile(jpegPath)
        const newSize = await getFileSize(jpegPath)
        const saved = originalSize - newSize
        totalSaved += saved
        results.push({
          file: path.relative(PUBLIC_DIR, filePath) + ' → .jpg',
          before: formatBytes(originalSize),
          after: formatBytes(newSize),
          saved: formatBytes(saved),
          pct: ((saved / originalSize) * 100).toFixed(1) + '%',
          status: 'CONVERTED_TO_JPG'
        })
        console.log(`  ✅ ${path.basename(filePath)} → .jpg: ${formatBytes(originalSize)} → ${formatBytes(newSize)} (saved ${formatBytes(saved)})`)
        // Remove original PNG
        fs.unlinkSync(filePath)
        return jpegPath
      }
    }

    // Lossless PNG optimization (compress metadata, strip unnecessary data)
    await sharp(filePath)
      .png({ compressionLevel: 9, adaptiveFiltering: true, force: true })
      .toFile(tmpPath)

    const newSize = await getFileSize(tmpPath)

    if (newSize < originalSize * 0.97) {
      fs.renameSync(tmpPath, filePath)
      const saved = originalSize - newSize
      totalSaved += saved
      results.push({
        file: path.relative(PUBLIC_DIR, filePath),
        before: formatBytes(originalSize),
        after: formatBytes(newSize),
        saved: formatBytes(saved),
        pct: ((saved / originalSize) * 100).toFixed(1) + '%',
        status: 'OPTIMIZED'
      })
      console.log(`  ✅ ${path.basename(filePath)}: ${formatBytes(originalSize)} → ${formatBytes(newSize)} (saved ${formatBytes(saved)})`)
    } else {
      fs.unlinkSync(tmpPath)
      results.push({
        file: path.relative(PUBLIC_DIR, filePath),
        before: formatBytes(originalSize),
        after: formatBytes(originalSize),
        saved: '0',
        pct: '0%',
        status: 'ALREADY_OPTIMIZED'
      })
      console.log(`  ⏭️  ${path.basename(filePath)}: Already optimized (${formatBytes(originalSize)})`)
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath)
    console.error(`  ❌ ERROR on ${filePath}: ${err.message}`)
    results.push({
      file: path.relative(PUBLIC_DIR, filePath),
      before: formatBytes(originalSize),
      after: '?',
      saved: '0',
      pct: '0%',
      status: 'ERROR: ' + err.message
    })
  }

  return filePath
}

async function main() {
  console.log('\n🚀 iMediaff Global — Image Optimization\n')
  console.log('='.repeat(60))

  // ─── 1. Public Root PNGs ─────────────────────────────────────
  console.log('\n📁 /public root PNGs:')

  // brand.png — large photo-like PNG (used in about page, no alpha needed)
  await optimizePNG(path.join(PUBLIC_DIR, 'brand.png'), { isPhoto: true, quality: 85 })

  // cinematic-production.png — photo PNG (used in authority-metrics hero visual)
  await optimizePNG(path.join(PUBLIC_DIR, 'cinematic-production.png'), { isPhoto: true, quality: 88 })

  // logo-map.png — logo with potential transparency, lossless only
  await optimizePNG(path.join(PUBLIC_DIR, 'logo-map.png'), { isPhoto: false })

  // logo.png — brand logo, lossless
  await optimizePNG(path.join(PUBLIC_DIR, 'logo.png'), { isPhoto: false })

  // baku-flame-towers.png — used in regions-grid, photo
  await optimizePNG(path.join(PUBLIC_DIR, 'baku-flame-towers.png'), { isPhoto: false })

  // trendyol-showcase.png — used in case-studies, photo
  await optimizePNG(path.join(PUBLIC_DIR, 'trendyol-showcase.png'), { isPhoto: false })

  // ─── 2. /home JPEGs ──────────────────────────────────────────
  console.log('\n📁 /public/home/ JPEGs:')
  await optimizeJPEG(path.join(PUBLIC_DIR, 'home', 'noon-card.jpg'), 82)
  await optimizeJPEG(path.join(PUBLIC_DIR, 'home', 'trendyol-card.jpg'), 82)

  // ─── 3. /home/talent JPEGs ───────────────────────────────────
  console.log('\n📁 /public/home/talent/ JPEGs:')
  const talentDir = path.join(PUBLIC_DIR, 'home', 'talent')
  const talentFiles = fs.readdirSync(talentDir).filter(f => /\.(jpg|jpeg)$/i.test(f))
  for (const f of talentFiles) {
    await optimizeJPEG(path.join(talentDir, f), 82)
  }

  // ─── 4. /services JPEGs ──────────────────────────────────────
  console.log('\n📁 /public/services/ JPEGs:')
  const servicesDir = path.join(PUBLIC_DIR, 'services')
  const serviceFiles = fs.readdirSync(servicesDir).filter(f => /\.(jpg|jpeg)$/i.test(f))
  for (const f of serviceFiles) {
    await optimizeJPEG(path.join(servicesDir, f), 82)
  }

  // ─── 5. /affiliate-programs JPEGs ────────────────────────────
  console.log('\n📁 /public/affiliate-programs/ JPEGs:')
  const affiliateDir = path.join(PUBLIC_DIR, 'affiliate-programs')
  const affiliateFiles = fs.readdirSync(affiliateDir).filter(f => /\.(jpg|jpeg)$/i.test(f))
  for (const f of affiliateFiles) {
    await optimizeJPEG(path.join(affiliateDir, f), 82)
  }

  // ─── 6. /images/home/architects JPEGs ────────────────────────
  console.log('\n📁 /public/images/home/architects/ JPEGs:')
  const architectsDir = path.join(PUBLIC_DIR, 'images', 'home', 'architects')
  const architectFiles = fs.readdirSync(architectsDir).filter(f => /\.(jpg|jpeg)$/i.test(f))
  for (const f of architectFiles) {
    await optimizeJPEG(path.join(architectsDir, f), 82)
  }

  // ─── 7. /blog/covers JPEGs ───────────────────────────────────
  console.log('\n📁 /public/blog/covers/ JPEGs:')
  const blogCoversDir = path.join(PUBLIC_DIR, 'blog', 'covers')
  const blogFiles = fs.readdirSync(blogCoversDir).filter(f => /\.(jpg|jpeg)$/i.test(f))
  for (const f of blogFiles) {
    await optimizeJPEG(path.join(blogCoversDir, f), 83)
  }

  // ─── REPORT ──────────────────────────────────────────────────
  console.log('\n' + '='.repeat(60))
  console.log('\n📊 OPTIMIZATION REPORT\n')

  const optimized = results.filter(r => r.status === 'OPTIMIZED' || r.status === 'CONVERTED_TO_JPG')
  const skipped = results.filter(r => r.status === 'ALREADY_OPTIMIZED')
  const errors = results.filter(r => r.status.startsWith('ERROR'))

  console.log(`Optimized: ${optimized.length} files`)
  console.log(`Already optimal: ${skipped.length} files`)
  console.log(`Errors: ${errors.length} files`)
  console.log(`\nTotal saved: ${formatBytes(totalSaved)}`)

  if (optimized.length > 0) {
    console.log('\nTop savings:')
    optimized
      .sort((a, b) => {
        const getSavedBytes = (r) => {
          const m = r.saved.match(/([\d.]+)\s*(MB|KB|B)/)
          if (!m) return 0
          const v = parseFloat(m[1])
          if (m[2] === 'MB') return v * 1024 * 1024
          if (m[2] === 'KB') return v * 1024
          return v
        }
        return getSavedBytes(b) - getSavedBytes(a)
      })
      .slice(0, 10)
      .forEach(r => {
        console.log(`  ${r.file}: ${r.before} → ${r.after} (saved ${r.saved}, ${r.pct})`)
      })
  }

  if (errors.length > 0) {
    console.log('\nErrors:')
    errors.forEach(r => console.log(`  ❌ ${r.file}: ${r.status}`))
  }

  // Write JSON report
  const reportPath = path.join(__dirname, 'optimization-report.json')
  fs.writeFileSync(reportPath, JSON.stringify({ totalSaved: formatBytes(totalSaved), results }, null, 2))
  console.log(`\n📄 Full report written to: scripts/optimization-report.json`)
  console.log('\n✅ Done!\n')
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
