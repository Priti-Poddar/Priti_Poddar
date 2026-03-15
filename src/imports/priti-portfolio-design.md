Design a bold, personality-driven personal portfolio website for Priti Poddar,
a B.Tech CSE student, Full Stack Web Developer, and AI/Deep Learning researcher
from India. The style should be inspired by shanesayers.com — warm, human,
witty, and full of character. NOT a cold dark "hacker" portfolio. Think: a
brilliant girl who codes and also has a personality. Charismatic, warm, bold.

─────────────────────────────────────────
DESIGN SYSTEM
─────────────────────────────────────────

Color Palette (Warm, editorial, personality-rich):
- Background:        #F5F0E8  (Warm Parchment / Cream)
- Surface:           #EDE8DC  (Slightly darker cream for cards)
- Primary Accent:    #6B21A8  (Deep Violet — smart, powerful)
- Secondary Accent:  #EC4899  (Hot Pink — feminine energy)
- Tertiary:          #F97316  (Warm Orange — playful pop)
- Text Primary:      #1A1014  (Near Black, warm tint)
- Text Muted:        #6B6560  (Warm Gray)
- Border:            #D4CABC  (Subtle warm border)
- Highlight stripe:  #FDE68A  (Sticky-note yellow, used sparingly)

Typography (Big, editorial, full of character):
- Display Font:   "Instrument Serif" or "Playfair Display" — used HUGE
  for hero and section headings. Mix italic with regular for drama.
- Body Font:      "DM Sans" — friendly, readable, modern
- Accent/Label:   "Space Mono" or "JetBrains Mono" — for badges,
  numbered labels, and code snippets
- Size Scale:
  → Hero headline: 80–96px, mixed italic/regular, tight line-height
  → Section title: 48–56px
  → Card title: 22–26px
  → Body: 16–18px
  → Labels/mono: 12–14px uppercase tracked

Visual Style (Shane-inspired):
- Warm cream background throughout — NOT white, NOT dark
- Hand-drawn or illustrative accent elements (stars, arrows, 
  doodle underlines, wavy lines)
