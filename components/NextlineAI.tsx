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
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="nextline"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        position: 'relative',
        overflow: 'hidden',
        background: '#06070d',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77,143,255,0.07) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,204,150,0.05) 0%, transparent 70%)',
          bottom: '-100px',
          right: '-100px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="nextline-grid"
      >
        <style>{`
          @media (max-width: 768px) {
            .nextline-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        `}</style>

        {/* Left: copy */}
        <div>
          <div className="section-label reveal" style={{ marginBottom: '16px' }}>
            Startup
          </div>

          <div
            className="reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                color: '#eef0ff',
              }}
            >
              NextLine
            </span>
            <span
              style={{
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, #4d8fff 0%, #00cc96 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI
            </span>
          </div>

          <p
            className="reveal"
            style={{
              color: '#8896aa',
              fontSize: '17px',
              lineHeight: 1.75,
              marginBottom: '20px',
              maxWidth: '480px',
            }}
          >
            NextLine AI is building intelligent tools that close the gap between raw information
            and real decisions. The focus is on practical utility over complexity, tools you
            actually want to use.
          </p>

          <p
            className="reveal"
            style={{
              color: '#8896aa',
              fontSize: '17px',
              lineHeight: 1.75,
              marginBottom: '40px',
              maxWidth: '480px',
            }}
          >
            Founded and led by Sahas, NextLine AI is currently in active development. If you are a
            developer, designer, or operator interested in what we are building, reach out.
          </p>

          <div className="reveal" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="mailto:sahas.konreddy1@gmail.com?subject=NextLine AI"
              className="btn-primary"
            >
              Get in touch
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </a>
            <a
              href="https://calendly.com/sahas-konreddy1/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Schedule a call
            </a>
          </div>
        </div>

        {/* Right: product card */}
        <div className="reveal-scale">
          <div
            style={{
              background: 'linear-gradient(145deg, #0e1018 0%, #111622 100%)',
              border: '1px solid #1a1d2e',
              borderRadius: '24px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Inner glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(77,143,255,0.5), rgba(0,204,150,0.3), transparent)',
              }}
            />

            {/* Logo mark */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(77,143,255,0.2) 0%, rgba(0,204,150,0.15) 100%)',
                border: '1px solid rgba(77,143,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#4d8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17l10 5 10-5" stroke="#00cc96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12l10 5 10-5" stroke="#4d8fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" />
              </svg>
            </div>

            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#4d8fff',
                marginBottom: '10px',
              }}
            >
              In Development
            </div>

            <h3
              style={{
                fontSize: '22px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#eef0ff',
                marginBottom: '16px',
              }}
            >
              NextLine AI
            </h3>

            <p
              style={{
                color: '#8896aa',
                fontSize: '14px',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              Practical AI tools designed around real use cases. No fluff, no magic demos built only for investors. Just software that works.
            </p>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                { label: 'Founded by a high school builder', color: '#4d8fff' },
                { label: 'Focus on real-world utility', color: '#00cc96' },
                { label: 'Active development phase', color: '#a78bfa' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: '#8896aa', fontSize: '14px' }}>{item.label}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: '12px 16px',
                background: 'rgba(77,143,255,0.07)',
                border: '1px solid rgba(77,143,255,0.15)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{ fontSize: '13px', color: '#8896aa' }}>
                Contact:{' '}
                <a
                  href="mailto:sahas.konreddy1@gmail.com"
                  style={{ color: '#4d8fff', textDecoration: 'none', fontWeight: 600 }}
                >
                  sahas.konreddy1@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
