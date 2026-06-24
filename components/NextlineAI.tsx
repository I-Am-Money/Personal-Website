'use client'
import { useEffect, useRef } from 'react'

export default function NextlineAI() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 130)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="nextline"
      ref={sectionRef}
      style={{
        padding: '140px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--surface)',
      }}
    >
      {/* Orbs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(91,143,255,0.08) 0%, transparent 65%)',
          top: '-100px', left: '-100px', animation: 'orb-drift-1 20s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,204,150,0.06) 0%, transparent 65%)',
          bottom: '-120px', right: '-60px', animation: 'orb-drift-2 24s ease-in-out infinite',
        }} />
        {/* Horizontal line accent */}
        <div style={{
          position: 'absolute', top: '50%', left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(91,143,255,0.12), rgba(0,204,150,0.08), transparent)',
          pointerEvents: 'none',
        }} />
      </div>

      <div
        className="section-max"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .nextline-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>

        {/* ---- Left: copy ---- */}
        <div className="nextline-grid" style={{ display: 'contents' }}>
        <div>
          <span className="eyebrow reveal" style={{ marginBottom: '24px', display: 'inline-flex' }}>
            <span className="eyebrow-dot" style={{ background: 'var(--blue)', animation: 'pulse-dot 2s ease infinite' }} />
            Startup
          </span>

          <h2
            className="reveal"
            style={{
              fontSize: 'clamp(40px, 6vw, 76px)',
              fontWeight: 900,
              letterSpacing: '-0.05em',
              lineHeight: 0.95,
              marginBottom: '28px',
            }}
          >
            NextLine<br />
            <span className="gradient-text">AI</span>
          </h2>

          <p className="reveal" style={{ color: 'var(--ash)', fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.8, marginBottom: '20px', maxWidth: '440px' }}>
            NextLine AI is building practical intelligence tools designed around real workflows.
            No magic demos built for investors. Software that solves specific problems and gets
            out of the way.
          </p>

          <p className="reveal" style={{ color: 'var(--ash)', fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.8, marginBottom: '44px', maxWidth: '440px' }}>
            Founded and led by Sahas. Currently in active development. If you are a developer,
            designer, or operator interested in what we are building, reach out.
          </p>

          <div className="reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:sahas.konreddy1@gmail.com?subject=NextLine AI" className="btn-primary">
              Get in touch
              <span className="btn-icon-wrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </span>
            </a>
            <a href="https://calendly.com/sahas-konreddy1/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Schedule a call
              <span className="btn-icon-wrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* ---- Right: product card (double-bezel) ---- */}
        <div className="reveal-scale">
          <div className="card-shell">
            <div className="card-inner" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
              {/* Top shimmer */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(91,143,255,0.6), rgba(0,204,150,0.4), transparent)',
              }} />

              {/* Logo mark */}
              <div style={{
                width: '52px', height: '52px', borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(91,143,255,0.18) 0%, rgba(0,204,150,0.12) 100%)',
                border: '1px solid rgba(91,143,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#5b8fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17l10 5 10-5" stroke="#00cc96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="#5b8fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" />
                </svg>
              </div>

              <span className="eyebrow" style={{ marginBottom: '14px', display: 'inline-flex', borderColor: 'rgba(91,143,255,0.2)', color: 'var(--blue)' }}>
                <span className="eyebrow-dot" style={{ background: 'var(--blue)', animation: 'pulse-dot 2.5s ease infinite' }} />
                In development
              </span>

              <h3 style={{ fontFamily: "'Archivo', sans-serif", fontSize: '26px', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '16px', lineHeight: 1.1 }}>
                NextLine AI
              </h3>

              <p style={{ color: 'var(--ash)', fontSize: '14px', lineHeight: 1.75, marginBottom: '32px' }}>
                Practical AI tools built around real use cases. The focus is utility over novelty: tools you would
                actually reach for, not just demo.
              </p>

              {/* Feature list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {[
                  { label: 'Founded by a high school builder', color: 'var(--blue)' },
                  { label: 'Focused on real-world utility', color: 'var(--teal)' },
                  { label: 'Active development phase', color: 'var(--indigo)' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                    <span style={{ color: 'var(--ash)', fontSize: '14px' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Contact bar */}
              <div style={{
                padding: '12px 16px',
                background: 'rgba(91,143,255,0.06)',
                border: '1px solid rgba(91,143,255,0.12)',
                borderRadius: '10px',
                fontSize: '13px',
                color: 'var(--muted)',
              }}>
                Contact:&nbsp;
                <a
                  href="mailto:sahas.konreddy1@gmail.com"
                  style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}
                >
                  sahas.konreddy1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
