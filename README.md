# FreeAI Hub

A responsive React directory of 64 AI tools across 16 categories. Search by name, description, or use case, compare free access, and save a personal shortlist.

## Run locally

Use Node.js 20.19+ or 22.12+ and npm. Open a terminal in the project folder.

```sh
npm ci
npm run dev
```

Open the local address Vite prints, normally http://localhost:5173. In Windows PowerShell, use `npm.cmd` in place of `npm` if the script execution policy blocks `npm.ps1`.

```sh
npm test
npm run build
npm run preview
```

Tests check the data and filter behavior. The production build writes static files to `dist/`, and preview serves that build locally.

## Features

- Instant search, category and pricing filters, and alphabetical sorting in both directions.
- Featured, manually curated Trending, Student, and Developer collections.
- A Favorites page, random discovery, copyable official URLs, and dark and light themes.
- Favorites and theme persist in the current browser's LocalStorage. Press `/` to focus search.
- The catalog ships with the app. It needs no backend, paid API, or sign-in. Tool logos load through a public favicon service and fall back to initials when an image fails.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/App.jsx` | Homepage, hash-based navigation, filters, favorites, and discovery dialogs |
| `src/components/ToolCard.jsx` | Reusable tool cards, pricing badges, and link actions |
| `src/components/HeroArtwork.jsx` | Homepage artwork using CSS and Lucide icons |
| `src/directory.js` | Search, filtering, sorting, and LocalStorage hook |
| `src/data/tools.js` | Tool records, category labels, pricing labels, and curated collections |
| `src/style.css` | Tailwind entry point, theme tokens, component styles, and breakpoints |
| `tests/directory.test.js` | Catalog and directory behavior checks |

## Maintain the catalog

Each row in `src/data/tools.js` contains a stable ID, display name, category key, official HTTPS URL without the scheme, description, comma-separated use cases, pricing key, limits, and a source URL without the scheme. Use a unique ID for each new tool. Existing IDs are also used by collections and saved favorites.

- `free` means the listed service or self-hosted software can be used without buying a plan. Check its limits for hardware, model, or hosting requirements.
- `freemium` means a free plan sits alongside paid options. Some free accounts have one-time starter credits, which are called out in the limits.
- `trial` means a temporary or one-time evaluation offer.
- Omitting pricing and limits displays **Needs verification**. Add a provider source before assigning a pricing badge.

Each verified card links to the provider's supporting information. Free offers can change, so recheck the source when updating a record.
