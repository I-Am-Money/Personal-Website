'use client'
import { ArrowRight } from '@phosphor-icons/react'

const HEADLINE = [
  ['Building', 'things'],
  ["that", "don't", 'wait'],
  ['for', 'permission'],
]

export default function Hero() {
  let wordIndex = 0

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
        .hero-id-bar {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-top: 104px;
        }
        @media (max-width: 640px) {
          .hero-bottom-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .hero-id-bar {
            padding-top: 80px;
          }
        }
        .word-wrap {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
        }
        .word-inner {
          display: inline-block;
        }
        .hero-rule {
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(240,180,41,0.3) 0%,
            rgba(240,180,41,0.08) 40%,
            transparent 100%
          );
          animation: line-draw 0.8s var(--ease-out) 0.55s both;
          transform-origin: left center;
        }
        .hero-bottom {
          padding: 36px 32px 80px;
          animation: hero-fade 0.7s var(--ease-spring) 0.62s both;
        }
        @media (max-width: 640px) {
          .hero-bottom { padding: 28px 20px 64px; }
        }
      `}</style>

      {/* Row 1: Identity */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--blue)',
            animation: 'amber-pulse 3s ease-in-out 1.2s infinite',
          }} />
          <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.04em' }}>
            Alpharetta, GA&nbsp;&nbsp;·&nbsp;&nbsp;2026
          </span>
        </div>
      </div>

      {/* Row 2: Headline — grows */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '48px 32px',
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: 'clamp(52px, 8.5vw, 96px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: 'var(--ink)',
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
              {lineIdx === HEADLINE.length - 1 && (
                <span className="word-wrap">
                  <span
                    className="word-inner"
                    style={{
                      animation: `word-slide 0.55s var(--ease-spring) ${(wordIndex * 0.07 + 0.08).toFixed(2)}s both`,
                      color: 'var(--blue)',
                    }}
                  >
                    .
                  </span>
                </span>
              )}
            </div>
          ))}
        </h1>
      </div>

      {/* Gradient rule */}
      <div className="section-max">
        <div className="hero-rule" />
      </div>

      {/* Row 3: Bio + CTAs */}
      <div className="section-max hero-bottom">
        <div className="hero-bottom-grid">
          <p style={{
            color: 'var(--ash)',
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            lineHeight: 1.85,
            maxWidth: '460px',
          }}>
            Student at Innovation Academy. COO of Hands of Hope. Founder of NextLine AI.
            Running things before most people his age get their driver's license.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' }}>
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
