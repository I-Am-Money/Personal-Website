'use client'
import { useEffect, useRef } from 'react'

export default function BookCall() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 120)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)

    const script = document.createElement('script')
    script.src  = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      observer.disconnect()
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section
      id="book"
      ref={sectionRef}
      style={{ padding: '140px 0', background: 'var(--surface)' }}
    >
      <div
        className="section-max"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
      >
        <style>{`
          @media (max-width: 768px) {
            .book-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>

        <div className="book-grid" style={{ display: 'contents' }}>
        {/* Left: copy */}
        <div>
          <span className="eyebrow reveal" style={{ marginBottom: '24px', display: 'inline-flex' }}>
            <span className="eyebrow-dot" style={{ background: 'var(--teal)' }} />
            Book a call
          </span>

          <h2
            className="reveal"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '28px' }}
          >
            30 minutes,<br />
            <span style={{ color: 'var(--ash)', fontWeight: 400 }}>no agenda required</span>
          </h2>

          <p className="reveal" style={{ color: 'var(--ash)', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.8, marginBottom: '16px', maxWidth: '420px' }}>
            Whether you want to talk about NextLine AI, explore a collaboration, discuss nonprofit
            operations, or just connect with someone doing uncommon things in high school, pick a
            time that works.
          </p>

          <p className="reveal" style={{ color: 'var(--ash)', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.8, marginBottom: '44px', maxWidth: '420px' }}>
            Available most mornings before school and evenings on weekdays. Weekends by request.
          </p>

          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                color: 'var(--blue)',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: '30 minutes',
                desc: 'Focused. No filler.',
              },
              {
                color: 'var(--teal)',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                ),
                title: 'Any topic',
                desc: 'Startups, nonprofits, tech, school, life.',
              },
              {
                color: 'var(--indigo)',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                title: 'Video or phone',
                desc: 'Your call, confirmed on booking.',
              },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div className="card-shell" style={{ flexShrink: 0 }}>
                  <div className="card-inner" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                <div style={{ paddingTop: '4px' }}>
                  <div style={{ fontFamily: "'Archivo', sans-serif", color: '#f0f2ff', fontSize: '14px', fontWeight: 700, marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '13px' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Calendly */}
        <div className="reveal-scale">
          <div className="card-shell">
            <div className="card-inner" style={{ overflow: 'hidden' }}>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/sahas-konreddy1/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0c0d14&text_color=f0f2ff&primary_color=5b8fff"
                style={{ minWidth: '280px', height: '680px' }}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
