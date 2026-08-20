# PRD — Pavitra "Our Sankalp" Landing Page

## Original Problem Statement
Build a standalone, international-standard "Our Sankalp" landing page for Pavitra, a movement for Bharat's upliftment. Six sections: Hero, The Thought Behind the Mission, Our Mission (Sankalp → Seva → Nirmaan → Swabhimaan), Our Belief (Dignity, Not Dependency), Founder's Sankalp (quote + 3 P's), Closing CTA (Join The Movement). Reference flow: dazzling-kitsune-eb866a.netlify.app. Rich immersive design with scroll animations and layered depth. Buttons decorative. No backend.

## Architecture
- Frontend-only React (CRA + craco), Tailwind CSS, framer-motion (scroll reveals, masked hero reveal, parallax), lenis (momentum smooth scroll), lucide-react icons.
- Fonts: Cormorant Garamond (display serif), Plus Jakarta Sans (body), JetBrains Mono (labels).
- Palette: warm sand #FAF7F2, terracotta #8C3218 / deep #702611, forest ebony #121614, saffron gold #D97706.
- Components in /app/frontend/src/components/landing/: Navbar, Hero, Marquee, Thought, Mission, Belief, Founder, ClosingCTA, Footer, ChapterTag.
- No backend, no database, no auth. Static content per problem statement.

## User Personas
- Visitors/supporters of the Pavitra movement learning its philosophy.
- Founder & team showcasing the manifesto publicly.

## Core Requirements (static)
1. Hero with kinetic masked line-by-line reveal — "This is not just an organisation. This is a sankalp for Bharat."
2. Chapter 02: five poetic path lines + "Pavitra is that path."
3. Chapter 03: Sankalp → Seva → Nirmaan → Swabhimaan progression cards (with Devanagari labels).
4. Chapter 04: three contrast rows (Not beneficiaries → participants, etc.)
5. Chapter 05: founder quote (Shri Pramod Kaushal), Read Full Founder Story button, 3 P's cards.
6. Chapter 06: Join The Movement CTA (decorative).
7. Slow editorial marquee, numbered manifesto chapters 01–06, grain overlay, parallax hero/thought imagery.

## Implemented (2026-08-19)
- Full landing page with all 6 chapters, lenis smooth scrolling, framer-motion reveals, parallax hero with arch-clipped heritage imagery, editorial marquee, glass navbar with chapter jump links, footer. Verified via screenshots of every section; no console errors.
- Re-themed to brand palette: royal purple (#5B2A86 / deep #3E1A5F / ebony plum #150F1E) + gold (#D4AF37), lavender-tinted Belief section.
- Aligned palette to home page design system (2026-08-20): deep purple #180F2C / #522B6A / #261242, gold #D4AF37 / light gold #E9C176 / dark gold #775A19, warm sand #F5ECD9.
- Mission section redesigned (v2): scroll-drawn golden vertical path with glowing icon nodes, alternating editorial phases, Devanagari labels in serif, closing chain line.
- Navbar rebuilt as site-level subpage menu: Home / Our Sankalp (active) / Products link to reference home site, Join The Movement CTA scrolls to #join.
- Footer rebuilt as site footer: brand column, Navigate column (Home, Our Sankalp, Products, Join), Manifesto chapter index 02–06, copyright bar.
- Logo placed in header and footer only, original colours preserved; readability on dark purple achieved via a soft blurred ivory "moonlight halo" behind the logo (no hard patch, no recolour). Removed from hero and closing CTA (2026-08-20).
- Footer rebuilt to mirror Shopify home (99vcjpt3hxku5gpy...shopifypreview.com): Movement / Participate / Shop / Reach columns, Where We Sit address (Rishikesh), "© 2026 Pavitra Swarojgar Kendra · Built for Bharat". Home/Products links now point to the Shopify preview URL.
- OPEN QUESTION RESOLVED: founder confirmed as Shri Jay Ukani (updated in Founder's Sankalp chapter).
- All section titles now gold: antique gold #775A19 on light sections, bright gold #D4AF37 (italic #E9C176) on dark sections, hero H1 included.
- Multi-page routing added (react-router-dom): "/" and "/our-sankalp" → Our Sankalp page; "/what-we-do" → What We Do page. Shared Navbar/Footer with route-aware active states. Lenis + ScrollToTop at app level.
- What We Do page (2026-08-20): hero (Our work begins with Bharat / Our vision reaches every community), Pavitra in Action (Think Pure / Act Responsible / Build Visible), Areas of Work (12 area cards), Pavitra Bharat Vikas (Gram Vikas / Nagar Vikas / Kosh cards with bullet lists + decorative Explore buttons), shared PageCTA (Purpose Needs Participation). Old ClosingCTA replaced by parametrized PageCTA.
- Impact page (2026-08-20) at /impact: hero (Trust must be visible / Progress must belong to people), Trust Must Be Visible (5 approach pillars as editorial rows), Impact Areas (9 cards), Impact Philosophy (rising staircase of 6 small actions + gold trust cascade), Future Impact Vision (6-item network grid, final item highlighted), PageCTA with buttonLabel prop (Be Part of the Impact). Navbar + Footer updated with Impact link and active states.
- Join The Movement page (2026-08-20) at /join-the-movement: hero (This is not just our sankalp / It can be yours too + Haath Badhayein, Bharat Banayein tagline + I Want to Join button), Why Join (5 "before" belief rows + closing blockquote), Who Can Join (5 role cards + tagline card), Ways to Join (4 large cards: Saathi / Partner for Purpose / Pragati Mitra / Vikas Partner with bullets + CTA buttons), PageCTA with tagline prop. Footer Join link routes to this page.
- Main menu rebuilt (2026-08-20) per user spec: Our Sankalp / What We Do / Impact / Join The Movement (gold accent) / Newsroom / Shop / Login / Language (EN + हिन्दी "soon" dropdown). Shop → Shopify #products, Login → Shopify /account. Menu shows on lg+; mobile shows logo + Join pill only (mobile drawer still backlog).
- Newsroom page (2026-08-20) at /newsroom: hero (A sankalp growing from thought to action), Latest from Pavitra (7 update category rows with "Soon" badges — placeholders until real news exists), Stories of Sankalp (6 story cards incl. founder notes for Shri Jay Ukani), Media & Press (6 dark cards), PageCTA (Stay Connected with the Movement / Follow Pavitra Updates). Navbar + Footer Newsroom links now internal with active state. All 5 sub-pages complete.
- Shop page (2026-08-20) at /shop: hero (Every product carries the spirit of Pavitra + Explore Products), Why Pavitra Products (5 philosophy rows), 6 Product Categories, Product Philosophy (dark statement section), Featured Products (6 SAMPLE/MOCKED product cards with icon tiles, category badges, purpose lines, ₹ prices, View Product buttons — no real product data/images yet), Shop CTA (Choose Products That Carry Purpose / Shop Pavitra). Navbar Shop + footer All Products now internal.
- Section redesigns (2026-08-20, user-chosen): "Where Pavitra Works" (What We Do) rebuilt as organic pill constellation — varied-size rounded chips with icons, hover blooms into purple with description reveal. "Ways to Join" (Join The Movement) rebuilt as accordion — four slim numbered rows with gold hairlines; click expands to reveal description, bullets, CTA (first open by default).
- Tone rebalance (2026-08-20): menu fonts enlarged (text-xs/sm) and darkened (#261242/#180F2C); all page heroes light sand with antique-gold kinetic headlines (#775A19, italics #B08D1E); closing PageCTA light sand with purple button; footer deep purple #180F2C with gold gradient hairline and halo'd logo; gradient shades between sections site-wide.
- Corrections pass (2026-08-20): all section numbers removed site-wide (chapter pills, hero "01" pills, "01/0X" metas, giant watermark numerals in 21 sections, CTA kicker prefixes); kickers now purple (#522B6A); titles enlarged site-wide (sub-page heroes to text-7xl, section H2s to text-5xl, CTA to text-6xl) and stacked above content (Mission, Belief, Founder, WWAreas, SHFeatured restructured); marquee removed from Our Sankalp (Marquee.jsx deleted); PageCTA now uses cropped logo globe emblem (/public/pavitra-globe.webp) instead of flower icon; edge gradients lengthened to h-40 with via-midpoints for smoother section blends.
- Sub-page heroes switched to light purple tone #ECE4F6 (2026-08-20), with matching purple fade into each page's first content section. Home hero unchanged (video).
- Mobile navigation (2026-08-20): slide-down drawer under the navbar with all six internal destinations (staggered rows, gold active dot), Login link, EN language badge; closes automatically on route change. Header shows Join pill + hamburger below lg breakpoint.
- What We Do edits (2026-08-20): "The Larger Identity / Pavitra Bharat Vikas" section removed entirely (component deleted). "Where Pavitra Works" redesigned from pill constellation to a two-column editorial numbered list (10 areas — Pavitra Kosh and Trust-Based Systems removed per request), hairline dividers, hover fills icon circle purple.
- Impact page edits (2026-08-20): Impact Areas cards now carry thematic approved photography (s1/s2/s4/s7/d1/d3/d6/d7 + city.jpg arches — all localized in /public/assets). Future Impact Vision redesigned as an orbit network: golden center "Bharat rises through collective action" with 5 satellite nodes connected by animated SVG lines and dashed gold ring, gentle float animation; stacked list fallback on mobile.
- Join page edits (2026-08-20): Why Join belief rows realigned to a fixed 3-column grid (word | before | word, right/centre/left aligned). Who Can Join cards redesigned with rising purple-fill hover effect — card floods purple, icon turns gold, a "Join as →" reveal slides up.
- JOIN FORMS LIVE (2026-08-20): backend POST /api/interest + GET /api/interest (MongoDB collection interest_submissions; fields name/email/phone/city/role/message/timestamp). JoinFormModal component — all 4 Ways-to-Join accordion buttons (Apply as Pavitra Saathi / Partner with Us / Register Interest / Explore Vikas Partnership) open a role-titled modal form; submissions save to MongoDB and show a "Shukriya" success state. Verified e2e (test submissions: Test Saathi, Asha Verma).
- Mid-tone rebalance (2026-08-20): one signature section per sub-page converted to mid-plum #3E2A5C (not full dark) — Mission golden path (Our Sankalp), Bharat Vikas (What We Do), Impact Philosophy (Impact), Ways to Join accordion (Join), Media & Press (Newsroom), Product Philosophy (Shop). Gold #D4AF37/#E9C176 titles on plum; white cards retained on plum for Vikas/Media. Gradient edge fades (h-24) blend each plum section into the light sections around it.
- APPROVED HOME PAGE BUILT (2026-08-20) at "/" from user's approved Shopify preview (nheb3m412gm42p5e...): video hero (approved mp4, transcoded to WebM VP9 + 720p MP4 fallback, local in /public/assets), Libre Caslon Text + DM Sans (.font-caslon), Thought pillars over forest image, Why Pavitra Exists, sticky 4-chapter scroll story (Sankalp→Swabhimaan with real photos), sticky 3-card focus fan-out, Dignity full-width parallax banner (d7.jpg), Founder quote card with real portrait (edited-photo.png = Shri Jay Ukani), sticky golden-arc join section (4 steps), real products grid (8 products, category filter pills, Add to basket links out to Shopify product pages, sold-out states), newsletter with India map bg (subscribe is LOCAL-ONLY mock, no backend). Our Sankalp moved to /our-sankalp only. All 20 approved assets localized in /app/frontend/public/assets/.
- Official Pavitra logo (webp, golden globe + purple wordmark) placed in navbar, hero kicker, closing CTA, footer (on ivory chips for contrast) and as favicon. Logo file: /app/frontend/public/pavitra-logo.webp.

## Backlog / Next Tasks
- P1: Wire "Join The Movement" to a pledge/join form (needs backend decision).
- P1: "Read Full Founder Story" — full story page or modal.
- P2: Mobile nav drawer (links hidden on small screens currently).
- P2: Home page + multi-page site matching reference Netlify flow.
- P2: Dark/light theme toggle.

## Credentials
None — no auth. /app/memory/test_credentials.md not applicable (static site).
