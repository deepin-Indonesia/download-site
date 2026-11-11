<div align="center">

# deepin Indonesia — Download Site

**Halaman download resmi deepin Indonesia**

[os.deepin.id](https://os.deepin.id) · 🇮🇩 **Bahasa Indonesia** · [🇬🇧 English](README.en.md)

</div>

---

Halaman download statis untuk **[os.deepin.id](https://os.deepin.id)** — menyediakan image **deepin 25.3.0** untuk lima arsitektur (AMD64, ARM64, LoongArch, RISC-V, WSL) lengkap dengan mirror alternatif dan checksum verifikasi.

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Struktur Proyek](#struktur-proyek)
- [Memulai](#memulai)
- [Konfigurasi & Data Arsitektur](#konfigurasi--data-arsitektur)
- [Merilis Versi deepin Baru](#merilis-versi-deepin-baru)
- [Deployment](#deployment)
- [SEO, Performa & AdSense](#seo-performa--adsense)
- [Analitik](#analitik)
- [Berkontribusi](#berkontribusi)
- [Lisensi](#lisensi)

## Tentang Proyek

`download-site` adalah halaman unduh resmi komunitas deepin Indonesia. Setiap arsitektur menampilkan beberapa mirror (Direct Download, Torrent, SourceForge, Baidu Netdisk, Google Drive), checksum SHA256/MD5, serta panduan verifikasi ISO.

### Ekosistem deepin Indonesia

| Subdomain | Repo | Fungsi |
|---|---|---|
| [deepin.id](https://deepin.id) | `home-site` | Halaman utama |
| [os.deepin.id](https://os.deepin.id) | `download-site` ← repo ini | Download image deepin |
| [news.deepin.id](https://news.deepin.id) | `news-site` | Berita & artikel |
| [about.deepin.id](https://about.deepin.id) | `about-site` | Tentang & product planning |
| [donasi.deepin.id](https://donasi.deepin.id) | `donasi-site` | Donasi komunitas |

## Fitur

- **Tab arsitektur** tanpa reload: AMD64, ARM64, LoongArch, RISC-V, WSL.
- **Beberapa mirror per arsitektur** — Direct CDN, Torrent, SourceForge, Baidu, Google Drive.
- **Checksum SHA256 + MD5** untuk verifikasi integritas image.
- **Panduan verifikasi** via terminal (Linux, Windows PowerShell, macOS).
- **Banner rilis terbaru** yang menautkan ke artikel release notes.
- **Panduan WSL** yang menautkan ke tutorial instalasi.
- **SEO lengkap**, Google Analytics, dan Google AdSense.

## Tech Stack

| Teknologi | Detail |
|---|---|
| **Framework** | [Astro 7](https://astro.build) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Bahasa** | TypeScript (`strict`), alias `@/*` → `src/*` |
| **Ikon** | [Font Awesome 6](https://fontawesome.com) (CDN) |
| **Sitemap** | `@astrojs/sitemap` |
| **Analitik** | Google Analytics 4 — `G-2J4TLB9W7H` |
| **Iklan** | Google AdSense — `ca-pub-1345939033565649` |
| **Deploy** | [Cloudflare Pages](https://pages.cloudflare.com) |
| **Runtime** | Node.js 20+ |

## Struktur Proyek

```
download-site/
├── src/
│   ├── components/
│   │   ├── Layout.astro      # <head>, meta SEO, AdSense, GA
│   │   ├── Header.astro      # Header sticky + nav + drawer
│   │   ├── Footer.astro      # Footer + link privasi
│   │   └── Analytics.astro   # GA4 + pelacakan
│   ├── data/
│   │   └── site.ts           # Konfigurasi situs
│   ├── pages/
│   │   ├── index.astro       # Halaman download — arches[], tabs, checksum
│   │   └── 404.astro         # 404 (noindex)
│   └── styles/
│       └── global.css        # Tailwind + palet deepin
├── public/
│   ├── images/               # Logo deepin
│   ├── _redirects            # /privacy/ → https://deepin.id/privacy/ (301)
│   ├── ads.txt
│   ├── robots.txt
│   ├── llms.txt
│   └── site.webmanifest
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Memulai

### Prasyarat

- [Node.js](https://nodejs.org) 20+
- npm

### Instalasi & pengembangan

```bash
git clone https://github.com/deepin-Indonesia/download-site.git
cd download-site
npm install
npm run dev        # → http://localhost:4321 (atau port berikutnya)
```

### Perintah

| Perintah | Kegunaan |
|---|---|
| `npm run dev` | Server pengembangan |
| `npm run build` | Build produksi ke `dist/` |
| `npm run preview` | Preview hasil build |

## Konfigurasi & Data Arsitektur

Semua data download berada di **`src/pages/index.astro`** dalam array `arches[]`. Setiap objek arsitektur berisi:

| Field | Deskripsi |
|---|---|
| `id` | ID arsitektur (`amd64`, `arm64`, `loong64`, `riscv`, `wsl`) |
| `label` | Label tab (mis. `AMD64`) |
| `sub` | Sub-label (mis. `x86_64`, `Windows`) |
| `active` | `true` untuk tab yang tampil pertama |
| `desc` | Deskripsi singkat |
| `mirrors[]` | Daftar mirror: `name`, `icon`, `url`, `sub` |
| `sha256` / `md5` | Checksum image |
| `iso` | Nama file ISO |

Tab arsitektur di-switch oleh JavaScript kecil di akhir halaman (tanpa reload), dan setiap klik mengirim event `tab_select` ke GA4.

## Merilis Versi deepin Baru

Saat deepin merilis versi baru (mis. dari `25.2.0` ke `25.3.0`):

1. **Ambil checksum resmi** dari CDN deepin:
   ```bash
   curl https://cdimage.deepin.com/releases/25.3.0/amd64/SHA256SUMS
   curl https://cdimage.deepin.com/releases/25.3.0/amd64/MD5SUMS
   ```
   Ulangi untuk `arm64`, `loong64`, dan `riscv64`.

2. **Perbarui `arches[]`** di `src/pages/index.astro`:
   - `mirrors[].url` — ganti versi di path (`/releases/25.3.0/…`).
   - `mirrors[].sub` — teks kecil di kartu.
   - `sha256`, `md5`, `iso` — nilai dan nama file baru.

3. **Perbarui heading versi** `<h2>25.3.0</h2>` dan banner rilis (teks + link artikel).

4. **Baidu & Google Drive** adalah folder mirror yang dikelola manual; pastikan isinya sudah diperbarui.

5. **Uji** dengan `npm run build` lalu cek setiap tab.

> **WSL** tidak memiliki checksum. Link-nya ada di `arches[]` dengan `id: 'wsl'` (GitHub Release + Google Drive).

## Deployment

Push ke `main` → **Cloudflare Pages** otomatis build & deploy.

| Setting | Nilai |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

## SEO, Performa & AdSense

- **Meta & canonical** per halaman, `robots` + `hreflang`, Open Graph & Twitter Card lengkap.
- **JSON-LD** `Organization`; halaman 404 memakai `noindex, follow`.
- **Sitemap** otomatis + `robots.txt` + `llms.txt`.
- **Resource hints** (`preconnect`) dan Font Awesome non-blocking.
- **Google AdSense** via script + `google-adsense-account` + `public/ads.txt`.
- **Kebijakan Privasi** dipusatkan di **https://deepin.id/privacy/**; `public/_redirects` mengarahkan `/privacy/` ke sana dengan **301**.

## Analitik

Satu property GA4 (`G-2J4TLB9W7H`) untuk semua subdomain; setiap event membawa parameter `site`. Event penting di halaman ini: `tab_select` (ganti arsitektur), `download_click` (klik mirror), `copy_text` (salin checksum), `faq_toggle` (buka verifikasi ISO).

Event kustom bisa ditambahkan dengan `data-track`:

```html
<a href="https://cdimage.deepin.com/..." data-track="iso_amd64">Download AMD64</a>
```

## Berkontribusi

1. Fork repo, lalu buat branch dari `preview`: `git checkout preview && git checkout -b feat/deskripsi`.
2. Commit dengan pesan jelas, push ke fork, dan buka **Pull Request** ke `deepin-Indonesia/download-site` (target: **`preview`**).
3. Setelah review, merge `preview` → `main`.

> ⚠️ Jangan push langsung ke `main` — branch itu otomatis tayang.

## Pemecahan Masalah & Kontak

### Branch `main` vs `preview`

- **`main`** — produksi. Setiap push otomatis tayang lewat Cloudflare Pages.
- **`preview`** — staging. Semua perubahan masuk ke sini dulu; setiap push ke `preview` juga menghasilkan URL *preview deployment* Cloudflare Pages untuk dicek sebelum merge ke `main`.

### Masalah umum

| Masalah | Solusi |
|---|---|
| Port `4321` sudah dipakai | Astro otomatis pindah ke port berikutnya, atau jalankan `npm run dev -- --port 4322`. |
| Build gagal setelah update dependensi | Hapus `node_modules` dan `package-lock.json`, lalu `npm install` ulang. |
| Halaman 404 saat dev | Pastikan file route ada di `src/pages/` dan nama file benar (huruf besar/kecil berpengaruh di Linux). |
| Perubahan tidak muncul | Hard refresh (`Ctrl+Shift+R`) atau restart dev server. |
| Node.js terlalu lama | Gunakan Node.js 20+; cek dengan `node -v`. |

### Melaporkan masalah

- **Bug / usulan fitur** → buka [Issue](https://github.com/deepin-Indonesia/download-site/issues).
- **Diskusi cepat** → [grup Telegram deepin Indonesia](https://t.me/Linux_deepin_ID).
- **Kontak** → [deepin@siberin.id](mailto:deepin@siberin.id).

## Lisensi

Dirilis di bawah [MIT License](LICENSE) © deepin Indonesia.

---

<div align="center">

Dibuat dengan ❤️ oleh komunitas [deepin Indonesia](https://deepin.id) · [Telegram](https://t.me/Linux_deepin_ID) · [GitHub](https://github.com/deepin-Indonesia)

</div>
