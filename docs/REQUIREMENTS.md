# Golden Pyramid — Project Requirements

Living product brief for the Golden Pyramid garage website.  
**Code work should follow this document.** Update it when decisions change.

---

## 1. Overview

| Item | Detail |
|------|--------|
| **Product** | Public marketing website for Golden Pyramid garage (+ admin panel in a later phase) |
| **Brand** | Golden Pyramid |
| **Type** | Bilingual marketing site (English + Arabic) |
| **Hosting** | Vercel (free tier) |
| **Current phase** | **Phase 1 — Public website only** |
| **Next phase** | **Phase 2 — Admin panel** (after public site is done) |

---

## 2. Delivery phases

### Phase 1 — Public website (active)

- Build all public pages listed in §3.
- Content lives in the project (structured code/config — no database in this phase).
- Bilingual EN/AR with RTL and language popup.
- WhatsApp + social link buttons (no contact form).
- Deploy to Vercel.

### Phase 2 — Admin panel (deferred)

- Build admin pages listed in §4 after Phase 1 is complete.
- Persistence for live create/edit/delete will be decided in Phase 2.
- **Candidate:** MongoDB Atlas free tier (discussed; not locked in yet).
- Until Phase 2 ships, content updates are done by editing project files and redeploying.

---

## 3. Goals

### Phase 1 goals

- Present the garage professionally (home, about, services, reviews, blog).
- Support English (default) and Arabic (full RTL).
- Provide contact via WhatsApp and social links (no contact form).
- Ship a polished **mobile-first** public site on Vercel with no database.

### Phase 2 goals (later)

- Single admin account (env credentials).
- Manage public content and website settings from an admin UI.
- No image uploads in admin.

---

## 4. Public Website — Pages (Phase 1)

| Page | Purpose |
|------|---------|
| **Home** | Main landing / first impression |
| **About Us** | Garage story, mission, who we are |
| **Our Services** | List of services offered |
| **Customer Reviews** | Testimonials / customer feedback |
| **Blog** | List of blog posts (title + body only) |
| **Blog Details** | Single post view |
| **Thank You** | Confirmation page (purpose TBD if no forms; keep for now) |
| **Privacy Policy** | Legal |
| **Terms & Conditions** | Legal |
| **404** | Not found |

### Removed from scope

- **Car Brands** (public + admin) — cancelled; do not build.

### Contact & social (no forms)

- There is **no contact form**.
- Public site exposes link buttons for:
  - WhatsApp
  - Facebook
  - TikTok
  - Instagram
- Contact-style CTA should open **WhatsApp** (button/link), not a form.

### Phase 1 content approach

- Render from structured content in the repo (e.g. TS/JSON modules for EN + AR).
- Blog posts: **title** + **body** (simple paragraph) only — no cover, tags, author, etc.
- Services copy will be provided in a later data pass.
- Logos / brand assets will be added later; use wordmark/placeholders until then.

---

## 5. Admin Panel — Pages (Phase 2 only)

Do **not** implement these in Phase 1.

| Page | Purpose |
|------|---------|
| **Dashboard** | Simple overview / entry to management sections |
| **Manage Home Page** | Edit home content (sections, cards, text) |
| **Manage About Us** | Edit about content |
| **Manage Services** | Edit services (add / edit / delete cards) |
| **Manage Customer Reviews** | Edit reviews (add / edit / delete) |
| **Manage Blog Posts** | Edit posts (title + body paragraph only) |
| **Website Settings** | Contact info + social links (WhatsApp, Facebook, TikTok, Instagram) |

### Auth (Phase 2)

- One admin account.
- Credentials from environment variables.
- No “remember me”.
- Simple login session is enough for MVP.

### Media / uploads (Phase 2)

- Admin **cannot upload images**.
- Images/logos added by developers under `public/` (or similar), not via admin UI.

### Admin content UX (Phase 2)

- Enter heading and body text.
- Create / edit / delete cards/items (services, reviews, posts, etc.).
- Blog remains title + body only.

---

## 6. Persistence / database (decision by phase)

### Phase 1

- **No database.**
- Public site reads content from the codebase.

### Phase 2 (to confirm when that phase starts)

Runtime admin CRUD on Vercel needs a durable store. Options discussed:

