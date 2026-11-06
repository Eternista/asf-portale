# Topory Linki

Prosta baza strony typu linktree / social links z React i Tailwind CSS, gotowa do wdrożenia na Netlify.

## Stack
- React
- Vite
- Tailwind CSS

## Uruchomienie lokalnie

1. Zainstaluj zależności:
   npm install
2. Uruchom serwer deweloperski:
   npm run dev
3. Zbuduj wersję produkcyjną:
   npm run build

## Netlify

1. Podłącz repozytorium do Netlify.
2. Ustaw build command: `npm run build`
3. Ustaw publish directory: `dist`
4. Wdrożenie będzie działać z gotowym plikiem `netlify.toml`.

## Struktura
- `src/App.jsx` — główny layout strony z linkami
- `src/styles.css` — import Tailwind i style bazowe
- `tailwind.config.js` — konfiguracja Tailwind
- `netlify.toml` — konfiguracja Netlify

## CMS (Decap CMS)

Panel edycji linków: `https://<twoja-domena>/admin/`. Linki są w `src/data/socials.json` — CMS commituje zmiany do repo, a Netlify sam przebudowuje stronę.

### Konfiguracja na Netlify (jednorazowo)
1. **Site configuration → Identity** → *Enable Identity*.
2. **Identity → Registration** → ustaw *Invite only*.
3. **Identity → Services → Git Gateway** → *Enable Git Gateway*.
4. **Identity → Invite users** → zaproś osoby, które mają edytować linki.

### Lokalnie (bez logowania)
1. `npx decap-server`
2. `npm run dev`
3. Otwórz `http://localhost:5173/admin/`

Pliki CMS: `public/admin/index.html`, `public/admin/config.yml`.
