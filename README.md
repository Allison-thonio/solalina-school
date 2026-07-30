# Solalina Photography School — Landing Page

A single-page microsite for Solalina Photography School's 2-week intensive photography program. Built with Next.js 16, Framer Motion, and Tailwind CSS.

## Architecture Overview

### Separate Mobile & Desktop Builds
This project uses a **true dual-build architecture**, not responsive breakpoints:
- **Desktop/Tablet** (`components/Desktop/`): Landscape layouts, full-width galleries, side-by-side enrollment form
- **Mobile** (`components/Mobile/`): Portrait-optimized hero, stacked layouts, 1-up gallery with scroll-snap
- **Shared** (`components/`): Nav, Footer, ScrollReveal, SprocketDivider used by both builds
- **Page Routing** (`app/page.tsx`): Viewport check at window width 768px routes to appropriate build

All copy, courses, and metadata are stored in `app/data.ts` (shared across both builds).

## Key Features

### Camera Language Motif
- **Hero**: AF-style corner brackets (animated on load), pulsing focus-reticle dot
- **EXIF Stat Strip**: Monospace metadata panel reading `2 WEEKS · Intensive` / `40 SLOTS · Limited` / `₦35K · Registration`
- **Sprocket Dividers**: Repeating-dot CSS strips between sections
- **Gallery Contact Sheet**: Each image has monospace frame-tag (FRM 07A, FRM 12B, etc.)
- **Aperture Iris Marks**: Circular ring + solid dot checkmarks in curriculum instead of plain checkmarks
- **Mode Dial Badges**: Circular L/E/C/G badges for the four pillars (not numbered 01–04)

### Animations
- **Scroll Reveal**: Fade + 12px translate-y with 60ms stagger using Framer Motion + IntersectionObserver
- **Hero Bracket Animation**: Staggered draw-in of four corner brackets on page load
- **No Scroll-Jacking**: Restrained animation only, no parallax or horizontal scroll-rails

