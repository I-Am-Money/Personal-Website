'use client'
import { useEffect, useRef } from 'react'

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 110)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="mission"
      ref={sectionRef}
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '140px 0', position: 'relative', overflow: 'hidden' }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,143,255,0.05) 0%, transparent 65%)', top: '-200px', right: '-150px', pointerEvents: 'none', animation: 'orb-drift-1 22s ease-in-out infinite' }} />

      <div className="section-max" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow reveal" style={{ marginBottom: '28px', display: 'inline-flex' }}>
          About
        </span>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px', alignItems: 'start' }}
          className="mission-grid"
        >
          <style>{`
            @media (max-width: 768px) {
              .mission-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>

          {/* Portrait */}
          <div className="reveal-scale">
            <img
              src="https://picsum.photos/seed/sahas-portrait/600/800"
              alt="Portrait"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
            />
          </div>

          {/* Text */}
          <div>
            <h2
              className="reveal"
              style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '32px' }}
            >
              Build things that work<br />
              <span style={{ color: 'var(--ash)', fontWeight: 400 }}>for people who need them.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'Most problems worth solving already have an obvious fix. The gap is almost never the idea. It is the person willing to show up, figure out the logistics, and do it before anyone tells them they can.',
                'Sahas runs Hands of Hope because food insecurity in Atlanta is a logistics problem, not a resource problem. He built the Alpharetta kiosk system because a city was losing foot traffic due to bad navigation. He is building NextLine AI because small businesses are losing customers to voicemail.',
                'The pattern is the same every time: find something broken, figure out the actual cause, fix it. Age is not a qualification and it is not an excuse.',
                'The long-term goal is to keep working on problems that have real consequences for real people. No pivot to something more fundable. No waiting for the right moment.',
              ].map((para, i) => (
                <p
                  key={i}
                  className="reveal"
                  style={{ color: i === 0 ? '#f0f2ff' : 'var(--ash)', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.85, fontWeight: i === 0 ? 500 : 400 }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