| Option | Notes |
|--------|--------|
| **A. Static content in code** | What Phase 1 uses; not enough for live admin CRUD alone |
| **B. JSON/MD in repo** | Still no live writes from Vercel without git automation |
| **C. Hosted store** | e.g. **MongoDB Atlas free tier** — good candidate if admin must edit live |
| **D. Free headless CMS** | Alternative to self-managed collections |

**Status:** Phase 2 store not locked. Atlas free tier is the leading candidate if self-serve admin editing is required. Confirm before coding admin.

---

## 7. Internationalization (i18n)

| Rule | Detail |
|------|--------|
| **Languages** | English + Arabic |
| **Default** | English |
| **Arabic UX** | Full **RTL** layout when Arabic is active |
| **Language prompt** | On visit, show a popup offering Arabic (default remains English until user chooses) |
| **Scope** | Public website fully bilingual in Phase 1; admin language TBD in Phase 2 |

---

## 8. Design / brand

| Item | Detail |
|------|--------|
| **Name** | Golden Pyramid |
| **Colors** | Navy blue (dark) + white background |
| **Approach** | **Mobile-first** — design and build for small screens first, then enhance for tablet/desktop |
| **Logos / brand assets** | To be provided later |
| **Tone** | Professional garage / automotive service |

Do not invent a final logo until assets arrive; use placeholder text/wordmark if needed during build.

Layout, navigation, typography, and interactions must work well on phones first. Desktop layouts are progressive enhancements, not the starting point.

---

## 9. Tech constraints

- **Framework:** Next.js (App Router) — already scaffolded
- **Package manager:** Bun
- **Styling:** Tailwind CSS (**mobile-first** breakpoints)
- **Lint/format:** Biome + Ultracite (`bun run check`)
- **CI:** GitHub Actions on PRs to `main` (`check` + `build`)
- **Deploy:** Vercel
- **Phase 1:** No database, no admin panel; mobile-first public UI
- **Phase 2:** Admin + chosen store (Atlas candidate); still no image uploads

---

## 10. Out of scope

### Always / for now

- Car brands section/pages
- Contact form / lead storage
- Multi-user admin / roles
- Remember me / OAuth / SSO
- Image uploads in admin
- Payment / booking engine
- Native mobile apps

### Out of Phase 1 (deferred to Phase 2)

- Entire admin panel
- Admin auth
- Database / Atlas (or other store) integration

---

## 11. Open items

### Needed for Phase 1

1. **Services list** — names, short descriptions (EN + AR), order.
2. **About Us** — copy (EN + AR).
3. **Home** — sections wanted (hero text, CTAs, featured services, etc.).
4. **Customer reviews** — sample or real reviews (EN + AR).
5. **Blog** — initial posts (title + body) or empty state.
6. **Contact details** — WhatsApp number, Facebook / TikTok / Instagram URLs, address/phone if any.
7. **Thank You page** — keep, remove, or redefine purpose (no form currently).
8. **Legal pages** — Privacy / Terms copy (EN + AR) or placeholder.

### Needed later for Phase 2

9. **Persistence choice** — confirm Atlas free tier (or alternative) before admin CRUD.
10. **Admin UI language** — English only vs bilingual.

---

## 12. Build order

### Phase 1

1. Design tokens (navy / white) + base layout + i18n + RTL + language popup  
2. Public layout (nav, footer, social/WhatsApp links)  
3. Home → About → Services → Reviews → Blog → Blog Details → Legal → 404 → Thank You  
4. Content from structured project files  
5. Polish + Vercel deploy  

### Phase 2 (after Phase 1)

1. Confirm persistence (Atlas free tier candidate)  
2. Env-based admin login  
3. Admin shell + Website Settings  
4. Manage pages (Home, About, Services, Reviews, Blog)  
5. Wire public site to stored content  
6. Deploy / verify  

---

## 13. Change log

| Date | Change |
|------|--------|
| 2026-07-31 | Initial requirements; Car Brands removed; no forms; WhatsApp + social; EN default + AR popup/RTL; blog = title + body only |
| 2026-07-31 | Phased delivery: Phase 1 public site only (static content, no DB); Phase 2 admin deferred; MongoDB Atlas free tier noted as Phase 2 candidate |
| 2026-07-31 | Added mobile-first design requirement |
