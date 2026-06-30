'use client'
import { useState, useEffect } from 'react'
import { CalendarBlank } from '@phosphor-icons/react'

const NAV_LINKS = [
  { label: 'NextLine AI', href: '#nextline' },
  { label: 'Work',        href: '#work' },
  { label: 'Community',   href: '#community' },
  { label: 'Projects',    href: '#projects' },
  { label: 'About',       href: '#mission' },
]

export default function Navigation() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const sentinel = document.createElement('div')
    sentinel.style.cssText = 'position:absolute;top:80px;left:0;width:1px;height:1px;pointer-events:none'
    document.body.prepend(sentinel)
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting))
    io.observe(sentinel)
    return () => { io.disconnect(); sentinel.remove() }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          width: 'calc(100% - 48px)',
          maxWidth: '980px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 10px 10px 24px',
            borderRadius: '999px',
            border: `1px solid ${scrolled ? 'rgba(180,155,110,0.18)' : 'rgba(180,155,110,0.08)'}`,
            background: scrolled ? 'rgba(13,22,16,0.96)' : 'rgba(13,22,16,0.6)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
            boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.55)' : 'none',
          }}
        >
          {/* Logo */}
          <a
            href="#top"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: '16px',
              fontWeight: 900,
              color: 'var(--ink)',
              textDecoration: 'none',
              letterSpacing: '-0.03em',
              flexShrink: 0,
            }}
          >
            Sahas
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2px' }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: 'var(--ash)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '7px 14px',
                  borderRadius: '999px',
                  transition: 'color 0.18s ease, background 0.18s ease',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--ink)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--ash)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            ))}

            <div style={{ width: '1px', height: '18px', background: 'var(--border)', margin: '0 8px' }} />

            <a href="#support" className="btn-secondary" style={{ padding: '7px 7px 7px 14px', fontSize: '13px' }}>
              Fund me
              <span className="btn-icon-wrap" style={{ width: '26px', height: '26px', marginLeft: '8px' }}>
                <svg width="11" height="11" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"/>
                </svg>
              </span>
            </a>

            <a href="#book" className="btn-primary" style={{ padding: '7px 7px 7px 16px', fontSize: '13px', marginLeft: '4px' }}>
              Book a call
              <span className="btn-icon-wrap" style={{ width: '26px', height: '26px', marginLeft: '8px' }}>
                <CalendarBlank size={12} weight="bold" />
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--ink)',
              flexShrink: 0,
            }}
          >
            <div style={{ position: 'relative', width: '16px', height: '12px' }}>
              {[0, 5, 10].map((top, i) => (
                <span
                  key={i}
                  style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '1.5px',
                    background: 'currentColor',
                    borderRadius: '2px',
                    top: menuOpen && i !== 1 ? '5px' : `${top}px`,
                    opacity: menuOpen && i === 1 ? 0 : 1,
                    transform: menuOpen && i === 0 ? 'rotate(45deg)' : menuOpen && i === 2 ? 'rotate(-45deg)' : 'none',
                    transition: 'top 0.22s ease, transform 0.22s ease 0.08s, opacity 0.14s ease',
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(13,22,16,0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 32px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.28s ease',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[...NAV_LINKS, { label: 'Fund me', href: '#support' }, { label: 'Book a call', href: '#book' }].map((l, i) => (
            <a
              key={l.href + i}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: 'clamp(28px, 7vw, 42px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.35s ease ${i * 50}ms, transform 0.35s var(--ease-spring) ${i * 50}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
