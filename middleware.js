// Vercel Routing Middleware
// Runs at edge before static CDN cache to handle content negotiation for https://acceptmarkdown.com
import { HOMEPAGE_MARKDOWN } from './api/homepage-markdown.js'

export default function middleware(request) {
  const url = new URL(request.url)
  const accept = request.headers.get('accept') || ''

  // When / is requested with Accept: text/markdown, serve clean Markdown
  if (url.pathname === '/' && accept.toLowerCase().includes('text/markdown')) {
    return new Response(HOMEPAGE_MARKDOWN, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    })
  }

  // Allow all other requests to pass through untouched
  return
}

export const config = {
  matcher: '/',
}

