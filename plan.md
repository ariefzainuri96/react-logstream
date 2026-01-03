# LogStream Frontend Master Plan

## 1. Project Overview
**Name:** LogStream
**Description:** A headless changelog service for developers. It mimics the "Medium" writing experience but serves as a developer tool (API-first).
**Aesthetic:** Minimalist, "Stripe/Vercel-like" design. STRICTLY Light Mode. High use of whitespace, serif fonts for writing, sans-serif for UI.

## 2. Tech Stack
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router DOM (v6)
- **State Management:** React Context (for Auth), simple local state for forms.
- **HTTP Client:** Axios (interceptor needed for JWT injection)
- **Editor:** Simple Textarea with Markdown styling (or `react-textarea-autosize`).

## 3. Design System & UI Rules
- **Colors:**
  - Background: White (`#ffffff`)
  - Text Primary: Black (`#000000`)
  - Text Secondary: Gray-500 (`#6b7280`)
  - Accents: Gray-100 (Borders), Green-500 (Active Status), Blue-500 (Feature), Orange-500 (Bugfix).
  - **NO Dark Mode.**
- **Typography:**
  - UI Elements (Buttons, Nav, Lists): Sans-Serif (Inter/system-ui).
  - Editor Body / Content: Serif (Merriweather/Georgia) for a premium writing feel.
  - Technical Data (Slugs, API Keys): Monospace.
- **Components:**
  - **Buttons:** Sharp corners or small radius (4px). Primary = Solid Black. Secondary = White with Gray Border.
  - **Inputs:** Clean white background, thin gray border. Focus ring = Black.
  - **Modals:** Centered, backdrop blur, simple white card.

## 4. API Integration (Backend Ready)
**Base URL:** `http://localhost:8080/api/v1` (Adjust port as needed)

**Key Endpoints:**
- `POST /auth/login` (Returns JWT)
- `POST /auth/register`
- `GET /projects` (List user projects)
- `POST /projects` (Create new)
- `PUT /projects/:id` (Update webhook URL)
- `GET /posts/:projectId` (Get all posts for editor)
- `POST /posts` (Create post)
- `GET /public/:slug` (Public timeline fetch)

## 5. Development Phases (Execute in Order)

### Phase 1: Setup & Core UI
1. Initialize Vite + Tailwind.
2. Install `axios`, `react-router-dom`, `lucide-react`, `clsx`.
3. Create generic UI Components:
   - `Button` (Variants: primary, secondary, danger)
   - `Input` (Variants: standard, monospace-slug)
   - `Modal` (Reusable layout with Backdrop)
   - `Badge` (Pill shape for categories)

### Phase 2: Authentication
1. Create `AuthContext`:
   - Store `token` in localStorage.
   - Provide `login(email, pass)` and `logout()` functions.
   - Axios Interceptor: Auto-attach `Authorization: Bearer <token>` to requests.
2. Build Pages:
   - `/login`: Minimalist card.
   - `/register`: Similar layout.

### Phase 3: The Dashboard (Project Hub)
**Route:** `/dashboard` (Protected)
1. **Layout:**
   - Navbar: Logo (Left), User Avatar (Right).
   - Content: Centered container (max-width 800px).
2. **Project List:**
   - Fetch from `GET /projects`.
   - Render Cards: Name (Bold), Slug (Mono), Status Dot.
   - **Action:** Gear Icon on card -> Opens "Settings Modal".
3. **Create Project Modal:**
   - Fields: Name, Slug (Prefix `logstream.app/p/` static).
   - API: `POST /projects`.

### Phase 4: The Settings Modal (Webhooks)
**Context:** Triggered from Dashboard Gear Icon.
1. **Layout:** Reuses Phase 1 Modal.
2. **Feature:**
   - Input: `webhook_url` (Project attribute).
   - Button: "Test Trigger" (Hits backend test endpoint if available, or just mock for now).
   - Button: "Save Changes" (`PUT /projects/:id`).

### Phase 5: The Editor (Medium-Style)
**Route:** `/editor/:projectId`
1. **Layout:** Distraction-free (No sidebar).
2. **Header:** Back Arrow, "Saved" indicator, "Publish" button (Solid Black).
3. **Meta Controls (Top Bar):**
   - Dropdown: Category (Feature, Bugfix, Improvement).
   - Toggle: Draft / Published.
4. **Canvas:**
   - Title Input: Huge Serif Font.
   - Body Input: `TextareaAutosize`. Serif Font. Markdown aware styling (e.g., if line starts with `#`, make it big).

### Phase 6: Public Page (The End Product)
**Route:** `/view/:slug` (Public, No Auth)
1. **Layout:** Vertical Timeline.
2. **Fetch:** `GET /public/:slug`.
3. **Render:**
   - Vertical gray line.
   - Nodes: Colored dots based on `category`.
   - Cards: Date (Left), Content (Right).
   - Render Markdown content simply (whitespace-pre-wrap).

## 6. Definitions for AI
- **Slug Input:** An input group where the domain prefix is fixed/disabled, and the user types the rest.
- **Timeline:** A flex-row layout where the center line is a border-left on the content container, or a absolute positioned line.