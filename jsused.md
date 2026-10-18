# 🚀 JavaScript Concepts Used in the Project (`jsused.md`)

> **Note for Viva / Practical Evaluation:**  
> This document maps all core JavaScript syllabus topics directly to their file locations, exact line numbers, and code snippets in the project so you can quickly show them to the teacher/evaluator.

---

## 📌 Summary Overview

| JavaScript Topic | Status | File Location | Line Numbers |
| :--- | :---: | :--- | :--- |
| **1. Internal JavaScript** | ✅ YES | `index.html` | Line 18 |
| **2. External JavaScript** | ✅ YES | `index.html`, `src/main.jsx`, `src/App.jsx` | Line 23 in `index.html` |
| **3. Inline JavaScript** | ✅ YES | `src/App.jsx`, `src/components/Hero.jsx` | Inline JSX handlers |
| **4. Console Methods** | ✅ YES | `index.html`, `scripts/build-images.mjs` | `console.info()`, `console.log()` |
| **5. Variables (`const`, `let`)** | ✅ YES | `src/components/PlayIntro.jsx`, `src/App.jsx` | Lines 43–44 in `PlayIntro.jsx` |
| **6. Variables (`var`)** | ❌ NO | *Modern ES6 practice avoids `var` in favor of block-scoped `let`/`const`* | — |
| **7. Template Literals (`` `...` ``)** | ✅ YES | `src/components/PlayIntro.jsx`, `src/App.jsx` | Line 100 in `PlayIntro.jsx`, Line 70 in `App.jsx` |
| **8. Destructuring (Array & Object)** | ✅ YES | `src/App.jsx` | Lines 42–48 in `App.jsx` |
| **9. User Input & Keyboard Handling** | ✅ YES | `src/components/PlayIntro.jsx`, `src/components/CustomCursor.jsx` | Lines 65–79 in `PlayIntro.jsx` |
| **10. Control Structures (`if-else`)** | ✅ YES | `src/components/PlayIntro.jsx`, `src/App.jsx` | Lines 51, 66–75 in `PlayIntro.jsx` |
| **11. Control Structures (`switch`)** | ❌ NO | *Replaced by modern Object Dictionary pattern `sections[id]`* | `src/App.jsx` Line 107 |
| **12. Loops (`.map()`, `.filter()`, `for`)** | ✅ YES | `src/App.jsx`, `src/components/Originals.jsx`, `src/components/FinalCTA.jsx` | Line 106 in `App.jsx`, Line 19 in `FinalCTA.jsx` |
| **13. Form Validation / Form Fields** | ✅ YES | `src/components/SendMessage.jsx` | Non-empty validation, live error messages, min/max length |
| **14. Functions (Declarations, Expressions, Arrows)** | ✅ YES | `src/App.jsx`, `src/components/PlayIntro.jsx` | Lines 26, 35 in `App.jsx`, Line 45 in `PlayIntro.jsx` |
| **15. Scope (Block, Function, Global)** | ✅ YES | Across all components (`let` block scope, `window` global scope) | `src/components/PlayIntro.jsx` |
| **16. Closures** | ✅ YES | `src/components/PlayIntro.jsx` | Lines 43–56 (`tick()` captures `raf`, `last`, `progress`) |
| **17. Exception Handling (`try-catch`)** | ✅ YES | `src/App.jsx`, `src/components/SendMessage.jsx` | Lines 26–33 in `App.jsx`, draft autosave in `SendMessage.jsx` |
| **18. Arrays & Array Methods** | ✅ YES | `src/App.jsx`, `src/data/portfolio.js` | Lines 29, 49 in `App.jsx` (`.some()`, `.find()`) |
| **19. Objects & Nested Object Handling**| ✅ YES | `src/data/portfolio.js`, `src/App.jsx` | Lines 83–91 in `App.jsx` |
| **20. String Methods** | ✅ YES | `src/components/PlayIntro.jsx`, `src/components/FinalCTA.jsx`, `src/components/SendMessage.jsx` | `.trim()`, `.padStart()`, `.toUpperCase()`, `.toLowerCase()` |
| **21. Regular Expressions (Regex)** | ✅ YES | `src/components/SendMessage.jsx` | Lines 6–7 (`NAME_REGEX`, `EMAIL_REGEX`) |
| **22. DOM Traversal & Bounding Rect** | ✅ YES | `src/hooks/sectionProgress.js`, `src/hooks/smoothScroll.jsx` | `getBoundingClientRect()`, `querySelector()` |
| **23. DOM Manipulation / Updates** | ✅ YES | `src/hooks/smoothScroll.jsx`, Virtual DOM React | Line 18 in `smoothScroll.jsx` (`body.style.overflow`) |
| **24. Event Handling (Synthetic & Native)**| ✅ YES | `src/components/PlayIntro.jsx`, `src/components/SendMessage.jsx` | `onChange`, `onBlur`, `onSubmit`, `window.addEventListener` |
| **25. localStorage** | ✅ YES | `src/components/SendMessage.jsx` | `localStorage.getItem()`, `setItem()`, `removeItem()` |
| **26. sessionStorage** | ✅ YES | `src/App.jsx` | Lines 28, 59 (`getItem`, `setItem`) |
| **27. JSON Data** | ✅ YES | `public/project-catalog.json`, `package.json` | Project catalogue data |
| **28. fetch() API** | ❌ NO | *Direct compile-time ES Module import used for instant offline loading* | — |
| **29. jQuery & `$.getJSON()`** | ❌ NO | *Obsolete in modern React; React's Virtual DOM completely replaces jQuery*| — |
| **30. Dynamic Content Rendering** | ✅ YES | `src/App.jsx`, `src/components/Originals.jsx` | Lines 101–116 in `App.jsx` |

