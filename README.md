# MediBuddy × Superleap BRD (React)

This repo hosts a React-based Business Requirements Document site for the MediBuddy Surgery CRM engagement.

## Quick Start

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

- `index.html` — App shell + font links
- `src/App.jsx` — Main layout and section assembly
- `src/data/` — All BRD content (edit here for updates)
- `src/components/` — Reusable UI building blocks
- `src/styles/` — Global + component CSS
- `public/assets/` — Diagrams and reference files

## Content Updates

- Add or reorder BRD sections in `src/data/sections.js`.
- Update object architecture in `src/data/objectArchitecture.js`.
- Update journey flow and diagrams in `src/data/workflows.js`.

## Deployment (Netlify)

Build command: `npm run build`  
Publish directory: `dist`

The Netlify configuration is already set in `netlify.toml`.
