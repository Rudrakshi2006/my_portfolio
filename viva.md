# 🎬 Viva & Technical Interview Guide — Rudrakshi's Cinematic Portfolio

> **Project Title:** Cinematic Streaming-Themed Developer Portfolio  
> **Developer:** Rudrakshi Bhandekar (CSE @ SIT Nagpur & Data Science @ IIT Madras)  
> **Core Stack:** React, Vite, JavaScript (ES6+), Framer Motion, Vanilla/Tailwind CSS, Web Audio API  
> **Concept:** A Netflix / OTT streaming platform-inspired interactive web application where projects are treated as "Originals", education/experience as "Seasons & Episodes", and achievements as "Awards & Recognition".

---

## 📌 Table of Contents
1. [Project Overview & Key Architecture](#1-project-overview--key-architecture)
2. [Complete File-by-File Explanation](#2-complete-file-by-file-explanation)
   - [Root Configuration & Setup Files](#root-configuration--setup-files)
   - [Application Entry & Core (`src/`)](#application-entry--core-src)
   - [UI Components (`src/components/`)](#ui-components-srccomponents)
   - [Data Layer (`src/data/`)](#data-layer-srcdata)
   - [Custom Hooks (`src/hooks/`)](#custom-hooks-srchooks)
   - [Assets & Public Files (`public/`)](#assets--public-files-public)
   - [Build Scripts (`scripts/`)](#build-scripts-scripts)
3. [Component Hierarchy & Data Flow](#3-component-hierarchy--data-flow)
4. [Key Technical Features & Implementations](#4-key-technical-features--implementations)
5. [Top 20 Viva Questions & Model Answers](#5-top-20-viva-questions--model-answers)

---

## 1. Project Overview & Key Architecture

### Why this design?
Traditional portfolios follow a linear resume format. This portfolio transforms personal milestones into a **cinematic streaming service (Netflix UI/UX)**:
- **"Who's Watching?" Profile Selector:** Allows recruiters, engineers, or casual visitors to pick their persona, customizing the display sequence.
- **"TA-DUM" Sound & Opening Sequence:** Recreates the immersive startup feel of an OTT app using synthetic sound synthesis (Web Audio API) without external heavy MP3 files.
- **Horizontal Rails & Card Hover Physics:** Smooth carousel scrolling, card zoom on hover, and cinematic overlays.
- **Modal Deep Dives:** Detailed project view resembling Netflix's "More Info" dialog with tech stack tags, preview clips, and direct GitHub links.

---

## 2. Complete File-by-File Explanation

### Root Configuration & Setup Files

| File Name | Purpose & Functionality |
| :--- | :--- |
| **`index.html`** | The single HTML page of the SPA (Single Page Application). Sets up SEO metadata (OG tags, Twitter card), preloads the high-resolution portrait image, imports Google Fonts (`Bebas Neue`, `Instrument Serif`, `Inter`), and mounts `<div id="root"></div>`. |
| **`vite.config.js`** | Vite bundler configuration. Integrates `@vitejs/plugin-react` for Fast Refresh and JSX compilation. |
| **`package.json`** | Project manifest. Declares dependencies (`react`, `react-dom`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`) and npm scripts (`npm run dev`, `npm run build`, `npm run preview`). |
| **`package-lock.json`** | Locks the exact versions of all installed npm dependencies to guarantee consistent builds across different machines. |
| **`.gitignore`** | Specifies files that Git must ignore: `node_modules`, `dist`, local environment files, and large media files (e.g. `*.mp4`). |
| **`README.md`** | Project documentation containing local setup commands, feature overview, and project context. |
| **`JAVASCRIPT_PRACTICALS.md`** | Notes highlighting pure JavaScript core concepts implemented across the project (arrays, destructuring, promises, DOM events). |
| **`UPDATED_CONTENT.md`** | Detailed changelog and record of portfolio facts, projects, credentials, and resume updates. |
| **`MISSING_DETAILS.txt`** | Status checklist documenting completed and optional portfolio fields. |

---

### Application Entry & Core (`src/`)

| File Name | Purpose & Functionality |
| :--- | :--- |
| **`src/main.jsx`** | The JavaScript entry point. Uses `ReactDOM.createRoot()` to mount `<App />` onto `document.getElementById('root')` wrapped in React's `StrictMode`. |
| **`src/App.jsx`** | The root application controller. Manages top-level application states: active profile (`profileId`), current viewing stage (`opening` → `profiles` → `home`), active modal popups (`project`, `resume`), audio and smooth scroll providers. Employs React code-splitting via `React.lazy()` for performance. |
| **`src/index.css`** | Global stylesheet. Configures CSS custom properties (color variables, cinematic deep-black palette, Crimson red accent `#e50914`), custom film-grain overlays (`.grain`), typography classes, and custom scrollbar styles. |

---

### UI Components (`src/components/`)

| Component | Role & Technical Details |
| :--- | :--- |
| **`Navbar.jsx`** | Fixed top navigation bar. Includes the signature brand logo, quick navigation links (Originals, Seasons, Skills, Achievements), audio mute/unmute toggle, and the current profile avatar with quick switch trigger. Changes background opacity on scroll. |
| **`Hero.jsx`** | The "Billboard" / Banner section at the top of the home view. Displays Rudrakshi's title, key tags (AI/ML, Full-Stack, IoT), bio synopsis, dynamic CTA buttons (**"▶ Play Intro"**, **"📄 View Resume"**, **"Explore Projects"**), and a layered portrait with gradient lighting. |
| **`OpeningSequence.jsx`** | Fullscreen intro animation replicating a streaming service brand reveal. Features animated glowing typography, cinematic light bar wipes, and optional audio chime before automatically advancing to profile selection. |
| **`ProfileSelector.jsx`** | "Who's Watching?" interactive screen. Lets the visitor select between roles (e.g., *Recruiter / Hiring Manager*, *Software Engineer*, *Curious Explorer*). Saves user choice in `sessionStorage` and adjusts section priorities. |
| **`PlayIntro.jsx`** | Fullscreen highlight reel / story slide deck. Animates through key achievements and career highlights slide-by-slide with progress indicator bars and keyboard navigation (`Space` to pause, `Arrows` to navigate, `Esc` to exit). Lazy-loaded on demand. |
| **`About.jsx`** | Biography section designed like an OTT series overview. Highlights dual-degree pursuit (CSE @ SIT Nagpur + Data Science @ IIT Madras), research interests, patent publication highlights, and core philosophy. |
| **`ContinueWatching.jsx`** | "Continue Watching" horizontal rail. Shows key quick-access cards with animated watch-progress bars (e.g., Featured Research, Agriculture Patent, CycleCura, Top Projects). |
| **`Originals.jsx`** | "Netflix Originals" showcase rail. Displays flagship software engineering and AI projects (DocFlow, CycleCura, Crop Yield Predictor, Research Topic Recommender) as vertical/horizontal media cards with badge tags. |
| **`ProjectCard.jsx`** | Reusable interactive card for a project. Features hover zoom physics, poster thumbnail, title, technologies list, and an info button that triggers `ProjectModal`. |
| **`ProjectModal.jsx`** | Comprehensive project detail overlay. Displays architecture details, problem statement, key features, live demo button, source code link, and screenshots. Lazy-loaded on click. |
| **`TopPicks.jsx`** | Curated recommendations section ("Top 10 Today" style). Ranks Rudrakshi's top technical accomplishments, patents, and standout repositories. |
| **`Seasons.jsx`** | Academic and career timeline formatted as "Seasons" (e.g., *Season 1: Foundation*, *Season 2: Innovation & Patents*, *Season 3: Research & AI*). |
| **`EpisodeCard.jsx`** | Sub-component inside `Seasons.jsx`. Represents individual milestones, internships, or academic semesters with duration, description, and key deliverables. |
| **`Skills.jsx`** | Interactive tech-stack section organized by "Genres" (Frontend, Backend, AI/ML, Cloud/DevOps, Programming Languages, Databases) with animated tags and proficiency indicators. |
| **`Achievements.jsx`** | "Awards & Recognition" gallery featuring published patents, IEEE TEMSMET 2025 conference paper, national hackathon accomplishments, and official credentials. |
| **`ResumeViewer.jsx`** | Embedded resume preview section featuring quick summaries of education, experience, and publications with a direct "Download PDF" button. |
| **`ResumeModal.jsx`** | Fullscreen PDF modal viewer that renders the verified resume document (`Rudrakshi_Bhandekar_Resume.pdf`) with zoom and download actions. |
| **`FinalCTA.jsx`** | "End Credits" footer section. Includes a contact card, direct mail link, LinkedIn/GitHub links, copyright notice, and smooth "Back to Top" scrolling. |
| **`CustomCursor.jsx`** | Custom cinematic mouse pointer. Displays a trailing fluid ring with dynamic contextual text (e.g., changes to "PLAY", "VIEW", "DRAG" when hovering over buttons or cards). Hidden on mobile devices. |
| **`Rail.jsx`** | Reusable horizontal scrolling container with smooth touch drag, wheel support, and left/right carousel arrows. |
| **`Poster.jsx`** | Reusable movie poster-style card with subtle 3D tilt hover physics, title banner, and rating/category badges. |
| **`Scene.jsx`** | Reusable container wrapper that handles viewport scroll triggers (`whileInView`) and provides cinematic section backdrop vignettes. |
| **`fx.jsx`** | Animation and audio utility toolkit. Exports Framer Motion easing curves (`EASE`), transition presets, and a Web Audio API synthetic chime generator for the intro sound. |

---

### Data Layer (`src/data/`)

| File Name | Purpose & Functionality |
| :--- | :--- |
| **`portfolio.js`** | **The Single Source of Truth for the entire application.** Contains structured JSON/JS data objects for: profile bio, education history, work experience, project list (with descriptions, tech stacks, and links), patent publications, research papers, certificates, viewer profile configurations, and highlight reel slides. Decouples content from UI presentation. |

---

### Custom Hooks (`src/hooks/`)

| Hook | Purpose & Technical Explanation |
| :--- | :--- |
| **`smoothScroll.jsx`** | Provides `SmoothScrollProvider` and custom hooks `useSmoothScroll()` and `useScrollLock()`. Manages silky-smooth scroll physics, programmatic smooth navigation to sections, and locks background scroll during active modal popups. |
| **`sectionProgress.js`** | Tracks the active scroll percentage through a specific DOM element using scroll event listeners and `getBoundingClientRect()`. Used to animate progress bars. |
| **`useMedia.js`** | Custom React hooks for responsive design and accessibility: `useMediaQuery()` for dynamic screen sizes, and `useReducedMotionPref()` to respect user OS accessibility preferences (`prefers-reduced-motion`). |

---

### Assets & Public Files (`public/`)

| Subfolder / File | Purpose & Contents |
| :--- | :--- |
| **`public/assets/`** | Contains optimized responsive portraits (`portrait-420.webp`, `portrait-720.webp`, `portrait-1100.webp`), background cutout transparent PNGs, social media share preview (`og-image.jpg`), and IEEE TEMSMET 2025 presentation photo. |
| **`public/certificates/`** | Contains official PDF/JPEG credentials (`credential_1.pdf` through `credential_8.jpeg`) linked dynamically to the achievements and credentials modal. |
| **`public/documents/`** | Official academic documents: `Rudrakshi_Bhandekar_Resume.pdf`, `CycleCura_Patent_Publication.pdf`, and `Agriculture_Patent_Publication.pdf`. |
| **`public/favicon.svg`** | SVG vector browser favicon matching the streaming logo. |
| **`public/project-catalog.json`**| Machine-readable JSON catalogue of all projects for external indexing or API-like fetching. |

---

### Build Scripts (`scripts/`)

| Script | Purpose & Functionality |
| :--- | :--- |
| **`rebuild_assets.py`** | Python Pillow (PIL) script used to process the source `photograph.png` into optimized WebP formats (420px, 720px, 1100px) and generate the social share card (`og-image.jpg`). |
| **`build-images.mjs`** | Node.js ES module utilizing the `sharp` image processing library for high-performance mask extraction and WebP asset generation. |

---

## 3. Component Hierarchy & Data Flow

```text
index.html
  └── src/main.jsx
        └── src/App.jsx (SmoothScrollProvider, LayoutGroup)
              ├── CustomCursor
              ├── AnimatePresence (Initial Overlays)
              │     ├── OpeningSequence (TA-DUM Intro)
              │     └── ProfileSelector ("Who's Watching?")
              │
              ├── Main Series Content (Stage === 'home')
              │     ├── Navbar (sticky header, profile avatar, audio toggle)
              │     ├── Hero (Billboard banner, portrait, Play CTA)
              │     ├── ContinueWatching (quick highlight rail)
              │     ├── About (Biography synopsis)
              │     ├── Originals (Flagship projects rail)
              │     ├── TopPicks (Curated technical highlights)
              │     ├── Seasons (Academic timeline / Episode cards)
              │     ├── Skills (Interactive genre / tech cards)
              │     ├── Achievements (Patents, research papers, certificates)
              │     ├── ResumeSection (Inline resume viewer)
              │     └── FinalCTA (Credits, contact, footer)
              │
              └── Suspense / Lazy Loaded Overlays
                    ├── PlayIntro (Full-screen highlight reel)
                    ├── ProjectModal (Deep-dive project details)
                    └── ResumeModal (PDF viewer popup)
```

---

## 4. Key Technical Features & Implementations

1. **Synthetic Sound Generation (Web Audio API):**
   - Implemented in `src/components/fx.jsx`.
   - Instead of loading heavy `.mp3` files that could fail or lag, it creates an `AudioContext` and modulates an oscillator with exponential decay to synthesize a cinematic chime directly in the browser.

2. **Performance Optimization (Code Splitting & Lazy Loading):**
   - `PlayIntro`, `ProjectModal`, and `ResumeModal` are bundled separately using `React.lazy()` and rendered inside `<Suspense fallback={null}>`.
   - Result: Fast initial page load (~zero bundle bloat from heavy dialogs until the user actually opens them).

3. **Accessibility First (Reduced Motion & ARIA):**
   - Reads `window.matchMedia('(prefers-reduced-motion: reduce)')`.
   - Users with motion sensitivities get instant transitions without disorienting zooms.
   - All modals include `role="dialog"`, `aria-modal="true"`, and escape key listeners.

4. **Session Persistence:**
   - User profile selection (`recruiter`, `engineer`, `explorer`) is stored in `sessionStorage` so refreshing the page does not force the visitor through the intro sequence again.

---

## 5. Top 20 Viva Questions & Model Answers

### Q1: What is the tech stack of this project and why was it chosen?
**Answer:** The project is built with **React** and **Vite**, styled using **CSS / Tailwind**, animated with **Framer Motion**, and uses **Web Audio API**. Vite provides lightning-fast Hot Module Replacement (HMR) and optimized build times compared to Webpack. Framer Motion was selected for declarative physics-based spring animations and gestures.

### Q2: Why is the portfolio designed around a streaming platform theme?
**Answer:** Recruiter fatigue is real; standard portfolio templates look identical. The Netflix-inspired aesthetic transforms dry resumes into engaging storytelling where projects are "Originals", education is structured as "Seasons & Episodes", and achievements are "Awards". It demonstrates UI/UX creativity, design systems thinking, and interactive frontend mastery.

### Q3: What is the purpose of `src/data/portfolio.js`?
**Answer:** It implements the **Separation of Concerns** design pattern. By separating static content (projects, bio, certificates, links) from UI presentation components, any update to personal details or projects only requires editing one data file without risking component code regressions.

### Q4: How does the "Who's Watching?" profile selector work?
**Answer:** `ProfileSelector.jsx` renders selectable personas (Recruiter, Engineer, Explorer). When clicked, it passes the chosen `profileId` to `App.jsx`, stores it in `sessionStorage`, and dynamically customizes the order of sections to cater specifically to that audience.

### Q5: How is the intro sound played without an MP3 file?
**Answer:** In `src/components/fx.jsx`, the Web Audio API (`AudioContext`) programmatically creates an audio oscillator with controlled frequency transitions, harmonic overtones, and exponential volume decay. This avoids external asset downloads, network latency, and copyright issues.

### Q6: How is code splitting / lazy loading implemented?
**Answer:** Non-critical overlays (`PlayIntro`, `ProjectModal`, `ResumeModal`) are imported using `React.lazy(() => import('./...'))` and rendered inside `<Suspense fallback={null}>`. Their JavaScript bundles are only downloaded when the user triggers them, reducing the initial load time.

### Q7: What is the difference between `main.jsx` and `App.jsx`?
**Answer:** `main.jsx` is the root mount script that binds React to the HTML DOM (`ReactDOM.createRoot`). `App.jsx` is the top-level application component that contains all business logic, states (stage, modals, profile), and layout assembly.

### Q8: What does Framer Motion's `AnimatePresence` do in this app?
**Answer:** React normally removes components from the DOM immediately when unmounted. `AnimatePresence` allows exit animations (`exit={{ opacity: 0 }}`) to play completely before the component is unmounted. It is used for modal transitions, the opening sequence, and slide transitions.

### Q9: How are responsive images handled in the project?
**Answer:** In `Hero.jsx` and `public/assets/`, responsive images use `srcSet` and `sizes` attributes with multiple WebP resolutions (`portrait-420.webp`, `portrait-720.webp`, `portrait-1100.webp`). The browser automatically fetches only the optimal resolution for the device's screen width.

### Q10: How does `useScrollLock` work and why is it needed?
**Answer:** When a modal or fullscreen intro is open, background scrolling must be prevented. `useScrollLock` sets `document.body.style.overflow = 'hidden'` when mounted and resets it back on cleanup, preventing background page scrolling underneath modal dialogs.

### Q11: What is the role of `vite.config.js`?
**Answer:** It configures Vite's build settings, defining server ports, asset handling, and plugins such as `@vitejs/plugin-react` which enables JSX parsing and React Fast Refresh during development.

### Q12: Why is `my intro video.mp4` added to `.gitignore`?
**Answer:** The raw video file is ~101.3 MB. GitHub has a strict 100 MB file size limit for Git pushes. Committing it would cause GitHub's pre-receive hook to reject the push. It is kept locally or hosted on external streaming CDNs.

### Q13: What is the purpose of `CustomCursor.jsx`?
**Answer:** It provides an interactive custom cursor that follows pointer coordinates via `framer-motion` springs. It detects hover targets and dynamically alters its label (e.g. "VIEW", "PLAY", "OPEN"), elevating the cinematic feel. It automatically disables itself on touch-screen devices.

### Q14: How does `sessionStorage` differ from `localStorage` in this app?
**Answer:** `sessionStorage` persists only for the lifetime of the browser tab. When a visitor closes the tab and revisits later, they experience the opening sequence fresh. `localStorage` would permanently suppress the intro until cleared.

### Q15: What is the utility of `scripts/rebuild_assets.py`?
**Answer:** It is an automated Python image optimization script using the Pillow library. It processes the original portrait photo into responsive WebP formats at varying widths (1100px, 720px, 420px) and creates the Open Graph (`og-image.jpg`) banner.

### Q16: How is accessibility (a11y) ensured despite custom animations?
**Answer:** 
1. The custom hook `useReducedMotionPref()` detects if the user requested reduced motion in their OS and turns off heavy motion.
2. Modals have proper `role="dialog"`, `aria-modal="true"`, and keyboard traps (`Escape` key to close).
3. The custom cursor has `aria-hidden="true"` so screen readers are not confused.

### Q17: What are React Hooks used in this codebase?
**Answer:**
- `useState`: Local component state (active modal, profile, audio mute).
- `useEffect`: Subscriptions, timeouts, keyboard events, DOM scroll locking.
- `useCallback`: Memoizing callbacks passed down to avoid unnecessary re-renders.
- `useRef`: Storing references to DOM elements for scrolling and bounding rect measurements.
- Custom Hooks: `useSmoothScroll`, `useScrollLock`, `useMediaQuery`.

### Q18: What is Single Page Application (SPA) architecture?
**Answer:** The entire website runs inside a single HTML page (`index.html`). Rather than loading new HTML pages from a server on link clicks, React dynamically re-renders components in the browser DOM, providing fluid, app-like transitions without page reloads.

### Q19: What research and patents are showcased in this portfolio?
**Answer:**
1. **IEEE TEMSMET 2025 Paper:** Research presentation and published conference paper.
2. **Agriculture Patent Publication:** Published patent on intelligent agricultural systems.
3. **CycleCura Patent Publication:** Published patent on healthcare technology.

### Q20: How can this project be deployed for production?
**Answer:** Running `npm run build` generates a minified, tree-shaken static production bundle in the `dist/` directory. This can be deployed to Vercel, Netlify, or GitHub Pages with zero server configuration.
