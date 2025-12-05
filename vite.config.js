import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
  },
  
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: ['dev-ambikaschool.onrender.com'],
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 800,
    
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'animation'
          }
          if (id.includes('node_modules/three/')) {
            return 'three-core'
          }
          if (id.includes('node_modules/@react-three/fiber')) {
            return 'three-fiber'
          }
          if (id.includes('node_modules/@react-three/drei')) {
            return 'three-drei'
          }
          if (id.includes('src/pages/')) {
            const pageName = id.split('src/pages/')[1].split('.')[0]
            return `page-${pageName.toLowerCase()}`
          }
          if (id.includes('src/components/Three') || 
              id.includes('src/components/DNA') ||
              id.includes('src/components/Brain') ||
              id.includes('src/components/Muscle') ||
              id.includes('src/components/Joint') ||
              id.includes('src/components/Heart')) {
            return 'three-components'
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
      },
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})
