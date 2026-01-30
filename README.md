# Assemble Web

Marketing website for Assemble, built with React + Vite + Tailwind CSS.

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm dev
```

3. Build for production:
```bash
pnpm build
```

## Deployment

This site is designed to be deployed to Cloudflare Pages.

```bash
# Build and deploy
pnpm build
# Deploy dist/ folder to Cloudflare Pages
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
└── tailwind.config.js  # Tailwind configuration
```
