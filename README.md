# PROELE Web

Jednopage prezentaèní web firmy PROELE postavený na Astro + Tailwind CSS v4.

## Lokální vývoj

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Nasazení na GitHub Pages

1. Nahrajte projekt do repozitáøe `proele-web`.
2. V `astro.config.mjs` upravte:
   - `site` na `https://<username>.github.io`
   - `base` na `/proele-web` (nebo `/` pøi vlastní doménì).
3. GitHub Actions workflow `.github/workflows/deploy.yml` provede build a deployment automaticky po pushi na `main`.
4. Pøi vlastní doménì doplòte `public/CNAME`.

## Co doplnit od klienta

- logo (`public/assets/logo.svg`), font Panell licence
- hero/referenèní fotografie (`public/assets/...`)
- reálné firemní údaje (IÈ, sídlo, metriky)
- Formspree endpoint ve formuláøi (nahraïte `your-form-id`)

## Cíle kvality

- statický output vhodný pro GitHub Pages
- minimální JS (menu + fade-in)
- pøipraveno pro Lighthouse: Performance >= 90, Accessibility >= 85