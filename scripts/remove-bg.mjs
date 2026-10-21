import sharp from 'sharp';

async function removeBackground() {
  const inputFile = 'd:/bluedune/files/logo-horizontal-on-dark.png';
  const outputFilePng = 'public/brand/logo-horizontal-on-dark.png';
  const outputFileWebp = 'public/brand/logo-horizontal-on-dark.webp';

  const { data, info } = await sharp(inputFile)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 3 (RGB)

  const outputBuffer = Buffer.alloc(width * height * 4);

  const bgR = 23;
  const bgG = 32;
  const bgB = 49;

  // Thresholds for smooth alpha matting
  const lowThresh = 14;
  const highThresh = 48;

  let transparentPixels = 0;
  let semiTransparentPixels = 0;
  let opaquePixels = 0;

  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;

    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

    if (dist <= lowThresh) {
      // Pure background -> 100% transparent
      outputBuffer[dstIdx] = 0;
      outputBuffer[dstIdx + 1] = 0;
      outputBuffer[dstIdx + 2] = 0;
      outputBuffer[dstIdx + 3] = 0;
      transparentPixels++;
    } else if (dist >= highThresh) {
      // Pure foreground -> 100% opaque
      outputBuffer[dstIdx] = r;
      outputBuffer[dstIdx + 1] = g;
      outputBuffer[dstIdx + 2] = b;
      outputBuffer[dstIdx + 3] = 255;
      opaquePixels++;
    } else {
      // Anti-aliased border edge -> smooth alpha with color unmixing
      const t = (dist - lowThresh) / (highThresh - lowThresh);
      const alpha = Math.round(t * 255);

      // Defringe / un-premultiply background color to eliminate dark halo
      const unmixedR = Math.min(255, Math.max(0, Math.round((r - bgR * (1 - t)) / t)));
      const unmixedG = Math.min(255, Math.max(0, Math.round((g - bgG * (1 - t)) / t)));
      const unmixedB = Math.min(255, Math.max(0, Math.round((b - bgB * (1 - t)) / t)));

      outputBuffer[dstIdx] = unmixedR;
      outputBuffer[dstIdx + 1] = unmixedG;
      outputBuffer[dstIdx + 2] = unmixedB;
      outputBuffer[dstIdx + 3] = alpha;
      semiTransparentPixels++;
    }
  }

  console.log(`Processed ${width}x${height} image:`);
  console.log(`  Transparent pixels: ${transparentPixels} (${(transparentPixels / (width * height) * 100).toFixed(1)}%)`);
  console.log(`  Semi-transparent (anti-aliased): ${semiTransparentPixels} (${(semiTransparentPixels / (width * height) * 100).toFixed(1)}%)`);
  console.log(`  Opaque foreground: ${opaquePixels} (${(opaquePixels / (width * height) * 100).toFixed(1)}%)`);

  // Write PNG with transparency
  await sharp(outputBuffer, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .png({ compressionLevel: 9 })
    .toFile(outputFilePng);

  console.log(`Saved transparent PNG to ${outputFilePng}`);

  // Write WebP with transparency
  await sharp(outputBuffer, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .webp({ quality: 95, lossless: false, alphaQuality: 100 })
    .toFile(outputFileWebp);

  console.log(`Saved transparent WebP to ${outputFileWebp}`);
}

removeBackground().catch(console.error);
