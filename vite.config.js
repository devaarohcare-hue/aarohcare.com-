import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import contactHandler from './api/contact.js'
import chatHandler from './api/chat.js'
import notFoundHandler from './api/not-found.js'
import homepageMarkdownHandler from './api/homepage-markdown.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'aarohcare-dev-routing',
        configureServer(server) {
          // 1. WhatsApp redirect endpoint (/chat/<number>)
          server.middlewares.use('/chat', (req, res) => {
            chatHandler(req, res)
          })

          // 2. Contact form API endpoint
          server.middlewares.use('/api/contact', async (req, res) => {
            await contactHandler(req, res)
          })

          // 3. Catch-all routing middleware to mirror Vercel production behavior
          server.middlewares.use((req, res, next) => {
            const parsedUrl = new URL(req.url, 'http://localhost:5173')
            const pathname = parsedUrl.pathname.replace(/\/+$/, '') || '/'

            // Allow Vite internal assets, HMR, source code, and node_modules
            if (
              pathname.startsWith('/@') ||
              pathname.startsWith('/__') ||
              pathname.startsWith('/src/') ||
              pathname.startsWith('/node_modules/')
            ) {
              return next()
            }

            // Homepage Markdown negotiation (acceptmarkdown.com standard)
            if (pathname === '/') {
              res.setHeader('Vary', 'Accept')
              const acceptHeader = (req.headers && req.headers['accept']) || ''
              if (acceptHeader.toLowerCase().includes('text/markdown')) {
                homepageMarkdownHandler(req, res)
                return
              }
              return next()
            }

            // Static legal and policy routes
            if (pathname === '/terms' || pathname === '/terms-and-conditions') {
              const termsFilePath = path.join(import.meta.dirname, 'public', 'terms.html')
              res.statusCode = 200
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              fs.createReadStream(termsFilePath).pipe(res)
              return
            }

            if (pathname === '/privacy' || pathname === '/privacy-policy') {
              const privacyFilePath = path.join(import.meta.dirname, 'public', 'privacy.html')
              res.statusCode = 200
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              fs.createReadStream(privacyFilePath).pipe(res)
              return
            }

            if (pathname === '/delete-account') {
              const deleteFilePath = path.join(import.meta.dirname, 'public', 'delete-account.html')
              res.statusCode = 200
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              fs.createReadStream(deleteFilePath).pipe(res)
              return
            }

            if (pathname === '/about') {
              const aboutFilePath = path.join(import.meta.dirname, 'public', 'about.html')
              res.statusCode = 200
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              fs.createReadStream(aboutFilePath).pipe(res)
              return
            }

            if (pathname === '/contact') {
              const contactFilePath = path.join(import.meta.dirname, 'public', 'contact.html')
              res.statusCode = 200
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              fs.createReadStream(contactFilePath).pipe(res)
              return
            }

            // Valid website routes
            const validRoutes = new Set([
              '/',
              '/terms',
              '/terms-and-conditions',
              '/privacy',
              '/privacy.html',
              '/privacy-policy',
              '/delete-account',
              '/delete-account.html',
              '/about',
              '/about.html',
              '/contact',
              '/contact.html',
            ])

            if (
              validRoutes.has(pathname) ||
              pathname.startsWith('/delete-account/')
            ) {
              return next()
            }

            // Check if physical file exists in public directory
            const publicFilePath = path.join(import.meta.dirname, 'public', pathname.replace(/^\//, ''))
            try {
              if (fs.existsSync(publicFilePath) && fs.statSync(publicFilePath).isFile()) {
                return next()
              }
            } catch {
              // Ignore filesystem stat errors
            }

            // Check if physical file exists in project root (e.g. index.html)
            const rootFilePath = path.join(import.meta.dirname, pathname.replace(/^\//, ''))
            try {
              if (pathname.includes('.') && fs.existsSync(rootFilePath) && fs.statSync(rootFilePath).isFile()) {
                return next()
              }
            } catch {
              // Ignore filesystem stat errors
            }

            // Nonexistent route or file: delegate to agent-friendly 404 handler
            notFoundHandler(req, res)
          })
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            const normalizedId = id.replace(/\\/g, '/')
            if (
              normalizedId.includes('/node_modules/react/') ||
              normalizedId.includes('/node_modules/react-dom/') ||
              normalizedId.includes('/node_modules/scheduler/')
            ) {
              return 'vendor-react'
            }
            if (normalizedId.includes('/node_modules/motion/')) {
              return 'vendor-motion'
            }
            if (normalizedId.includes('/node_modules/gsap/')) {
              return 'vendor-gsap'
            }
          },
        },
      },
    },
  }
})
