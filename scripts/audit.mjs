import fs from 'fs';

const pages = [
  'dist/index.html',
  'dist/services/index.html',
  'dist/work/index.html',
  'dist/process/index.html',
  'dist/contact/index.html',
  'dist/privacy/index.html',
  'dist/404.html'
];

pages.forEach((file) => {
  if (!fs.existsSync(file)) {
    console.error(`File missing: ${file}`);
    return;
  }
  const html = fs.readFileSync(file, 'utf8');
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  const ogImgMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/i);
  const schemaMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);

  console.log(`=== ${file} ===`);
  console.log(`  Title: ${titleMatch ? titleMatch[1] : 'MISSING'}`);
  console.log(`  H1 Count: ${h1Match.length} -> ${h1Match.map(h => h.replace(/<[^>]+>/g, '').trim()).join(' | ')}`);
  console.log(`  Meta Desc: ${descMatch ? descMatch[1].slice(0, 60) + '...' : 'MISSING'}`);
  console.log(`  Canonical: ${canonMatch ? canonMatch[1] : 'MISSING'}`);
  console.log(`  OG Image: ${ogImgMatch ? ogImgMatch[1] : 'MISSING'}`);
  console.log(`  Schema.org: ${schemaMatch ? 'PRESENT' : 'MISSING'}`);
});
