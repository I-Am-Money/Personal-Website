'use client'
import { useEffect, useRef } from 'react'

const PARAGRAPHS = [
  {
    text: 'Most problems worth solving already have an obvious fix. The gap is almost never the idea. It is the person willing to show up, figure out the logistics, and do it before anyone tells them they can.',
    ink: true,
  },
  {
    text: 'Sahas runs Hands of Hope because food insecurity in Atlanta is a logistics problem, not a resource problem. He built the Alpharetta kiosk system because a city was losing foot traffic due to bad navigation. He is building NextLine AI because small businesses are losing customers to voicemail.',
    ink: false,
  },
  {
    text: 'The pattern is the same every time: find something broken, figure out the actual cause, fix it. Age is not a qualification and it is not an excuse.',
    ink: false,
  },
  {
    text: 'The long-term goal is to keep working on problems that have real consequences for real people. No pivot to something more fundable. No waiting for the right moment.',
    ink: false,
  },
]

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 110)
          })
          io.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="mission"
      ref={sectionRef}
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '140px 0' }}
    >
      <div className="section-max">
        <span className="eyebrow reveal" style={{ marginBottom: '28px', display: 'inline-flex' }}>About</span>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="ms-grid">
          <style>{`
            @media (max-width: 768px) {
              .ms-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>

          {/* Portrait */}
          <div className="reveal-scale">
            <img
              src="https://picsum.photos/seed/sahas-portrait/600/800"
              alt="Portrait of Sahas Konreddy"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="reveal" style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '32px' }}>
              Build things that work<br />
              <span style={{ color: 'var(--ash)', fontWeight: 400 }}>for people who need them.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className="reveal"
                  style={{ color: p.ink ? 'var(--ink)' : 'var(--ash)', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.85, fontWeight: p.ink ? 500 : 400 }}
                >
                  {p.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
