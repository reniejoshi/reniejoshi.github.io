import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      logStats: true,
      ansiColors: true,
      test: /\.(jpe?g|png|gif|webp|svg)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: false,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                cleanupIds: {
                  minify: false,
                  remove: false,
                },
                convertPathData: false,
              },
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      jpg: {
        quality: 85,
      },
      gif: {},
      webp: {
        lossless: true,
      },
      cache: false,
      cacheLocation: undefined,
    }),
  ],

  server: {
    port: 9500,
    host: true,
  },
  preview: {
    port: 9500,
    host: true,
  },
})
