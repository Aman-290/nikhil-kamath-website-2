# Nikhil Kamath Tribute Site — v2 Implementation Plan
**Brokai Labs | Status: Active**

---

## Guiding Principles
1. **One metaphor.** The line is the biography. Everything serves it.
2. **Complexity is a bug.** If a section needs explanation, it needs editing.
3. **Show, don't celebrate.** No hagiography. Facts carry the weight.
4. **Chartreuse earns its appearances.** It signals elevation, not decoration.

---

## Tools & Plugins Installed

| Tool | Status | Purpose |
|---|---|---|
| `@gsap/react` | ✅ Installed | `useGSAP()` hook for React 18 StrictMode-safe animations |
| `ui-ux-pro-max` skill | ✅ Already active | Visual decisions, dark-mode component patterns |
| `context7` MCP | ✅ Configured in `.mcp.json` + `settings.json` | Live GSAP/Framer/Lenis API docs |
| `playwright` MCP | ✅ Already active | Visual verification via screenshots |
| `simplify` skill | ✅ Available | Code quality pass after each phase |

---

## Phase Overview

| Phase | Focus | Files Touched | Risk |
|---|---|---|---|
| **1** | Setup & Deletions | EasterEggManager, useEasterEgg, RentOwnToggle, ThePlateau | Low |
| **2** | ChartSpine Fix | ChartSpine.jsx, chart-milestones.json | High |
| **3** | Origins Redesign | Origins.jsx | Medium |
| **4** | FivePhases Distill | FivePhases.jsx | Low |
| **5** | ThePlateau Chess | ThePlateau.jsx, ChessAccuracyChart | Low |
| **6** | TheConversations | TheConversations.jsx, PodcastWall archive | Medium |
| **7** | JumpNav | JumpNav.jsx (new), App.jsx, all sections (add IDs) | Medium |
| **8** | ThePerson Addition | ThePerson.jsx | Low |
| **9** | Global Editorial Pass | All section JSX files | Low |
| **10** | Chartreuse Audit | index.css + all JSX | Low |
| **11** | Mobile Pass | All sections, JumpNav | Medium |

---

## Phase 1 — Setup & Deletions
**Goal:** Remove dead weight. No breakage risk. Do this first so subsequent phases aren't tangled with removed code.

### Tasks

- [ ] **1.1** Delete `RentOwnToggle.jsx`
  - File: `src/components/ui/RentOwnToggle.jsx`
  - Action: Delete file entirely.

- [ ] **1.2** Remove RentOwnToggle from ThePlateau
  - File: `src/components/sections/ThePlateau.jsx`
  - Remove: import statement for `RentOwnToggle`
  - Remove: The entire "Rent vs Own Toggle Controversy" `<div>` block (lines ~140–155)
  - Remove: The "The Real Estate Shift" heading and surrounding container

