import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

// Wstawia nazwę / opis / logo z src/data/site.json (edytowalne w CMS) do index.html
const siteSettings = () => ({
  name: 'site-settings',
  transformIndexHtml: {
    // 'pre' — podmiana musi nastąpić zanim Vite zacznie parsować linki w HTML
    order: 'pre',
    handler(html) {
      const site = JSON.parse(readFileSync(new URL('./src/data/site.json', import.meta.url), 'utf-8'))
      return html
        .replaceAll('%SITE_NAME%', escapeHtml(site.name))
        .replaceAll('%SITE_DESCRIPTION%', escapeHtml(site.description))
        .replaceAll('%SITE_LOGO%', escapeHtml(site.logo))
        // URL jest ustawiane automatycznie przez Netlify przy buildzie (pełny adres dla og:image)
        .replaceAll('%SITE_URL%', escapeHtml(process.env.URL || ''))
    },
  },
})

export default defineConfig({
  plugins: [react(), siteSettings()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
