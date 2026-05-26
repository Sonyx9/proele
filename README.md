# PROELLE Web

Jednopage prezentační web firmy PROELLE postavený na Astro + Tailwind CSS v4.

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

1. Nahrajte projekt do repozitáře `proelle-web`.
2. V `astro.config.mjs` upravte:
   - `site` na `https://<username>.github.io`
   - `base` na `/proelle-web` (nebo `/` při vlastní doméně).
3. GitHub Actions workflow `.github/workflows/deploy.yml` provede build a deployment automaticky po pushi na `main`.
4. Při vlastní doméně doplňte `public/CNAME`.

## Co doplnit od klienta

- logo (`public/logo.svg`)
- hero/referenční fotografie (`public/images/...`)
- reálné firemní údaje (IČ, sídlo, metriky)
- Formspree endpoint ve formuláři (nahraďte `your-form-id`)

## Cíle kvality

- statický output vhodný pro GitHub Pages
- minimální JS (menu + fade-in)
- připraveno pro Lighthouse: Performance >= 90, Accessibility >= 85
