'use client'
import { ArrowRight } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg)',
      }}
    >
      <style>{`
        .hero-bottom-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 640px) {
          .hero-bottom-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-row-1, .hero-row-2, .hero-row-3 {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      {/* Row 1: Identity bar */}
      <div
        className="hero-row-1"
        style={{
          padding: '104px 32px 0',
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          animation: 'hero-fade 0.6s var(--ease-spring) 0s both',
        }}
      >
        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Sahas Konreddy
        </span>
        <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.04em' }}>
          Alpharetta, GA&nbsp;&nbsp;·&nbsp;&nbsp;2026
        </span>
      </div>

      {/* Row 2: Headline — grows to fill */}
      <div
        className="hero-row-2"
        style={{
          flex: 1,
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          padding: '48px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          animation: 'hero-fade 0.75s var(--ease-spring) 0.1s both',
        }}
      >
        <h1
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: 'clamp(52px, 8.5vw, 96px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: '#f0f2ff',
          }}
        >
          Building things<br />
          that don't wait<br />
          for permission<span style={{ color: 'var(--blue)' }}>.</span>
        </h1>
      </div>

      {/* Row 3: Bio + CTAs — anchored at bottom */}
      <div
        className="hero-row-3"
        style={{
          borderTop: '1px solid var(--border)',
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          padding: '40px 32px 80px',
          animation: 'hero-fade 0.75s var(--ease-spring) 0.22s both',
        }}
      >
        <div className="hero-bottom-grid">
          <p
            style={{
              color: 'var(--ash)',
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              lineHeight: 1.8,
              maxWidth: '480px',
            }}
          >
            Student at Innovation Academy. COO of Hands of Hope. Founder of NextLine AI.
            Running things before most people his age get their driver's license.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <a href="#nextline" className="btn-primary">
              NextLine AI
              <span className="btn-icon-wrap">
                <ArrowRight size={13} weight="bold" />
              </span>
            </a>
            <a href="#work" className="btn-secondary">
              My work
              <span className="btn-icon-wrap">
                <ArrowRight size={13} weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
