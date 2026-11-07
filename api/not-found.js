// Vercel Serverless Function & Dev Server Handler for 404 Not Found
// Supports agent-friendly Markdown responses (Accept: text/markdown) and 100% self-contained branded HTML

const MARKDOWN_BODY = `# 404 Not Found — AarohCare

Looks like this page missed its appointment.

The page you're looking for doesn't exist or may have moved on AarohCare (https://www.aarohcare.com/).

### Helpful Resources

- **Homepage**: [https://www.aarohcare.com/](https://www.aarohcare.com/)
- **Terms & Conditions**: [https://www.aarohcare.com/terms](https://www.aarohcare.com/terms)
- **Privacy Policy**: [https://www.aarohcare.com/privacy](https://www.aarohcare.com/privacy)
- **Sitemap**: [https://www.aarohcare.com/sitemap.xml](https://www.aarohcare.com/sitemap.xml)
- **LLM / Agent Index**: [https://www.aarohcare.com/llms.txt](https://www.aarohcare.com/llms.txt)

For support, please contact us at aarohcare.in@gmail.com.
`

const HTML_BODY = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 - Page Not Found — AarohCare</title>
    <meta name="description" content="The page you're looking for doesn't exist or may have moved on AarohCare." />
    <meta name="robots" content="noindex, follow" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background-color: #f8fafc;
        color: #0f172a;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      .navbar {
        position: sticky;
        top: 0;
        z-index: 50;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid #e2e8f0;
      }
      .navbar-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .brand img {
        width: 34px;
        height: 34px;
        border-radius: 8px;
        object-fit: contain;
      }
      .brand-name {
        font-size: 18px;
        font-weight: 700;
        color: #0f172a;
        letter-spacing: -0.02em;
      }
      .nav-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        font-size: 13px;
        font-weight: 600;
        color: #334155;
        background-color: #f1f5f9;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        transition: all 0.2s ease;
      }
      .nav-btn:hover {
        background-color: #e2e8f0;
        color: #1d4ed8;
      }
      .main-content {
        max-width: 680px;
        margin: 0 auto;
        padding: 64px 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        justify-content: center;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 14px;
        background-color: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 9999px;
        color: #1d4ed8;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      .badge-dot {
        width: 8px;
        height: 8px;
        border-radius: 9999px;
        background-color: #2563eb;
      }
      .error-code {
        font-size: 80px;
        font-weight: 800;
        letter-spacing: -0.04em;
        line-height: 1;
        color: #0f172a;
        margin-top: 16px;
      }
      .headline {
        font-size: 32px;
        font-weight: 800;
        line-height: 1.25;
        color: #0f172a;
        margin-top: 16px;
        letter-spacing: -0.02em;
      }
      .description {
        font-size: 16px;
        line-height: 1.6;
        color: #475569;
        margin-top: 12px;
        max-width: 480px;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
        margin-top: 32px;
      }
      .btn-primary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px 24px;
        background-color: #2563eb;
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
        border-radius: 12px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        transition: all 0.2s ease;
      }
      .btn-primary:hover {
        background-color: #1d4ed8;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
      }
      .btn-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px 22px;
        background-color: #ffffff;
        color: #334155;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
        transition: all 0.2s ease;
      }
      .btn-secondary:hover {
        background-color: #f8fafc;
        border-color: #94a3b8;
        color: #0f172a;
      }
      .nav-links {
        margin-top: 48px;
        padding-top: 24px;
        border-top: 1px solid #e2e8f0;
        width: 100%;
        max-width: 440px;
      }
      .nav-links-title {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #64748b;
        margin-bottom: 12px;
      }
      .nav-links-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        font-size: 13px;
        font-weight: 500;
        color: #475569;
      }
      .nav-links-list a:hover {
        color: #2563eb;
      }
      .divider {
        color: #cbd5e1;
      }
      .footer {
        border-top: 1px solid #e2e8f0;
        background-color: #ffffff;
        padding: 20px 24px;
        text-align: center;
        font-size: 13px;
        color: #64748b;
      }
      .icon {
        width: 16px;
        height: 16px;
        min-width: 16px;
        min-height: 16px;
        max-width: 16px;
        max-height: 16px;
        display: inline-block;
        vertical-align: middle;
      }
      @media (max-width: 640px) {
        .error-code {
          font-size: 60px;
        }
        .headline {
          font-size: 24px;
        }
        .description {
          font-size: 14px;
        }
        .actions {
          flex-direction: column;
          width: 100%;
        }
        .btn-primary, .btn-secondary {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar-inner">
        <a href="/" class="brand">
          <img src="/favicon.ico" alt="AarohCare logo" width="34" height="34" />
          <span class="brand-name">AarohCare</span>
        </a>
        <a href="/" class="nav-btn">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span>Homepage</span>
        </a>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="badge">
        <span class="badge-dot"></span>
        <span>Error 404</span>
      </div>

      <p class="error-code">404</p>

      <h1 class="headline">Looks like this page missed its appointment.</h1>

      <p class="description">
        The page you're looking for doesn't exist or may have moved. Let's help you find your way back.
      </p>

      <div class="actions">
        <a href="/" class="btn-primary">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span>Back to Homepage</span>
        </a>

        <a href="mailto:aarohcare.in@gmail.com?subject=Inquiry%20from%20404%20Page" class="btn-secondary">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span>Contact Support</span>
        </a>
      </div>

      <nav class="nav-links" aria-label="Additional Navigation">
        <p class="nav-links-title">Helpful Resources</p>
        <div class="nav-links-list">
          <a href="/terms">Terms &amp; Conditions</a>
          <span class="divider">•</span>
          <a href="/privacy">Privacy Policy</a>
          <span class="divider">•</span>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </nav>
    </main>

    <!-- Footer -->
    <footer class="footer">
      &copy; 2026 AarohCare Technologies Pvt Ltd. All rights reserved.
    </footer>
  </body>
</html>
`

export default function handler(req, res) {
  const acceptHeader = (req.headers && req.headers['accept']) || ''
  const acceptsMarkdown = acceptHeader.toLowerCase().includes('text/markdown')

  res.statusCode = 404
  res.setHeader('Vary', 'Accept')
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')

  if (acceptsMarkdown) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
    res.end(MARKDOWN_BODY)
    return
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(HTML_BODY)
}
