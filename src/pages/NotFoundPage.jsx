import React, { useEffect } from 'react'
import { ArrowLeft, Home, Mail, FileText, Shield, Map } from 'lucide-react'
import logoImg from '../assets/aarohcare-logo.png'
import Footer from '../components/Footer'

export default function NotFoundPage({ onNavigateHome, onNavigatePage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true })
      window.__lenis.resize()
    }
    document.title = '404 - Page Not Found — AarohCare'
  }, [])

  const handleHomeClick = (e, hash = '#hero') => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault()
    if (onNavigateHome) {
      onNavigateHome(hash)
    } else {
      window.location.href = '/' + (hash || '')
    }
  }

  const handlePageClick = (e, page) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault()
    if (onNavigatePage) {
      onNavigatePage(page)
    } else {
      window.location.href = `/${page}`
    }
  }

  return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between antialiased selection:bg-blue-500/20 selection:text-blue-900">
        {/* Clean Navigation Header (aligned with Terms & Privacy pages) */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            {/* Left: Back button + Brand logo and name */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={(e) => handleHomeClick(e, '#hero')}
                aria-label="Back to Home"
                title="Back to Home"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-full transition-all duration-200 cursor-pointer border border-slate-200/80 shadow-2xs hover:shadow-xs group shrink-0 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" />
              </button>

                  <button
                    type="button"
                    onClick={(e) => handleHomeClick(e, '#hero')}
                    className="flex items-center gap-2.5 cursor-pointer bg-transparent border-none p-0 focus:outline-none group min-w-0"
                  >
                    <img
                      src={logoImg}
                      alt="AarohCare logo"
                      width={32}
                      height={32}
                      decoding="async"
                      className="w-8 h-8 rounded-lg object-contain shadow-xs shrink-0"
                    />
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      AarohCare
                    </span>
                  </button>
                </div>

        {/* Right: Quick Homepage action */}
        <button
          type="button"
          onClick={(e) => handleHomeClick(e, '#hero')}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors cursor-pointer border border-slate-200/80"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Homepage</span>
        </button>
      </div>
    </header>

    {/* Main 404 Content */}
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full flex-1 flex flex-col items-center justify-center text-center">
      {/* Error Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide uppercase">
        <span className="w-2 h-2 rounded-full bg-blue-600" />
        <span>Error 404</span>
      </div>

      {/* Luminous Numeric Identifier */}
      <p className="text-6xl sm:text-8xl font-extrabold tracking-tight text-slate-900 mt-4 leading-none select-none">
        404
      </p>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-4 max-w-xl">
        Looks like this page missed its appointment.
      </h1>

      {/* Supporting Text */}
      <p className="text-slate-600 mt-3.5 text-sm sm:text-base max-w-md leading-relaxed">
        The page you're looking for doesn't exist or may have moved. Let's help you find your way back.
      </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={(e) => handleHomeClick(e, '#hero')}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </button>

        <a
          href="mailto:aarohcare.in@gmail.com?subject=Inquiry%20from%20404%20Page"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 active:scale-[0.98] rounded-xl shadow-2xs transition-all duration-200"
        >
          <Mail className="w-4 h-4 text-slate-500" />
          <span>Contact Support</span>
        </a>
      </div>

        {/* Additional Navigation Links */}
        <nav
          aria-label="Additional Navigation"
          className="mt-14 pt-8 border-t border-slate-200/80 w-full max-w-md"
        >
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Helpful Resources
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            <button
              type="button"
              onClick={(e) => handlePageClick(e, 'terms')}
              className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Terms & Conditions</span>
            </button>

              <span className="text-slate-300 select-none">•</span>

              <button
                type="button"
                onClick={(e) => handlePageClick(e, 'privacy')}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>Privacy Policy</span>
              </button>

          <span className="text-slate-300 select-none">•</span>

        <a
          href="/sitemap.xml"
          className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
        >
          <Map className="w-3.5 h-3.5 text-slate-400" />
          <span>Sitemap</span>
        </a>
      </div>
    </nav>
  </main>

  {/* Shared Footer Component */ }
  <Footer onNavigate={onNavigateHome} />
    </div >
  )
}
