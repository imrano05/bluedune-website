# BlueDuneSolution Website (bluedune.tech)

Production-ready static marketing website for **BlueDuneSolution**, a data-engineering-led software house serving businesses in Oman and the wider Gulf region.

Built with [Astro](https://astro.build/) (static output), TypeScript, plain CSS with CSS custom properties, and lightweight vanilla interactions. Designed for Cloudflare Pages deployment with Lighthouse 95+ performance, full accessibility, and responsive typography.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js `v18.14.1` or newer (Tested on Node `v24.x`)
- npm `v9.x` or newer

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the project root:
```env
PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key_here
```

> **Note**: For Web3Forms, get a free access key at [web3forms.com](https://web3forms.com). Form submissions are sent via client-side `fetch` with JSON. If no key is configured during local testing, the form gracefully alerts the user and provides the direct email fallback (`info@bluedune.tech`).

### 3. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 4. Build Production Static Bundle
```bash
npm run build
```
Output static assets are compiled into the `dist/` directory.

### 5. Preview Static Production Build
```bash
npm run preview
```

---

## ☁️ Deployment to Cloudflare Pages

This website compiles to pure static HTML/CSS/JS with zero server-side runtime, making it ideal for Cloudflare Pages.

### Method 1: Git Integration (Recommended)
1. Push this repository to GitHub or GitLab.
2. In the **Cloudflare Dashboard**, navigate to **Compute (Workers & Pages)** > **Create an application** > **Pages** > **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave blank)
4. Under **Environment variables (Production & Preview)**, add:
   - Variable name: `PUBLIC_WEB3FORMS_KEY`
   - Value: `<Your Web3Forms Access Key>`
5. Click **Save and Deploy**.

### Method 2: Direct Upload via Wrangler CLI
```bash
npx wrangler pages deploy dist --project-name=bluedune-website
```

### Custom Domain Configuration (bluedune.tech)
1. In Cloudflare Pages, go to **Custom domains** tab for your project.
2. Click **Set up a custom domain**.
3. Enter `bluedune.tech` (and optionally `www.bluedune.tech`).
4. If your domain is on Cloudflare DNS, DNS records (`CNAME` / apex flattening) will be automatically provisioned with free SSL/TLS certificates.
5. If using an external registrar/DNS provider, point the CNAME record for `@` or `www` to `<your-project>.pages.dev`.

---

## 🎨 Brand & Design System

- **Colors**:
  - Navy (Dark surfaces): `#172031`
  - Deep Blue (Gradients & Accents): `#1B3F7D`
  - Brand Blue (Interactive elements): `#1763A1`
  - Cyan (Glows, links on dark): `#29B6D4`
  - Light Surface (Clean rhythm): `#F5F8FB`
  - Pure White: `#FFFFFF`
- **Typography**:
  - Headings: **Sora** (geometric sans-serif harmonising with the technical logo)
  - Body: **Inter** (clean legible sans-serif)
  - Code/Metrics: System Monospace / **JetBrains Mono**
- **Brand Assets**: Stored in `public/brand/` with both PNG and optimized WebP formats.
- **RTL Ready**: Layout constructed with CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline-start`).

---

## 📁 Project Structure

```
bluedune/
├── astro.config.mjs          # Astro config with sitemap & static build
├── tsconfig.json             # TypeScript strict configuration
├── package.json
├── public/
│   ├── brand/                # Official brand logos and favicons (PNG + WebP)
│   ├── og-image.png          # 1200x630 social share Open Graph image
│   ├── robots.txt            # Search engine crawler directives
│   └── site.webmanifest      # PWA & mobile bookmarking metadata
├── src/
│   ├── components/
│   │   ├── Header.astro            # Sticky glassmorphism header & mobile nav
│   │   ├── Footer.astro            # Navy footer with direct contacts
│   │   ├── HeroCanvas.astro        # Canvas waves, circuit traces & interactive nodes
│   │   ├── TechMarquee.astro       # Slow tech marquee with pause on hover
│   │   ├── BentoCapabilities.astro # Bento grid with 3D tilt & glow
│   │   ├── DataFlowDiagram.astro   # Interactive sequential data architecture
│   │   ├── ProcessTimeline.astro   # Horizontal & vertical animated timelines
│   │   ├── ProjectModal.astro      # Accessible keyboard-friendly detail modal
│   │   ├── SchematicSvg.astro      # Custom SVG architecture diagrams
│   │   ├── ContactForm.astro       # Web3Forms submission & validation
│   │   └── SeoHead.astro           # Meta, OpenGraph, Twitter, JSON-LD Schema
│   ├── layouts/
│   │   └── BaseLayout.astro        # Base HTML wrapper & micro-interactions
│   ├── pages/
│   │   ├── index.astro             # Home page
│   │   ├── services.astro          # Services with alternating capability sections
│   │   ├── work.astro              # Selected work with 3 case studies
│   │   ├── process.astro           # 6-step delivery process & commitments
│   │   ├── contact.astro           # 2-column project brief form & email
│   │   ├── privacy.astro           # Plain-language privacy notice
│   │   └── 404.astro               # Custom 404 error page
│   └── styles/
│       └── global.css              # Design tokens, reset, utilities, animations
└── scripts/
    └── generate-og.mjs             # Node.js Sharp script to generate og-image.png
```

---

## 📋 Outstanding Checklist for Production Launch
The following items remain for public launch:

1. **`src/components/ContactForm.astro`**:
   - Web3Forms key is configured with `86e757e5-5174-43cd-84ad-21d4f8794c89` in `.env` and coded as default fallback. Add `PUBLIC_WEB3FORMS_KEY=86e757e5-5174-43cd-84ad-21d4f8794c89` to Cloudflare Pages Environment Variables during deployment.
2. **`src/pages/work.astro`**:
   - Confirm exact legal spelling for **Mohamed Waseem Investment SPC** and whether company logo permission is granted.
3. **`src/pages/privacy.astro`**:
   - Have the plain-language privacy notice reviewed by legal counsel before public launch in the Sultanate of Oman.