- Custom illustrated character: a cute girl with laptop/code vibes,
  floating or flying — used in hero (like Shane's rocket character)
- Bold black outlined pill badges for tech tags
- Oversized section numbers: "01", "02", "03" in large mono, muted
- Asymmetric layouts — text and images overlap, break the grid
- Sticky-note or torn-paper style callout boxes
- Scrolling marquee text strips (like "FULL STACK · DEEP LEARNING ·
  ACM MEMBER · OPEN TO WORK ·" repeating horizontally)
- Photography-style project thumbnails with slight rotation/tilt
- Thick black borders on select cards (editorial feel)
- Rounded corners: 12px standard, 999px for pills, 0px for bold cards

─────────────────────────────────────────
SECTIONS — 1440px DESKTOP FRAMES
─────────────────────────────────────────

━━━ NAVBAR ━━━
- Minimal, sticky top
- Left: "Priti." — Instrument Serif italic, large, violet
- Right: text links — About · Work · Research · Contact
- Far right: small outlined pill "Say Hello 👋"
- Background: transparent, turns cream with thin border on scroll
- NO hamburger unless mobile

━━━ SECTION 1: HERO ━━━
Full viewport height. Asymmetric layout with high energy.

Layout:
- Giant headline center-left (80–96px, Instrument Serif):
  Line 1: "building the web." (regular)
  Line 2: "teaching machines." (italic, violet colored)
  Line 3 smaller (24px, DM Sans, muted):
  "Full Stack Dev · AI Researcher · ACM Member · B.Tech CSE"

- Below headline: two buttons side by side:
  → "See My Projects →" — solid violet, rounded pill, bold
  → "Read My Research ↗" — cream with thick black border, bold

- Top-right floating element: custom illustrated girl character
  sitting on/riding a laptop or floating with code brackets around her,
  fun and whimsical — echoes Shane's rocket character
  Add a small looping GIF-style spin or float animation note

- Bottom-left: small rotating circular badge:
  "AVAILABLE FOR INTERNSHIPS · 2025 ·" in mono, circular text
  with a star in center

- Scattered around hero: tiny hand-drawn stars ✦, 
  a wavy underline under "machines", a small arrow pointing 
  to the CTA button

- Background: warm cream, one large violet blob shape 
  (very low opacity 6%) top right

━━━ SCROLLING MARQUEE STRIP ━━━
Full width, between hero and about.
Dark violet background, cream text:
"FULL STACK DEVELOPER · DEEP LEARNING · FEDERATED LEARNING ·
ACM STUDENT MEMBER · NODE.JS · REACT · MONGODB · PYTHON ·"
Repeating, smooth scroll left animation.
Text: Space Mono, 14px uppercase, letter-spacing wide.

━━━ SECTION 2: ABOUT ━━━
Label top-left: "01 / ABOUT ME" (mono, muted, small)

Layout: Two columns, asymmetric

Left column (wider):
- Large heading (56px, Instrument Serif italic):
  "who said developers can't have personality?"
- Body paragraph (18px, DM Sans):
  "Hi! I'm Priti — a CSE student who builds full-stack apps 
   by day and trains neural networks by night. I've built 
   everything from Airbnb-style platforms to stock trading 
   apps, and I'm currently researching Federated Learning 
   for my upcoming publication."
- Below: row of fun stat cards (black border, white fill, tilted slightly):
  → "6+ Projects Built"
  → "2 Publications"  
  → "ACM Member"
  Each card slightly rotated 1–3 degrees for playful feel

Right column:
- Photo frame — warm cream border, thick black outline, 
  slight tilt/rotation (-2 deg), like a polaroid
- Below photo: yellow sticky-note style box:
  "Currently: Writing my Federated Learning paper ✍️"

━━━ SECTION 3: SKILLS ━━━
Label: "02 / TECH STACK"

Layout: Chaotic-good tag cloud + illustrated zones

Heading (48px): "tools of the trade."

Three cluster zones with hand-drawn circle outlines grouping them:
Zone 1 — "Web Dev" (violet circle outline, dashed):
  React, Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, Tailwind
Zone 2 — "AI & Research" (pink circle outline, dashed):
  Python, TensorFlow, Deep Learning, Federated Learning, NumPy
Zone 3 — "Tools" (orange circle outline, dashed):
  Git, GitHub, Postman, VS Code, Figma

Each skill: black-outlined pill, cream fill, bold label + small icon
Vary sizes slightly — more important skills slightly larger
Scatter them organically within their zones, not in neat rows

━━━ SECTION 4: PROJECTS ━━━
Label: "03 / MY WORK"

Heading (56px, Instrument Serif):
"things I've built." (with a small hand-drawn arrow pointing right →)

Sub-text (DM Sans, muted):
"Full-stack apps, real problems, real users. Check the live demos."

Layout: Masonry-style grid, cards at slightly different heights

Project Card style:
- Thick black border (2px), cream background, 12px radius
- Project screenshot image at top (slightly tilted inside card, -1 to 1 deg)
- Project number: "01", "02" in large mono, top-left, muted
- Title: 22px, DM Sans Bold
- Tech pills: tiny black outlined pills below title
- One-liner description: muted, 14px
- Bottom: "View Live ↗" text link in violet + "GitHub →" icon

Four projects:
1. Wander-Lust — "Airbnb-style stays booking platform"
   Tags: Node.js · Express · MongoDB · EJS
2. Zerodha Clone — "Full-stack stock trading platform"
   Tags: React · Node.js · REST API · MongoDB
3. Cure-Corner — "Pharmacy & doctor appointment booking"
   Tags: Node.js · Express · MongoDB
4. Connectly — "Real-time social & chat platform"
   Tags: Socket.io · JavaScript · Node.js

Below grid: centered CTA:
"Want to see more? →" [View GitHub] button (outlined, black)

━━━ SECTION 5: RESEARCH ━━━
Label: "04 / RESEARCH"

Heading (56px): "published thoughts."
Subtext: "Academic contributions to AI and distributed systems."

Layout: Two large horizontal cards, stacked

Research Card style (editorial, bold):
- Left: big colored block (violet for card 1, pink for card 2)
  containing status badge + category label
- Right: content — title, abstract teaser, tags, status
- Status badges:
  → "📖 Book Chapter — Communicated" (amber background pill)
  → "🔬 Federated Learning Paper — Pending Publication" (teal pill)
- Card has thick black border, slight drop shadow (warm tinted)
- Bottom row: topic tags as small outlined pills

━━━ SECTION 6: "WHY WORK WITH ME?" ━━━
Label: "05 / STRENGTHS"
(Inspired by Shane's numbered reasons section)

Heading (48px): "why hire a girl who does both?"

Four numbered blocks, 2x2 grid:
01 — "Full Stack + AI"
     "Rare combo. I build the app AND the brain behind it."
02 — "Research-backed"
     "Published researcher in Federated Learning — 
      I don't just code, I think deeply."
03 — "ACM Member"
     "Part of the world's largest CS community."
04 — "Fast Learner"
     "From Node.js to Neural Networks — I go deep, fast."

Each block: number in giant mono (80px, muted), title bold, 
body text small, separated by a thin warm border line.

━━━ SECTION 7: CONTACT ━━━
(Inspired by Shane's "call me, baby" section)

Full-width section, cream BG.

Left column:
- Big playful heading (64px, Instrument Serif italic):
  "let's build something."
- Subtext: "Open to internships, research collabs, and 
  cool projects. Don't be shy — I don't bite (much)."
- Large illustrated phone/hand element (like Shane's flip phone), 
  or girl waving illustration
- Social links as large pill buttons: GitHub · LinkedIn · Email

Right column: 
- Contact form — clean, editorial style
  Inputs: cream background, thick black border on focus, 
  no box shadow, sharp and clean
  → Name, Email, Message
  → Send button: solid violet, full width, bold, 
    "Send it! →"

━━━ FOOTER ━━━
- Centered, minimal
- "Designed & Built by Priti Poddar ✦ 2025"
- Space Mono, small, muted
- Row of links: GitHub · LinkedIn · ACM Profile
- One tiny spinning star decoration ✦

─────────────────────────────────────────
ILLUSTRATIONS / ASSETS TO CREATE
─────────────────────────────────────────
- Hero character: cute illustrated girl floating with 
  laptop/code brackets — flat style, 2–3 colors max, 
  no face detail needed, just silhouette+outfit vibe
- Scattered decorative elements: hand-drawn stars ✦,
  wavy underlines, small arrows, doodle circles
- Sticky note component (yellow, slight rotation)
- Polaroid photo frame component
- Rotating badge circle (CSS or Figma Smart Animate)

─────────────────────────────────────────
COMPONENT STATES
─────────────────────────────────────────
- Buttons: Default / Hover (slight lift + shadow) / Active
- Project Card: Default / Hover (rotate corrects to 0deg + border thickens)
- Nav link: Default / Hover (violet underline slides in)
- Input: Default / Focus (black border, no glow)
- Skill pill: Default / Hover (fill flips to violet, text cream)

─────────────────────────────────────────
MOBILE FRAMES (375px)
─────────────────────────────────────────
- Hero: stacked, illustration above headline, 
  headline 48px, buttons stacked
- Marquee strip: same, just smaller
- Projects: single column, cards full width
- About: single column, photo above text
- Nav: hamburger → full screen overlay menu 
  with numbered links (01 Home, 02 Work, 03 About, 04 Contact)
  — dark violet BG, cream text, large type

─────────────────────────────────────────
FIGMA FILE STRUCTURE
─────────────────────────────────────────
Page 1: 🎨 Style Guide
  — Colors, typography scale, spacing tokens, 
    illustration assets, icon set

Page 2: 🖥️ Desktop (1440px)
  — One frame per section, named clearly
  — All using Auto Layout

Page 3: 📱 Mobile (375px)
  — All key sections adapted

Page 4: 🧩 Components
  — Buttons, cards, pills, inputs, badges,
    nav, footer, marquee strip
  — All with variants and hover states

Page 5: 🔗 Prototype
  — Linked flow: Navbar → sections
  — Hover states active on cards and buttons