const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const EVENTS_DIR = path.join(__dirname, '../public/events')

const SIZES = {
  thumb: 600,
  std: 1600,
  hero: 1920
}

async function optimizeImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (entry.name !== 'opt') {
        await optimizeImages(fullPath)
      }
    } else {
      const ext = path.extname(entry.name).toLowerCase()
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const optDir = path.join(dir, 'opt')
        if (!fs.existsSync(optDir)) {
          fs.mkdirSync(optDir, { recursive: true })
        }

        const baseName = path.basename(entry.name, path.extname(entry.name))

        const FORCE = process.argv.includes('--force');

        for (const [key, width] of Object.entries(SIZES)) {
          const outPath = path.join(optDir, `${baseName}-${key}.webp`)
          if (FORCE || !fs.existsSync(outPath)) {
            console.log(`Optimizing: ${fullPath} -> ${key} (${width}px)`)
            try {
              await sharp(fullPath)
                .rotate() // Automatically read EXIF data and apply rotation
                .resize(width, null, { withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(outPath)
            } catch (err) {
              console.error(`Error processing ${fullPath}:`, err)
            }
          }
        }
      }
    }
  }
}

async function run() {
  console.log('Starting image optimization...')
  await optimizeImages(EVENTS_DIR)
  console.log('Image optimization complete.')
}

run()
