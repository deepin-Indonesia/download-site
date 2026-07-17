---
layout: default
title: Download deepin
description: Unduh deepin Linux 25.2.0 untuk berbagai arsitektur — AMD64, ARM64, Loong64, RISC-V, dan WSL. deepin adalah sistem operasi Linux modern dengan DDE yang cantik.
permalink: /
---

<link rel="stylesheet" href="{{ '/assets/css/download.css' | relative_url }}">

<!-- Hero -->
<section class="download-hero">
  <div class="container">
    <img src="{{ '/assets/images/deepin-id.png' | relative_url }}" alt="deepin" class="dl-hero-logo" width="96" height="96">
    <h1>Download <strong>deepin 25.2.0</strong></h1>
    <p class="dl-hero-sub">Latest Release — pilih arsitektur yang sesuai dengan perangkat Anda</p>
  </div>
</section>

<!-- Architecture Tabs -->
<section class="download-section">
  <div class="container">
    <div class="arch-tabs" role="tablist">
      <button class="arch-tab active" data-arch="amd64" role="tab" aria-selected="true">
        <span class="arch-icon"><i class="fa-solid fa-microchip"></i></span>
        <span class="arch-name">AMD64</span>
        <span class="arch-badge">x86_64</span>
      </button>
      <button class="arch-tab" data-arch="arm64" role="tab" aria-selected="false">
        <span class="arch-icon"><i class="fa-solid fa-laptop"></i></span>
        <span class="arch-name">ARM64</span>
        <span class="arch-badge">aarch64</span>
      </button>
      <button class="arch-tab" data-arch="loong64" role="tab" aria-selected="false">
        <span class="arch-icon"><i class="fa-solid fa-dragon"></i></span>
        <span class="arch-name">LoongArch</span>
        <span class="arch-badge">loong64</span>
      </button>
      <button class="arch-tab" data-arch="riscv64" role="tab" aria-selected="false">
        <span class="arch-icon"><i class="fa-solid fa-microscope"></i></span>
        <span class="arch-name">RISC-V</span>
        <span class="arch-badge">Preview</span>
      </button>
      <button class="arch-tab" data-arch="wsl" role="tab" aria-selected="false">
        <span class="arch-icon"><i class="fa-brands fa-windows"></i></span>
        <span class="arch-name">WSL</span>
        <span class="arch-badge">Windows</span>
      </button>
    </div>

    <!-- AMD64 -->
    <div class="arch-panel active" id="panel-amd64">
      <div class="dl-card">
        <div class="dl-card-header">
          <h2>AMD64 <small>(x86_64)</small></h2>
          <p>Untuk prosesor Intel & AMD — kebanyakan PC/laptop modern</p>
        </div>
        <div class="dl-mirrors">
          <a href="https://cdimage.deepin.com/releases/25.2.0/amd64/deepin-desktop-community-25.2.0-amd64.iso" class="dl-mirror mirror-cdn" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-bolt"></i></span>
            <span class="mirror-label">Direct Download</span>
            <span class="mirror-desc">CDN77 accelerated</span>
          </a>
          <a href="https://storage.deepin.org/static/v25/deepin-desktop-community-25.2.0-amd64.iso.torrent" class="dl-mirror mirror-torrent" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-cloud-arrow-down"></i></span>
            <span class="mirror-label">Torrent</span>
            <span class="mirror-desc">P2P download</span>
          </a>
          <a href="https://sourceforge.net/projects/deepin/files/25.2.0/amd64/deepin-desktop-community-25.2.0-amd64.iso/download" class="dl-mirror mirror-sf" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-server"></i></span>
            <span class="mirror-label">SourceForge</span>
            <span class="mirror-desc">Mirror global</span>
          </a>
          <a href="https://pan.baidu.com/s/1xIlYaWjJf84t5fkUnt7Qgg?pwd=deep" class="dl-mirror mirror-baidu" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-cloud"></i></span>
            <span class="mirror-label">Baidu Cloud</span>
            <span class="mirror-desc">pass: deep</span>
          </a>
          <a href="https://drive.google.com/drive/folders/1syltXVAOe3T6qVy_ZSgjCqrOzPEwxkC8?usp=sharing" class="dl-mirror mirror-gdrive" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-brands fa-google-drive"></i></span>
            <span class="mirror-label">Google Drive</span>
            <span class="mirror-desc">Folder mirror</span>
          </a>
        </div>
        <details class="dl-checksums">
          <summary>🔐 Checksums (verifikasi ISO)</summary>
          <div class="checksum-box">
            <div class="checksum-row"><strong>MD5</strong><code>3a4aa859ea72034dfb65805941fac372</code></div>
            <div class="checksum-row"><strong>SHA256</strong><code>f875c9a605bfe6a8425d1d353a3c1ec755bf37f5b0a3231ca19e2145da0ff450</code></div>
          </div>
        </details>
      </div>
    </div>

    <!-- ARM64 -->
    <div class="arch-panel" id="panel-arm64">
      <div class="dl-card">
        <div class="dl-card-header">
          <h2>ARM64 <small>(aarch64)</small></h2>
          <p>Untuk perangkat ARM seperti Apple Silicon, Raspberry Pi 4/5, dan Snapdragon X</p>
        </div>
        <div class="dl-mirrors">
          <a href="https://cdimage.deepin.com/releases/25.2.0/arm64/deepin-desktop-community-25.2.0-arm64.iso" class="dl-mirror mirror-cdn" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-bolt"></i></span>
            <span class="mirror-label">Direct Download</span>
            <span class="mirror-desc">CDN77 accelerated</span>
          </a>
          <a href="https://storage.deepin.org/static/v25/deepin-desktop-community-25.2.0-arm64.iso.torrent" class="dl-mirror mirror-torrent" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-cloud-arrow-down"></i></span>
            <span class="mirror-label">Torrent</span>
            <span class="mirror-desc">P2P download</span>
          </a>
          <a href="https://sourceforge.net/projects/deepin/files/25.2.0/arm64/deepin-desktop-community-25.2.0-arm64.iso/download" class="dl-mirror mirror-sf" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-server"></i></span>
            <span class="mirror-label">SourceForge</span>
            <span class="mirror-desc">Mirror global</span>
          </a>
          <a href="https://pan.baidu.com/s/1XE2v3hVavr9KUj4c0iI_qA?pwd=deep" class="dl-mirror mirror-baidu" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-cloud"></i></span>
            <span class="mirror-label">Baidu Cloud</span>
            <span class="mirror-desc">pass: deep</span>
          </a>
          <a href="https://drive.google.com/drive/folders/1fdIrL7YasF-YM8m4YYQTGfRJiqKMa2_4?usp=sharing" class="dl-mirror mirror-gdrive" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-brands fa-google-drive"></i></span>
            <span class="mirror-label">Google Drive</span>
            <span class="mirror-desc">Folder mirror</span>
          </a>
        </div>
        <details class="dl-checksums">
          <summary>🔐 Checksums (verifikasi ISO)</summary>
          <div class="checksum-box">
            <div class="checksum-row"><strong>MD5</strong><code>db36fe803a2f0492af1521bb87a0037f</code></div>
            <div class="checksum-row"><strong>SHA256</strong><code>7c5cb76cec53532313f2b1f435d477a651f9b5f7ca2435dfc12eb7be8d3340fe</code></div>
          </div>
        </details>
      </div>
    </div>

    <!-- Loong64 -->
    <div class="arch-panel" id="panel-loong64">
      <div class="dl-card">
        <div class="dl-card-header">
          <h2>LoongArch <small>(loong64)</small></h2>
          <p>Untuk prosesor Loongson — arsitektur buatan Tiongkok</p>
        </div>
        <div class="dl-mirrors">
          <a href="https://cdimage.deepin.com/releases/25.2.0/loong64/deepin-desktop-community-25.2.0-loong64.iso" class="dl-mirror mirror-cdn" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-bolt"></i></span>
            <span class="mirror-label">Direct Download</span>
            <span class="mirror-desc">CDN77 accelerated</span>
          </a>
          <a href="https://storage.deepin.org/static/v25/deepin-desktop-community-25.2.0-loong64.iso.torrent" class="dl-mirror mirror-torrent" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-cloud-arrow-down"></i></span>
            <span class="mirror-label">Torrent</span>
            <span class="mirror-desc">P2P download</span>
          </a>
          <a href="https://sourceforge.net/projects/deepin/files/25.2.0/loong64/deepin-desktop-community-25.2.0-loong64.iso/download" class="dl-mirror mirror-sf" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-server"></i></span>
            <span class="mirror-label">SourceForge</span>
            <span class="mirror-desc">Mirror global</span>
          </a>
          <a href="https://pan.baidu.com/s/1Fun9ta2VG33qT8u4nvYCGw?pwd=deep" class="dl-mirror mirror-baidu" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-cloud"></i></span>
            <span class="mirror-label">Baidu Cloud</span>
            <span class="mirror-desc">pass: deep</span>
          </a>
          <a href="https://drive.google.com/drive/folders/1-sOdShGZ-gT1peN9WmgM6m-q2rlwPT05?usp=sharing" class="dl-mirror mirror-gdrive" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-brands fa-google-drive"></i></span>
            <span class="mirror-label">Google Drive</span>
            <span class="mirror-desc">Folder mirror</span>
          </a>
        </div>
        <details class="dl-checksums">
          <summary>🔐 Checksums (verifikasi ISO)</summary>
          <div class="checksum-box">
            <div class="checksum-row"><strong>MD5</strong><code>a140c8df7291c47b05dc7ec38c5f633a</code></div>
            <div class="checksum-row"><strong>SHA256</strong><code>1835726765d5839481572dbdaf8b8fdb5b2403ed8395cbe06f8d509891fb46c1</code></div>
          </div>
        </details>
      </div>
    </div>

    <!-- RISC-V -->
    <div class="arch-panel" id="panel-riscv64">
      <div class="dl-card">
        <div class="dl-card-header">
          <h2>RISC-V <small>(riscv64)</small></h2>
          <span class="preview-badge">Technology Preview</span>
          <p>Untuk perangkat RISC-V — arsitektur open-source masa depan</p>
        </div>
        <div class="dl-mirrors">
          <a href="https://cdimage.deepin.com/releases/25.2.0/riscv64/deepin-desktop-community-25.2.0-riscv64.iso" class="dl-mirror mirror-cdn" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-bolt"></i></span>
            <span class="mirror-label">Direct Download</span>
            <span class="mirror-desc">CDN77 accelerated</span>
          </a>
          <a href="https://storage.deepin.org/static/v25/deepin-desktop-community-25.2.0-riscv64.iso.torrent" class="dl-mirror mirror-torrent" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-solid fa-cloud-arrow-down"></i></span>
            <span class="mirror-label">Torrent</span>
            <span class="mirror-desc">P2P download</span>
          </a>
          <a href="https://deepin-community.github.io/sig-deepin-ports/images/riscv64" class="dl-mirror mirror-gh" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-brands fa-github"></i></span>
            <span class="mirror-label">GitHub</span>
            <span class="mirror-desc">Community ports</span>
          </a>
        </div>
        <details class="dl-checksums">
          <summary>🔐 Checksums (verifikasi ISO)</summary>
          <div class="checksum-box">
            <div class="checksum-row"><strong>MD5</strong><code>e62424f1a6c152d6e041a7c4ddf7d237</code></div>
            <div class="checksum-row"><strong>SHA256</strong><code>ea5266d13a640eabc3b4cb7b893097a6416c5d457ae10bbd6bde0fc94e3ebe4a</code></div>
          </div>
        </details>
        <a href="https://deepin-community.github.io/sig-deepin-ports/matrix" class="dl-extra-link" target="_blank" rel="noopener">
          📋 Daftar Perangkat yang Didukung →
        </a>
      </div>
    </div>

    <!-- WSL -->
    <div class="arch-panel" id="panel-wsl">
      <div class="dl-card">
        <div class="dl-card-header">
          <h2>WSL <small>(Windows Subsystem for Linux)</small></h2>
          <span class="preview-badge">deepin 25 WSL</span>
          <p>Jalankan deepin di Windows 10/11 melalui WSL</p>
        </div>
        <div class="dl-mirrors">
          <a href="https://github.com/deepin-community/deepin-WSL/releases/tag/v1.6.0" class="dl-mirror mirror-gh" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-brands fa-github"></i></span>
            <span class="mirror-label">GitHub Releases</span>
            <span class="mirror-desc">v1.6.0</span>
          </a>
          <a href="https://drive.google.com/drive/folders/1NL0JHAs9S834zL1_g1Zjr6qAjD3_iL9f?usp=sharing" class="dl-mirror mirror-gdrive" target="_blank" rel="noopener">
            <span class="mirror-icon"><i class="fa-brands fa-google-drive"></i></span>
            <span class="mirror-label">Google Drive</span>
            <span class="mirror-desc">Folder mirror</span>
          </a>
        </div>
        <a href="https://bbs.deepin.org/en/post/297749" class="dl-extra-link" target="_blank" rel="noopener">
          📖 Panduan Instalasi WSL →
        </a>
      </div>
    </div>
  </div>
</section>

<script src="{{ '/assets/js/download.js' | relative_url }}"></script>