### Enrollment System
- **Custom Dropdown**: Styled select replacement (native `<select>` can't be themed)
- **Payment Details Box**: Bank info in monospace, "Copy" button uses Clipboard API
- **File Upload**: Styled label (not raw `<input type="file">`)
- **Honeypot Field**: `botcheck` hidden field catches bots
- **Form States**: Idle → Submitting → Success/Error (all inline, no modals)

## Backend — Web3Forms Integration

The enrollment form submits via `app/api/enroll/route.ts`, a Node.js API route that:
1. Accepts multipart/form-data (file upload included)
2. Validates all fields server-side (no trust in client validation)
3. Rate-limits: 5 requests per IP per 60 seconds (in-memory)
4. Proxies to Web3Forms API with multipart support
5. Forwards notification emails—no persistent storage required

**Why Web3Forms?**
- No backend database needed for a single-cohort MVP
- Free tier supports file attachments directly
- Dashboard shows submission history for manual tracking
- Optional future migration to Convex/DB if school becomes recurring multi-cohort product

## Setup

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Add Web3Forms Key
Get a free key at [web3forms.com](https://web3forms.com) (no card required).

```bash
# Copy the example file
cp .env.local.example .env.local

# Add your Web3Forms access key
WEB3FORMS_KEY=your_key_here
```

### 3. Run Development Server
```bash
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
pnpm run build
pnpm run start
```

## Design System

### Colors
- **Ink**: `#080808` (background)
- **Gold**: `#C9A84C` (accent, CTAs, numerals, dividers)
- **Cream**: `#F5F0E8` (body text)
- Opacity variants: `--cream-70`, `--cream-50`, `--cream-35`, `--gold-40`, `--gold-25`, `--gold-15`, `--gold-8`

### Typography
- **Serif**: Cormorant Garamond (headlines, font-serif class)
- **Sans**: DM Sans (body/UI, font-sans class)
- **Monospace**: JetBrains Mono (EXIF readout, metadata, frame tags)

### Key CSS Classes
- `.film-grain`: 4% opacity grain overlay (hero/CTA sections only)
- `.gold-divider`: 1px gold hairline divider (40% opacity)
- `.sprocket-strip`: Repeating-dot CSS strip separator
- `.text-balance` / `.text-pretty`: Tailwind text-wrap utilities

## File Structure

```
app/
├── layout.tsx                 # Fonts, metadata, global HTML setup
├── page.tsx                   # Viewport routing (Desktop/Mobile selection)
├── globals.css                # Design tokens, base styles, utility classes
├── data.ts                    # All content constants (shared across builds)
└── api/
    └── enroll/
        └── route.ts           # Web3Forms enrollment proxy

components/
├── Nav.tsx                    # Sticky header (shared)
├── Footer.tsx                 # Footer (shared)
├── ScrollReveal.tsx           # Framer Motion + IntersectionObserver wrapper
├── SprocketDivider.tsx        # Repeating-dot CSS strip
├── Desktop/
│   ├── DesktopPage.tsx
│   ├── Hero.tsx               # Full-bleed landscape hero
│   ├── ExifStrip.tsx          # Horizontal EXIF stat panel
│   ├── FourPillars.tsx        # 4-column grid (L/E/C/G badges)
│   ├── Gallery.tsx            # 3-image row with gold frames + frame-tags
│   ├── Curriculum.tsx         # 2-column: checklist + image
│   ├── ProgramDetails.tsx     # 2 cards + 3-icon row
│   └── EnrollForm.tsx         # Full enrollment form
└── Mobile/
    ├── MobilePage.tsx
    ├── Hero.tsx               # Portrait-cropped hero
    ├── ExifStrip.tsx          # Vertically stacked stats
    ├── FourPillars.tsx        # 2-column grid
    ├── Gallery.tsx            # 1-up with scroll-snap
    ├── Curriculum.tsx         # Single-column checklist
    ├── ProgramDetails.tsx     # Stacked cards
    └── EnrollForm.tsx         # Mobile-optimized form

public/images/
├── hero-desktop.png           # Landscape photographer image
├── hero-mobile.png            # Portrait photographer image
├── gallery-1.png              # Landscape photography
├── gallery-2.png              # Portrait photography
├── gallery-3.png              # Street photography
└── curriculum.png             # Photography equipment
```

## Customization

### Update Copy
Edit `app/data.ts`:
- `SCHOOL_NAME`, `TAGLINE`, `SCHOOL_DESCRIPTION`
- `COURSES`, `BANK_DETAILS`
- `HERO_SECTION`, `STAT_STRIP`, `FOUR_PILLARS`, `GALLERY_IMAGES`, `CURRICULUM`, `PROGRAM_DETAILS`, `ENROLLMENT_FORM`, `FOOTER`

### Update Images
Replace PNG files in `public/images/`:
- Desktop hero should be landscape (16:9)
- Mobile hero should be portrait (9:16)
- Gallery images should be square

### Update Bank Details
Edit `app/data.ts` → `BANK_DETAILS`:
```typescript
bank: 'Your Bank',
accountNumber: 'Your Account Number',
accountName: 'Your Account Name',
```

### Future Enhancements
- Add multi-cohort support: Move enrollment tracking to Convex/Neon with user authentication
- Add waitlist logic: Database-backed slot management once recurring cohorts start
- Add payment verification: Integrate actual payment gateway (Stripe, Paystack) instead of manual proof upload
- Add admin dashboard: View submissions, approve payments, manage capacity

## Deployment

### Deploy to Vercel (Recommended)
```bash
# Connect your GitHub repository
git push origin main

# Vercel auto-deploys on push
# Set WEB3FORMS_KEY in Vercel project settings
```

### Environment Variables
Add to your Vercel project:
- `WEB3FORMS_KEY`: Your Web3Forms API access key

## Troubleshooting

### Form submissions not working?
1. Check `WEB3FORMS_KEY` is set in `.env.local` (dev) or Vercel project settings (production)
2. Verify the API route is working: Open DevTools → Network tab, submit form, check response
3. Check browser console for errors

### Images not loading?
1. Ensure images are in `public/images/` with correct paths
2. Check `app/data.ts` image paths match filenames
3. For production: Ensure `public/` folder is deployed

### Mobile viewport not routing correctly?
1. Check window width in DevTools (should be < 768px for mobile)
2. Try hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
3. Check browser DevTools Device Toolbar is enabled

## License

© 2026 Solalina Photography School · a Solalina Studios program
