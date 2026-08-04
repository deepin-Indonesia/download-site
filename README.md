# deepin Indonesia — Download Site

Halaman download resmi deepin Indonesia: **[os.deepin.id](https://os.deepin.id)**

Menyediakan link download deepin 25 untuk 5 arsitektur: AMD64, ARM64, LoongArch, RISC-V, dan WSL — lengkap dengan checksum verifikasi.

---

## Tech Stack

| Technology | Detail |
|---|---|
| **Framework** | [Astro 7](https://astro.build) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Icons** | [Font Awesome 6](https://fontawesome.com) (CDN) |
| **Sitemap** | `@astrojs/sitemap` |
| **Deploy** | [Cloudflare Pages](https://pages.cloudflare.com) |
| **Analytics** | Google Analytics 4 (`G-2J4TLB9W7H`) |
| **Runtime** | Node.js 24 |

## Project Structure

```
download-site/
├── src/
│   ├── components/
│   │   ├── Layout.astro      # Base layout (HTML head, GA4, SEO meta)
│   │   ├── Header.astro      # Sticky header + nav + mobile menu
│   │   └── Footer.astro      # Footer dengan social links
│   ├── data/
│   │   └── site.ts           # Site config, MAIN_NAV, ABOUT_NAV, social
│   ├── pages/
│   │   ├── index.astro       # Halaman download — arsitektur tabs + mirror links + checksum
│   │   └── 404.astro         # Custom 404
│   └── styles/
│       └── global.css        # Tailwind import + @theme colors
├── public/
│   ├── images/               # Logo deepin
│   └── robots.txt            # Crawler rules + Sitemap directive
├── astro.config.mjs          # site: https://os.deepin.id
├── package.json
└── tsconfig.json
```

## Getting Started

```bash
git clone https://github.com/deepin-Indonesia/download-site.git
cd download-site
npm install
npm run dev        # → http://localhost:4322
npm run build      # Production build → dist/
```

## Deployment

Push ke branch `main` → Cloudflare Pages auto-deploy.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Branch | `main` |

## Contributing

Semua orang bisa berkontribusi — tidak perlu jadi anggota organisasi.

### Untuk kontributor luar (via Fork)

1. **Fork** repo ini (klik tombol Fork di GitHub)
2. Clone fork kamu: `git clone https://github.com/USERNAME/download-site.git`
3. `git checkout preview && git checkout -b feat/deskripsi`
4. Edit, commit, push ke fork kamu
5. Buka **Pull Request (PR)** ke `deepin-Indonesia/download-site` → target: `preview`

### Untuk anggota organisasi (push langsung)

1. `git checkout preview && git checkout -b feat/deskripsi`
2. Commit & push
3. Buat PR ke `preview`
4. Setelah review, merge `preview` → `main`

> ⚠️ Jangan push langsung ke `main` — harus lewat PR (Pull Request).

## Updating Content

### Ganti versi deepin

Edit `src/pages/index.astro` — dalam array `arches[]`:

1. **Versi di heading:** ubah teks `<h2>25.2.0</h2>`
2. **URL download:** update path versi di semua `mirrors[].url`
3. **Checksums:** update `sha256` dan `md5` tiap arsitektur
4. **Nama ISO:** update `iso` field tiap arsitektur

### Tambah/hapus mirror

Edit array `mirrors[]` di dalam `arches[]` — tambah atau hapus objek mirror.

### Update WSL links

WSL tidak punya checksum. Link ada di `arches[]` dengan `id: 'wsl'` — update `mirrors[].url`.


