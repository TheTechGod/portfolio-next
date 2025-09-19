# Integrity Programming – Portfolio (Next.js App Router)

Converted from uploaded static portfolio assets into a Next.js project.

## Run locally
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Structure
- `app/layout.tsx`: global layout (Bootstrap CDN + globals.css)
- `app/page.tsx`: homepage converted from your original index.html
- `app/globals.css`: merged base styles + your original CSS
- `public/`: images and assets (e.g., `/img`, `/assets`, and `resume.pdf` if provided)

## Deployment
Push to GitHub → Vercel auto-deploys. Set Production branch to `main`.
