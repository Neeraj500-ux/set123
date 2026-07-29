# Crescendo — Audio Store Landing Page

A React + Vite recreation of the Crescendo audio-brand landing page (hero,
featured products, shop-by-category, and benefits sections).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/images/     product & brand photography
  components/         Header, Hero, ProductCard, FeaturedProducts,
                       ShopByCategory, BenefitsBanner, Footer
                       (each component ships with its own .css file)
  pages/               reserved for future multi-page routing
  styles/              global design tokens (variables.css) and
                       shared button styles (buttons.css)
  App.jsx              page composition
  main.jsx             app entry point
```

## Notes

- Fonts: **Manrope** (display/headings) and **Inter** (body), loaded via
  Google Fonts in `index.html`.
- Icons: [`lucide-react`](https://lucide.dev).
- All product photography was supplied by the client and lives in
  `src/assets/images`; swap files there (keeping the same filenames) to
  update imagery without touching component code.
- Fully responsive: three breakpoints handled per section
  (desktop / tablet <=900px / mobile <=640px-520px).
