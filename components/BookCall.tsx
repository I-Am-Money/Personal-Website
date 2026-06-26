'use client'
import { useEffect, useRef } from 'react'
import { Clock, ChatText, Phone } from '@phosphor-icons/react'

export default function BookCall() {
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
      style={{ padding: '140px 0', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div
        className="section-max book-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
      >
        <style>{`
          @media (max-width: 768px) {
            .book-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>

        {/* Left */}
        <div>
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
              { icon: <Clock size={16} weight="bold" />, title: '30 minutes', desc: 'Focused. No filler.' },
              { icon: <ChatText size={16} weight="bold" />, title: 'Any topic', desc: 'Startups, nonprofits, tech, school, life.' },
              { icon: <Phone size={16} weight="bold" />, title: 'Video or phone', desc: 'Your call, confirmed on booking.' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(240,180,41,0.08)', border: '1px solid rgba(240,180,41,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--blue)', flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ paddingTop: '4px' }}>
                  <div style={{ fontFamily: "'Archivo', sans-serif", color: 'var(--ink)', fontSize: '14px', fontWeight: 700, marginBottom: '2px' }}>{item.title}</div>
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
                data-url="https://calendly.com/sahas-konreddy1/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=110f16&text_color=fdf8ee&primary_color=f0b429"
                style={{ minWidth: '280px', height: '680px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