- [ ] **1.3** Reduce Easter Eggs to 3 in `useEasterEgg.js`
  - File: `src/hooks/useEasterEgg.js`
  - **Keep** only these `EGG_IDS`:
    - `PHONE_FLUSH` (Egg #5)
    - `MATRIARCH_VEENA` (Egg #8)
    - `BIRTH_CERT` (Egg #9)
  - Remove all other EGG_IDS constants

- [ ] **1.4** Remove Easter Egg listeners from `EasterEggManager.jsx`
  - File: `src/components/layout/EasterEggManager.jsx`
  - **Remove** listeners/logic for:
    - Konami code (GTA loading screen, Egg #2)
    - Midnight detector (Egg #3)
    - Last-Sunday grayscale (Egg #4)
    - "e2e4" keyboard terminal (Egg #1)
    - "marsoft" keyword ticker (Egg #11)
    - BE HERE NOW font transform (Egg #7)
    - Dog/Labrador cursor inactivity (Egg #6)
    - Bryan Johnson scroll velocity (Egg #12)
  - **Keep** listeners for: Phone flush click, Veena click, Birth cert hover
  - Remove `EasterEggTracker` counter display from `Finale.jsx` ("You've found N of 12")

- [ ] **1.5** Remove `EasterEggOverlays.jsx` overlays for removed eggs
  - File: `src/components/layout/EasterEggOverlays.jsx`
  - Remove: GTA overlay, Midnight overlay, Terminal overlay, Marsoft ticker overlay
  - Keep: Phone Flush overlay, Matriarch overlay trigger, Birth Cert overlay

### Review Checkpoint 1
- Dev server loads without console errors
- ThePlateau section renders with only the chess anomaly content
- No "RentOwnToggle" references remain in codebase (`grep -r "RentOwnToggle" src/`)
- Easter egg count: exactly 3 active

---

## Phase 2 — ChartSpine Fix (Critical)
**Goal:** Replace random SVG generation with deterministic milestone-mapped path. This is the most technically complex phase.

### Tasks

- [ ] **2.1** Audit `chart-milestones.json`
  - File: `public/assets/data/chart-milestones.json`
  - Verify it contains year, value, label, and section-id fields for all milestones
  - Add `sectionId` field to each milestone so ChartSpine can read scroll positions
  - Add `type: "controversy"` field to 2021 chess scandal entry

- [ ] **2.2** Rewrite coordinate calculation in `ChartSpine.jsx`
  - File: `src/components/chart/ChartSpine.jsx`
  - Replace `Math.random()` generation with deterministic mapping:
    - Load `chart-milestones.json` via `fetch`
    - Map each milestone's net-worth value to X using **logarithmic scale**:
      `x = minX + (maxX - minX) * Math.log(value / 8000) / Math.log(270000000000)`
    - Map each milestone's year to Y by reading the scroll offset of its `sectionId` element
    - Generate smooth cubic bezier path between milestones using `d3-shape` path or manual `C` commands
  - Add small controlled volatility **between** milestones (not at them) for organic chart feel

- [ ] **2.3** Replace `useGSAP` from `@gsap/react`
  - File: `src/components/chart/ChartSpine.jsx`
  - Replace raw `gsap.context()` pattern with `useGSAP()` from `@gsap/react`
  - ScrollTrigger animation logic stays the same, just wrapped in `useGSAP`

- [ ] **2.4** Implement gray → chartreuse color transition at 2010
  - In the SVG `<defs>`, add `<linearGradient id="lineGradient" gradientUnits="userSpaceOnUse" x1="0" y1="[y2003]" x2="0" y2="[y2010]">`
  - Stops: `y2003` = `#4B5563`, `y2010` = `#D4FF00`
  - After 2010: full `#D4FF00` — split the path into two `<path>` elements (pre-2010 gray, post-2010 chartreuse) or use a gradient that covers full height with appropriate stops

- [ ] **2.5** Add 2021 controversy dip
  - At the 2021 milestone coordinate, add a deliberate negative X-delta (~15px left) before snapping back
  - Render a small `#EB5757` circle at this point (not chartreuse)
  - Add label: `"2021 · The Anomaly"` in `font-mono text-[9px]`
  - All other milestone nodes remain white/chartreuse pulsing circles

- [ ] **2.6** Verify mobile collapse
  - On `< 768px`: line width = 2px stroke, no milestone labels, left edge position confirmed

### Review Checkpoint 2
- Screenshot at full scroll: line starts muted gray, transitions to chartreuse at the Zerodha section
- 2021 node is red, all others are white/chartreuse
- No `Math.random()` anywhere in ChartSpine.jsx
- Re-render does not cause line to jump/regenerate (deterministic)

---

## Phase 3 — Origins Redesign
**Goal:** Split 4 emotional beats into 2 clear sub-sections. Add chess visual anchor.

### Tasks

- [ ] **3.1** Add section ID to Origins
  - File: `src/components/sections/Origins.jsx`
  - Add `id="section-origins"` to the `<section>` element

- [ ] **3.2** Add visual break between Family and Chess sub-sections
  - After the Father/Mother two-column grid (currently ends ~line 121), add a full-width divider:
    - A single horizontal `<div>` with `h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24`
    - Followed by a centered label: `font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase` reading `"The other education"`

- [ ] **3.3** Redesign chess sub-section
  - Replace current chess prose block with full-width dark panel:
    - `background-image: url('/assets/images/chess-board-dramatic.webp')` at 8% opacity
    - `cursor: url('/assets/icons/chess-knight-cursor.svg') 16 16, auto` on hover of this panel only
    - **Kasparov ambient quote** behind content: absolute positioned, Cormorant Garamond italic, `text-[8rem]`, `opacity-[0.05]`, `select-none pointer-events-none`, clipped to panel bounds:
      *"Chess teaches you how to work under a structure, in a system, but yet try and be creative within that system."*
    - **Foreground headline** in Clash Display, centered, large:
      `"He dropped out to be a chess player. He became a trader instead. The pattern was the same."`
    - **Three fragmented lines** below headline, each on its own row, Satoshi regular, `text-white/50`, centered, staggered reveal:
      ```
      Age 5.  First game.
      Age 14. National level.
      Age 15. Out of school. Out of chess. Into the market.
      ```

- [ ] **3.4** Remove "Lesson 1, Lesson 2" style formatting
  - Audit Origins.jsx for any instructional list formatting
  - Ensure the school/dropout content (6/100 section) reads as flowing narrative, not enumerated lessons

- [ ] **3.5** Knight's L-shaped wipe — transition from Origins to TheFlush
  - File: `src/components/sections/TheFlush.jsx`
  - Wrap the section's entry in a Framer Motion `motion.div` with custom `variants`:
    ```js
    variants={{
      hidden: { clipPath: 'inset(0 100% 100% 0)' },
      visible: { clipPath: 'inset(0 0% 0% 0)',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }
    }}
    ```
  - This creates the L-shaped reveal (right-then-bottom wipe). Used **only once** on this transition.

### Review Checkpoint 3
- Origins chess panel shows faint chessboard image background
- Chess cursor activates on hover of the chess panel only
- The Kasparov quote is visible as faint ambient text
- TheFlush section entry has the L-shaped wipe animation
- No "Lesson 1/2/3" text anywhere in Origins

---

## Phase 4 — FivePhases Distill
**Goal:** Keep horizontal scroll architecture. Rewrite card content to single-punch format. Add distinct visual treatments per phase.

### Tasks

- [ ] **4.1** Rewrite each card's text content
  - File: `src/components/sections/FivePhases.jsx`
  - Apply the single-punch format to the `phases` data array:

  | Phase | Large Num | Bold Line | Body |
  |---|---|---|---|
  | 01 | PENNY STOCKS | "Blind luck. Both ways." | Marsoft: ₹4 → ₹20. No reason. He was hooked anyway. |
  | 02 | FUNDAMENTALS | "Companies are sentiment." | Benjamin Graham was right about value. Wrong about timing. |
  | 03 | TECHNICALS | "The signal arrives late." | By the time the chart shows the move, it's already over. |
  | 04 | QUANTITATIVE | "55% post-tax. Year on year." | Pair trading. Delta hedging. Kamath & Associates. No MBA required. |
  | 05 | SENTIMENT | "Understand the humans." | Promoter behavior. Geopolitical shifts. The market is people. |

- [ ] **4.2** Add phase number display
  - In each card, add a large `01` / `02` etc. in Clash Display, `text-[6rem]`, `text-white/[0.06]`, positioned absolute top-right of card. Purely decorative.

- [ ] **4.3** Add distinct visual backgrounds per card
  - Phase 01 (Penny Stocks): Animated noise dots — CSS `@keyframes` with 20 small `div` elements, 2px, low opacity, random drift
  - Phase 02 (Fundamentals): Horizontal ledger lines — CSS `repeating-linear-gradient(transparent, transparent 31px, rgba(255,255,255,0.04) 31px, rgba(255,255,255,0.04) 32px)`
  - Phase 03 (Technicals): Single static SVG candlestick group (3 candles) at `opacity-[0.08]` positioned bottom-right of card
  - Phase 04 (Quantitative): JetBrains Mono faded code text — `position: absolute`, `opacity-[0.05]`, `select-none`: `"correlation(A,B) = 0.87 mean_revert() delta_hedge()"`
  - Phase 05 (Sentiment): Radial gradient from center, `rgba(212,255,0,0.04)` at core, fading to transparent

### Review Checkpoint 4
- Each of 5 cards has distinct background texture
- Card text is punchy — no sentence exceeds 2 lines of body copy
- Phase numbers visible as faint watermarks
- Horizontal scroll still works on desktop; vertical stack on mobile

---

## Phase 5 — ThePlateau Chess Polish
**Goal:** Chess cursor, algebraic notation labels, Kasparov ambient text behind chart.

### Tasks

- [ ] **5.1** Add section ID
  - `id="section-plateau"` on `<section>` element in ThePlateau.jsx

- [ ] **5.2** Update section headline
  - Change from: `"Every great line has a correction."`
  - Change to:
    ```
    "Every great chart
    has one anomaly."
    ```

- [ ] **5.3** Apply chess cursor to entire ThePlateau section
  - Add inline style or Tailwind `cursor-[url('/assets/icons/chess-knight-cursor.svg')_16_16,auto]` to the `<section>` element
  - Fallback: `cursor: crosshair` if SVG cursor fails to load

- [ ] **5.4** Replace timeline step labels with algebraic notation
  - In the three-act timeline (lines ~95–133 in ThePlateau.jsx), replace the `<span>` labels:
    - `"The Execution"` → `e2-e4 · June 13, 2021`
    - `"The Fallout"` → `Nf3 · Chess.com ban`
    - `"The Resolution"` → `0-0 · 24 hours later`
  - Same visual treatment (`font-mono text-[10px] tracking-[0.2em] uppercase`)

- [ ] **5.5** Add Kasparov ambient quote behind ChessAccuracyChart panel
  - In the left panel of the chess card, add an absolute-positioned block behind the chart:
    - Cormorant Garamond italic
    - `text-[1.1rem]`, `opacity-[0.08]`, `text-white`
    - Content: *"The game is not about the pieces. It's about the positions you never see coming."*
    - `pointer-events-none select-none`

### Review Checkpoint 5
- Chess cursor active across full ThePlateau section
- Timeline labels show `e2-e4`, `Nf3`, `0-0` notation
- Ambient quote visible at very low opacity behind chart
- Section title updated to "Every great chart / has one anomaly."

---

## Phase 6 — TheConversations Overhaul
**Goal:** Remove 15-card PodcastWall. Replace with single image + three stat blocks + Bryan Johnson footnote.

### Tasks

- [ ] **6.1** Add section ID
  - `id="section-conversations"` on the `<section>` element

- [ ] **6.2** Archive PodcastWall (do not delete)
  - File: `src/components/ui/PodcastWall.jsx`
  - Rename to `PodcastWall.jsx.archived` OR add `// ARCHIVED` comment at top and remove from import
  - Remove `import PodcastWall` and `<PodcastWall />` from `TheConversations.jsx`

- [ ] **6.3** New layout: two-column hero block
  - Left column (60% width on desktop, full width mobile):
    - `wtf-podcast-studio.webp` — full height, `object-cover`
    - Framer Motion `whileInView` scale: `1 → 1.04` over 8s (Ken Burns)
    - Gradient overlay: `bg-gradient-to-r from-[#050505] via-transparent to-transparent`
  - Right column (40% width):
    - Keep existing headline: `"He records everything on one day per month."`
    - Keep existing philosophy text (the "curious learner" paragraph — it's the best writing here)
    - Keep the 2.08M / 987M stat blocks (already built, keep as-is)

- [ ] **6.4** Three defining stat blocks below the two-column layout
  - Full width, three equal columns, separated by `border-r border-white/10`
  - Each column: label on top (`font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase`), value below (Clash Display, large)
  - Content:
    - Col 1: `PM NARENDRA MODI` / `First-ever podcast appearance`
    - Col 2: `7,000,000` / `Views. Elon Musk episode. Days.`
    - Col 3: `ONE DAY` / `Per month. That's the operation.`

- [ ] **6.5** Bryan Johnson footnote
  - Below the stat blocks, one line, full width, centered:
  - `font-satoshi italic text-white/30 text-sm`
  - Content: *"Bryan Johnson walked out mid-episode. Cited Mumbai air quality. Called Nikhil a courteous host."*

### Review Checkpoint 6
- No PodcastWall renders anywhere
- Studio image visible with Ken Burns animation
- Three stat blocks display correctly on desktop and stack on mobile
- Bryan Johnson footnote present at bottom

---

## Phase 7 — JumpNav (New Component)
**Goal:** Sticky vertical dot-bar, right side, era labels on hover, scroll on click.

### Tasks

- [ ] **7.1** Add `id` attributes to all target sections
  - `id="section-origins"` → Origins.jsx
  - `id="section-flush"` → TheFlush.jsx
  - `id="section-fake"` → TheFake.jsx
  - `id="section-phases"` → FivePhases.jsx
  - `id="section-spike"` → TheBigSpike.jsx
  - `id="section-plateau"` → ThePlateau.jsx (already done in Phase 5)
  - `id="section-ecosystem"` → TheEcosystem.jsx
  - `id="section-conversations"` → TheConversations.jsx (already done in Phase 6)
  - `id="section-giving"` → TheGiving.jsx
  - `id="section-person"` → ThePerson.jsx

- [ ] **7.2** Create `src/components/layout/JumpNav.jsx`
  - **Visibility:** Hidden until `scrollY > window.innerHeight` (past hero). Framer Motion `AnimatePresence` fade-in.
  - **Hidden on mobile:** `hidden md:flex` (only renders on `≥ 768px`)
  - **Position:** `fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3`
  - **Active detection:** `IntersectionObserver` on each section — whichever section is >50% in viewport = active dot
  - **Dot design:**
    - Inactive: `w-1.5 h-1.5 rounded-full border border-white/20 bg-transparent`
    - Active: `w-2 h-2 rounded-full bg-[#D4FF00] shadow-[0_0_8px_rgba(212,255,0,0.6)] border-none`
    - Transition: `transition-all duration-300`
  - **Hover label:** On dot hover, show era label to the left:
    - `absolute right-5 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full`
    - Framer Motion `initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}`
  - **Click handler:** `lenis.scrollTo('#section-xxx', { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4) })`
    - Access Lenis instance via a context or `window.__lenis` (check how `SmoothScrollWrapper.jsx` exposes it)

- [ ] **7.3** Register JumpNav in `App.jsx`
  - Import and render `<JumpNav />` inside `<SmoothScrollWrapper>`, after `<NoiseOverlay />`, before `<main>`
  - Only render when `preloaderComplete === true`

- [ ] **7.4** Dot map definition
  ```js
  const DOTS = [
    { id: 'section-origins',       label: 'Origins' },
    { id: 'section-flush',         label: 'The Hustles' },
    { id: 'section-phases',        label: 'The Market' },
    { id: 'section-spike',         label: 'Zerodha' },
    { id: 'section-plateau',       label: 'The Anomaly' },
    { id: 'section-ecosystem',     label: 'The Ecosystem' },
    { id: 'section-conversations', label: 'The Studio' },
    { id: 'section-giving',        label: 'The Pledge' },
    { id: 'section-person',        label: 'The Person' },
  ];
  ```

### Review Checkpoint 7
- JumpNav invisible in hero, appears after scrolling past it
- Active dot updates as sections scroll into view
- Hover label appears to the left of dot
- Click scrolls to correct section with smooth easing
- Completely absent on mobile (< 768px)

---

## Phase 8 — ThePerson: "On Changing One's Mind" Card
**Goal:** Add the paradox observation as character study, not controversy.

### Tasks

- [ ] **8.1** Add section ID
  - `id="section-person"` on `<section>` element in ThePerson.jsx

- [ ] **8.2** Add the card after the Tattoos sub-section
  - File: `src/components/sections/ThePerson.jsx`
  - After the tattoos reveal cards, add a new card block:
  - Container: `bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 mt-16 max-w-2xl`
  - Tag: `font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mb-6 block` — text: `"On changing one's mind"`
  - Body in Satoshi, `text-white/60`, fragmented line format:
    ```
    He preached renting for years.
    Wrote it. Said it in interviews. Meant it.

    Then bought 7,000 sq ft in Kingfisher Towers.
    Kiran Mazumdar-Shaw is his neighbour.
    ```
  - Quote block with `border-l-2 border-[#D4FF00] pl-6 my-6`:
    ```
    "With new information, if you are able to change your mind quickly —
    that has served me well."
    ```
  - Closing line, `text-white/40 text-sm italic`:
    ```
    He was right to change his mind. He was right to say so publicly.
    ```

### Review Checkpoint 8
- Card renders after tattoos section
- No "controversy" framing — reads as character observation
- Quote has chartreuse left border treatment

---

## Phase 9 — Global Editorial Pass
**Goal:** Apply the 5 editorial rules across all sections. Text edits only, no structural changes.

### Rules to enforce across all files:

1. **No paragraph > 3 sentences** without a break
2. **Quotes always in their own block** — never inline with body text
3. **Remove all instructional framing** — "What the game gave him instead:", "Below horizontal scroll:", etc.
4. **Numbers always in Clash Display or JetBrains Mono** — never Satoshi for financial figures
5. **Ban the word "just"** — audit all copy, remove it

### Tasks

- [ ] **9.1** Audit `TheEcosystem.jsx`
  - Remove "Wait, let me rephrase that." (line ~33)
  - Rewrite intro paragraph to direct statement

- [ ] **9.2** Audit `TheFake.jsx`
  - Remove "Lesson 1: / Lesson 2: / Lesson 3:" formatting if present
  - Replace with clean fragmented lines

- [ ] **9.3** Audit `TheBigSpike.jsx`
  - Verify all financial figures (₹10 lakh, ₹9,372 Crore, etc.) are in JetBrains Mono or Clash Display, not Satoshi

- [ ] **9.4** Audit `TheGiving.jsx`
  - All quotes in their own `border-l-2 border-[#D4FF00] pl-6` block
  - No inline quotes in paragraphs

- [ ] **9.5** Audit `ThePhilosophy.jsx`
  - Verify Cormorant Garamond is used for all quote screens
  - No stray instructional text

- [ ] **9.6** Global "just" removal
  - `grep -rn " just " src/components/sections/` — fix all instances

### Review Checkpoint 9
- No "just" in any section copy
- No instructional framing text visible in rendered site
- All financial figures are monospace or Clash Display

---

## Phase 10 — Chartreuse Color Discipline Audit
**Goal:** `#D4FF00` appears only where it signals elevation, not as general decoration.

### Permitted chartreuse appearances:
- Active milestone nodes on ChartSpine
- The chart line itself (post-2010)
- Active dot in JumpNav
- One pull-quote border per section (`border-l-2 border-[#D4FF00]`)
- The `2021 · The Anomaly` chart label (actually red, not chartreuse)
- CTA down-arrow in Hero
- Section-level accent pills that mark specific milestones (e.g., "Zerodha founding")

### Tasks

- [ ] **10.1** Audit every `text-[#D4FF00]`, `border-[#D4FF00]`, `bg-[#D4FF00]`, `shadow-[*chartreuse*]` in all JSX
  - Run: `grep -rn "D4FF00" src/components/`
  - For each hit, ask: *Does this earn chartreuse? Is it marking elevation?*
  - Replace non-earned instances with `text-white/60`, `border-white/20`, or `text-white/40` as appropriate

- [ ] **10.2** Ensure no viewport has more than 3 chartreuse elements simultaneously
  - Scroll through rendered site, screenshot each section
  - If > 3 visible chartreuse elements in one screen: reduce

### Review Checkpoint 10
- Chartreuse feels rare and meaningful
- Not used on generic hover states (switch to `border-white/20` hover)
- Not used on more than one decorative element per section

---

## Phase 11 — Mobile Pass
**Goal:** Every change made in phases 1–10 verified and corrected at 375px and 768px viewports.

### Tasks

- [ ] **11.1** ChartSpine mobile: confirm 2px stroke, left edge, no labels at < 768px
- [ ] **11.2** JumpNav: confirm completely hidden at < 768px
- [ ] **11.3** Origins chess panel: confirm full-width at mobile, ambient text still readable (or hidden if too noisy)
- [ ] **11.4** FivePhases: confirm GSAP matchMedia collapses to vertical stack on mobile — no horizontal scroll trap
- [ ] **11.5** TheConversations: confirm two-column layout stacks correctly, studio image collapses to top
- [ ] **11.6** ThePlateau: chess cursor not applied on mobile (CSS `@media` guard)
- [ ] **11.7** ThePerson "changing one's mind" card: full width on mobile, padding correct

### Review Checkpoint 11 (Final)
- Playwright screenshot at 375px: no horizontal overflow, no clipped text
- Playwright screenshot at 768px: transition breakpoints correct
- Playwright screenshot at 1440px: full desktop layout confirmed

---

## File Change Summary

### Modified Files
| File | Phases | Type of Change |
|---|---|---|
| `src/components/chart/ChartSpine.jsx` | 2 | Full rewrite of coordinate logic |
| `src/components/sections/Origins.jsx` | 3 | Chess panel redesign, ID added |
| `src/components/sections/TheFlush.jsx` | 3 | L-shaped wipe animation added, ID added |
| `src/components/sections/TheFake.jsx` | 7, 9 | ID added, editorial pass |
| `src/components/sections/FivePhases.jsx` | 4, 7 | Content rewrite, visual treatments, ID added |
| `src/components/sections/TheBigSpike.jsx` | 7, 9 | ID added, editorial pass |
| `src/components/sections/ThePlateau.jsx` | 1, 5, 7 | RentOwnToggle removed, chess polish, ID added |
| `src/components/sections/TheEcosystem.jsx` | 7, 9 | ID added, "rephrase" line removed |
| `src/components/sections/TheConversations.jsx` | 6, 7 | PodcastWall removed, new layout, ID added |
| `src/components/sections/TheGiving.jsx` | 7, 9 | ID added, editorial pass |
| `src/components/sections/ThePerson.jsx` | 8, 7, 9 | Card added, ID added, editorial pass |
| `src/components/sections/ThePhilosophy.jsx` | 9 | Editorial pass |
| `src/components/sections/Finale.jsx` | 1 | Easter egg counter removed |
| `src/components/layout/EasterEggManager.jsx` | 1 | 9 egg listeners removed |
| `src/components/layout/EasterEggOverlays.jsx` | 1 | Removed egg overlays |
| `src/components/layout/App.jsx` | 7 | JumpNav registered |
| `src/hooks/useEasterEgg.js` | 1 | EGG_IDS reduced to 3 |
| `public/assets/data/chart-milestones.json` | 2 | sectionId + controversy type fields added |
| `src/index.css` | 10 | Color discipline cleanup |

### Deleted Files
| File | Reason |
|---|---|
| `src/components/ui/RentOwnToggle.jsx` | Removed per PRD |

### New Files
| File | Phase | Purpose |
|---|---|---|
| `src/components/layout/JumpNav.jsx` | 7 | Sticky dot navigation |
| `.mcp.json` | Setup | context7 MCP server config |

---
