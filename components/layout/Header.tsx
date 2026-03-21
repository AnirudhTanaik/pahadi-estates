'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/properties', label: 'Properties' },
  { href: '/#why-hp', label: 'Why HP' },
  { href: '/legal-guide', label: 'Legal Guide' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0e0e0e]/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-serif text-2xl text-cream">
                Pahadi
              </span>
              <span className="font-serif text-2xl text-gold"> Estates</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-sans text-mist hover:text-cream transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="#enquiry-form"
                onClick={(e) => {
                  const el = document.getElementById('enquiry-form')
                  if (el) {
                    e.preventDefault()
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="hidden md:inline-flex items-center px-5 py-2 text-sm font-sans font-medium text-[#0e0e0e] bg-gold hover:bg-gold-light transition-colors duration-200 tracking-wide"
              >
                Enquire Now
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-cream relative z-[60]"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full-screen fixed overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col bg-[#0e0e0e]/95 backdrop-blur-sm">
          <div className="px-4 py-6 flex flex-col gap-4 mt-16">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-sans text-cream hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#enquiry-form"
              onClick={(e) => {
                setMenuOpen(false)
                const el = document.getElementById('enquiry-form')
                if (el) {
                  e.preventDefault()
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-sans font-medium text-[#0e0e0e] bg-gold mt-2"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </>
  )
}
