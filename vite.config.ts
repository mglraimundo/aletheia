import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['avatar.webp', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Aletheia — Consentimento Informado',
        short_name: 'Aletheia',
        description: 'Formulários de consentimento informado DGS 015/2013 — Oftalmologia ULS Coimbra',
        start_url: '/',
        display: 'standalone',
        background_color: '#f8fafc',
        theme_color: '#0284c7',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        // Precache all built JS/CSS/HTML assets
        globPatterns: ['**/*.{js,css,html,woff2}'],
        // base.pdf is not in the repo — cache it at runtime on first fetch
        runtimeCaching: [
          {
            urlPattern: /\/base\.pdf$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'base-pdf',
              expiration: { maxEntries: 1 },
            },
          },
        ],
      },
    }),
  ],
  assetsInclude: ['**/*.pdf'],
})
