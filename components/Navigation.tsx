'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'NextLine AI', href: '#nextline' },
  { label: 'Education', href: '#education' },
  { label: 'Book a Call', href: '#book' },
  { label: 'Support', href: '#support' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(6,7,13,0.88)' : 'transparent',
        borderBottom: scrolled ? '1px solid #1a1d2e' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#top"
          style={{
            fontSize: '17px',
            fontWeight: 700,
            color: '#eef0ff',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Sahas<span style={{ color: '#4d8fff' }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: '#8896aa',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#eef0ff')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8896aa')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/sahas-konreddy-ba0633344"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(77,143,255,0.1)',
              border: '1px solid rgba(77,143,255,0.3)',
              borderRadius: '8px',
              padding: '6px 14px',
              color: '#4d8fff',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(77,143,255,0.18)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(77,143,255,0.1)'
            }}
          >
            LinkedIn
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#eef0ff',
          }}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(14,16,24,0.98)',
            borderTop: '1px solid #1a1d2e',
            padding: '16px 24px 24px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: '#8896aa',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 500,
                borderBottom: '1px solid #1a1d2e',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/sahas-konreddy-ba0633344"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '12px 0',
              color: '#4d8fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  )
}
