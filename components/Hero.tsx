'use client'
import { ArrowRight } from '@phosphor-icons/react'

const HEADLINE = [
  ['Building', 'things'],
  ["that", "don't", 'wait'],
  ['for', 'permission'],
]

const ROLES = [
  { title: 'Student', org: 'Innovation Academy' },
  { title: 'COO', org: 'Hands of Hope' },
  { title: 'Founder', org: 'NextLine AI' },
  { title: 'Consultant', org: 'City of Alpharetta' },
]

export default function Hero() {
  let wordIndex = 0

  return (
    <section
      id="top"
      style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}
    >
      <style>{`
        .hero-id-bar {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-top: 104px;
        }
        .hero-headline-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 32px;
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }
        .hero-rule {
          height: 1px;
          background: var(--border);
          animation: line-draw 0.7s var(--ease-out) 0.48s both;
          transform-origin: left center;
        }
        .hero-bottom {
          padding: 40px 32px 80px;
          animation: hero-fade 0.7s var(--ease-spring) 0.62s both;
        }
        .hero-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .hero-role-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 11px 0;
          border-bottom: 1px solid var(--border);
        }
        .word-wrap {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
        }
        .word-inner {
          display: inline-block;
        }
        @media (max-width: 768px) {
          .hero-bottom-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hero-id-bar { padding-top: 80px; }
          .hero-bottom { padding: 28px 20px 64px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .word-inner { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* Row 1: Identity — balanced, split L/R */}
      <div
        className="section-max hero-id-bar"
        style={{ animation: 'hero-fade 0.6s var(--ease-spring) 0s both' }}
      >
        <span style={{
          fontFamily: "'Archivo', sans-serif",
          fontSize: '12px',
          fontWeight: 900,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>
          Sahas Konreddy
        </span>
        <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.04em' }}>
          Alpharetta, GA&nbsp;&nbsp;·&nbsp;&nbsp;2026
        </span>
      </div>

      {/* Row 2: Headline — centered, symmetric */}
      <div
        className="hero-headline-wrap"
        style={{ animation: 'hero-fade 0.75s var(--ease-spring) 0.1s both' }}
      >
        <h1
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: 'clamp(52px, 8.5vw, 96px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: 'var(--ink)',
            textAlign: 'center',
          }}
        >
          {HEADLINE.map((line, lineIdx) => (
            <div key={lineIdx} style={{ display: 'block' }}>
              {line.map((word) => {
                const delay = (wordIndex++ * 0.07 + 0.08).toFixed(2)
                return (
                  <span key={word} className="word-wrap">
                    <span
                      className="word-inner"
                      style={{ animation: `word-slide 0.55s var(--ease-spring) ${delay}s both` }}
                    >
                      {word}
                    </span>
                    <span style={{ display: 'inline-block', width: '0.28em' }} />
                  </span>
                )
              })}
            </div>
          ))}
        </h1>
      </div>

      {/* Rule — full container width */}
      <div className="section-max">
        <div className="hero-rule" />
      </div>

      {/* Row 3: Balanced two-column — bio left, roles+CTAs right */}
      <div className="section-max hero-bottom">
        <div className="hero-bottom-grid">

          {/* Left: bio paragraph */}
          <p style={{
            color: 'var(--ash)',
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            lineHeight: 1.85,
          }}>
            He is 15 and based in Alpharetta, Georgia. He runs daily operations for Hands of Hope
            Outreach as COO — volunteer scheduling, event logistics, and supply distribution across
            the Atlanta metro. He is also building NextLine AI and spent two years on civic
            infrastructure work with the City of Alpharetta. His sophomore year at Innovation
            Academy is one of four responsibilities he manages simultaneously.
          </p>

          {/* Right: CTAs + role list */}
          <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
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

            <div style={{ borderTop: '1px solid var(--border)' }}>
              {ROLES.map((role) => (
                <div key={role.org} className="hero-role-row">
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}>
                    {role.title}
                  </span>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--ash)',
                  }}>
                    {role.org}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