---

## 🔍 Detailed Code Walkthrough (Topic-by-Topic)

### 1. Internal & External JavaScript
- **Internal JavaScript:**  
  📍 **File:** `index.html` (Line 18)
  ```html
  <script>
    const portfolioCourse = "JavaScript";
    console.info(`Portfolio course: ${portfolioCourse}`);
  </script>
  ```
- **External JavaScript:**  
  📍 **File:** `index.html` (Line 23)
  ```html
  <script type="module" src="/src/main.jsx"></script>
  ```

---

### 2. Variables (`const`, `let`) & Scope
- **`const` for immutable variables and components:**
  📍 **File:** `src/App.jsx` (Line 25)
  ```javascript
  const STORAGE_KEY = 'rudrakshi-series-profile';
  ```
- **`let` for mutable animation timers & frame ids:**
  📍 **File:** `src/components/PlayIntro.jsx` (Lines 43–44)
  ```javascript
  let raf = 0;
  let last = performance.now();
  ```

---

### 3. Template Literals (Backticks `` `...` ``)
- **Dynamic string interpolation with variables:**  
  📍 **File:** `src/components/PlayIntro.jsx` (Line 100)
  ```javascript
  `Episode ${String(index + 1).padStart(2, '0')} · ${slide.kicker}`
  ```
  📍 **File:** `src/App.jsx` (Line 70)
  ```javascript
  `Now watching as ${p.name} — ${p.blurb.toLowerCase()}`
  ```
  📍 **File:** `src/components/FinalCTA.jsx` (Line 15)
  ```javascript
  `mailto:${profile.email}?subject=${encodeURIComponent("Let's build something")}`
  ```

---

### 4. Destructuring (Array & Object Destructuring)
- **Object and Hook Destructuring:**  
  📍 **File:** `src/App.jsx` (Line 48)
  ```javascript
  const { scrollTo, lock, unlock } = useSmoothScroll();
  ```
