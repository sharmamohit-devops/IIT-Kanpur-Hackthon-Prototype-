'use client'

import Link from 'next/link'
import { Menu, X, Sparkles, Headphones } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo with Icon */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <Sparkles size={22} className="text-white" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-black text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sampark</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">AI Marketing Suite</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#features" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Features</Link>
          <Link href="#workflow" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">How it Works</Link>
          <Link href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
          <Link href="#team" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Team</Link>
          <Link href="/resources" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2">
            Resources
            <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-slate-900 rounded-full px-2 py-0.5">New</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-5 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
            Sign In
          </Link>
          <Link href="/contact" className="px-4 py-2 text-sm font-bold border border-slate-200 rounded-lg text-slate-700 hover:bg-white hover:shadow-sm transition-colors flex items-center gap-2">
            <Headphones size={16} />
            Contact Sales
          </Link>
          <Link href="/login" className="px-5 py-2 text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="text-slate-900" /> : <Menu size={24} className="text-slate-900" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur px-4 py-6 space-y-4 shadow-lg">
          <Link href="#features" className="block text-base font-semibold text-slate-700 hover:text-blue-600 py-2 transition-colors" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#workflow" className="block text-base font-semibold text-slate-700 hover:text-blue-600 py-2 transition-colors" onClick={() => setIsOpen(false)}>How it Works</Link>
          <Link href="#pricing" className="block text-base font-semibold text-slate-700 hover:text-blue-600 py-2 transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="#team" className="block text-base font-semibold text-slate-700 hover:text-blue-600 py-2 transition-colors" onClick={() => setIsOpen(false)}>Team</Link>
          <Link href="/resources" className="block text-base font-semibold text-slate-700 hover:text-blue-600 py-2 transition-colors" onClick={() => setIsOpen(false)}>Resources</Link>
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <Link href="/contact" className="block px-4 py-3 text-sm font-bold border border-slate-200 text-center rounded-lg text-slate-900 hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>
              Contact Sales
            </Link>
            <Link href="/login" className="block px-4 py-3 text-sm font-bold text-white text-center rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg transition-all" onClick={() => setIsOpen(false)}>
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
