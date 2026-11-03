# Franco Argüello - Portfolio

Personal portfolio for my work as an AI Builder and Full-Stack Developer. The site is bilingual (English and Spanish) and built with React, Vite, and Tailwind CSS.

**Live site:** https://franko42.github.io/Portfolio/

## Highlights

- Coding-agent workflow orchestration with TaskAgent
- Full-stack SaaS product development
- Selected professional frontend and QA work
- English and Spanish content with browser-language detection
- Responsive layout and accessible navigation

## Run locally

```bash
cd my-portfolio
npm ci
npm run dev
```

## Build and check

```bash
cd my-portfolio
npm run build
npm run lint
npm run preview
```

## Deploy

The Vite base path is configured for the GitHub Pages project URL. To publish the production build to the `gh-pages` branch:

```bash
cd my-portfolio
npm run deploy
```

Configure GitHub Pages to serve the `gh-pages` branch.

## Project structure

```text
my-portfolio/
├── index.html
├── src/
│   ├── components/
│   ├── locales/
│   │   ├── en/
│   │   └── es/
│   ├── assets/
│   └── i18n.js
├── package.json
└── vite.config.js
```
