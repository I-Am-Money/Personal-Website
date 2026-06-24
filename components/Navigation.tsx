'use client'
import { useState, useEffect, useRef } from 'react'

const links = [
  { label: 'Work', href: '#experience' },
  { label: 'NextLine AI', href: '#nextline' },
  { label: 'Education', href: '#education' },
  { label: 'Book a call', href: '#book' },
  { label: 'Support', href: '#support' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Floating pill nav — centered, detached from edge */}
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          width: 'calc(100% - 48px)',
          maxWidth: '960px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 10px 10px 22px',
            borderRadius: '999px',
            border: `1px solid ${scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)'}`,
            background: scrolled
              ? 'rgba(5,5,8,0.82)'
              : 'rgba(5,5,8,0.5)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: 'background 0.4s ease, border-color 0.4s ease',
            boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
          }}
        >
          {/* Wordmark */}
          <a
            href="#top"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: '16px',
              fontWeight: 800,
              color: '#f0f2ff',
              textDecoration: 'none',
              letterSpacing: '-0.03em',
              flexShrink: 0,
            }}
          >
            Sahas<span style={{ color: 'var(--blue)' }}>.</span>
          </a>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '8px' }}
          >
            {links.slice(0, -1).map((l) => (
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
                  transition: 'color 0.2s ease, background 0.2s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget
                  t.style.color = '#f0f2ff'
                  t.style.background = 'rgba(255,255,255,0.07)'
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget
                  t.style.color = 'var(--ash)'
                  t.style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            ))}

            {/* CTA pill button */}
            <a
              href="#support"
              className="btn-primary"
              style={{ padding: '7px 7px 7px 16px', fontSize: '13px' }}
            >
              Support
              <span className="btn-icon-wrap" style={{ width: '26px', height: '26px', marginLeft: '10px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            aria-label="Toggle menu"
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
              color: '#f0f2ff',
              transition: 'background 0.2s ease',
              flexShrink: 0,
            }}
          >
            <div style={{ position: 'relative', width: '16px', height: '12px' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '1.5px',
                  background: 'currentColor',
                  borderRadius: '2px',
                  top: menuOpen ? '5px' : '0',
                  transform: menuOpen ? 'rotate(45deg)' : 'none',
                  transition: 'top 0.25s ease, transform 0.25s ease 0.1s',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '1.5px',
                  background: 'currentColor',
                  borderRadius: '2px',
                  top: '5px',
                  opacity: menuOpen ? 0 : 1,
                  transition: 'opacity 0.15s ease',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '1.5px',
                  background: 'currentColor',
                  borderRadius: '2px',
                  top: menuOpen ? '5px' : '10px',
                  transform: menuOpen ? 'rotate(-45deg)' : 'none',
                  transition: 'top 0.25s ease, transform 0.25s ease 0.1s',
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu — full-screen glass overlay */}
      <div
        ref={menuRef}
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(5,5,8,0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 32px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: 'clamp(28px, 6vw, 40px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#f0f2ff',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s var(--ease-spring) ${i * 60}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/sahas-konreddy-ba0633344"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '40px',
            color: 'var(--blue)',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 600,
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.4s ease ${links.length * 60}ms`,
          }}
        >
          LinkedIn
        </a>
      </div>
    </>
  )
}
