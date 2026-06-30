'use client'
import { ArrowRight } from '@phosphor-icons/react'

const HEADLINE = [
  ['Building', 'things'],
  ["that", "don't", 'wait'],
  ['for', 'permission'],
]

const ROLES = [
  { label: 'Student',    org: 'Innovation Academy' },
  { label: 'COO',        org: 'Hands of Hope' },
  { label: 'Founder',    org: 'NextLine AI' },
  { label: 'Consultant', org: 'City of Alpharetta' },
]

export default function Hero() {
  let wi = 0

  return (
    <section
      id="top"
      style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}
    >
      <style>{`
        .h-id {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-top: 104px;
        }
        .h-hl {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 32px;
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
        }
        .h-rule { height: 1px; background: var(--border); animation: line-draw 0.7s var(--ease-out) 0.5s both; transform-origin: left; }
        .h-bot  { padding: 36px 32px 80px; animation: hero-fade 0.7s var(--ease-spring) 0.64s both; }
        .h-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .h-roles { border-top: 1px solid var(--border); }
        .h-row  { display: grid; grid-template-columns: 1fr 1fr; padding: 10px 0; border-bottom: 1px solid var(--border); }
        .ww     { display: inline-block; overflow: hidden; vertical-align: bottom; }
        .wi     { display: inline-block; }
        .ws     { display: inline-block; width: 0.28em; }
        @media (max-width: 768px) {
          .h-id   { padding-top: 80px; }
          .h-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .h-bot  { padding: 24px 20px 60px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wi { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* Identity bar */}
      <div className="section-max h-id" style={{ animation: 'hero-fade 0.55s var(--ease-spring) 0s both' }}>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: '11px', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Sahas Konreddy
        </span>
        <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.04em' }}>
          Alpharetta, GA&nbsp;&nbsp;·&nbsp;&nbsp;2026
        </span>
      </div>

      {/* Headline — centered */}
      <div className="h-hl" style={{ animation: 'hero-fade 0.7s var(--ease-spring) 0.1s both' }}>
        <h1 style={{
          fontFamily: "'Archivo', sans-serif",
          fontSize: 'clamp(52px, 8.5vw, 96px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 0.95,
          color: 'var(--ink)',
          textAlign: 'center',
        }}>
          {HEADLINE.map((line, li) => (
            <div key={li} style={{ display: 'block' }}>
              {line.map((word) => {
                const delay = (wi++ * 0.07 + 0.08).toFixed(2)
                return (
                  <span key={word} className="ww">
                    <span className="wi" style={{ animation: `word-slide 0.55s var(--ease-spring) ${delay}s both` }}>{word}</span>
                    <span className="ws" />
                  </span>
                )
              })}
            </div>
          ))}
        </h1>
      </div>

      {/* Rule */}
      <div className="section-max"><div className="h-rule" /></div>

      {/* Bottom — bio left, CTAs + roles right */}
      <div className="section-max h-bot">
        <div className="h-grid">
          <p style={{ color: 'var(--ash)', fontSize: 'clamp(14px, 1.4vw, 16px)', lineHeight: 1.85 }}>
            He is 15 and based in Alpharetta, Georgia. He runs daily operations for Hands of Hope
            Outreach as COO — volunteer scheduling, event logistics, and supply distribution across
            the Atlanta metro. He is also building NextLine AI and spent two years on civic
            infrastructure work with the City of Alpharetta. His sophomore year at Innovation
            Academy is one of four responsibilities he manages simultaneously.
          </p>

          <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <a href="#nextline" className="btn-primary">
                NextLine AI
                <span className="btn-icon-wrap"><ArrowRight size={13} weight="bold" /></span>
              </a>
              <a href="#work" className="btn-secondary">
                My work
                <span className="btn-icon-wrap"><ArrowRight size={13} weight="bold" /></span>
              </a>
            </div>

            <div className="h-roles">
              {ROLES.map((r) => (
                <div key={r.org} className="h-row">
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    {r.label}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ash)' }}>
                    {r.org}
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
