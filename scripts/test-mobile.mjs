import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');

console.log('Mobile Responsiveness Audit:');
console.log('  1. Viewport Meta:', html.includes('name="viewport" content="width=device-width, initial-scale=1.0"') ? 'PASS' : 'FAIL');
console.log('  2. Mobile Drawer Exists:', html.includes('id="mobile-nav-drawer"') ? 'PASS' : 'FAIL');
console.log('  3. Hamburger Toggle Button:', html.includes('id="mobile-menu-toggle"') ? 'PASS' : 'FAIL');
console.log('  4. Aria Expanded & Controls:', html.includes('aria-controls="mobile-nav-drawer"') ? 'PASS' : 'FAIL');

const cssFiles = fs.readdirSync('dist/_astro').filter(f => f.endsWith('.css'));
let allCss = '';
cssFiles.forEach(f => {
  allCss += fs.readFileSync(`dist/_astro/${f}`, 'utf8') + '\n';
});

const mediaQueries = allCss.match(/@media[^{]+\{/g) || [];
console.log(`  5. Total Media Queries: ${mediaQueries.length}`);
console.log('  6. Breakpoints covered:');
const breakpoints = new Set();
mediaQueries.forEach(m => {
  const match = m.match(/\((min|max)-(width):\s*([^)]+)\)/);
  if (match) breakpoints.add(match[0]);
});
breakpoints.forEach(b => console.log('     -', b));
