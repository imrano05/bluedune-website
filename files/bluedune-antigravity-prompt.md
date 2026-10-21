# Antigravity prompt: BlueDuneSolution website

Paste everything below the line into Antigravity. Before you do, put the files from the `bluedune-assets` folder into the project's `public/brand/` folder (logo-icon.png, logo-horizontal.png, logo-horizontal-on-dark.png, logo-stacked.png, favicon.ico, favicon-32.png, favicon-192.png, favicon-512.png).

---

Build a complete, production-ready, visually impressive static marketing website for **BlueDuneSolution** (domain: bluedune.tech), a data-engineering-led software house serving businesses in Oman and the wider Gulf. This must NOT look like a simple template. It should feel like a premium, modern technology company: confident, polished, interactive and memorable, while staying fast and easy to use.

## Tech stack
- Astro (static output) with TypeScript where useful, plain CSS with CSS variables (Tailwind is acceptable if it keeps the code cleaner).
- Vanilla JS or small Astro islands for interactions. Avoid heavy libraries. GSAP or Motion One are allowed if they improve the animation quality; keep total JS small.
- Deployable to Cloudflare Pages (static build, no server needed).
- Pages: Home, Services, Work, Process, Contact, Privacy, 404.
- Voice: "we", professional, clear, plain English, no buzzword stuffing.

