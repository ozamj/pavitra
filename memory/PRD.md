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

## Backlog / Next Tasks
- P1: Wire "Join The Movement" to a pledge/join form (needs backend decision).
- P1: "Read Full Founder Story" — full story page or modal.
- P2: Mobile nav drawer (links hidden on small screens currently).
- P2: Home page + multi-page site matching reference Netlify flow.
- P2: Dark/light theme toggle.

## Credentials
None — no auth. /app/memory/test_credentials.md not applicable (static site).
