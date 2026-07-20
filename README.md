# Download Site

Halaman download deepin — [os.deepin.id](https://os.deepin.id/)

Dibangun dengan [Jekyll](https://jekyllrb.com/), menggunakan tema bersama dari [deepin-theme-site](https://github.com/deepin-Indonesia/deepin-theme-site) sebagai Git submodule.

## Teknologi

| | |
|---|---|
| **Static site** | Jekyll 4.x |
| **Tema** | `_theme/` → submodule [deepin-theme-site](https://github.com/deepin-Indonesia/deepin-theme-site) |
| **Hosting** | GitHub Pages (`main`) + Netlify (`preview`) |
| **CSS** | `download.css` (override) + `main.scss` (tema) |
| **JS** | `download.js` (tab switcher) + `main.js` (tema) |
| **Icons** | Font Awesome 6 (CDN) |

## Local Development

```bash
git clone --recurse-submodules https://github.com/deepin-Indonesia/download-site.git
cd download-site
bundle install
bundle exec jekyll serve
```

Buka `http://localhost:4000`

## Struktur

```
download-site/
├── _theme/                    # Git submodule → deepin-theme-site
│   ├── _includes/             # header.html, footer.html, why-deepin.html
│   ├── _layouts/              # default.html
│   ├── _data/                 # navigation.yml
│   ├── assets/
│   │   ├── css/main.scss      # Stylesheet tema
│   │   ├── js/main.js         # Navigasi, scroll, mobile menu
│   │   └── images/            # Logo, favicon
│   └── _config.yml
│
├── index.md                   # Halaman utama — hero, headline, tabs, checksums
├── _config.yml                # Konfigurasi site (url: os.deepin.id)
├── assets/
│   ├── css/
│   │   ├── main.scss          # Import tema
│   │   └── download.css       # Styling halaman download
│   ├── js/
│   │   ├── main.js            # Import tema
│   │   └── download.js        # Tab switcher arsitektur
│   └── images/                # deepin-id.png
├── .github/workflows/         # CI/CD → GitHub Pages
├── Gemfile
└── .gitmodules
```

## Panduan Update

### Ganti versi deepin

Edit `index.md`:

1. **Hero:** `<h1>Download <strong>deepin</strong></h1>` — tidak perlu diubah (tanpa versi)
2. **Heading atas tabs:** `<h2><strong>25.2.0</strong></h2>` — ganti angka versi
3. **Semua URL download** — update path versi di href (contoh: `releases/25.2.0/`)
4. **Semua nama file ISO** — update di URL, checksum, dan perintah verifikasi

### Update checksums

Edit `index.md` — di dalam `<details class="dl-checksums">` tiap arsitektur:

```html
<div class="checksum-row"><strong>SHA256</strong><code>HASH_BARU</code></div>
<div class="checksum-row"><strong>MD5</strong><code>HASH_BARU</code></div>
```

> NIlai hash di perintah `echo "HASH *file.iso" | ...` juga harus di-update — cari & replace sekaligus.

### Update mirror links

Setiap arsitektur punya 5 mirror di `index.md`. Ganti URL sesuai rilis baru.

### Update headline (rilis terbaru)

Di `index.md`, section `.headline`:

```html
<h2>deepin 25.2.0 Kini Tersedia!</h2>
<a href="https://deepin.id/news/deepin-25-2-update/" ...>
```

## Tema (Submodule)

```bash
# Cek update
cd _theme && git fetch origin && git status

# Update
cd _theme && git pull origin master

# Commit perubahan submodule di repo utama
cd .. && git add _theme && git commit -m "chore: update theme"
```

## Deployment

| Environment | Branch | URL |
|---|---|---|
| Preview | `preview` | Netlify |
| Production | `main` | [os.deepin.id](https://os.deepin.id/) |

```bash
# Push ke preview (dari main)
git push origin main:preview

# Push ke production
git push origin main
```