## Brand assets (already provided in /public/brand/)
- logo-horizontal.png (for light backgrounds), logo-horizontal-on-dark.png (for dark backgrounds, has a navy background; use it in the dark header or footer on a matching navy #172031 block), logo-icon.png, logo-stacked.png, favicon files.
- Brand colours taken from the logo:
  - Navy: #172031 (dark sections, header on dark)
  - Deep blue: #1B3F7D
  - Brand blue: #1763A1
  - Cyan: #29B6D4 (accent, glows, links on dark)
  - Light surface: #F5F8FB, white: #FFFFFF
  - Text on light: #172031; muted text: #51607A
- Typography: a modern geometric or technical sans-serif for headings (for example "Sora", "Space Grotesk" or "Outfit", self-hosted or Google Fonts with font-display: swap) and Inter for body text. The logo wordmark is a squared technical typeface, so choose headings that harmonise with it.
- The logo mark is a wave/dune made of circuit lines and data nodes inside a circle. Reuse that idea in the visuals: flowing wave lines, circuit traces, glowing nodes.

## Design direction
- Dark, rich hero on navy with an animated background: flowing wave or dune lines combined with a subtle circuit/data-node network that reacts gently to the mouse (parallax or node glow). Use a canvas or SVG, throttle it, pause it when off-screen, and respect prefers-reduced-motion (show a static version).
- Alternate dark navy sections with clean light sections to create rhythm. Use gradients (navy -> deep blue -> cyan accents), soft glows, glassmorphism cards with thin borders, and generous spacing.
- Use a bento-grid layout for the capabilities, with cards that lift, glow and slightly tilt on hover.
- Smooth scroll-triggered reveal animations (fade and rise, staggered), a sticky header that becomes translucent with blur on scroll, an animated gradient underline on nav links, and polished button hover effects.
- Micro-interactions everywhere: hover states, focus rings, animated arrows, a custom subtle cursor glow on desktop only (never on touch devices).
- Fully responsive and mobile-first, with a clean full-screen mobile menu.
- No stock photos. Create visuals with SVG, CSS and canvas only (diagrams, patterns, icons). Use a consistent line-icon set (Lucide or inline SVG).
- Dark/light theme toggle is optional; if you add it, default to the design above and persist the choice safely.

## STRICT CONTENT RULES (very important)
- Use ONLY facts written in this prompt. Do NOT invent clients, metrics, percentages, counters, testimonials, team members, team sizes, awards, certifications, prices, statistics, years in business, or screenshots.
- Do not show animated number counters or "X projects delivered" style stats.
- No testimonials section, no pricing, no blog, no About page, no phone or WhatsApp, no social links.
- Do not mention departments or named teams (no "AI Engineering team").
- Do not claim finished client work for anything except the three projects on the Work page.
- Put a TODO comment in the code (not on the page) for anything unfinished.

## Positioning and copy
- Hero headline: "Data, AI and software for Oman's growing businesses."
- Subheadline: "We turn scattered data and manual processes into reliable data platforms, automation and software your team can trust."
- Primary button: "Send us a project brief" (to Contact). Secondary button: "See our work".
- Short supporting line under the hero: "Data engineering at the core. Complete digital products around it."
- Intro idea for the story section: Oman is adopting new technology quickly, and businesses need a partner who gets the data right before adding AI.

## HOME (in this order)
1. Animated hero (above).
2. A slim row of technology names (text or simple icons, no brand-logo claims): Python, SQL, PostgreSQL, Snowflake, AWS, Docker, FastAPI, React, Flutter, Power BI, n8n. Display as a slow marquee that pauses on hover.
3. "What we do": six capability cards in a bento grid, each with an icon, a title and one line:
   - Data platforms and pipelines: reliable ingestion, transformation, warehouses and cloud data infrastructure.
   - AI knowledge systems: search and question answering over large document collections (RAG), chatbots and assistants.
   - Automation and AI agents: business workflows across email, messaging, spreadsheets and internal tools.
   - Analytics and forecasting: dashboards, recurring reports and forecasting pipelines.
   - Custom web and API products: business applications, portals, dashboards and integrations.
   - Mobile and computer vision: Flutter apps and on-device vision features.
4. An INTERACTIVE data-flow diagram, "From scattered data to decisions": stages Sources -> Pipeline -> Warehouse -> Dashboards / AI. Nodes light up in sequence on scroll, and hovering or tapping a stage shows a short explanation of what we build at that stage. Keep the explanations generic and factual.
5. "Selected work": three cards (see Work) with hover effects, linking to the Work page.
6. "How we work": the six-step process as a horizontal timeline on desktop and a vertical one on mobile, with a step highlighting on scroll.
7. Closing call-to-action band on navy with the headline "Tell us what you are trying to fix." and a button to Contact, plus the email address.

## SERVICES
- Page hero with a short intro, then the six capabilities as large alternating sections (what problem it solves -> what we deliver -> typical tools).
- Lead the page with Data Engineering, AI/ML solutions and Automation (visually emphasised).
- A tabbed or filterable "Full service list" with category tabs: AI and intelligent systems; Data engineering and analytics; Web and APIs; Mobile; Design, QA and support. Items:
  - AI: RAG and document intelligence; chatbots and virtual assistants; AI agents; workflow automation (n8n); predictive analytics and forecasting; computer vision; voice AI; AI integration and MLOps.
  - Data: data pipelines (ETL/ELT); data warehouse design; BI dashboards and reporting; database design, migration and optimisation; cloud data infrastructure.
  - Web and APIs: custom web applications; API development and integration; logistics and transport systems; SaaS platforms.
  - Mobile: cross-platform Flutter apps.
  - Design, QA and support: product and interface design; quality assurance; long-term support.
  Describe each as something we can build, one line each, never as proof of delivered work.
- "How we can work together": three cards: fixed-scope projects, support retainers, discovery and solution design. No pricing, no booking link.
- Allowed tool mentions: Python, SQL, PostgreSQL, Snowflake, dbt, Airflow, AWS, Docker, FastAPI, React, Flutter, Power BI, LangChain, LangGraph, n8n, MongoDB.

## WORK
- Intro line and this note near the top: "Much of our work is delivered through partners or under confidentiality agreements. We name clients only where we have written permission."
- Three project cards that expand into a modal or detail panel (accessible, keyboard friendly), using an IDENTICAL layout for each: Client, Problem, What we built, Stack, Delivery tag.
- 1. **Transport Management System.** Client: Mohamed Waseem Investment SPC (named with permission; TODO: confirm exact spelling of the company name and whether the logo may be shown). Delivery tag: "Named client". We built a full-stack system to manage trips and their financial data. Stack: React, FastAPI, PostgreSQL, REST APIs, authentication. Do NOT mention AI or machine learning for this project. Do not use the words "our direct client".
- 2. **Arabic legal document search.** Client: "Law firm, Oman" (name withheld under confidentiality). Delivery tag: "Delivered via partner". A production Arabic-language retrieval-augmented generation system with hybrid semantic and keyword retrieval across legislation, judicial rulings and procedural guides. Stack: LangChain, hybrid retrieval, FastAPI, MongoDB, Docker.
- 3. **AI assistant for UK construction teams.** Client: "Construction project teams, UK" (name withheld). Delivery tag: "Delivered via partner". A real-time conversational assistant for active project teams. Stack: LangChain or LangGraph, FastAPI, WebSockets.
- No outcomes, metrics, screenshots or quotes. Instead, give each card a custom SVG illustration (an architecture-style diagram of the system: for example data flowing from documents to retrieval to answers) that is clearly schematic and labelled "Simplified architecture".

## PROCESS
- Six steps: Discover, Design, Build, Validate, Launch, Support, each with two or three plain sentences and what the client receives at that stage. Animated vertical timeline with a glowing progress line.
- Four commitments in cards: honest scoping, visible progress, quality built into delivery, no orphaned systems (documentation, handover and support planned before launch).

## CONTACT
- A polished two-column layout: left side with a short pitch, the email address info@bluedune.tech (click to copy, with a small "Copied" confirmation), the line "We reply within one business day. Working week: Sunday to Thursday, Gulf Standard Time.", and a line inviting agencies and consultancies who need an engineering partner. Right side: the brief form.
- Form fields: name, work email, company, what you need (select: Data platform or pipelines, AI or RAG system, Automation or agents, Analytics or forecasting, Web or API product, Mobile or computer vision, Not sure yet), rough timeline (select), message, consent checkbox linking to Privacy.
- Submit via **Web3Forms** (https://api.web3forms.com/submit) using fetch with JSON. Put the access key in an environment variable (PUBLIC_WEB3FORMS_KEY) and read it at build time; TODO comment to add the real key. Include a hidden honeypot field, client-side validation, a loading state, and friendly inline success and error messages (no page reload). On failure show the direct email address as a fallback.
- No phone, WhatsApp or social links.

## PRIVACY
A short plain-language privacy page: what the contact form collects (name, email, company, message), that it is used only to reply, that it is delivered through a form service and email, retention, and how to request deletion by emailing info@bluedune.tech. Add a TODO to have it reviewed.

## Technical and quality requirements
- Semantic HTML, accessible (WCAG AA contrast, keyboard navigation, visible focus, alt text, ARIA only where needed, reduced-motion support).
- Lighthouse 95+ on Performance, Accessibility, Best Practices and SEO. Optimise images (convert logos to WebP/AVIF where sensible and keep PNG fallbacks), lazy-load below-the-fold content, no layout shift.
- Per-page meta titles and descriptions, Open Graph and Twitter tags (use the stacked logo on a navy background for the social image; generate it), canonical URLs, sitemap.xml, robots.txt, JSON-LD Organization schema (name, url, logo, email only), favicons from /public/brand/.
- Structure the layout with CSS logical properties (margin-inline, padding-inline) so a right-to-left Arabic version can be added later. English only for now.
- Custom 404 page that matches the design.
- A README explaining local setup, the environment variable, and deployment to Cloudflare Pages (build command, output directory, custom domain steps).

## Working method
First summarise the plan, the design system (colours, type scale, components) and the file structure. Then build, preview every page on desktop and mobile widths, and fix visual or accessibility problems. At the end, list every TODO I must complete and any content you were unsure about.