- **Array Destructuring with React Hooks:**  
  📍 **File:** `src/App.jsx` (Lines 42–47)
  ```javascript
  const [stage, setStage] = useState(stored ? 'home' : 'opening');
  const [profileId, setProfileId] = useState(stored ?? 'rudrakshi');
  const [playing, setPlaying] = useState(false);
  const [project, setProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  ```

---

### 5. Closures & Scope
- **Inner function remembering outer variables across execution:**  
  📍 **File:** `src/components/PlayIntro.jsx` (Lines 43–56)
  ```javascript
  let raf = 0;
  let last = performance.now();
  const tick = (now) => {
      const v = progress.get() + (now - last) / SLIDE_MS; // Accesses 'last' from outer closure
      last = now;                                        // Mutates 'last' in outer scope
      if (v >= 1) {
          next();
          return;
      }
      progress.set(v);
      raf = requestAnimationFrame(tick);                 // Recursive closure animation loop
  };
  raf = requestAnimationFrame(tick);
  ```

---

### 6. User Input & Keyboard Event Handling
- **Listening for native keyboard interactions:**  
  📍 **File:** `src/components/PlayIntro.jsx` (Lines 65–78)
  ```javascript
  const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === ' ') {
          e.preventDefault();
          setPaused((p) => !p);
      }
  };
  window.addEventListener('keydown', onKey);
  ```

---

### 7. Exception Handling (`try-catch`)
- **Graceful degradation for browser storage restrictions:**  
  📍 **File:** `src/App.jsx` (Lines 26–33)
  ```javascript
  function readStoredProfile() {
      try {
          const v = sessionStorage.getItem(STORAGE_KEY);
          return viewerProfiles.some((p) => p.id === v) ? v : null;
      } catch {
          return null; // Prevents app crash if cookies/storage blocked
      }
  }
  ```
  📍 **File:** `src/App.jsx` (Lines 58–62)
  ```javascript
  try {
      sessionStorage.setItem(STORAGE_KEY, id);
  } catch {
      /* storage unavailable — profile simply won't persist */
  }
  ```

---

### 8. `sessionStorage` (Browser Web Storage API)
- **Reading and writing active session state:**  
  📍 **File:** `src/App.jsx` (Line 28 & Line 59)
  ```javascript
  sessionStorage.getItem(STORAGE_KEY);
  sessionStorage.setItem(STORAGE_KEY, id);
  ```

---

### 9. Arrays & High-Order Array Methods
- **`.some()` to validate existence:**  
  📍 **File:** `src/App.jsx` (Line 29)
  ```javascript
  viewerProfiles.some((p) => p.id === v)
  ```
- **`.find()` to retrieve an object:**  
  📍 **File:** `src/App.jsx` (Line 49)
  ```javascript
  const order = viewerProfiles.find((p) => p.id === profileId).order;
  ```
- **`.map()` for iterative rendering:**  
  📍 **File:** `src/App.jsx` (Lines 106–108)
  ```javascript
  {order.map((id) => (
      <Scene key={id} id={id}>
          {sections[id]}
      </Scene>
  ))}
  ```
- **`.filter()` to clean list elements:**  
  📍 **File:** `src/components/FinalCTA.jsx` (Line 19)
  ```javascript
  ctas.filter((c) => !c.href.endsWith('mailto:') && c.href !== '');
  ```

---

### 10. Functions (Declaration, Expression, Arrow)
- **Function Declaration:**  
  📍 **File:** `src/App.jsx` (Line 26 & Line 35)
  ```javascript
  function readStoredProfile() { ... }
  export default function App() { ... }
  ```
- **Arrow Functions:**  
  📍 **File:** `src/App.jsx` (Line 80)
  ```javascript
  const closeIntro = useCallback(() => setPlaying(false), []);
  const closeProject = useCallback(() => setProject(null), []);
  ```

---

### 11. String Methods
- **`.padStart()` for two-digit episode numbers:**  
  📍 **File:** `src/components/PlayIntro.jsx` (Line 100)
  ```javascript
  String(index + 1).padStart(2, '0') // "01", "02", etc.
  ```
