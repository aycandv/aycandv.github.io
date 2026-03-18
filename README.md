# aycandv.github.io

Personal academic website for Aycan Deniz Vit, built as a statically exported Next.js app for GitHub Pages.

## Purpose

This repository hosts the source for `https://aycandv.github.io/`, a research-focused personal site centered on who Aycan is, what Aycan works on, and how visitors can find publications and contact information.

The site is intended to stay factual, restrained, and academically credible. It should describe current research and public outputs without inflated or unverifiable claims.

## Planned Scope

Current public site sections:
- Home
- Research
- Publications
- Contact

Dormant route kept for later:
- CV

Possible later additions:
- Teaching
- Talks
- News
- Service

## Development

Install dependencies and run the Next.js development server:

```bash
npm install
npm run dev
```

Run quality checks:

```bash
npm test
npm run lint
npm run build
```

`npm run build` produces a static export suitable for GitHub Pages.

## Deployment

GitHub Pages deployment is handled by [deploy-github-pages.yml](/Users/avit/individual/aycandv.github.io/.github/workflows/deploy-github-pages.yml).

The repository must use `GitHub Actions` as the Pages source. After that, pushes to `main` will build the app, run tests and lint, upload `./out`, and deploy the static export to Pages.

## Content Sources

Public factual content should be grounded in:
- direct user-provided information
- institutional profile pages
- ORCID records
- DOI-backed publication metadata
- Google Scholar as a secondary index

## Licensing

The repository code is available under the [MIT License](LICENSE).

Personal content and media added to the site, such as biography text, CV files, PDFs, and images, may be subject to separate rights or restrictions if noted alongside those assets.
