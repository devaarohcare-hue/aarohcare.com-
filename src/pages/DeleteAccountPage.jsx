import React, { useEffect, useState } from 'react'
import {
  ArrowLeft,
  Trash2,
  ShieldCheck,
  Clock,
  Database,
  Mail,
  Phone,
  AlertCircle,
  FileText,
  ChevronRight,
  ArrowUp,
  CheckCircle2,
  Smartphone,
  Info
} from 'lucide-react'
import Footer from '../components/Footer'
import logoImg from '../assets/aarohcare-logo.png'

const SECTIONS = [
  {
    id: 'overview',
    number: '01',
    title: 'Overview & Policy Commitment',
    icon: ShieldCheck,
    content: (
      <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
        <p>
          At <strong className="text-slate-900 font-semibold">AarohCare Technologies Pvt Ltd</strong>, we prioritize user privacy, data security, and digital transparency. In full compliance with Google Play Store Developer Policies, users of the <strong className="text-slate-900 font-semibold">AarohCare: Doctor Appointment</strong> mobile application (<code className="px-1.5 py-0.5 rounded bg-slate-100 text-blue-700 text-xs font-mono">com.aarohcare.app</code>) have the absolute right to request the permanent deletion of their account and associated personal data.
        </p>
        <p>
          You do not need to have the mobile app currently installed on your device to request account deletion. You can submit a deletion request via our mobile app, by email, or via our WhatsApp support.
        </p>
      </div>
    ),
  },
  {
    id: 'how-to-request',
    number: '02',
    title: 'How to Request Account Deletion',
    icon: Smartphone,
    content: (
      <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
        <p>You can request account and data deletion through any of the following convenient methods:</p>
        
        {/* Method 1 */}
        <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">1</span>
            <h4>In-App Deletion (Recommended)</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 pl-8">
            Open the <strong>AarohCare</strong> app on your Android or iOS device &rarr; Navigate to <strong>Profile</strong> &rarr; Select <strong>Settings</strong> &rarr; Tap <strong>Delete Account</strong> &rarr; Verify with the OTP sent to your registered phone number to confirm deletion.
          </p>
        </div>

        {/* Method 2 */}
        <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">2</span>
            <h4>By Email Request (No App Required)</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 pl-8">
            Send an email to <a href="mailto:aarohcare.in@gmail.com?subject=Account%20Deletion%20Request" className="text-blue-600 underline font-medium">aarohcare.in@gmail.com</a> from your email address with the subject line <em>"Account Deletion Request"</em>. Please mention:
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 pl-12 list-disc space-y-1">
            <li>Your registered 10-digit mobile number</li>
            <li>Your registered patient name</li>
            <li>Reason for deletion (optional)</li>
          </ul>
        </div>

        {/* Method 3 */}
        <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">3</span>
            <h4>Via WhatsApp Support</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 pl-8">
            Contact our dedicated support helpline on WhatsApp at <a href="https://wa.me/916282829412?text=I%20would%20like%20to%20request%20account%20and%20data%20deletion%20for%20my%20AarohCare%20account." target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold underline">+91 6282829412</a> to initiate an account deletion request directly.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'data-deleted',
    number: '03',
    title: 'Data That Will Be Permanently Deleted',
    icon: Trash2,
    content: (
      <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
        <p>Once your deletion request is verified and processed, the following personal data is permanently deleted from our active databases:</p>
        <ul className="space-y-2.5 pl-1">
          {[
            'User Profile Information (Full Name, Age, Gender, Place)',
            'Registered mobile number and active session login tokens',
            'All past and upcoming OP token bookings and appointment queue records',
            'Patient consultation linkages with visited clinics/hospitals',
            'Associated lab test booking linkages and digitally stored reports',
            'Notification and communication preferences',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'data-retention',
    number: '04',
    title: 'Data Retention & Legal Exceptions',
    icon: Database,
    content: (
      <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
        <p>
          In certain limited circumstances, specific subsets of data may be retained for statutory and security purposes:
        </p>
        <ul className="space-y-2.5 pl-1">
          {[
            'Financial and billing transaction records: Retained strictly to comply with statutory accounting, GST, and tax regulations as mandated under Indian Law.',
            'Dispute resolution and fraud prevention logs: Encrypted security logs retained for a maximum of 90 days to prevent malicious activity before automated deletion.',
            'Direct Hospital/Clinic Records: Please note that physical clinical consultation notes, prescriptions, and medical records maintained independently by the hospital/clinic you visited are governed by their independent healthcare retention standards.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'timeframe',
    number: '05',
    title: 'Processing Timeframe',
    icon: Clock,
    content: (
      <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
        <p>
          Account deletion requests submitted via the mobile app are queued immediately. Email and WhatsApp requests are acknowledged within <strong className="text-slate-900">24 to 48 business hours</strong> upon phone number verification.
        </p>
        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 text-xs sm:text-sm font-medium flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-blue-600 shrink-0" />
          <span>All active personal data is permanently purged from production servers within <strong>30 days</strong> of verification.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'contact',
    number: '06',
    title: 'Contact Support & Grievances',
    icon: Mail,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          If you have questions about the account deletion process or your data privacy, reach out to our grievance team:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <a
            href="mailto:aarohcare.in@gmail.com?subject=AarohCare%20Account%20Deletion%20Inquiry"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-200 transition-all duration-200 group"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Email Support</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">aarohcare.in@gmail.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/916282829412?text=Hi%20AarohCare%2C%20I%20have%20a%20question%20regarding%20account%20deletion."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200/80 hover:border-emerald-200 transition-all duration-200 group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">WhatsApp Helpline</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">+91 6282829412</p>
            </div>
          </a>
        </div>
      </div>
    ),
  },
]

export default function DeleteAccountPage({ onNavigateHome, onNavigatePage }) {
  const [activeSection, setActiveSection] = useState('overview')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    let rafId = null
    let sectionPositions = []

    const updatePositions = () => {
      sectionPositions = SECTIONS.map((sec) => {
        const el = document.getElementById(sec.id)
        if (!el) return { id: sec.id, top: 0, height: 0 }
        const rect = el.getBoundingClientRect()
        return {
          id: sec.id,
          top: rect.top + window.scrollY,
          height: rect.height,
        }
      })
    }

    updatePositions()

    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        const scrollY = window.scrollY
        setShowScrollTop(scrollY > 400)

        const scrollPosition = scrollY + 200
        for (const sec of sectionPositions) {
          if (scrollPosition >= sec.top && scrollPosition < sec.top + sec.height) {
            setActiveSection(sec.id)
            break
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updatePositions, { passive: true })
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updatePositions)
    }
  }, [])

  const scrollToClause = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -90
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-rose-500/20 selection:text-rose-900">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              type="button"
              onClick={() => onNavigateHome && onNavigateHome()}
              aria-label="Back to Home"
              title="Back to Home"
              className="inline-flex items-center justify-center w-8.5 h-8.5 sm:w-10 sm:h-10 text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-full transition-all duration-200 cursor-pointer border border-slate-200/80 shadow-2xs group shrink-0 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={() => onNavigateHome && onNavigateHome('#hero')}
              className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 focus:outline-none group min-w-0"
            >
              <img
                src={logoImg}
                alt="AarohCare Logo"
                width={36}
                height={36}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="text-left truncate">
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 block leading-tight truncate">
                  AarohCare
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 block leading-none">
                  Account Deletion Policy
                </span>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigatePage && onNavigatePage('privacy')}
              className="text-xs font-semibold text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Privacy Policy
            </button>
            <a
              href="mailto:aarohcare.in@gmail.com?subject=Account%20Deletion%20Request"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Request Deletion</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-8 sm:py-12 w-full flex-1">
        {/* Hero Section */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-medium mb-3">
            <Trash2 className="w-3.5 h-3.5" />
            <span>Google Play Policy Compliant</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Account & Data Deletion
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Learn how to request deletion of your account and personal data from AarohCare (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono">com.aarohcare.app</code>).
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-2 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 pb-1">
              Table of Contents
            </p>
            {SECTIONS.map((sec) => {
              const Icon = sec.icon
              const isActive = activeSection === sec.id
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToClause(sec.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-rose-50 text-rose-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-rose-600' : 'text-slate-400'}`} />
                    <span className="truncate">{sec.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono ml-2 shrink-0">{sec.number}</span>
                </button>
              )
            })}
          </aside>

          {/* Right Section Cards */}
          <div className="lg:col-span-8 space-y-6">
            {SECTIONS.map((sec) => {
              const Icon = sec.icon
              return (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 scroll-mt-24 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-slate-900">
                        {sec.title}
                      </h2>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {sec.number}
                    </span>
                  </div>
                  {sec.content}
                </section>
              )
            })}
          </div>
        </div>
      </main>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-slate-900 text-white shadow-lg flex items-center justify-center hover:bg-slate-800 transition-all z-40 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Footer */}
      <Footer onNavigate={onNavigatePage} />
    </div>
  )
}
