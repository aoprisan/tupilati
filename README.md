# Comuna Tupilați, Neamț

Site informativ (în limba română) despre **comuna Tupilați din județul Neamț** —
satele Arămoaia, Hanul Ancuței, Totoiești și Tupilați, istorie, demografie,
monumente istorice și celebrul **Han al Ancuței**, imortalizat de Mihail Sadoveanu.

Construit cu **React + TypeScript + Vite** și publicat automat pe **GitHub Pages**.

🔗 Live: https://aoprisan.github.io/tupilati/

## Dezvoltare locală

```bash
npm install      # instalează dependențele
npm run dev      # pornește serverul de dezvoltare
npm run build    # build de producție în ./dist
npm run preview  # previzualizează build-ul
```

## Publicare (GitHub Pages)

Publicarea se face automat prin GitHub Actions (`.github/workflows/deploy.yml`)
la fiecare push pe branch-ul de lucru sau pe `main`.

> **Pas unic necesar:** în repository, mergi la
> **Settings → Pages → Build and deployment → Source** și alege **„GitHub Actions"**.

## Structură

- `src/data/comuna.ts` — toate datele despre comună (model tipizat + surse).
- `src/components/` — secțiunile paginii (Hero, Despre, Sate, Istorie, Hanul Ancuței,
  Monumente, Demografie, Economie, Hartă, Administrație, Footer).
- `vite.config.ts` — `base: "/tupilati/"` (calea proiectului pe GitHub Pages).

## Surse

Informațiile sunt culese din surse publice: Wikipedia (ro/en) și site-ul oficial al
Primăriei Tupilați. Pagina este neoficială și are scop informativ.
