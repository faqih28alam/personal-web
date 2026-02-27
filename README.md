# Faqih Alam – Personal Portfolio (Next.js + shadcn/ui)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
/app
  layout.tsx          → Root layout with font & theme provider
  page.tsx            → Main page (assembles all sections)
  globals.css         → Global styles + Tailwind

/components
  Navbar.tsx          → Fixed top navbar with dark mode toggle & mobile sheet
  AboutSection.tsx    → Hero/About section with photo
  TechStackSection.tsx → Auto-scrolling tech logos
  WorkExperienceSection.tsx → Experience cards
  MyProjectSection.tsx → Project grid with GIF support
  CTASection.tsx      → Contact call-to-action
  Footer.tsx          → Footer with social links
  /ui                 → shadcn/ui components (Button, Badge, Card, Sheet)

/data
  content.json        → ✅ ALL content lives here — edit this file to update your site

/lib
  utils.ts            → shadcn utility (cn function)
```

---

## Updating Content (No Code Needed!)

All text content is managed in **`/data/content.json`**:

- **Personal info** (name, bio, location, social links) → `personal` object
- **Tech stack items** → `techStack` array
- **Work experiences** → `experiences` array
- **Projects** → `projects` array

### Adding a new project:
```json
{
  "title": "My New App",
  "description": "Short description here.",
  "image": "https://your-image-host.com/image.png",
  "bgColor": "#a8edea",
  "tags": ["React", "TypeScript"],
  "githubUrl": "https://github.com/...",
  "isPrivate": false,
  "liveUrl": "https://yourapp.com"
}
```

### Adding a new experience:
```json
{
  "title": "Your Job Title",
  "company": "Company Name",
  "logo": "/assets/img/company-logo.png",
  "period": "Jan 2024 - Present",
  "responsibilities": [
    "What you did",
    "What else you did"
  ],
  "tags": ["React", "Node.js"]
}
```

---

## Images

- **Profile photo**: Place in `/public/assets/img/MyPic.jpg`
- **Company logos**: Place in `/public/assets/img/`
- **Project images**: Use external URLs (Cloudinary, Vercel, etc.) stored in `content.json`
- **CV file**: Place in `/public/faqih-alam-cv.pdf`

---

## Dark Mode

Dark mode is built-in via `next-themes`. The toggle button is in the navbar.

---

## Deployment

Deploy easily on [Vercel](https://vercel.com):
```bash
npm run build
```
Then push to GitHub and connect to Vercel — zero config needed for Next.js.
