<div align="center">

# deepin Indonesia — Download Site

**The official download page for deepin Indonesia**

[os.deepin.id](https://os.deepin.id) · 🇬🇧 **English** · [🇮🇩 Bahasa Indonesia](README.md)

</div>

---

A static download page for **[os.deepin.id](https://os.deepin.id)** — providing the **deepin 25.3.0** image for five architectures (AMD64, ARM64, LoongArch, RISC-V, WSL), complete with alternative mirrors and checksums for verification.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration & Architecture Data](#configuration--architecture-data)
- [Releasing a New deepin Version](#releasing-a-new-deepin-version)
- [Deployment](#deployment)
- [SEO, Performance & AdSense](#seo-performance--adsense)
- [Analytics](#analytics)
- [Contributing](#contributing)
- [License](#license)

## About

`download-site` is the official download page of the deepin Indonesia community. Each architecture shows several mirrors (Direct Download, Torrent, SourceForge, Baidu Netdisk, Google Drive), SHA256/MD5 checksums, and an ISO verification guide.

### The deepin Indonesia ecosystem

| Subdomain | Repo | Purpose |
|---|---|---|
| [deepin.id](https://deepin.id) | `home-site` | Home page |
| [os.deepin.id](https://os.deepin.id) | `download-site` ← this repo | deepin image downloads |
| [news.deepin.id](https://news.deepin.id) | `news-site` | News & articles |
| [about.deepin.id](https://about.deepin.id) | `about-site` | Community & product planning |
| [donasi.deepin.id](https://donasi.deepin.id) | `donasi-site` | Community donations |

## Features

- **Architecture tabs** without reload: AMD64, ARM64, LoongArch, RISC-V, WSL.
- **Multiple mirrors per architecture** — Direct CDN, Torrent, SourceForge, Baidu, Google Drive.
- **SHA256 + MD5 checksums** to verify image integrity.
- **Verification guide** via terminal (Linux, Windows PowerShell, macOS).
- **Latest release banner** linking to the release-notes article.
- **WSL guide** linking to the installation tutorial.
- **Complete SEO**, Google Analytics, and Google AdSense.

## Tech Stack

| Technology | Detail |
|---|---|
| **Framework** | [Astro 7](https://astro.build) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Language** | TypeScript (`strict`), alias `@/*` → `src/*` |
| **Icons** | [Font Awesome 6](https://fontawesome.com) (CDN) |
| **Sitemap** | `@astrojs/sitemap` |
| **Analytics** | Google Analytics 4 — `G-2J4TLB9W7H` |
| **Ads** | Google AdSense — `ca-pub-1345939033565649` |
| **Deploy** | [Cloudflare Pages](https://pages.cloudflare.com) |
| **Runtime** | Node.js 20+ |

## Project Structure

```
download-site/
├── src/
│   ├── components/
│   │   ├── Layout.astro      # <head>, SEO meta, AdSense, GA
│   │   ├── Header.astro      # Sticky header + nav + drawer
│   │   ├── Footer.astro      # Footer + privacy link
│   │   └── Analytics.astro   # GA4 + tracking
│   ├── data/
│   │   └── site.ts           # Site config
│   ├── pages/
│   │   ├── index.astro       # Download page — arches[], tabs, checksums
│   │   └── 404.astro         # 404 (noindex)
│   └── styles/
│       └── global.css        # Tailwind + deepin palette
├── public/
│   ├── images/               # deepin logo
│   ├── _redirects            # /privacy/ → https://deepin.id/privacy/ (301)
│   ├── ads.txt
│   ├── robots.txt
│   ├── llms.txt
│   └── site.webmanifest
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20+
- npm

### Install & develop

```bash
git clone https://github.com/deepin-Indonesia/download-site.git
cd download-site
npm install
npm run dev        # → http://localhost:4321 (or the next free port)
```

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the build |

## Configuration & Architecture Data

All download data lives in **`src/pages/index.astro`** inside the `arches[]` array. Each architecture object contains:

| Field | Description |
|---|---|
| `id` | Architecture ID (`amd64`, `arm64`, `loong64`, `riscv`, `wsl`) |
| `label` | Tab label (e.g. `AMD64`) |
| `sub` | Sub-label (e.g. `x86_64`, `Windows`) |
| `active` | `true` for the default tab |
| `desc` | Short description |
| `mirrors[]` | Mirror list: `name`, `icon`, `url`, `sub` |
| `sha256` / `md5` | Image checksums |
| `iso` | ISO file name |

Architecture tabs are switched by a small script at the bottom of the page (no reload), and each click sends a `tab_select` event to GA4.

## Releasing a New deepin Version

When deepin ships a new version (e.g. `25.2.0` → `25.3.0`):

1. **Fetch official checksums** from the deepin CDN:
   ```bash
   curl https://cdimage.deepin.com/releases/25.3.0/amd64/SHA256SUMS
   curl https://cdimage.deepin.com/releases/25.3.0/amd64/MD5SUMS
   ```
   Repeat for `arm64`, `loong64`, and `riscv64`.

2. **Update `arches[]`** in `src/pages/index.astro`:
   - `mirrors[].url` — change the version in the path (`/releases/25.3.0/…`).
   - `mirrors[].sub` — the small text on each card.
   - `sha256`, `md5`, `iso` — new values and file name.

3. **Update the version heading** `<h2>25.3.0</h2>` and the release banner (text + article link).

4. **Baidu & Google Drive** are manually managed mirror folders — make sure their contents are refreshed.

5. **Test** with `npm run build` and check every tab.

> **WSL** has no checksum. Its links live in `arches[]` with `id: 'wsl'` (GitHub Release + Google Drive).

## Deployment

Push to `main` → **Cloudflare Pages** builds and deploys automatically.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

## SEO, Performance & AdSense

- **Per-page meta & canonical**, `robots` + `hreflang`, full Open Graph & Twitter Card.
- **JSON-LD** `Organization`; the 404 page uses `noindex, follow`.
- **Automatic sitemap** + `robots.txt` + `llms.txt`.
- **Resource hints** (`preconnect`) and non-blocking Font Awesome.
- **Google AdSense** via the script + `google-adsense-account` + `public/ads.txt`.
- **Privacy Policy** is centralized at **https://deepin.id/privacy/**; `public/_redirects` 301-redirects `/privacy/` there.

## Analytics

One GA4 property (`G-2J4TLB9W7H`) for all subdomains; every event carries a `site` parameter. Key events on this page: `tab_select` (switch architecture), `download_click` (mirror click), `copy_text` (copy checksum), `faq_toggle` (open ISO verification).

Custom events can be added with `data-track`:

```html
<a href="https://cdimage.deepin.com/..." data-track="iso_amd64">Download AMD64</a>
```

## Contributing

1. Fork the repo, then branch from `preview`: `git checkout preview && git checkout -b feat/description`.
2. Commit with a clear message, push to your fork, and open a **Pull Request** against `deepin-Indonesia/download-site` (target: **`preview`**).
3. After review, merge `preview` → `main`.

> ⚠️ Do not push directly to `main` — that branch goes live automatically.

## Troubleshooting & Contact

### Branch `main` vs `preview`

- **`main`** — production. Every push deploys via Cloudflare Pages.
- **`preview`** — staging. All changes land here first; every push to `preview` also produces a Cloudflare Pages *preview deployment* URL for review before merging into `main`.

### Common issues

| Issue | Fix |
|---|---|
| Port `4321` already in use | Astro moves to the next port automatically, or run `npm run dev -- --port 4322`. |
| Build fails after updating dependencies | Delete `node_modules` and `package-lock.json`, then run `npm install` again. |
| 404 in dev | Make sure the route file exists in `src/pages/` and the filename is exact (case-sensitive on Linux). |
| Changes not showing | Hard-refresh (`Ctrl+Shift+R`) or restart the dev server. |
| Node.js too old | Use Node.js 20+; check with `node -v`. |

### Reporting issues

- **Bugs / feature requests** → open an [Issue](https://github.com/deepin-Indonesia/download-site/issues).
- **Quick chat** → [deepin Indonesia Telegram group](https://t.me/Linux_deepin_ID).
- **Contact** → [deepin@siberin.id](mailto:deepin@siberin.id).

## License

Released under the [MIT License](LICENSE) © deepin Indonesia.

---

<div align="center">

Made with ❤️ by the [deepin Indonesia](https://deepin.id) community · [Telegram](https://t.me/Linux_deepin_ID) · [GitHub](https://github.com/deepin-Indonesia)

</div>