- **`.toLowerCase()` & `.toUpperCase()`:**  
  📍 **File:** `src/App.jsx` (Line 70) & `src/components/FinalCTA.jsx` (Line 32)
  ```javascript
  p.blurb.toLowerCase();
  profile.displayName.toUpperCase();
  ```

---

### 12. Direct DOM Manipulation & Updates
- **Locking background body scroll directly via DOM:**  
  📍 **File:** `src/hooks/smoothScroll.jsx` (Line 18)
  ```javascript
  document.body.style.overflow = 'hidden';
  ```
  📍 **File:** `src/App.jsx` (Line 65)
  ```javascript
  window.scrollTo(0, 0);
  ```
- **Measuring DOM bounding boxes:**  
  📍 **File:** `src/hooks/sectionProgress.js` (Line 15)
  ```javascript
  const rect = el.getBoundingClientRect();
  ```

---

### 13. Dynamic Content Rendering
- **Conditional UI rendering based on application state:**  
  📍 **File:** `src/App.jsx` (Lines 96–116)
  ```javascript
  <AnimatePresence>
    {stage === 'opening' && <OpeningSequence onDone={() => setStage('profiles')} />}
    {stage === 'profiles' && <ProfileSelector onPick={pickProfile} />}
  </AnimatePresence>

  {stage === 'home' && (
    <main>
      <Hero />
      <ContinueWatching />
    </main>
  )}
  ```

---

### 14. Form Validation, Regular Expressions (Regex) & LocalStorage
- **Live Form & Regular Expression Validation:**  
  📍 **File:** `src/components/SendMessage.jsx` (Lines 6–8, 70–98)
  ```javascript
  // Regular Expressions for Name (3-40 letters/spaces) and Email
  const NAME_REGEX = /^[a-zA-Z\s]{3,40}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Live validation checks:
  const isNameEmpty = formData.name.trim() === '';
  const isNameValid = !isNameEmpty && NAME_REGEX.test(formData.name.trim());

  const isEmailEmpty = formData.email.trim() === '';
  const isEmailValid = !isEmailEmpty && EMAIL_REGEX.test(formData.email.trim());

  const isMsgEmpty = formData.message.trim() === '';
  const isMsgValid = !isMsgEmpty && formData.message.trim().length >= 10;
  ```

- **Instant Draft Autosave using `localStorage`:**  
  📍 **File:** `src/components/SendMessage.jsx` (Lines 37–65)
  ```javascript
  // On load: restore previous unsent draft
  const saved = localStorage.getItem('rudrakshi_contact_draft');

  // On input change: save draft instantly
  localStorage.setItem('rudrakshi_contact_draft', JSON.stringify(formData));

  // On successful submit / reset: clear saved draft
  localStorage.removeItem('rudrakshi_contact_draft');
  ```

---

## 💬 What to answer in Viva if asked about unused topics:

1. **Why not `var`?**  
   *"In modern ES6+ development, `var` is avoided because it is function-scoped and susceptible to hoisting bugs. We use block-scoped `const` and `let`."*

2. **Why not `jQuery` or `$.getJSON()`?**  
   *"jQuery was created to solve cross-browser DOM inconsistencies in 2006. Modern frameworks like React manage the DOM declaratively through a Virtual DOM, making jQuery redundant and an anti-pattern."*

3. **Why not `switch`?**  
   *"Instead of verbose `switch-case` blocks, modern JavaScript uses clean Object Dictionary mappings (e.g., `sections[id]`), which offer $O(1)$ lookup time and cleaner syntax."*

4. **Where are `localStorage` and `sessionStorage` used?**  
   *"We use `sessionStorage` in `src/App.jsx` to maintain active profile state during the browsing session without locking it permanently, and `localStorage` in `src/components/SendMessage.jsx` to power the instant draft autosave feature for the contact form."*

