'use client'
import { useEffect, useRef } from 'react'
import { PaperPlaneTilt, CalendarBlank } from '@phosphor-icons/react'

function FlowDiagram() {
  return (
    <div style={{ overflowX: 'auto', paddingBottom: '8px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          minWidth: '560px',
          padding: '40px 48px',
        }}
      >
        {[
          { label: 'Caller', sub: 'Reaches out' },
          null,
          { label: 'Business', sub: 'Does not answer', dim: true },
          null,
          { label: 'NextLine AI', sub: 'Intercepts call', highlight: true },
          null,
          { label: 'Resolution', sub: 'Every call handled' },
        ].map((node, i) => {
          if (node === null) {
            return (
              <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                  <line x1="0" y1="6" x2="26" y2="6" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 2" />
                  <polyline points="22,2 28,6 22,10" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                </svg>
              </div>
            )
          }
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <div
                style={{
                  padding: '12px 20px',
                  borderRadius: '10px',
                  background: node.highlight ? 'rgba(240,180,41,0.12)' : 'rgba(255,255,255,0.03)',
                  border: node.highlight ? '1px solid rgba(240,180,41,0.35)' : '1px solid var(--border)',
                  color: node.highlight ? 'var(--blue)' : node.dim ? 'var(--muted)' : 'var(--ash)',
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                  boxShadow: node.highlight ? '0 0 24px rgba(240,180,41,0.12)' : 'none',
                }}
              >
                {node.label}
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.02em', textAlign: 'center' }}>
                {node.sub}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function NextlineAI() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 110)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.07 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="nextline"
      ref={sectionRef}
      style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient orb */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,180,41,0.06) 0%, transparent 65%)', top: '-100px', right: '-100px', animation: 'orb-drift-1 20s ease-in-out infinite' }} />
      </div>

      {/* Product overview */}
      <div className="section-max" style={{ paddingTop: '140px', paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
        <span className="eyebrow reveal" style={{ marginBottom: '28px', display: 'inline-flex' }}>
          AI Startup
        </span>
        <h2
          className="reveal"
          style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(36px, 5.5vw, 72px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0, maxWidth: '660px', marginBottom: '64px' }}
        >
          AI that answers when<br />your business can't.
        </h2>

        {/* Flow diagram */}
        <div className="card-shell reveal">
          <div className="card-inner" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(240,180,41,0.5), transparent)' }} />
            <FlowDiagram />
          </div>
        </div>

        {/* Feature bullets — horizontal divider list, not 4 equal cards */}
        <div
          className="reveal"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0', borderTop: '1px solid var(--border)', marginTop: '48px' }}
        >
          <style>{`
            @media (max-width: 640px) {
              .nextline-feats { grid-template-columns: 1fr !important; }
            }
          `}</style>
          <div className="nextline-feats" style={{ display: 'contents' }}>
            {[
              'Zero missed calls',
              'Works 24/7 without staff',
              'Scales to any call volume',
              'No new hardware required',
            ].map((feat, i) => (
              <div
                key={feat}
                style={{
                  padding: '20px 24px',
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                <span style={{ color: 'var(--ash)', fontSize: '13px', fontWeight: 600 }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deep dive */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-max" style={{ paddingTop: '100px', paddingBottom: '140px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}
            className="nextline-dl-grid"
          >
            <style>{`
              @media (max-width: 768px) {
                .nextline-dl-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                .nextline-feats { grid-template-columns: 1fr !important; }
              }
            `}</style>

            {/* Left: label column */}
            <div className="reveal">
              <h3
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: 'clamp(13px, 1.2vw, 15px)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '12px',
                }}
              >
                NextLine AI
              </h3>
              <p style={{ color: 'var(--ash)', fontSize: '14px', lineHeight: 1.8 }}>
                Founded and led by Sahas. Built to solve a specific problem before chasing a valuation.
              </p>
            </div>

            {/* Right: content */}
            <div>
              <h3
                className="reveal"
                style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '24px' }}
              >
                It started with a missed call.
              </h3>
              <p
                className="reveal"
                style={{ color: 'var(--ash)', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.85, marginBottom: '48px', maxWidth: '560px' }}
              >
                A business lost a customer because nobody picked up. The voicemail was full. The customer
                called once, got silence, and moved on. The business never knew. NextLine AI exists because
                that gap costs real people real money, and the fix should not require hiring another person
                or buying new hardware.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid var(--border)' }}>
                {[
                  {
                    title: 'The problem',
                    body: 'Small and mid-sized businesses miss calls constantly. Every unanswered call is a lost customer who simply goes to the next result on Google.',
                  },
                  {
                    title: 'The gap',
                    body: 'Existing solutions require expensive hardware, long setup times, or trained staff. Most businesses cannot afford any of those. They just miss the calls.',
                  },
                  {
                    title: 'The product',
                    body: 'NextLine AI intercepts unanswered calls and routes them intelligently. The caller gets a real response. The business gets full coverage with zero new headcount.',
                  },
                  {
                    title: 'Where it stands',
                    body: 'Currently in active development. Built to solve a specific problem before chasing a valuation.',
                  },
                ].map((point) => (
                  <div
                    key={point.title}
                    className="reveal"
                    style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}
                  >
                    <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '8px' }}>
                      {point.title}
                    </div>
                    <p style={{ color: 'var(--ash)', fontSize: '14px', lineHeight: 1.75 }}>{point.body}</p>
                  </div>
                ))}
              </div>

              <div className="reveal" style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="mailto:sahas.konreddy1@gmail.com?subject=NextLine AI" className="btn-primary">
                  Get in touch
                  <span className="btn-icon-wrap">
                    <PaperPlaneTilt size={13} weight="bold" />
                  </span>
                </a>
                <a href="#book" className="btn-secondary">
                  Book a call
                  <span className="btn-icon-wrap">
                    <CalendarBlank size={13} weight="bold" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
