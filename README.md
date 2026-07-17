# Download Site

Halaman download resmi deepin Linux — [os.deepin.id](https://os.deepin.id/)

## Setup

```bash
git clone --recurse-submodules https://github.com/deepin-Indonesia/download-site.git
cd download-site
bundle install
bundle exec jekyll serve
```

## Struktur

```
download-site/
├── _theme/              ← Git submodule → deepin-theme-site
├── index.md             ← Halaman download (5 tab arsitektur)
├── _config.yml          ← Konfigurasi Jekyll (url: os.deepin.id)
├── assets/
│   ├── css/
│   │   ├── main.scss    ← Stylesheet utama (dari tema)
│   │   └── download.css ← Styling halaman download
│   ├── js/
│   │   ├── main.js      ← JS utama (dari tema)
│   │   └── download.js  ← Tab switcher arsitektur
│   └── images/          ← Logo deepin
├── .github/workflows/
│   └── pages.yml        ← GitHub Actions deploy ke Pages
├── Gemfile
└── .gitmodules
```

## Tema

Tema (header, footer, layout, navigasi) dikelola di repo terpisah:

→ [deepin-Indonesia/deepin-theme-site](https://github.com/deepin-Indonesia/deepin-theme-site)

### Update tema

```bash
cd _theme
git pull origin master
cd ..
git add _theme
git commit -m "Update theme"
```

## Deployment

| Environment | Branch | URL |
|---|---|---|
| Preview (Netlify) | `preview` | Netlify dashboard |
| Production (GitHub Pages) | `main` | os.deepin.id |

### Workflow

1. Commit → push ke `preview`
2. Preview di Netlify
3. Jika OK → merge ke `main`

```bash
# Push ke preview
git checkout preview && git merge main && git push origin preview && git checkout main

# Merge ke production
git checkout main && git merge preview && git push origin main
```

## Arsitektur yang Didukung

| Arsitektur | Target |
|---|---|
| **AMD64** (x86_64) | Intel & AMD — PC/laptop modern |
| **ARM64** (aarch64) | Apple Silicon, Raspberry Pi 4/5, Snapdragon X |
| **LoongArch** (loong64) | Prosesor Loongson |
| **RISC-V** (riscv64) | Arsitektur open-source (Technology Preview) |
| **WSL** | Windows Subsystem for Linux |

## Mirror Download

- ⚡ Direct Download (CDN77)
- 🧲 Torrent (P2P)
- 🔷 SourceForge
- ☁️ Baidu Cloud
- 📂 Google Drive
- 🐙 GitHub (RISC-V & WSL)
