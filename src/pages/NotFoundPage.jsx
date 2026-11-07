import React from 'react'
import { Home, ArrowLeft, FileText, Shield, FileQuestion } from 'lucide-react'
import Footer from '../components/Footer'
import logoImg from '../assets/aarohcare-logo.png'

export default function NotFoundPage({ onNavigateHome, onNavigatePage }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => onNavigateHome ? onNavigateHome('#hero') : (window.location.href = '/')}
            className="flex items-center gap-2.5 text-left group transition-transform active:scale-[0.98]"
            aria-label="Return to homepage"
          >
            <img
              src={logoImg}
              alt="AarohCare Logo"
              className="w-9 h-9 rounded-lg object-contain shadow-2xs group-hover:ring-2 ring-blue-500/20 transition-all"
            />
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 block leading-tight font-outfit">
                AarohCare
              </span>
              <span className="text-[10px] font-medium text-slate-500 block leading-none font-sans">
                Page Not Found
              </span>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigateHome ? onNavigateHome('#hero') : (window.location.href = '/')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm mb-6">
          <FileQuestion className="w-8 h-8" />
        </div>

        <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase font-sans">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-4 font-outfit">
          Page Not Found
        </h1>

        <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-md leading-relaxed font-sans">
          The page or resource you are looking for doesn't exist, may have been removed, or the link is incorrect.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigateHome ? onNavigateHome('#hero') : (window.location.href = '/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
          <a
            href="/sitemap.xml"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 active:scale-[0.98] rounded-xl shadow-2xs transition-all"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>View Sitemap</span>
          </a>
        </div>

        {/* Quick Links Card */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs w-full text-left">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={() => onNavigatePage ? onNavigatePage('terms') : (window.location.href = '/terms')}
              className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors text-xs font-medium text-left cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Terms & Conditions</span>
            </button>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('privacy') : (window.location.href = '/privacy')}
              className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors text-xs font-medium text-left cursor-pointer"
            >
              <Shield className="w-4 h-4 text-slate-400" />
              <span>Privacy Policy</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigateHome} />
    </div>
  )
}

