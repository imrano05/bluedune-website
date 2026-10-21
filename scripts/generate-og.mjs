import sharp from 'sharp';

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // Background SVG with circuit patterns, wave lines, and cyan glows
  const svgBackground = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#172031"/>
        <stop offset="60%" stop-color="#121a28"/>
        <stop offset="100%" stop-color="#0e1520"/>
      </linearGradient>
      <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#29B6D4" stop-opacity="0.1"/>
        <stop offset="50%" stop-color="#29B6D4" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#1763A1" stop-opacity="0.2"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#29B6D4" stop-opacity="0.18"/>
        <stop offset="60%" stop-color="#1B3F7D" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#172031" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#29B6D4" stroke-width="0.5" stroke-opacity="0.08"/>
      </pattern>
    </defs>

    <!-- Base -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
    <rect width="${width}" height="${height}" fill="url(#grid)"/>
    <rect width="${width}" height="${height}" fill="url(#glow)"/>

    <!-- Circuit & Wave decorative curves -->
    <path d="M 0,480 Q 300,420 600,470 T 1200,430" fill="none" stroke="url(#cyanLine)" stroke-width="2"/>
    <path d="M 0,510 Q 350,460 700,500 T 1200,470" fill="none" stroke="#1763A1" stroke-width="1.5" stroke-opacity="0.4"/>
    <path d="M 0,550 Q 400,520 800,540 T 1200,520" fill="none" stroke="#29B6D4" stroke-width="1" stroke-opacity="0.2"/>

    <!-- Circuit trace accents -->
    <circle cx="280" cy="425" r="4" fill="#29B6D4"/>
    <circle cx="600" cy="470" r="4" fill="#29B6D4"/>
    <circle cx="920" cy="445" r="4" fill="#29B6D4"/>
    <line x1="280" y1="425" x2="280" y2="390" stroke="#29B6D4" stroke-width="1.5" stroke-opacity="0.5"/>
    <line x1="280" y1="390" x2="340" y2="390" stroke="#29B6D4" stroke-width="1.5" stroke-opacity="0.5"/>
    <circle cx="340" cy="390" r="3" fill="#29B6D4"/>

    <!-- Subtle border glow -->
    <rect x="2" y="2" width="${width - 4}" height="${height - 4}" rx="12" fill="none" stroke="#29B6D4" stroke-width="1.5" stroke-opacity="0.3"/>

    <!-- Bottom Tagline & Domain Text -->
    <text x="600" y="470" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" fill="#F5F8FB" letter-spacing="0.5">
      Data, AI and software for Oman's growing businesses
    </text>
    <text x="600" y="520" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#29B6D4" letter-spacing="2">
      BLUEDUNE.TECH
    </text>
  </svg>`;

  // Resize stacked logo to fit nicely in top-center
  const logoBuffer = await sharp('public/brand/logo-stacked.png')
    .resize({ width: 620, withoutEnlargement: true })
    .toBuffer();

  const logoMeta = await sharp(logoBuffer).metadata();
  const logoTop = 130;
  const logoLeft = Math.round((width - logoMeta.width) / 2);

  // Composite SVG background with the logo
  await sharp(Buffer.from(svgBackground))
    .composite([
      {
        input: logoBuffer,
        top: logoTop,
        left: logoLeft,
      }
    ])
    .png()
    .toFile('public/og-image.png');

  console.log('og-image.png generated successfully at public/og-image.png');
}

generateOgImage().catch(console.error);
