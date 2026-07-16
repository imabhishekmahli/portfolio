# Abhishek Mahli Portfolio

A responsive personal portfolio for a Generative AI Engineer, built with React, Vite, Tailwind CSS, and Framer Motion.

## Prerequisites

Use Node.js 24 (see `.nvmrc`) and npm.

## Run locally

```bash
nvm use
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

The GitHub Actions workflow runs these checks for pull requests and pushes to `main`.

## Updating portfolio content

Portfolio data is kept separate from the components:

- `src/data/profile.js` — profile, contact details, and resume path
- `src/data/projects.js` — featured projects and links
- `src/data/research.js` — research entries and links
- `src/data/experience.js` — experience entries
- `src/data/education.js` and `src/data/skills.js` — qualifications and skills

Place the downloadable resume at `public/resume/Abhishek_Mahli_Resume.pdf`. It is served from `/resume/Abhishek_Mahli_Resume.pdf` in development and production.

## Build output

`npm run build` writes the deployable static site to `dist/`.
