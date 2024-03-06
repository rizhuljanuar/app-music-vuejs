import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,json,ico,svg}'],
      },
      manifest: {
        name: 'Music App',
        theme_color: '#ff5e3a',
        icons: [
          {
            src: './pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        // screenshots : [
        //   {
        //     src: "assets/img/jelas.png",
        //     sizes: "1280x996",
        //     type: "image/png",
        //     form_factor: "wide"
        //   },
        //   {
        //     src: "assets/img/jelas.png",
        //     sizes: "1280x996",
        //     type: "image/png",
        //     form_factor: "narrow"
        //   }
        // ]
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
